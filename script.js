/* =====================================================
   CONCORDE STEM RACING
   Main JavaScript
===================================================== */


// ================= MOBILE NAVIGATION =================

const menuButton = document.getElementById("menuButton");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {
    nav.classList.toggle("active");
});


// Close mobile navigation after clicking a link

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});


// ================= CONTACT FORM =================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    formMessage.textContent =
        "Thanks for getting in touch. We'll get back to you soon.";

    contactForm.reset();

});


// ================= SCROLL EFFECT =================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }

        });

    },
    {
        threshold: 0.1
    }
);

sections.forEach(section => {
    observer.observe(section);
});
