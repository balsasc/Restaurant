const createHome = (content) => {
  content.style.background = 
  'linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url("https://images.pexels.com/photos/5490897/pexels-photo-5490897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260") center center/cover';

  const titleAndDesc = document.createElement('div');
  titleAndDesc.classList.add('title-and-desc');

  const heading = document.createElement('h1');
  heading.innerHTML = "<i>Paso Doble</i>";
  heading.classList.add('heading-main');

  const desc = document.createElement('p');
  desc.innerHTML = "<i>At your service since 1902.</i>";
  desc.classList.add('desc-main');

  titleAndDesc.append(heading, desc);
  titleAndDesc.style.textAlign = "center";

  const about = document.createElement('p');
  about.classList.add('about');
  about.textContent = 'Cupcake ipsum dolor sit amet biscuit. Tart gingerbread ice cream. Tart chocolate cake sweet carrot cake marshmallow chocolate donut. Topping jujubes oat cake cake. Chupa chups pastry pie lollipop liquorice lemon drops cookie. Sweet roll ice cream soufflé cookie candy dragée sweet gummies croissant. Caramels tiramisu croissant marshmallow sweet roll cotton candy pudding cake.';

  content.append(titleAndDesc, about);

  return content;
}

export default createHome;