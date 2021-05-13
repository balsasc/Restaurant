const createContact = (content) => {
  content.style.backgroundColor = "#333";
  content.style.display = "flex";
  content.style.flexDirection = "column";
  content.style.alignItems = "center";

  const heading = document.createElement('h1');
  heading.textContent = 'Contact Us';
  heading.classList.add('heading-main');

  content.prepend(heading);

  const container = document.createElement('div');
  container.classList.add('container');

  const info = document.createElement('div');
  info.classList.add('info');

  const phoneNumber = document.createElement('p');
  phoneNumber.innerHTML = '<i class="fas fa-phone fa-2x"></i> : 201-340-1292';

  const address = document.createElement('p');
  address.innerHTML = '<i class="fas fa-map-pin fa-2x"></i> : 7474 Vernon Circle Staten Island, NY';

  const hours = document.createElement('p');
  hours.innerHTML = '<i class="far fa-clock fa-2x"></i> : 9AM - 11PM';

  const mapDiv = document.createElement('div');
  mapDiv.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1072.0727683791645!2d-74.20247828780508!3d40.53540937378646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24ac46f8b3baf%3A0xa6a8e240a8d3f361!2sVernon%20Ave%2C%20Staten%20Island%2C%20NY%2010309%2C%20USA!5e0!3m2!1sen!2s!4v1620916666611!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>';

  info.append(phoneNumber, address, hours);
  container.append(info, mapDiv);

  content.append(container);

  return content;
}

export default createContact;