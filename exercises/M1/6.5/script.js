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

function toggleInfo() {
  const info = document.querySelector('#aside-two');
  const footer = document.querySelector('#footer'); 
  if (info.style.display === 'none' || info.style.display === '') {
    info.style.display = 'block';
    footer.style.display = 'block';
  } else {
    info.style.display = 'none';
    footer.style.display = 'none';
  }
}

function addEventListeners() {
  const closeButton = document.querySelector('#close-header');
  const openButton = document.querySelector('#open-header');
  const infoButton = document.querySelector('#info-button');
  closeButton.addEventListener('click', closeHeader);
  openButton.addEventListener('click', openHeader);
  infoButton.addEventListener('click', toggleInfo);
}

window.onload = function () {
  hideHeader();
  addEventListeners();
}
