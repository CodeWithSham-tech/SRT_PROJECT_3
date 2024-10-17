const form = document.getElementById('form');
const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const measge = document.getElementById('measge');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const fullnameValue = fullname.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const measgeValue = measge.value.trim();

    if(fullnameValue === '') {
        setError(fullname, 'Full Name is required');
    } else {
        setSuccess(fullname);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(phoneValue === '') {
        setError(phone, 'Phone is required');
    }else if(isNaN(phoneValue)){
        setError(phone, 'Only digit')
    } else if (phoneValue.length>11 ) {
        setError(phone, 'Phone digit is not complete')
    }else if(phoneValue.length<11){
        setError(phone, 'Phone digit is not complete')
    } else {
        setSuccess(phone);
    }

    if(measgeValue === '') {
        setError(measge, 'Please enter the message');
    }else if(measgeValue.length<10){
        setError(measge, "Message character is greater 10 or less then 300 words");
    }
     else {
        setSuccess(measge);
    }

};
