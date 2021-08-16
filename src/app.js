import loadHome from "./home";
import loadContact from "./contact";
import loadMenu from "./menu";

function createHeader() {
    // the idea here is that we are using functions to create
    // the elements that will be appended to the app
    // here we create the header of the app
    const header = document.createElement('header');
    header.classList.add('header');

    const restaurantName = document.createElement('h1');
    restaurantName.classList.add('restaurant-name');
    restaurantName.textContent = 'Eat-A-Lot';

    header.appendChild(restaurantName);
    header.appendChild(createNav());

    return header;
}

function createNav() {
    // now here we are creating the navbar and some buttons
    // and we are adding the buttons and some selection classes
    // at the end we return the nav
    const nav = document.createElement('nav');

    const homeButton = document.createElement('button');
    homeButton.classList.add('button-nav');
    homeButton.textContent = 'Home';
    homeButton.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        setActiveButton(homeButton);
        loadHome();
    });

    const menuButton = document.createElement('button');
    menuButton.classList.add('button-nav');
    menuButton.textContent = 'Menu';
    menuButton.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        setActiveButton(menuButton);
        loadMenu();
    });

    const contactButton = document.createElement('button');
    contactButton.classList.add('button-nav');
    contactButton.textContent = 'Contact';
    contactButton.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        setActiveButton(contactButton);
        loadContact();
    });

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);

    return nav
}

function setActiveButton(button) {

    const buttons = document.querySelectorAll('.button-nav');

    buttons.forEach((button) => {
        if (button !== this) {
            button.classList.remove('active');
        }
    });

    button.classList.add('active');
}

function createMain() {
    //here we create the main element
    const main = document.createElement('main');
    main.classList.add('main');
    main.setAttribute('id', 'main');
    return main;
}

function createFooter() {
    // here we create the footer and append elements to it

    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const copyright = document.createElement('a');
    copyright.textContent = 'Copyright 2021 sigvant';
    copyright.href = 'https://github.com/sigvant';
    copyright.setAttribute('target','_blank');

    footer.appendChild(copyright);
    return footer;
}

function initializeWebsite() {
    const content = document.getElementById('content');

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    setActiveButton(document.querySelector('.button-nav'));
    loadHome();
}

export default initializeWebsite;