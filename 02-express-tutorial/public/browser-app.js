const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', (ev) => {
  ev.currentTarget.classList.toggle('rodar');
  links.classList.toggle('show-links');
});
