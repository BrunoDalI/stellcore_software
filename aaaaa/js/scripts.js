// This file contains the JavaScript code for the website. It handles interactivity and dynamic behavior on the web pages.

document.addEventListener('DOMContentLoaded', function() {
    // Initialize any interactive elements here
    console.log('StellCore website is ready!');
    
    // Example: Add event listeners or manipulate DOM elements
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});