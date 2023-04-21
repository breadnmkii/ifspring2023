// Selecting the necessary elements
const navWrapper = document.querySelector('#nav-wrapper');
const navLinks = document.querySelectorAll('#nav-wrapper a');
const hamburger = document.querySelector('#hamburger-icon');
hamburger.addEventListener('click', openBurger);

// Toggling the 'active-burger' class on the navWrapper when hamburger is clicked
function openBurger() {
  navWrapper.classList.toggle('active-burger');
  console.log("burger clicked");
}

// Removing the 'active-burger' class from the navWrapper when a link is clicked
navLinks.forEach(link => {
  link.addEventListener('onClick', () => {
    navWrapper.classList.remove('active-burger');
  });
});
