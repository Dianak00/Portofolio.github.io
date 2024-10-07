// Contact Form Validation

//  Targeting DOM Element
/*
const submitBtn = document.querySelector('.submit--btn');
const fullNameInput = document.querySelector('#fullName');
const emailInput = document.querySelector('#email');
const phoneNumberInput = document.querySelector('#phoneNumber');

const labelName = document.querySelector('#labelName');
const labelEmail = document.querySelector('#labelEmail');
const labelNumber = document.querySelector('#labelNumber');


// Name validation
function validationName (input) {
    if (input.value === ''){
        alert('Please enter a name!');
    } else {

    }
}

submitBtn.addEventListener('click', )*/


//Targeting DOM elements
const submitBtn = document.querySelector('.submit--btn');
const fullNameInput = document.querySelector('#fullName');
const emailInput = document.querySelector('#email');
const phoneNumberInput = document.querySelector('#phoneNumber');

const labelName = document.querySelector('#labelName');
const labelEmail = document.querySelector('#labelEmail');
const labelNumber = document.querySelector('#labelNumber');


//Creating the validation functions


//Validation function for First Name
function nameValidation(input){
    var value = input.value;
    var namePattern = /^[a-zA-Z\s-]+$/;
    if (value === "") {
       console.log('This field must be filled out!');
    } else {
        if (!namePattern.test(value)){
            console.log('Name must contain only letters!');
        } else {
            return value;
        }

    }
    
};

// Creating the validation function for email
function emailValidation(input){
    var value = input.value;
    var namePattern = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    if (value === "") {
        console.log('Enter email!');
    } else {
            if (!namePattern.test(value) ) {
            console.log('Enter a valid email!');
        }   else {
            return value;
        }

    }
};


// Creating the validation function for phone number
function phoneNumberValidation(input){
    var value = input.value;
    var namePattern = /^\d{9}$/;
    if (value === "") {
        console.log('Enter a Phone Number!');
    } else {
            if (!namePattern.test(value) ) {
           console.log('Incorrect phone number!');
        }   else {
            console.log('All correct');
        }
        
    }
}


// calling the function
fullNameInput.addEventListener('input', () => {
    nameValidation(fullNameInput);
});

phoneNumberInput.addEventListener('input', () => {
    phoneNumberValidation(phoneNumberInput);
});

emailInput.addEventListener('input', () =>{
    emailValidation(emailInput);
});



// Creating function for validatiog the all above function
function validateAll() {
    console.log('validating all!');
    nameValidation(fullNameInput);
    emailValidation(emailInput);
    phoneNumberValidation(phoneNumberInput);
}

submitBtn.addEventListener('click', validateAll);