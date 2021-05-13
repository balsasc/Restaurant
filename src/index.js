import createNav from './modules/navbar';
import createHome from './modules/home';
import createMenu from './modules/menu';
import createContact from './modules/contact';

const content = document.querySelector('#content');

document.body.prepend(createNav());
createHome(content);

document.querySelector('.home').addEventListener('click', () => {
  content.innerHTML = "";
  content.removeAttribute("style");
  createHome(content);
})

document.querySelector('.menu').addEventListener('click', () => {
  content.innerHTML = "";
  content.removeAttribute("style");
  createMenu(content);
})

document.querySelector('.contact').addEventListener('click', () => {
  content.innerHTML = "";
  content.removeAttribute("style");
  createContact(content);
})