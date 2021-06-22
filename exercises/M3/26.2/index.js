const fs = require('fs');

function readFilePromise(fileName) {
  return new Promise((resolve, reject) =>{
    fs.readFile(fileName, (err, content) => {
      if (err) return reject(err);
      resolve(content);
    });
  });
}

readFilePromise('./arquivo.txt')
  .then(content => {
    console.log(`Conteúdo: ${content.toString('utf8')}`);
    console.log(`Tamanho: ${content.byteLength} bytes \n\n\n`);
    return readFilePromise('./arquivo2.txt');
  })
  .then(secondContent => {
    console.log(`Conteúdo ${secondContent.toString('utf8')}`);
    console.log(`Tamanho: ${secondContent.byteLength} bytes \n\n\n`);
    return readFilePromise('./arquivo3.txt');
  })
  .then(thirdContent => {
    console.log(`Conteúdo ${thirdContent.toString('utf8')}`);
    console.log(`Tamanho: ${thirdContent.byteLength} bytes \n\n\n`);
  })
  .catch(err => console.error(`Erro ao ler o arquivo: ${err.message}`));

