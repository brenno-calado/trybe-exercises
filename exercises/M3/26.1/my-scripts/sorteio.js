const readline = require("readline-sync");

function guessGame() {
  console.log("~~~~~~~Bem vindo ao jogo de advinhação!~~~~~~~~~\n\n")
  console.log("Você deve advinhar um número inteiro entre 0 e 10\n\n")
  const prizeNumber = Math.round(Math.random() * 10);
  const guess = readline.questionInt("Por favor, digite um número inteiro: ");
  if (guess === prizeNumber) {
    console.log("Parabéns, número correto!");
  } else {
    console.log(`Opa, não foi dessa vez. O número era ${prizeNumber}`);
  }
  if (readline.keyInYN("Gostaria de jogar novamente? ")) {
    return guessGame();
  }
  console.log("Bye!");
}

guessGame();

