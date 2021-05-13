const createMenu = (content) => {
  content.style.backgroundColor = "#333";
  content.style.display = "flex";
  content.style.flexDirection = "column";
  content.style.alignItems = "center";

  const heading = document.createElement('h1');
  heading.textContent = "Menu";
  heading.classList.add('heading-main');


  const actualMenu = document.createElement('div');
  actualMenu.classList.add('actualMenu');

  for (let i = 0; i < 8; i++) {
    let menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
    menuItem.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, doloribus.";
    actualMenu.append(menuItem);
  }


  content.prepend(heading);
  content.append(actualMenu);
  return content;
}

export default createMenu;