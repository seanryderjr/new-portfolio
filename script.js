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




function updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var timezoneOffset = now.getTimezoneOffset();
    var localTime = new Date(now.getTime() - timezoneOffset);
    hours = localTime.getHours();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);
    document.getElementById("time").textContent = hours + ":" + minutes + ":" + seconds + " " + ampm;
}

setInterval(updateTime, 1000);




function getBackgroundImage(description) {
    var bodyElement = document.querySelector("body");
    if (description.includes("cloud")) {
        bodyElement.style.backgroundImage = "url('cloud.jpg')";
    } else if (description.includes("rain")) {
        bodyElement.style.backgroundImage = "url('rain.jpg')";
    } else if (description.includes("snow")) {
        bodyElement.style.backgroundImage = "url('snow.jpg')";
    } else if (description.includes("clear")) {
        bodyElement.style.backgroundImage = "url('clear.jpg')";

    } else {
        bodyElement.style.backgroundImage = "url('clear.jpg')";
    }
}

// Get weather data from OpenWeatherMap API

function getWeather() {
    var apiKey = "7a074b0af0161e1ef4310bf54f3710d4";
    navigator.geolocation.getCurrentPosition(function (position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        var url = "https://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=" + apiKey;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                var temperature = (data.main.temp - 273.15) * 1.8 + 32;
                var description = data.weather[0].description;
                var iconCode = data.weather[0].icon;
                var iconUrl = "https://openweathermap.org/img/wn/" + iconCode + "@2x.png";
                var iconElement = document.createElement("img");
                iconElement.src = iconUrl;
                iconElement.alt = description;
                var weatherElement = document.getElementById("weather");
                weatherElement.innerHTML = "";
                weatherElement.appendChild(iconElement);
                weatherElement.innerHTML += temperature.toFixed(1) + " °F";
                getBackgroundImage(description);

                var city = data.name;
                var state = data.sys.country;

                var locationElement = document.querySelector(".location");
                locationElement.textContent = city + ", " + state;
            })
            .catch(error => {
                console.log("An error occurred while fetching the weather data: ", error);
            });

    });
}

getWeather();
setInterval(updateTime, 1000);
