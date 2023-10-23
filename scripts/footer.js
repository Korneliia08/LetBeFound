let form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    if (form.checkValidity()) {
        window.location.href = "https://github.com/Korneliia08"
    }
    event.preventDefault();
    event.stopPropagation();

})


//invalid
let btnSubmit = form.querySelector("[type=submit]");
btnSubmit.addEventListener("click", () => {
    let validationClass = document.querySelectorAll(".validationContent");
    Array.from(validationClass).forEach(element => {
        element.remove();
    })
    let allInputs = form.querySelectorAll("input, textarea");
    Array.from(allInputs).forEach(element => {

        element.classList.add("touched");
        if (!element.value) {
            let spanValidation = document.createElement("span");
            spanValidation.classList.add("validationContent");
            spanValidation.textContent = "empty";
            element.after(spanValidation);
        }
    })
})

let allInputs = form.querySelectorAll("input, textarea");
Array.from(allInputs).forEach(element => {
    element.setCustomValidity("");
    element.addEventListener("input", checkValidation);
})

function checkValidation(event) {
    if (event.target.value !== "") {
        if (event.target.nextElementSibling) {
            event.target.nextElementSibling.remove();
        }
    } else {
        let spanValidation = document.createElement("span");
        spanValidation.classList.add("validationContent");
        spanValidation.textContent = "empty";
        event.target.after(spanValidation);
        event.target.classList.add("touched");
    }
}
