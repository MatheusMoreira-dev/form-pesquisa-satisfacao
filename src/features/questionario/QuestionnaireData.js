export const QuestionnaireData = {
  title: "Pesquisa de Satisfação",

  questions: [
    {
      id: "tempo-terapia",
      name: "quanto-tempo-realiza-terapia",
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
      name: "qual-tipo-terapia",
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
      name: "atendimento-agendamento-apoio",
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
      name: "atendimento-recepcao",
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
      name: "como-avalia-o-espaco-fisico",
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
      name: "como-avalia-o-preparo-e-cuidado-terapeutas",
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
      name: "como-avalia-comunicacao-terapeutas",
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
      name: "percebe-evolucao-do-filho",
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
      name: "orientacoes-para-casa-escola-sao-claras",
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
      name: "nivel-satisfacao-com-servico",
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
      name: "recomendaria-a-outras-familias",
      question: "Você recomendaria este atendimento a outras famílias?",
      type: "single",
      required: true,
      options: ["Sim", "Talvez", "Não"],
    },

    {
      id: "elogio-sugestao",
      name: "elogio-ou-sugestao",
      question: "Deixe aqui um elogio, sugestão ou algo que possamos melhorar.",
      description: "Opcional",
      type: "textarea",
      required: false,
      options: [],
    },
  ],
};
