const express = require('express');
const body = require('body-parser');

const app = express();

app.use(body.json());

const PORT_NUMBER = 3000;

const validaOperacao = (req, res, next) => {
  const { operacao } = req.params;
  const operacoes = ['soma', 'subtracao', 'divisao', 'multiplicacao'];
  const operacaoValida = operacoes.some((op) => op === operacao);
  if (!operacaoValida) return res.status('404').json({ message: "operação não encontrada" });
  return next()
}

const operacao = (req, res) => {
const { operacao, numero1, numero2 } = req.params;

const operacoes = { soma: '+', subtracao: '-', divisao: '/', multiplicacao: '*' };
const resultado = eval(`${numero1} ${operacoes[operacao]} ${numero2}`);
return res.status('200').json({ resultado });
}

app.get('/:operacao/:numero1/:numero2', validaOperacao, operacao)

// Rota operacao ('soma', 'subtracao', 'divisao', 'multiplicacao')
// Rota 

app.listen(PORT_NUMBER, () => console.log(`Ouvindo porta ${PORT_NUMBER}`));
