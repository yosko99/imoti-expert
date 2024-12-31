const handleNavigation = () => {
    const menuToggle = document.querySelector('.header__menu-toggle');
    const nav = document.querySelector('.header__nav');

    menuToggle.addEventListener('click', function (e) {
        nav.classList.toggle('active');
        e.stopPropagation();
    });

    document.addEventListener('click', function (e) {
        if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
            nav.classList.remove('active');
        }
    });
}

handleNavigation();
