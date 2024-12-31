const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-content')) {
        navLinks.classList.remove('active');
    }
});

// Handle active state for navigation links
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navItems.forEach(link => link.classList.remove('active'));
        item.classList.add('active');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
