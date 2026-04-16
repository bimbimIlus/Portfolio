
// =====================
// Navbar Fixed
// =====================
window.onscroll = function () {
    const header = document.querySelector('header');

    if (header) {
        const fixedNav = header.offsetTop;

        if (window.pageYOffset > fixedNav) {
            header.classList.add('navbar-fixed');
        } else {
            header.classList.remove('navbar-fixed');
        }
    }
};


// =====================
// Hamburger Menu
// =====================
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('hamburger-active');
        navMenu.classList.toggle('hidden');
    });
}


// =====================
// Dark / Light Mode
// =====================
const button = document.getElementById('theme-toggle');
const html = document.documentElement;

if (button) {
    // Set awal
    if (localStorage.getItem('theme') === 'dark') {
        html.classList.add('dark');
        button.innerHTML = '☀️';
    } else {
        button.innerHTML = '🌙';
    }

    // Toggle klik
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
}


// =====================
// Kirim ke WhatsApp
// =====================
document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("btnKirim");

    if (btn) {
        btn.addEventListener("click", function () {
            const nama = document.getElementById("nama").value;
            const email = document.getElementById("email").value;
            const pesan = document.getElementById("pesan").value;

            console.log("Klik berhasil"); // DEBUG

            if (!nama || !email || !pesan) {
                alert("Semua field harus diisi!");
                return;
            }

            const noWA = "6281338829162";

            const text = encodeURIComponent(
                `Halo, saya ${nama}\nEmail: ${email}\nPesan: ${pesan}`
            );

            const url = `https://wa.me/${noWA}?text=${text}`;

            window.location.href = url;
        });
    }
});