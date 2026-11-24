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
} from "@/components/ui/questionnaire";

import { QuestionnaireData } from "./QuestionnaireData";

export function Questionario() {
  const mensagensErro = {
    single: "Escolha uma opção válida!",
    multiple: "Selecione pelo menos uma opção!",
  };

  function handleSubmit(event) {
    event.preventDefault();
    const respostas = new FormData(event.currentTarget);
    console.log(Object.fromEntries(respostas.entries()));
  }

  return (
    <Questionnaire
      className="flex min-h-0 flex-1 flex-col"
      items={QuestionnaireData.questions}
      onSubmit={handleSubmit}
    >
      <QuestionnaireProgress
        className="w-full"
        render={(props, state) => (
          <div {...props}>
            <div className="mb-2 flex gap-1.5" aria-hidden="true">
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

      {QuestionnaireData.questions.map((question, i) => (
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
            <QuestionnaireTextarea
              aria-label={question.question}
              required={question.required}
            />
          )}

          <QuestionnaireError>
            {question.required &&
              (mensagensErro[question.type] ?? "Informe um valor válido!")}
          </QuestionnaireError>
        </QuestionnaireItem>
      ))}

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
