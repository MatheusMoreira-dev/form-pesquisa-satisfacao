import { useState } from "react";

import { Progress, ProgressLabel } from "@/components/ui/progress";

import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireError,
  QuestionnaireInput,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireSubmit,
  QuestionnaireTitle,
  QuestionnaireTextarea,
} from "@/components/ui/questionnaire";
import { Card, CardContent } from "@/components/ui/card";

const questionnaire = {
  title: "Pesquisa de Satisfação",

  questions: [
    {
      id: "tempo-terapia",
      question: "Há quanto tempo a criança realiza terapia conosco?",
      type: "single",
      required: true,
      options: [
        "Menos de 3 meses",
        "3 a 6 meses",
        "6 meses a 1 ano",
        "Mais de 1 ano",
      ],
    },

    {
      id: "tipo-terapia",
      question: "Qual tipo de terapia a criança realiza?",
      description: "Pode ser marcado mais de uma resposta.",
      type: "multiple",
      required: true,
      options: [
        "Psicologia",
        "Psicopedagogia",
        "Fonoaudiologia",
        "Terapia Ocupacional",
        "Fisioterapia",
        "Outra",
      ],
    },

    {
      id: "agendamento-apoio",
      question: "Como avalia o atendimento do agendamento e apoio ao cliente?",
      type: "single",
      required: true,
      options: [
        "Muito insatisfeito",
        "Insatisfeito",
        "Regular",
        "Satisfeito",
        "Muito satisfeito",
      ],
    },

    {
      id: "recepcao",
      question: "Como avalia o atendimento da recepção?",
      type: "single",
      required: true,
      options: [
        "Muito insatisfeito",
        "Insatisfeito",
        "Regular",
        "Satisfeito",
        "Muito satisfeito",
      ],
    },

    {
      id: "espaco-fisico",
      question:
        "Como avalia o espaço físico com relação à organização, higiene e conforto?",
      type: "single",
      required: true,
      options: [
        "Muito insatisfeito",
        "Insatisfeito",
        "Regular",
        "Satisfeito",
        "Muito satisfeito",
      ],
    },

    {
      id: "preparo-cuidado",
      question: "Como considera o preparo técnico e o cuidado dos terapeutas?",
      type: "single",
      required: true,
      options: [
        "Muito insatisfeito",
        "Insatisfeito",
        "Regular",
        "Satisfeito",
        "Muito satisfeito",
      ],
    },

    {
      id: "comunicacao-terapeutas",
      question:
        "Como avalia a clareza das informações e a comunicação entre os terapeutas que acompanham seu/sua filho(a)?",
      type: "single",
      required: true,
      options: [
        "Muito insatisfeito",
        "Insatisfeito",
        "Regular",
        "Satisfeito",
        "Muito satisfeito",
      ],
    },

    {
      id: "evolucao-filho",
      question: "Como percebe a evolução do seu/sua filho(a)?",
      type: "single",
      required: true,
      options: [
        "Muito insatisfeito",
        "Insatisfeito",
        "Regular",
        "Satisfeito",
        "Muito satisfeito",
      ],
    },

    {
      id: "orientacoes-casa-escola",
      question: "As orientações para casa e escola são claras e aplicáveis?",
      type: "single",
      required: true,
      options: [
        "Muito insatisfeito",
        "Insatisfeito",
        "Regular",
        "Satisfeito",
        "Muito satisfeito",
      ],
    },

    {
      id: "satisfacao-servico",
      question: "De forma geral, qual seu nível de satisfação com o serviço?",
      type: "single",
      required: true,
      options: [
        "Muito insatisfeito",
        "Insatisfeito",
        "Regular",
        "Satisfeito",
        "Muito satisfeito",
      ],
    },

    {
      id: "recomendaria",
      question: "Você recomendaria este atendimento a outras famílias?",
      type: "single",
      required: true,
      options: ["Sim", "Talvez", "Não"],
    },

    {
      id: "elogio-sugestao",
      question: "Deixe aqui um elogio, sugestão ou algo que possamos melhorar.",
      description: "Opcional",
      type: "textarea",
      required: false,
      options: [],
    },
  ],
};

export function PesquisaSatisfacao() {
  const [respostas, setRespostas] = useState({});
  const mensagensErro = {
    single: "Escolha uma opção válida!",
    multiple: "Selecione pelo menos uma opção!",
  };

  const quantidadePerguntas = questionnaire.questions.length;

  const quantidadeRespondidas = Object.values(respostas).filter(
    (status) => status === "answered",
  ).length;

  const progresso = (quantidadeRespondidas / quantidadePerguntas) * 100;

  const items = questionnaire.questions.map((question) => ({
    name: question.id,
    required: question.required,
  }));

  function handleStatusChange(questionId, status) {
    setRespostas((prev) => ({
      ...prev,
      [questionId]: status,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const respostas = new FormData(event.currentTarget);

    console.log(Object.fromEntries(respostas.entries()));
  }

  return (
    <Questionnaire
      items={items}
      onSubmit={handleSubmit}
      className="w-full max-w-md h-dvh p-2 py-4"
    >
      <Progress value={progresso}>
        <ProgressLabel>
          {quantidadeRespondidas} / {quantidadePerguntas}
        </ProgressLabel>
      </Progress>

      <div className="flex min-h-0 flex-1 flex-col gap-6">
        <Card className="min-h-0 flex-1">
          <CardContent className="h-full overflow-y-auto">
            {questionnaire.questions.map((question, i) => (
              <QuestionnaireItem
                className="
                  data-active:animate-in
                  data-active:fade-in-0
                  data-active:slide-in-from-bottom-2
                  data-active:duration-300
                  motion-reduce:animate-none
                "
                key={question.id}
                name={question.id}
                required={question.required}
                multiple={question.type === "multiple"}
                onStatusChange={(status) =>
                  handleStatusChange(question.id, status)
                }
              >
                <QuestionnaireTitle>{`${i + 1}°  ${question.question}`}</QuestionnaireTitle>

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
                    (mensagensErro[question.type] ??
                      "Informe um valor válido!")}
                </QuestionnaireError>
              </QuestionnaireItem>
            ))}
          </CardContent>
        </Card>

        <QuestionnaireActions className="flex w-full max-w-sm mx-auto shrink-0 pb-[env(safe-area-inset-bottom)]">
          <QuestionnairePrevious className="flex-1">
            Anterior
          </QuestionnairePrevious>

          <QuestionnaireNext className="flex-1">Próxima</QuestionnaireNext>
          <QuestionnaireSubmit className="flex-2">
            Enviar Resposta
          </QuestionnaireSubmit>
        </QuestionnaireActions>
      </div>
    </Questionnaire>
  );
}

export default PesquisaSatisfacao;
