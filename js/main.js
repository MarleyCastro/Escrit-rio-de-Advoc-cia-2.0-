// Mobile menu functionality
function toggleMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('active');
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    
    if (!mobileMenu.contains(e.target) && !mobileMenuIcon.contains(e.target)) {
        mobileMenu.classList.remove('active');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu after clicking a link
            document.querySelector('.mobile-menu').classList.remove('active');
        }
    });
});

// Form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add your form submission logic here
    alert('Formulário enviado com sucesso!');
    this.reset();
});