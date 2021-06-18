const readline = require("readline-sync");

function calcIMC() {
  const peso = readline.questionFloat("Digite seu peso(kg): ");
  const altura = readline.questionFloat("Digite sua altura(m): ");

  const imc = Math.round((peso / Math.pow(altura, 2)) * 100) / 100;

  console.log(`IMC: ${imc}`)

  if (imc < 18.5) {
    return console.log(`Abaixo do peso (magreza)`);
  }

  if (imc >= 18.5 && imc < 25) {
    return console.log(`Peso normal`);
  }

  if (imc >= 25 && imc < 30) {
    return console.log(`Acima do peso (sobrepeso)`);
  }

  if (imc >= 30 && imc < 35) {
    return console.log(`Obesidade grau I`);
  }

  if (imc >= 35 && imc < 40) {
    return console.log(`Obesidade grau II`);
  }

  return console.log(`Obesidade grau III e IV`);
}

calcIMC();
