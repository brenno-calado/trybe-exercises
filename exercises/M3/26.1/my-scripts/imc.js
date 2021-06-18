const readline = require("readline-sync");

const peso = readline.questionFloat("Digite seu peso(kg): ");
const altura = readline.questionFloat("Digite sua altura(m): ");

const imc = Math.round((peso / Math.pow(altura, 2)) * 100) / 100;

console.log(imc);
