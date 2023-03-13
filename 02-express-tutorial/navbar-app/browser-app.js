const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

console.log(navToggle)
navToggle.addEventListener('click', (ev) => {
  console.log(ev.currentTarget)
  ev.currentTarget.classList.toggle('rodar');
  links.classList.toggle('show-links');
});
