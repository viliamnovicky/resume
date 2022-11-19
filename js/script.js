// Copy email and phone number

const copyEmailBTN = document.querySelector(".copy-email")
const copyNumberBTN = document.querySelector(".copy-number")

const copiedEmail = document.querySelector(".email-copied")
const copiedNumber = document.querySelector(".number-copied")


copyEmailBTN.addEventListener("click", function() {
    navigator.clipboard.writeText("+421918596387")
    copiedEmail.classList.remove("hidden")
    setTimeout(function() {
        copiedEmail.classList.add("hidden")
    }, 700)
})

copyNumberBTN.addEventListener("click", function() {
    navigator.clipboard.writeText("viliamnovicky@gmail.com")
    copiedNumber.classList.remove("hidden")
    setTimeout(function() {
        copiedNumber.classList.add("hidden")
    }, 700)
})
