const signupForm = document.querySelector("#signupForm")
const loginForm = document.querySelector("#loginForm")
const spans = document.querySelectorAll("span")
const signupBtn = document.querySelector("#signUp")
const loginBtn = document.querySelector("#login")


function resetForm () {
    console.log("The form is resetted!")
}

signupForm.addEventListener("reset", resetForm)

signupForm.addEventListener("submit", function (event) {
    event.preventDefault() // this line is preventing the default behaviour of the form when its submitted(refreshing the page)

    const elements = signupForm.elements

    const fname = elements['firstname']
    const lname = elements['lastname']
    const country = elements['country']

    let isVerified = true

    if(fname.value.length > 15 || fname.value.length == 0) {
        isVerified = false
        const spanError = fname.nextElementSibling
        spanError.style.display = "inline"
        spanError.innerText = "The first name is too long or is empty"
    }

    if(lname.value.length > 10 || lname.value.length == 0) {
        isVerified = false
        const spanError = lname.nextElementSibling
        spanError.style.display = "inline"
    }

    if(country.value == "") {
        isVerified = false
        const spanError = country.nextElementSibling
        spanError.style.display = "inline"
    }


    if(isVerified) {
        for(let span of spans) {
            span.style.display = "none"
        }

        console.log({fname: fname.value, lname: lname.value, country: country.value})
    }
    else {
        console.log("Is not verified! you should correct your data")
    }

})

signupBtn.addEventListener("click", () => {
    signupForm.style.display = 'block'
    loginForm.style.display = 'none'
})


loginBtn.addEventListener("click", () => {
    signupForm.style.display = 'none'
    loginForm.style.display = 'block'
})