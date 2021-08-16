function createHome() {
    // here we are creating the 'home' menu
    // and we are appending some information to the menu
    const home = document.createElement('div');
    home.classList.add('home');

    const foodExample = document.createElement('img');
    foodExample.src = 'images/pancakes.jpg';
    foodExample.alt = 'pancakes';

    home.appendChild(createParagragh('Do you like pancakes?'));
    home.appendChild(createParagragh('This proly the best pancake'));
    home.appendChild(foodExample);
    home.appendChild(createParagragh('Order or try out!'));

    return home;
}

function createParagragh(text) {
    // this function renders text
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    return paragraph;
}

function loadHome() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createHome());
}

export default loadHome;