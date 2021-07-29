const createMenuItem = (name, price, image) => {
  const menuItem = document.createElement('div');
  menuItem.classList.add('menu-item', 'col-6', 'p-0');

  const pieName = document.createElement('h2');
  pieName.textContent = name;

  const piePrice = document.createElement('p');
  piePrice.textContent = price;

  const pieImage = document.createElement('img');
  pieImage.src = image;
  pieImage.alt = `${name}`;
  pieImage.className = ('pieImage');

  menuItem.appendChild(pieImage);
  menuItem.appendChild(pieName);
  menuItem.appendChild(piePrice);

  return menuItem;
};

const createMenu = () => {
  const menu = document.createElement('div');
  const menuHead = document.createElement('h3');
  menuHead.innerText = 'Freshly Baked Homemade Pies';
  menu.appendChild(menuHead);
  menu.classList.add('menu', 'row');

  menu.appendChild(
    createMenuItem(
      "Chicken & Mushroom",
      "price: R 25.00",
      "./assets/meatpie3.jpg",
  
    )
  );
  menu.appendChild(
    createMenuItem(
      'Cornish',
      'Price: R 25.00',
      './assets/meatpie2.jpeg',
    ),
  );
  menu.appendChild(
    createMenuItem(
      'Spinach Cheese & Corn',
      'Price: R 25.00',
      './assets/meatpie5.jpeg',
    ),
  );
  menu.appendChild(
    createMenuItem(
      'Pepper Steak',
      'Price: R 25.00',
      './assets/meat pie 6.jpeg',
    ),
  );
  menu.appendChild(
    createMenuItem(
      'Cheese & Salami',
      'Price: R 25.00',
      '../dist/assets/meatpie7.jpeg',
    ),
  );
  menu.appendChild(
    createMenuItem(
      'Sausage Roll',
      'Price: R25.00',
      './assets/meatpiwe4.jpeg',
    ),
  );

  return menu;
};

const displayMenu = () => {
  const mainMenu = document.createElement('div');
  mainMenu.textContent = '';
  mainMenu.appendChild(createMenu());
  return mainMenu;
};

export default displayMenu;