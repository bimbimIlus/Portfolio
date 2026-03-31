// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}

// Hamburger

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// Button Dark-Light

const button = document.getElementById('theme-toggle');
const html = document.documentElement;

// set awal
if (localStorage.getItem('theme') === 'dark') {
    html.classList.add('dark');
    button.innerHTML = '☀️';
} else {
    button.innerHTML = '🌙';
}

// toggle klik
button.addEventListener('click', () => {
    html.classList.toggle('dark');

    if (html.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
        button.innerHTML = '☀️';
    } else {
        localStorage.setItem('theme', 'light');
        button.innerHTML = '🌙';
    }
});