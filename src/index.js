import _ from 'lodash';
import navUl from "./navbar";
import homePage from './homePage';

function component() {
  const element = document.createElement("div");

 // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "world"], " ");

  return element;
}

document.body.appendChild(component());

// ////////////////////////
  const content = document.getElementById('content')
  
  const outerContainer = document.creatElement('div');
  outerContainer.id = 'contain';
  content.appendChild(outerContainer);

  const navbar = document.creatElement('nav');
  navbar.classList.add = ("navbar","navbar-expand-lg", "navbar-light","bg-light");
  
  outerContainer.appendChild(navbar);
  navbar.appendChild(navUl());

  
  const main = document.createElement('div')
  main.classname = "main";
  outerContainer.appendChild(main);
  
  main.appendChild(homePage())

  const registerEvents = () => {
  const home = document.getElementById("home");
  const menu = document.getElementById("menu");
  const contact = document.getElementById("contact");

  home.addEventListener("click", () => {
    navbar.innerHTML = "Home";
    navbar.appendChild(homePage());
  });

  menu.addEventListener("click", () => {
    navbar.innerHTML = "Menu";
    navbar.appendChild(menuPage());
  });

  contact.addEventListener("click", () => {
    navbar.innerHTML = "Contact";
    navbar.appendChild(contactPage());
  });
 };

registerEvents();
