

const hamburgerIcon = document.querySelector('.hamburger-icon');
const navList = document.querySelector('nav ul');


hamburgerIcon.addEventListener('click', () => {
    navList.classList.toggle('show');
});
