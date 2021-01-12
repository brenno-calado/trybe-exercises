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

function toTop() {

}

function addEventListeners() {
  const closeButton = document.querySelector('#close-header');
  const openButton = document.querySelector('#open-header');
  const infoButton = document.querySelector('#info-button');
  const toTopButton = document.querySelector('#to-top');
  toTopButton.addEventListener('click', toTop);
  closeButton.addEventListener('click', closeHeader);
  openButton.addEventListener('click', openHeader);
  infoButton.addEventListener('click', toggleInfo);
}

function detectScroll() {
  const toTopButton = document.querySelector('#to-top');
  const mainContent = document.querySelector('.main-content');
  console.log(mainContent.scrollTop);
  console.log(screen.height);
  if (document.body.scrollTop === screen.height) {
    toTopButton.style.display = 'block';
  } else {
    toTopButton.style.display = 'none';
  }
}

window.onscroll = function() {
  detectScroll();
};

window.onload = function () {
  hideHeader();
  addEventListeners();
}
