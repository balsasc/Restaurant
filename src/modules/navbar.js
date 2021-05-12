const createNav = () => {
  const nav = document.createElement('nav');
  nav.classList.add('nav-bar');

  const navItems = document.createElement('ul');
  navItems.classList.add('nav-items');

  const homeButton = document.createElement('li');
  const homeLink = document.createElement('a');
  homeLink.textContent = 'Home';
  homeLink.classList.add('nav-item', 'home');
  homeButton.append(homeLink);

  const menuButton = document.createElement('li');
  const menuLink = document.createElement('a');
  menuLink.textContent = 'Menu';
  menuLink.classList.add('nav-item', 'menu');
  menuButton.append(menuLink);

  const contactButton = document.createElement('li');
  const contactLink = document.createElement('a');
  contactLink.textContent = 'Contact';
  contactLink.classList.add('nav-item', 'contact');
  contactButton.append(contactLink);

  navItems.append(homeButton, menuButton, contactButton);

  nav.append(navItems);

  return nav;
}

export default createNav;