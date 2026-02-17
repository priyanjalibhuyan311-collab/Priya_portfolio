// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll button
    const scrollBtn = document.getElementById('scroll-btn');
    if (scrollBtn) {
        scrollBtn.addEventListener('click', () => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Form submission (demo alert)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! (This is a demo alert)');
            contactForm.reset();
        });
    }

    // Scroll animations
    const sections = document.querySelectorAll('section');
    const options = { threshold: 0.1 };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, options);

    sections.forEach(section => {
        section.classList.add('hidden');
        observer.observe(section);
    });

    // ── Add CSS rules safely here (inside DOMContentLoaded) ──
    if (document.styleSheets[0]) {
        document.styleSheets[0].insertRule(`
            .hidden {
                opacity: 0;
                transform: translateY(50px);
                transition: opacity 0.6s ease-out, transform 0.6s ease-out;
            }
        `, document.styleSheets[0].cssRules.length);

        document.styleSheets[0].insertRule(`
            .visible {
                opacity: 1;
                transform: translateY(0);
            }
        `, document.styleSheets[0].cssRules.length);
    }
});