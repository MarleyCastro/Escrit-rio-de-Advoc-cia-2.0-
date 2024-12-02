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