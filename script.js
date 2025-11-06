// Smooth scroll saat klik link navigasi
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Animasi fade-in saat scroll
const fadeElements = document.querySelectorAll('section');

function fadeInOnScroll() {
    fadeElements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
            el.classList.add('fade-in');
        }
    });
}

window.addEventListener('scroll', fadeInOnScroll);

// Efek alert saat submit form
const form = document.getElementById('contact-form');
form.addEventListener('submit', e => {
    e.preventDefault();
    alert('Pesan kamu berhasil dikirim! Terima kasih sudah menghubungi kami.');
    form.reset();
});
