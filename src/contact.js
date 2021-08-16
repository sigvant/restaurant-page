function createContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = ' 📱 999 888 777';

    const address = document.createElement('p');
    address.textContent = ' 🏢 Av. Miguel Ignacio Curi 111, São Paulo Estado de São Paulo'

    const restaurantLocation = document.createElement('img');
    restaurantLocation.src = 'images/location.png';
    restaurantLocation.alt = 'Eat-A-Lot of Foods';

    contact.appendChild(phoneNumber);
    contact.appendChild(address);
    contact.appendChild(restaurantLocation);

    return contact
}

function loadContact() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createContact());
}

export default loadContact;