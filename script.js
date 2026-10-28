// Toggle Hamburger Class Active
const navbarNav = document.querySelector('.navbar-nav');
// When Hamburger Menu Clicked
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// Click Over Sidebar For Dissapear Option
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})