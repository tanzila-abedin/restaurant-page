
const createMenu = () => {
 const menu = document.createElement("div");
 const menuHead = document.createElement('h3')
 menuHead.innerText = "Freshly Baked HomeMade Pies"
 menu.appendChild(menuHead);
 menu.classList.add("menu");

  menu.appendChild(
    createMenuItem(
      "Chicken & Mushroom",
      "price: R 25.00"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Cornish",
      "Price: R 25.00"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Spinach Cheese & Corn",
      "Price: R 25.00"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Pepper Steak",
      "Price: R 25.00"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Cheese & Salami",
      "Price: R 25.00"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Sausage Roll",
      "Price: R25.00"
    )
  );

  return menu;
}

function createMenuItem(name, price) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const pieName = document.createElement("h2");
  pieName.textContent = name;

  const piePrice = document.createElement("p");
  piePrice.textContent = price;

  const pieImage = document.createElement("img");
  pieImage.src = ``;
  pieImage.alt = `${name}`;

  menuItem.appendChild(pieImage);
  menuItem.appendChild(pieName);
  menuItem.appendChild(piePrice);

  return menuItem;
}

function displayMenu() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createMenu());
}



export default displayMenu();