import './style.css';

const body = document.querySelector("body");
body.appendChild(logo());
body.appendChild(roomwidget());
body.appendChild(trigger());


const logo = (() => {
const LogoContainer = document.createElement('div');
LogoContainer.classList.add('LogoContainer');

const logo = document.createElement('div');
logo.classList.add('logo');

const date = document.createElement('div');
date.classList.add('date');

LogoContainer.appendChild(logo)
LogoContainer.appendChild(date);
})();
const roomwidget = (() => {
  const rowwidget = document.createElement('div');
  roomwidget.classList.add('roomwidget');

  const addroom = (element) => {
    rowwidget.appendChild(element);
  }

  return {rowwidget, addroom}
})();
const sensorcard = (header, description) => {
  const element = document.createElement('div');
  element.classList.add('sensorcard');

  const title =  document.createElement('div');
  title.classList.add('sensordescription');
  title.innerHTML(header)

  const details =  document.createElement('div');
  details.classList.add('sensorinfo');
  details.innerHTML(description);

  const complete = document.createElement('input');
  complete.setAttribute('name', 'completed');
  complete.setAttribute('value', 'true');

  element.appendChild(title);
  element.appendChild(description);
  element.appendChild(container);

  return {element}
}
const room = () => {
  const element = document.createElement('div');
  element.classList.add('roomcontainer');

  const descriptionContainer = document.createElement('div');
  descriptionContainer.classList.add('descriptioncontainer');

  const details = document.createElement('div');
  details.classList.add('description');
  descriptionContainer.appendChild(details);

  const subheading = document.createElement('div');
  subheading.classList.add('status');
  descriptionContainer.appendChild(subheading);

  const sensorcontainer = document.createElement('div');
  sensorcontainer.classList.add('sensorcardcontainer');
 
  const addDescription = (description, status) => {
    details.innerHTML = description;
    subheading.innerHTML = status;
  }

  const addSensor = (element) => {
    sensorcontainer.appendChild(element);
  }

  return {element, addDescrption, addSensor}
}
const trigger = (() => {
  const triggerheading = document.createElement('div');
  triggerheading.classList.add('triggerheading');
  triggerheading.innerHtml('Trigger Event');

  const triggercontainer = document.createElement('div');
  triggercontainer.classList.add('triggercontainer');

  const ul = document.createElement('ul');
  
  const triggerbody = document.createElement('div');
  triggerbody.classList.add('triggerbody');
  triggerbody.appendChild(ul);
  
  triggercontainer.appendChild(triggerheading);
  triggercontainer.appendChild(triggerbody);

  const addTrigger = (string, severity) => {
    const listitem = document.createElement('li');
    listitem.classList.add(severity);
    listitem.innerHTML = string;

    ul.appendChild(listitem);
  }

  return {addTrigger}
})();


