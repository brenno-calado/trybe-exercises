const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  }

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(({ joke }) => appendJoke(joke))
    .catch(reason => console.log(reason));
};

const appendJoke = (joke) => document.querySelector('#joke-container').innerHTML = joke;

async function SquaredNumbers() {
  
}

window.onload = () => fetchJoke();