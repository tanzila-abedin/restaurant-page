
const navbar = () => {
     const navlinks = ['home','menu','contact'];

     const alink = document.createElement("a")
     alink.innerHTML = 'HOME'
     alink.className = 'nav-link'
     alink.id = 'home'

     const blink = document.createElement("a");
     blink.innerHTML = "MENU";
     blink.className = "nav-link";
     blink.id = "menu";

     const clink = document.createElement("a");
     clink.innerHTML = "CONTACT";
     clink.className = "nav-link";
     clink.id = "contact";

}

export default navbar;