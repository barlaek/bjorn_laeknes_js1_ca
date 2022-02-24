const form = document.querySelector("form");

const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullNameError");

const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");

const successMessage = document.querySelector("#successMessage");

const button = document.querySelector("button");

function submitForm(event) {
    event.preventDefault();

    if (checkLength(fullName.value, 1)) {
        fullNameError.style.display = "none";
    } else {
        fullNameError.style.display = "block";
    }

    if (checkLength(subject.value, 10)) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    if (checkLength(address.value, 25)) {
        addressError.style.display = "none";
    } else {
        addressError.style.display = "block";
    }

    if (validateEmail(email.value)) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    // successMessage.innerHTML = `<div class="successMessage">Your message has been sendt!</div>`
    // form.reset()
}

form.addEventListener("submit", submitForm);

function checkLength(value, len) {
    if(value.trim().length >= len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}