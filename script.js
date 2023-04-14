// JS file below has DEFER attribute to prevent blocking HTML parsing



// Smooth scroll to anchor links

const home = document.querySelector('.jumbotron');

document.querySelector('a[href="#home"]').addEventListener('click', function (e) {
    e.preventDefault();
    home.scrollIntoView({ behavior: 'smooth' });
});

const aboutSection = document.querySelector('.about-container');

document.querySelector('a[href="#about"]').addEventListener('click', function (e) {
    e.preventDefault();
    aboutSection.scrollIntoView({ behavior: 'smooth' });
});

const contact = document.querySelector('.contact-container');

document.querySelector('a[href="#contact"]').addEventListener('click', function (e) {
    e.preventDefault();
    contact.scrollIntoView({ behavior: 'smooth' });
});

const projects = document.querySelector('.projects-container');

document.querySelector('a[href="#projects"]').addEventListener('click', function (e) {
    e.preventDefault();
    projects.scrollIntoView({ behavior: 'smooth' });
});

const contactButton = document.getElementById('contact-me-button');

document.getElementById('contact-me-button').addEventListener('click', function (e) {
    e.preventDefault();
    contact.scrollIntoView({ behavior: 'smooth' });
});



// EmailJS api integration
const form = document.querySelector(".contact-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    emailjs.sendForm("service_t95xo0s", "template_ggnlq1i", ".contact-form")
        .then(() => {
            const successMsg = document.createElement("p");
            successMsg.textContent = "Success! Your email has been sent.";
            successMsg.classList.add("success-msg");

            const contactContainer = document.querySelector(".contact-container");
            contactContainer.appendChild(successMsg);
        }, (error) => {
            alert("There was an error sending your message:", error);
        });
});

