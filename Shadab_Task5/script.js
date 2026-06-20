// Smooth Scroll
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Button Click
const button = document.querySelector(".btn");

if (button) {
    button.addEventListener("click", function () {
        alert("Thank you for visiting this Tribute Page!");
    });
}

// Scroll Animation
const cards = document.querySelectorAll(".card, .about-box");

window.addEventListener("scroll", () => {

    cards.forEach(card => {

        const position = card.getBoundingClientRect().top;

        if (position < window.innerHeight - 100) {

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }

    });

});

// Initial Style
cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "0.8s ease";

});

// Current Year in Footer
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}