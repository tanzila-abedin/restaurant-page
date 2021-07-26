
const navbar = () => {
     const navlinks = ['home','menu','contact'];

     const navList = document.createElement('ul')


     const itemOne = document.createElement('li');
     const alink = document.createElement("a")
     alink.innerHTML = "HOME"
     alink.className = 'nav-link'
     alink.id = 'home'
     navList.append(itemOne);
     itemOne.append(alink)
     
     const itemTwo = document.createElement("li");
     const blink = document.createElement("a");
     blink.innerHTML = "MENU";
     blink.className = "nav-link";
     blink.id = "menu";
     navList.append(itemTwo);
     itemTwo.append(blink);

     const itemThree = document.createElement("li");
     const clink = document.createElement("a");
     clink.innerHTML = "CONTACT";
     clink.className = "nav-link";
     clink.id = "contact";
     navList.append(itemThree);
     itemThree.append(clink);

     return navList;

}

export default navbar;