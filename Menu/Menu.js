/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

const menuButton = document.querySelector(".menu-button");

const menuSpot = document.querySelector("body");



//menu builder function
const buildMenu = function (array) {

  //create constant elements - only menu div and ul
  const menu = document.createElement("div");
  menu.classList.add("menu");

  const menuList = document.createElement("ul");

  //arrange constant elements
  menu.appendChild(menuList);

  //iterate over array, create new li elements, append
  array.forEach((item) => {
    let newItem = document.createElement("li");
    newItem.textContent = item;
    menuList.appendChild(newItem);
  });

  //add listener to menu button
  menuButton.addEventListener("click", (e) => {
    menu.classList.toggle("menu--open");
  });

  return menu;

};

const menuPointer = document.querySelector(".articles");

menuSpot.appendChild(buildMenu(menuItems)); 

