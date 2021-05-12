const createHome = (content) => {
  content.style.background = 
  'linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url("https://images.pexels.com/photos/5714752/pexels-photo-5714752.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260") center center/cover';

  const heading = document.createElement('h1');
  heading.innerHTML = "<i>Restaurant - T.O.P</i>";
  heading.classList.add('heading-main');

  content.append(heading);

  return content;
}

export default createHome;