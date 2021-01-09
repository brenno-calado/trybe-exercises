function closeHeader() {
  const closeButton = document.querySelector('#close-header');
  const openButton = document.querySelector('#open-header');
  const header = document.querySelector('header');
  header.style.display = 'none';
  openButton.style.display = 'block';
  closeButton.style.display = 'none';
}

function openHeader() {
  const closeButton = document.querySelector('#close-header');
  const openButton = document.querySelector('#open-header');
  const header = document.querySelector('header');
  header.style.display = 'block';
  openButton.style.display = 'none';
  closeButton.style.display = 'block';
}

function hideHeader() {
  const closeButton = document.querySelector('#close-header');
  const header = document.querySelector('header');
  header.style.display = 'none';
  closeButton.style.display = 'none';
}

function addEventListeners() {
  const closeButton = document.querySelector('#close-header');
  const openButton = document.querySelector('#open-header');
  closeButton.addEventListener('click', closeHeader);
  openButton.addEventListener('click', openHeader);
}

window.onload = function () {
  hideHeader();
  addEventListeners();
}
