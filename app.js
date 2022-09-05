/*  eslint linebreak-style: ["error", "windows"] */
const div = document.querySelector('#menu');
const icon = document.querySelector('#icon');
icon.addEventListener('click', () => {
  div.classList.toggle('menu_holder_display');
});