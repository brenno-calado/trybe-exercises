const promise = new Promise((resolve, reject) => {
  const randomNumber = Math.floor(Math.random() * 11);

  if (randomNumber <=5) {
    return reject(randomNumber);
  }
  resolve(randomNumber);
})
.then(randomNumber => `Sucesso! Nosso número foi ${randomNumber}.`)
.then(msg => console.log(msg))
.catch(randomNumber => console.log(`Fracaso! Nosso número foi ${randomNumber}.`));

const fetch = require('node-fetch');

function verifiedFetch(url) {
  return new Promise((resolve, reject) => {
    if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
      fetch(url)
        .then((r) => r.json())
        .then((r) => resolve(r.value));
    } else {
      reject(new Error('endpoint não existe'));
    }
  });
}
