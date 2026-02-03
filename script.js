// AOS animation
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

// Feather Icons
feather.replace();

// Mobile menu toggle
document.getElementById('menu-toggle')
.addEventListener('click', function() {
    document.getElementById('mobile-menu')
    .classList.toggle('hidden');
});

// Contact Form
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", async function(event) {

    event.preventDefault();

    const data = new FormData(form);

    try {
        const response = await fetch(
        "https://formspree.io/f/xwprbgpz",
        {
            method: "POST",
            body: data,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            status.classList.remove("hidden");
            form.reset();
        } else {
            status.textContent = "Error sending message.";
            status.classList.remove("hidden");
        }

    } catch {
        status.textContent = "Network error.";
        status.classList.remove("hidden");
    }

});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});
