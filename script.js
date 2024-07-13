// DOM elements
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const header = document.querySelector('header');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

// Toggle menu
menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
});

// Scroll event handling
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  // Update active nav link
  sections.forEach(sec => {
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');

    if (scrollPosition >= offset && scrollPosition < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === id) {
          link.classList.add('active');
        }
      });
    }
  });

  // Toggle header sticky class
  header.classList.toggle('sticky', scrollPosition > 100);

  // Close menu on scroll
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
});

// ScrollReveal configuration
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// Typed.js configuration
const typed = new Typed('.multiple-text', {
  strings: ['Frontend Developer', 'ML Engineer', 'Data Scientist'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});