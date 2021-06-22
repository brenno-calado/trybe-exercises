const fs = require('fs').promises;

const nomeDoArquivo = './arquivo3.txt';

fs.writeFile(nomeDoArquivo, 'Novo texto adicionado com fs.writeFile')
  .then(() => {
    console.log(`Arquivo escrito com sucesso!\n ${nomeDoArquivo}`)
  })
  .catch((err) => {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  });

