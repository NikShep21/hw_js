import {colorsConfig } from './data.js';
function createColors(colors, uniqueName, container) {
    colors.forEach(color => {
        const label = document.createElement('label');
        const input = document.createElement('input');
        const span = document.createElement('span');
        input.type = 'radio';
        input.name = uniqueName;
        input.value = color;
        span.className = 'option-color';
        span.style.backgroundColor = color;

        label.appendChild(input)
        label.appendChild(span)

        container.appendChild(label);
    })
    
}

function createFieldPhone(container){
    const phoneItem = document.createElement('div');
    const btnDelete = document.createElement('div');
    const phoneField = document.createElement('input');
    phoneField.type = 'tel';
    phoneField.name = 'phones[]';
    phoneField.className = 'input-form-field';
    btnDelete.className = 'phone-delete-btn';
    phoneItem.className = 'phone-item';
    btnDelete.addEventListener('click', function(){
        container.removeChild(phoneItem);
    })
    phoneItem.appendChild(phoneField);
    phoneItem.appendChild(btnDelete);

    container.appendChild(phoneItem);

}



const colorsForNameContainer = document.getElementById('config-colors-for-name');
const colorsForPostContainer = document.getElementById('config-colors-for-post');

createColors(colorsConfig.colorsForName, 'color-for-name', colorsForNameContainer);
createColors(colorsConfig.colorsForPost, 'color-for-post', colorsForPostContainer);



const addNumberBtn = document.querySelector('.phone-add-btn');
addNumberBtn.addEventListener('click', function(){
    const phonesList = document.querySelector('.phones-container');
    createFieldPhone(phonesList);
})


const cardOrganisation = document.querySelector('.name-organisation');
const cardPerson = document.querySelector('.name-person');
const cardPhone = document.querySelector('.phone-number');
const cardPost = document.querySelector('.post');
const cardEmail = document.querySelector('.email');
const cardAddress = document.querySelector('.address');

function createCard(e){
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
        nameOrganisation: formData.get('name-organisation'),
        namePerson: formData.get('name-person'),
        post: formData.get('post'),
        address: formData.get('address'),
        phones: formData.getAll('phones[]'),
        colorForName: formData.get('color-for-name'),
        colorForPost: formData.get('color-for-post'),
        email: formData.get('email'),
        isEmail: formData.get('checkbox-email') === 'on',
        isAddress: formData.get('checkbox-address') === 'on',
        positionName: formData.get('position-name'),
        positionPost: formData.get('position-post'),
        pxName: formData.get('px-name'),
        pxPost: formData.get('px-post')
    }
    console.log(data);
    cardOrganisation.textContent = data.nameOrganisation ?? '';

    cardOrganisation.textContent = data.nameOrganisation ?? '';


    cardPerson.textContent = data.namePerson ?? '';
    cardPerson.style.textAlign = data.positionName;
    cardPerson.style.fontSize = data.pxName + 'px';
    cardPerson.style.color = data.colorForName;


    cardPost.textContent = data.post ?? '';
    cardPost.style.textAlign = data.positionPost;
    cardPost.style.fontSize = data.pxPost + 'px';
    cardPost.style.color = data.colorForPost;


    cardPhone.innerHTML = data.phones
    .filter(p => p.trim() !== '')
    .map(p => `<p>${p}</p>`)
    .join('');


    cardEmail.textContent = data.isEmail ? data.email : '';


    cardAddress.textContent = data.isAddress ? data.address : '';

}

const form = document.querySelector('.form');
form.addEventListener('submit', createCard)


