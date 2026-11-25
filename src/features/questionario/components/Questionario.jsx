import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireError,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireSubmit,
  QuestionnaireTitle,
  QuestionnaireTextarea,
  QuestionnaireProgress,
  QuestionnaireInput,
} from "@/components/ui/questionnaire";

import { QuestionnaireData } from "@/features/questionario/QuestionnaireData";
import { enviarRespostas } from "../services/questionarioService";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "@/components/ui/toast";
import { useState } from "react";

export function Questionario() {
  const { state } = useLocation();
  const [ultimaPagina, setUltimaPagina] = useState();
  const [elogio, setElogio] = useState("");

  const mensagensErro = {
    single: "Escolha uma opção válida!",
    multiple: "Selecione pelo menos uma opção!",
  };

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const response = {};

    for (const question of QuestionnaireData.questions.slice(0, -1)) {
      if (question.type === "multiple") {
        response[question.name] = formData.getAll(question.name);
      } else {
        response[question.name] = formData.get(question.name);
      }
    }

    const payload = {
      numeroCarteirinha: state?.numeroCarteirinha,
      respostas: {
        ...response,
        elogio,
      },
    };

    try {
      await enviarRespostas(payload);
      Navigate("/pesquisa-respondida");
      console.log(payload);
    } catch (err) {
      console.log(err);

      toast.add({
        title: "Erro no envio",
        description: "Tente novamente mais tarde",
        type: "error",
        priority: "high",
        timeout: 3000,
      });
    }
  }

  return (
    <Questionnaire
      className="flex min-h-0 flex-1 flex-col"
      items={QuestionnaireData.questions}
      onItemChange={(item) => {
        setUltimaPagina(item === QuestionnaireData.questions.at(-1)?.name);
      }}
      onSubmit={handleSubmit}
    >
      <QuestionnaireProgress
        className="w-full"
        render={(props, state) => (
          <div {...props}>
            <div className="mb-0.5 flex gap-1.5" aria-hidden="true">
              {Array.from({ length: state.total }, (_, index) => (
                <span
                  key={index}
                  className={
                    index < state.current
                      ? "h-1.5 flex-1 rounded-full bg-primary"
                      : "h-1.5 flex-1 rounded-full bg-muted"
                  }
                />
              ))}
            </div>
          </div>
        )}
      />

      {QuestionnaireData.questions.slice(0, -1).map((question, i) => (
        <QuestionnaireItem
          className="
                  data-active:animate-in
                  data-active:fade-in-0
                  data-active:slide-in-from-bottom-2
                  data-active:duration-300
                  motion-reduce:animate-none
                "
          key={question.id}
          name={question.name}
          required={question.required}
          multiple={question.type === "multiple"}
        >
          <QuestionnaireTitle>{question.question}</QuestionnaireTitle>

          {question.description && (
            <QuestionnaireDescription>
              {question.description}
            </QuestionnaireDescription>
          )}

          {question.type === "single" || question.type === "multiple" ? (
            <QuestionnaireChoices>
              {question.options.map((option) => (
                <QuestionnaireChoice key={option} value={option}>
                  {option}
                </QuestionnaireChoice>
              ))}
            </QuestionnaireChoices>
          ) : (
            <QuestionnaireInput
              required={question.required}
              aria-label={question.question}
            />
          )}

          <QuestionnaireError>
            {question.required &&
              (mensagensErro[question.type] ?? "Informe um valor válido!")}
          </QuestionnaireError>
        </QuestionnaireItem>
      ))}

      {ultimaPagina && (
        <textarea
          value={elogio}
          onChange={(event) => setElogio(event.target.value)}
          className="min-h-48 w-full resize-none rounded-2xl border border-input bg-input/30 px-3 py-2 text-sm"
        />
      )}

      <QuestionnaireActions className="shrink-0 flex items-center w-full">
        <QuestionnairePrevious className="flex-1">
          Anterior
        </QuestionnairePrevious>

        <QuestionnaireNext className="flex-1">Próxima</QuestionnaireNext>
        <QuestionnaireSubmit className="flex-2">
          Enviar Resposta
        </QuestionnaireSubmit>
      </QuestionnaireActions>
    </Questionnaire>
  );
}

export default Questionario;
