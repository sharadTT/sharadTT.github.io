//Toggle wlecome every three seconds
let x = 0
setInterval(toggleWelcome, 3000);

function toggleWelcome() {
    if(x == 0)
    {
        document.getElementById("first").style.display = "block";
        document.getElementById("second").style.display = "none";
        x = 1
    }
    else
    {
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


//Fade in on scroll
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        console.log(elementTop, windowHeight, elementVisible)

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("show");
        } else {
            reveals[i].classList.remove("show");
        }
    }
}

window.addEventListener("scroll", reveal);