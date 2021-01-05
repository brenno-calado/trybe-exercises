// Cor de fundo da tela;
// Cor do texto;
// Tamanho da fonte;
// Espaçamento entre as linhas do texto;
// Tipo da fonte ( Font family ).

function toDarkMode() {
  let outsideMoon = document.querySelector('#outside-moon');
  let moon = document.querySelector('#moon');
  let body = document.querySelector('body');
  let meuStorage = localStorage;
  let savedMode = meuStorage.getItem('isDarkMode');
  if (savedMode === 'true') {
    body.classList.remove('dark-mode');
    meuStorage.removeItem('isDarkMode');
    meuStorage.setItem('isDarkMode', false);
    outsideMoon.classList.remove('light');
    outsideMoon.classList.add('dark');
    moon.classList.remove('dark');
    moon.classList.add('light');
  } else {
    body.classList.add('dark-mode');
    meuStorage.removeItem('isDarkMode');
    meuStorage.setItem('isDarkMode', true);
    outsideMoon.classList.remove('dark');
    outsideMoon.classList.add('light');
    moon.classList.remove('light');
    moon.classList.add('dark');
  }
}

function darkModeFunction() {
  let darkModeButton = document.getElementById('dark-mode-button');
  darkModeButton.addEventListener('click', toDarkMode);
}

function checkSavedMode() {
  let outsideMoon = document.querySelector('#outside-moon');
  let moon = document.querySelector('#moon');
  let body = document.querySelector('body');
  let meuStorage = localStorage;
  let savedMode = meuStorage.getItem('isDarkMode');
  console.log(savedMode);
  if (savedMode === 'true') {
    body.classList.add('dark-mode');
    outsideMoon.classList.remove('dark');
    outsideMoon.classList.add('light');
    moon.classList.remove('light');
    moon.classList.add('dark');
  } else {
    body.classList.remove('dark-mode');
  }
}

window.onload = function () {
  checkSavedMode();
  darkModeFunction();
};
