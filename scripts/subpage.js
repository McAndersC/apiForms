import { contactFormular } from "./contact.js";

const subPage = document.querySelector('.subpage');
const frontPage = document.querySelector('.frontpage');

if(subPage || frontPage) {

    console.log('Contact Formular Initialized');

    // Initialisere Contact Form
    contactFormular.init();

}

const accordions = document.querySelectorAll('.accordion');


const activateAccordion = (accordion) => {

    accordions.forEach((accordion) => {
        accordion.classList.remove('active')
    })

    accordion.classList.toggle('active')

}


accordions.forEach((accordion) => {
    accordion.addEventListener('click', () => activateAccordion(accordion))
})
