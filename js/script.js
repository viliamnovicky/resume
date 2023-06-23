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

// Show Modal 
const educationSection = document.querySelector(".section__education")

const modal = document.querySelector(".modal")
const modalImg = document.querySelector(".modal__img")
const closeModalBTN = document.querySelector(".btn__close")

const showModal = function() {
    modal.classList.remove("hidden")
}

const hideModal = function() {
    modal.classList.add("hidden")
}

educationSection.addEventListener("click", function(e) {
    if (e.target.closest(".certificate")) {
        const certificate = e.target.closest(".certificate")
        console.log("certificate");
        modal.classList.remove("hidden")
        modalImg.src = `./img/${certificate.id}.jpg`
    }
})


closeModalBTN.addEventListener("click", hideModal)
modal.addEventListener("click", hideModal)




