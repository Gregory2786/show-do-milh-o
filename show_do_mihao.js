const readlineSync = require('readline-sync');

// Função para criar uma pergunta
function criarPergunta(pergunta, opcoes, respostaCorreta, premio) {
  return {
    pergunta,
    opcoes,
    respostaCorreta,
    premio,
  };
}

// Lista de perguntas
const perguntas = [
  criarPergunta('Quanto é 2 x 2?', ['A) 3', 'B) 4', 'C) 5', 'D) 6'], 'B', 10000),
  criarPergunta('Qual é a capital do Brasil?', ['A) São Paulo', 'B) Rio de Janeiro', 'C) Brasília', 'D) Belo Horizonte'], 'C', 20000),
  criarPergunta('Quem é o autor de Dom Quixote?', ['A) Miguel de Cervantes', 'B) William Shakespeare', 'C) Charles Dickens', 'D) Franz Kafka'], 'A', 30000),
  criarPergunta('Quantos lados tem um triângulo?', ['A) 2', 'B) 3', 'C) 4', 'D) 5'], 'B', 40000),
  criarPergunta('Quem descobriu o Brasil?',['A) Cristovão Colombo','B) Pedro Alvares Cabral','C) JK','D) Marechal Teodoro'],'B',100000),
  criarPergunta('Quantos estados tem o Brasil?',['A) 13','B) 22','C) 27','D) 25'],'C',100000),
  criarPergunta('Quem escreveu a lei aurea?',['A) Rainha Elisabeth','B) Don Pedro l°','C) Princesa Isabel','D) Maria Joaquina'],'C',100000),
  criarPergunta('Quem matou John Lennon?',['A) Seu pai','B) Um fã','C) Sua esposa','D) Michael Jackson'],'B',100000),
  criarPergunta('Hitter liderou qual movimento?',['A) Cristianismo','B) Facismo','C) Veganismo','D) Nazismo'],'D',100000),
  criarPergunta('Quem desemvolveu a teoria da relatividade?',['A) Isacc Newton','B) Albert Einsten','C) Socrates','D) Galileu Galilei'],'B',100000),
  criarPergunta('Qual a soma dos angulos internos de um triangulo?',['A) 100°','B) 180°','C) 220°','D) 360°'],'B',100000),
  criarPergunta('O ornitorrinco é um(a)?',['A) Ave','B) Reptil','C) Mamifero','D) Fungo'],'C',100000),
  criarPergunta('Qual dessas não é uma pessa de carro?',['A) Alternador','B) Vira-brequim','C) Gabinete','D) Relé'],'C',100000),
  criarPergunta('Qual é o 66° elemento da tabela periodica?',['A)Radio','B) Carbono','C)Urano','D)Disprósio'],'D',100000)

];

// Função para exibir pergunta e obter resposta do usuário
function fazerPergunta(jogador, rodada, pergunta) {
  console.log(`\n******************************${jogador}******************************`);
  console.log(`**Rodada ${rodada + 1} - Prêmio: R$ ${pergunta.premio.toLocaleString()}**`);
  console.log(pergunta.pergunta);
  pergunta.opcoes.forEach(opcao => console.log(opcao));

  const respostaUsuario = readlineSync.question('Sua resposta (A, B, C ou D), ou "Parar" para encerrar: ').toUpperCase();
  return respostaUsuario;
}

// Função principal do jogo
function jogarShowDoMilhao() {
  const jogador = readlineSync.question('Informe o seu nome: ');

  const numRodadas = 5; 
  let pontuacao = 0;

  for (let rodada = 0; rodada < numRodadas; rodada++) {
    const pergunta = perguntas[Math.floor(Math.random() * perguntas.length)];

    const respostaUsuario = fazerPergunta(jogador, rodada, pergunta);

    if (respostaUsuario === 'PARAR') {
      console.log(`\n${jogador}, você decidiu parar. Sua pontuação final: R$ ${pontuacao.toLocaleString()}`);
      break;
    }

    if (respostaUsuario === pergunta.respostaCorreta) {
      pontuacao += pergunta.premio;
      console.log(`\nResposta correta! Você ganhou R$ ${pergunta.premio.toLocaleString()}`);
    } else {
      console.log(`\nResposta incorreta! A resposta correta era: ${pergunta.respostaCorreta}`);
      console.log(`${jogador}, sua pontuação final: R$ ${pontuacao.toLocaleString()}`);
      break;
    }
  }

  const premiacaoFinal = pontuacao.toLocaleString();
  console.log(`\nFim do jogo, ${jogador}!`);
  console.log(`Rodadas jogadas: ${Math.min(rodada + 1, numRodadas)}/${numRodadas}`);
  console.log(`Última resposta correta: ${perguntas[rodada].respostaCorreta}`);
  console.log(`Premiação final: R$ ${premiacaoFinal}`);

  const jogarNovamente = readlineSync.keyInYNStrict('Deseja jogar novamente?');
  if (jogarNovamente) {
    jogarShowDoMilhao();
  } else {
    console.log('Obrigado por jogar!');
  }
}

// Inicia o jogo
jogarShowDoMilhao();
