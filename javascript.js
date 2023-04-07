//Toggle wlecome every three seconds
let x = 0
setInterval(toggleWelcome, 3000);
function toggleWelcome() {
    if (x == 0) {
        document.getElementById("first").style.display = "block";
        document.getElementById("second").style.display = "none";
        x = 1
    }
    else {
        document.getElementById("first").style.display = "none";
        document.getElementById("second").style.display = "block";
        x = 0
    }
}


//Slide controller for welcome
let slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    // }
    slides[slideIndex - 1].style.display = "block";
    // dots[slideIndex - 1].className += " active";
}


//Fade in on scroll - text
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 200;
        // console.log(elementTop, windowHeight, elementVisible)

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("show");
        } else {
            reveals[i].classList.remove("show");
        }
    }
}
window.addEventListener("scroll", reveal);

function revealHeading() {
    var reveals = document.querySelectorAll(".revealHeading");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 10;
        // console.log(elementTop, windowHeight, elementVisible)

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("show");
        } else {
            reveals[i].classList.remove("show");
        }
    }
}
window.addEventListener("scroll", revealHeading);

//Fade in on scroll - logo
function revealLogo() {
    var reveals = document.querySelectorAll(".reveal-logo");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 20;
        // console.log(elementTop, windowHeight, elementVisible)

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("show");
        } else {
            reveals[i].classList.remove("show");
        }
    }
}
window.addEventListener("scroll", revealLogo);

//Progress bar
// When the user scrolls the page, execute myFunction 
window.onscroll = function () { progressBar() };

function progressBar() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
    console.log(winScroll)
}

//Jobs job-container
function openTab(evt, tabNumber) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(tabNumber).style.display = "inline";
    evt.currentTarget.className += " active";
}


//Send email
function sendMail() {

    console.log("Button pressed");
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_gchtkni";
    const templateID = "template_v67he3l";

    emailjs.send(serviceID, templateID, params)
        .then(
            res => {
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
                alert("Message sent successfully!")
            }
        )
}
