import _ from 'lodash';
import navbar from "./navbar";


function component() {
  const element = document.createElement("div");

 // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  return element;
}

document.body.appendChild(component());

// ////////////////////////

const content = document.getElementById('content')
 
const navbar = document.creatElement('nav')

content.appendChild(navbar);
content.appendChild(navbar());

const main = document.createElement('div')

content.appendChild(main);

const heading = document.createElement("h5");
heading.className = "nav  pb-2";
heading.innerHTML += "<h5 class='Prime Cafe</h5>";

main.appendChild(heading);
// main.appendChild()


const registerEvents = () => {
  const home = document.getElementById("home");
  const menu = document.getElementById("menu");
  const contact = document.getElementById("contact");

  home.addEventListener("click", () => {
    body.innerHTML = "";
    navbar.appendChild(homePage());
  });

  menu.addEventListener("click", () => {
    navbar.innerHTML = "";
    navbar.appendChild(menuPage());
  });

  contact.addEventListener("click", () => {
    navbar.innerHTML = "";
    navbar.appendChild(contactPage());
  });
};

registerEvents();
