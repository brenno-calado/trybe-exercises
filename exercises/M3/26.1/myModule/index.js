const brlValue = require('./brlValue');
const usdValue = require('./usdValue');
const readline = require('readline-sync');

const name = readline.question('What is your name?');
const age = readline.questionInt('What is your age?');

module.exports = { brlValue, usdValue };
console.log(`Hello ${name}! You are ${age} years old`);
