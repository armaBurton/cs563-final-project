// form.js

const formObject = {}
const form = document.getElementById("form-container")
const submitButton = document.getElementById("form-submit")

form.addEventListener("submit", (e) => {
    e.preventDefault();

    handleSubmit(e);
});

const handleSubmit = (e) => {
    formObject.nameInput = document.getElementById("name").value
    formObject.emailInput = document.getElementById("email").value
    formObject.passwordInput = document.getElementById("password").value
    formObject.verifyInput = document.getElementById("verify").value
    // formObject.contactOptions = document.querySelectorAll('input[name="contacting-you"]').value;
    formObject.message = document.getElementById("message").value

    const radioVals = document.querySelectorAll("input[name=contacting-you");

    radioVals.forEach(val => {
        if (val.checked) {
            formObject.contactOptions = val.value
        }
    })

    console.log(formObject)

    // window.location.reload()
    window.location.href = "#contact"
}
