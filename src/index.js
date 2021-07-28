import navUl from './navbar';
import homePage from './homePage';
import displayMenu from './menu';
import contactPage from './contact';

const outerContainer = document.createElement('div');
outerContainer.id = 'container';
outerContainer.className = 'container-fluid';
document.body.appendChild(outerContainer);

const navHeader = document.createElement('header');
const banner = new Image();
banner.src = '../assets/logo.jpeg';
banner.id = 'logo-main';

const navbar = document.createElement('nav');
navbar.classList.add(
  'navbar',
  'navbar-dark',
  'd-flex',
  'flex-column',
  'justify-content-center',
);
navbar.id = 'navBar';

outerContainer.appendChild(navHeader);
navHeader.appendChild(navbar);
navbar.appendChild(banner);
navbar.appendChild(navUl());

const main = document.createElement('div');
main.classList.add('main', 'text-center');
outerContainer.appendChild(main);

main.appendChild(homePage());

const registerEvents = () => {
  const home = document.getElementById('home');
  const menu = document.getElementById('menu');
  const contact = document.getElementById('contact');

  home.addEventListener('click', () => {
    main.innerText = '';
    main.appendChild(homePage());
  });

  menu.addEventListener('click', () => {
    main.innerText = '';
    main.appendChild(displayMenu());
  });

  contact.addEventListener('click', () => {
    main.innerText = '';
    main.appendChild(contactPage());
  });
};

registerEvents();
