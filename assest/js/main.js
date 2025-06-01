const hamburgerMenu = document.querySelector('.hambuger');
const navActive = document.querySelector('.nav_active');

const menuActive = () => {
    hamburgerMenu.classList.toggle('active');
    navActive.classList.toggle('active');
};

hamburgerMenu.addEventListener('click', menuActive);
