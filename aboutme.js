// Select the hamburger icon and the links container
const hamburger = document.querySelector('.hamburger');
const links = document.querySelector('.links');

// Toggle the active class to show/hide the menu
hamburger.addEventListener('click', () => {
    links.classList.toggle('active');
});
