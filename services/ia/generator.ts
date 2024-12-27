const Groq = require('groq-sdk');
const groq = new Groq({ apiKey: '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' });

export async function geradorTreino(parteDoCorpo: string) {
  try {
    const chatCompletion = await groq.chat.completions.create({
      "messages": [
        {
          "role": "user",
          "content": "Estou fazendo um app onde o usuario entrara com um evento e quero responder com uma lista de exercicio, com base em que ele pedir."
        },
        {
          "role": "assistant",
          "content": "Entendi! Você está criando um aplicativo que permite que os usuários ingressem um evento (por exemplo, um tipo de esporte ou uma atividade física) e, em seguida, fornece uma lista de exercícios relacionados a esse evento.\n\nPara implementar essa funcionalidade, você precisará de uma estrutura de dados que armazene exercícios relacionados a diferentes eventos. Você pode utilizar uma abordagem de armazenamento de dados como uma lista de exercícios com suas respectivas categorias ou eventos associados.\n\nAqui está uma estrutura de dados básica que você poderia utilizar:\n```json\n[\n  {\n    \"evento\": \"Corrida\",\n    \"exercicios\": [\n      \"Corrida de sprint\",\n      \"Corrida de longa distância\",\n      \"Treinamento de resistência\"\n    ]\n  },\n  {\n    \"evento\": \"Futebol\",\n    \"exercicios\": [\n      \"Treinamento de agilidade\",\n      \"Exercícios de força para pernas\",\n      \"Exercícios de habilidade com bola\"\n    ]\n  },\n  {\n    \"evento\": \"Yoga\",\n    \"exercicios\": [\n      \"Exercícios de flexibilidade\",\n      \"Exercícios de equilíbrio\",\n      \"Exercícios de relaxamento\"\n    ]\n  },\n  ...\n]\n```\nQuando o usuário inserir um evento, você pode pesquisar essa estrutura de dados para encontrar os exercícios relacionados ao evento inserido.\n\nPor exemplo, se o usuário inserir \"Futebol\", você pode pesquisar a estrutura de dados e retornar a lista de exercícios associados ao evento \"Futebol\", que seriam:\n\n* Treinamento de agilidade\n* Exercícios de força para pernas\n* Exercícios de habilidade com bola\n\nVocê também pode agregar mais informações para cada exercício, como uma breve descrição, imagem ou vídeo demonstrativo, para tornar o aplicativo mais rico e útil para os usuários.\n\nAlém disso, você pode considerar a implementação de funcionalidades adicionais, como:\n\n* Filtragem de exercícios por nível de dificuldade ou objetivo (por exemplo, perda de peso, ganho de massa muscular, etc.)\n* Possibilidade de adicionar novos exercícios ou eventos via input do usuário\n* Integração com serviços de pagamento ou sistema de recompensas para motivar os usuários a realizar os exercícios\n\nEspero que isso tenha ajudado a inspirar sua implementação! Se tiver alguma dúvida adicional ou precisar de mais ajuda, basta perguntar."
        },
        {
          "role": "user",
          "content": "quero te enviar o evento e você ira me responder a lista de exercicio de acordo com mensagem do usuario"
        },
        {
          "role": "assistant",
          "content": "Estou preparado! Por favor, envie o evento que você deseja que eu retorna uma lista de exercícios.\n\n(Lembre-se de que estou utilizando uma estrutura de dados fictícia, então não tenho exercícios \"reais\" associados a eventos específicos. Eu farei o meu melhor para retornar uma lista de exercícios plausíveis com base no evento que você enviar.)\n\nVá em frente e envie o evento!"
        },
        {
          "role": "user",
          "content": "Costa"
        },
        {
          "role": "assistant",
          "content": "Você enviou \"Costa\" como evento!\n\nAqui estão alguns exercícios que podem ser úteis para quem pratica surf ou atividades na praia:\n\n* Exercícios de fortalecimento dos braços:\n\t+ Flexões de braço\n\t+ Extensões de braço com halteres\n* Exercícios de fortalecimento dos ombros:\n\t+ Elevações laterais\n\t+ Rotacionamento de ombros\n* Exercícios de equilíbrio e coordenação:\n\t+ Equilíbrio sobre uma perna\n\t+ Exercícios de agilidade e rapidez\n* Exercícios de condicionamento físico:\n\t+ Corrida em praia\n\t+ Treinamento de endurance em água\n\nLembre-se de que esses exercícios são apenas sugestões e que é importante consultar um profissional de fitness ou um médico antes de iniciar qualquer programa de treinamento.\n\nVocê deseja que eu sugira exercícios para outro evento?"
        },
        {
          "role": "user",
          "content": "Peito"
        },
        {
          "role": "assistant",
          "content": "Você enviou \"Peito\" como evento!\n\nAqui estão alguns exercícios que podem ser úteis para desenvolver a musculatura do peito:\n\n* Exercícios com pesos:\n\t+ Supino reto\n\t+ Supino inclinado\n\t+ Prensa horizontal\n* Exercícios de isolamento:\n\t+ Extensão de peito com cable\n\t+ Flyes com halteres\n* Exercícios de fortalecimento:\n\t+ Push-ups\n\t+ Dips (tríceps e peito)\n* Exercícios de definição:\n\t+ Peck deck\n\t+ Flyes com resistência\n\nLembre-se de que um treinamento equilibrado deve incluir exercícios para outros grupos musculares também.\n\nVocê deseja que eu sugira exercícios para outro evento?"
        },
        {
          "role": "user",
          "content": "ótimo lembre quero que responda apenas eventos relacionados a treinos de academias caso pergunte outra coisa responda que só pode responder assuntos relacionados a treino de academia"
        },
        {
          "role": "assistant",
          "content": "Entendi! A partir de agora, só responderei a eventos relacionados a treinos de academia. Se você perguntar algo fora desse contexto, irei responder que só posso ajudar com assuntos relacionados a treino de academia.\n\nSe você estiver pronto, pode enviar o próximo evento!"
        },
        {
          "role": "user",
          "content": "Quando graus faz hoje ?"
        },
        {
          "role": "assistant",
          "content": "Desculpe, mas não posso responder a essa pergunta pois está fora do contexto de treinos de academia. Eu só posso ajudar com assuntos relacionados a treino de academia.\n\nSe você quiser perguntar sobre um evento relacionado a treinos de academia, como um grupo muscular ou um tipo de exercício, estou aqui para ajudar!"
        },
        {
          "role": "user",
          "content": parteDoCorpo
        },
      ],
      "model": "llama-3.3-70b-versatile",
    });

    return chatCompletion.choices.map((choice: { message: { content: string; }; }) => choice.message.content).join('\n');
  } catch (error) {
    console.error("Error gerar response:", error);
    throw new Error("Falha ao gerar treino");
  }
}