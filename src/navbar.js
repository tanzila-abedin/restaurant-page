
const navbar = () => {


     const navList = document.createElement('ul');
      navList.classList.add("d-flex", "justify-content-around","list-unstyled","p-3");

     const itemOne = document.createElement('li');
     const alink = document.createElement("button")
     alink.innerHTML = "HOME"
     alink.className = 'nav-link'
     alink.id = 'home'
     navList.append(itemOne);
     itemOne.append(alink)
     
     const itemTwo = document.createElement("li");
     const blink = document.createElement("button");
     blink.innerHTML = "MENU";
     blink.className = "nav-link";
     blink.id = "menu";
     navList.append(itemTwo);
     itemTwo.append(blink);

     const itemThree = document.createElement("li");
     const clink = document.createElement("button");
     clink.innerHTML = "CONTACT";
     clink.className = "nav-link";
     clink.id = "contact";
     navList.append(itemThree);
     itemThree.append(clink);

     return navList;

}

export default navbar;