const form = document.querySelector("form");
const fullName = document.querySelector("#fullName");
const subject = document.querySelector("#subject");
const email = document.querySelector("#email");
const address = document.querySelector("#address");
const successMessage = document.querySelector("#successMessage");
const button = document.querySelector("button");

function checkIfButtonIsDisabled() {
    if(checkLength(fullName.value, 1) && checkLength(subject.value, 10) && checkLength(address.value, 25) && validateEmail(email.value)) {
        button.disabled = false;
    } else {
        successMessage.innerHTML = "";
        button.disabled = true;
    }
}

fullName.addEventListener("keyup", checkIfButtonIsDisabled);
subject.addEventListener("keyup", checkIfButtonIsDisabled);
email.addEventListener("keyup", checkIfButtonIsDisabled);
address.addEventListener("keyup", checkIfButtonIsDisabled);

function submitForm(event) {
    event.preventDefault();
    successMessage.innerHTML = `<div class="successMessage">Your message has been sent<div>`;
    form.reset();
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