import { contactFormular } from "./contact.js";


const subPage = document.querySelector('.subpage');
const frontPage = document.querySelector('.frontpage');

if(subPage || frontPage) {

    console.log('Contact Formular Initialized')
    // Initialisere Contact Form
    contactFormular.init();

}
