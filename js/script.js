// Get the hamburger button and the navigation menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

// Toggle the menu visibility
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});