const fs = require('fs');

const nomeArquivo = 'arquivo.txt';

try {
  const data = fs.readFileSync(nomeArquivo, 'utf8');
  console.log(data);
} catch (err) {
  console.error(`Erro ao ler o arquivo: ${err.path}`);
  console.log(err);
}

