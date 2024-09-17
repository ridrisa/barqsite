// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animate stats counter
function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Start animation when the stats section is in view
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            animateValue(document.getElementById("clientCount"), 0, 100, 2000);
            animateValue(document.getElementById("campaignCount"), 0, 500, 2000);
            animateValue(document.getElementById("vehicleCount"), 0, 1000, 2000);
            animateValue(document.getElementById("impressionCount"), 0, 5000000, 2000);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

observer.observe(document.getElementById("stats"));

// Form submission (you'll need to implement the backend for this)
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    // Add your form submission logic here
    alert("Thank you for your message. We'll get back to you soon!");
    this.reset();
});

// You can add more JavaScript functionality here as needed
// ... (previous JavaScript code)

// Vehicle Editor Functionality
document.addEventListener('DOMContentLoaded', function() {
    const logoType = document.getElementById('logo-type');
    const logoTextInput = document.getElementById('logo-text-input');
    const logoImageInput = document.getElementById('logo-image-input');
    const logoText = document.getElementById('logo-text');
    const logoFont = document.getElementById('logo-font');
    const logoColor = document.getElementById('logo-color');
    const logoImage = document.getElementById('logo-image');
    const logoPositionX = document.getElementById('logo-position-x');
    const logoPositionY = document.getElementById('logo-position-y');
    const logoContainer = document.getElementById('logo-container');
    const vehiclePreview = document.getElementById('vehicle-preview');

    logoType.addEventListener('change', function() {
        if (this.value === 'text') {
            logoTextInput.style.display = 'block';
            logoImageInput.style.display = 'none';
            updateLogoText();
        } else {
            logoTextInput.style.display = 'none';
            logoImageInput.style.display = 'block';
            updateLogoImage();
        }
    });

    logoText.addEventListener('input', updateLogoText);
    logoFont.addEventListener('change', updateLogoText);
    logoColor.addEventListener('input', updateLogoText);
    logoImage.addEventListener('change', updateLogoImage);
    logoPositionX.addEventListener('input', updateLogoPosition);
    logoPositionY.addEventListener('input', updateLogoPosition);

    function updateLogoText() {
        logoContainer.innerHTML = `<div style="font-family: ${logoFont.value}; color: ${logoColor.value};">${logoText.value}</div>`;
        updateLogoPosition();
    }

    function updateLogoImage() {
        const file = logoImage.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                logoContainer.innerHTML = `<img src="${e.target.result}" alt="Logo" style="max-width: 100%; max-height: 100%;">`;
                updateLogoPosition();
            };
            reader.readAsDataURL(file);
        }
    }

    function updateLogoPosition() {
        const x = logoPositionX.value;
        const y = logoPositionY.value;
        logoContainer.style.left = `${x}%`;
        logoContainer.style.top = `${y}%`;
    }

    // Initialize with default text logo
    updateLogoText();
});

// ... (rest of the JavaScript code)