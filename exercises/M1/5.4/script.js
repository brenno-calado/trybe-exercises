// Cor de fundo da tela;
// Cor do texto;
// Tamanho da fonte;
// Espaçamento entre as linhas do texto;
// Tipo da fonte ( Font family ).

let darkMode = document.getElementById('darkMode');
darkMode.addEventListener('click', toDarkMode);
let bg = document.querySelector('body');
let isDarkMode = false;
let meuStorage = localStorage;

function toDarkMode(isDarkMode) {
  if (isDarkMode) {
  bg.style.backgroundColor = '#242424';
  bg.style.color = '#d8d8d8';
  meuStorage.setItem(isDarkMode, true);
  }
}
