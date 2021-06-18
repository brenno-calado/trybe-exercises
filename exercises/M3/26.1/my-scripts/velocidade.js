const readline = require("readline-sync");

function calcSpeed() {
  console.log("Calculadora de velocidade")
  const space = readline.questionInt("Digite a distância em metros: ");
  const time = readline.questionInt("Digite o tempo em segundos: ");

  const speed = Math.round((space / time) * 100) / 100;

  return console.log(`${speed} m/s`);
}

calcSpeed();

