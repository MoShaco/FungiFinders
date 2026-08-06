const navToggle = document.querySelector('[aria-controls="primary-nav"]');
const primaryNav = document.querySelector('.primary-navigation');

navToggle.addEventListener('click', () => {
    const isOpened = navToggle.getAttribute('aria-expanded');
    if (isOpened === 'true') {
        navToggle.setAttribute('aria-expanded', 'false')
    }else {
        navToggle.setAttribute("aria-expanded", "true");

    }
})