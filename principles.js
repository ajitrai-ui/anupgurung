// Get the hamburger icon and the links container
const hamburger = document.querySelector('.hamburger');
const links = document.querySelector('.links');

// Add click event to toggle the navigation
hamburger.addEventListener('click', () => {
    links.classList.toggle('active');
});
