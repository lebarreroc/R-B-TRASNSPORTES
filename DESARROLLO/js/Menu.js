document.addEventListener('DOMContentLoaded', function () {
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const menuContainer = document.querySelector('.menu-container');

    dropdownBtn.addEventListener('click', toggleMenu);
    dropdownBtn.addEventListener('touchstart', toggleMenu);

    function toggleMenu() {
        menuContainer.classList.toggle('active');
    }
});
