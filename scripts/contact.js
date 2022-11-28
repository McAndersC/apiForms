export const contactFormular = {

    init : () => {
        const contactForm = document.querySelector('#contact');

        if(contactForm) {
            contactForm.addEventListener('submit', contactFormular.sendForm);
        }
    },

    sendForm : (e) => {

        e.preventDefault();
    
        const {name, email, message} = e.currentTarget.elements;
        
        let bodyObj = {
            name : name.value,
            email : email.value,
            message : message.value
        }
    
        console.log(bodyObj);
        contactFormular.sendToServer(bodyObj);
    },

    sendToServer : (bodyObj) => {
        const reponseMessage = document.querySelector('.form-response');
        const contactForm = document.querySelector('#contact');
    
        reponseMessage.textContent = 'Sender Kontakt informationer'
        contactForm.style.display = 'none';
    
        setTimeout( () => 
    
            fetch('https://smuknu.webmcdm.dk/subscribe', {
                method: 'POST',
                headers : {
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify(bodyObj)
            }).then((response) => {
    
                if(response.ok){
    
                    return response.json()
    
                } else {
    
                    return false
                }
                
            }).then( (response) => {
            
                if(response.result) {
    
                    let responseObj = response.result;
                    reponseMessage.textContent = 'Tak for din tilmeldelse ' + responseObj.name
                    
    
                } else {
                    reponseMessage.textContent = 'Vi kunne ikke oprette en bruger';
                }
    
                contactForm.style.display = 'block';
    
                
    
            } )
        , 4000);

    }

};