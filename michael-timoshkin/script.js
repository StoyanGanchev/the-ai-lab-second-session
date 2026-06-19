/* ============================================
   SMOOTH SCROLL BEHAVIOR
   ============================================ */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/* ============================================
   SCROLL ANIMATIONS
   ============================================ */

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards and text elements for animation
document.querySelectorAll('.interest-card, .project-card, .goal-item, .education-card, .about-text').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

/* ============================================
   ANIMATIONS
   ============================================ */

const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideInLeft {
        from {
            opacity: 0;
            transform: translateX(-50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;
document.head.appendChild(style);

/* ============================================
   ACTIVE NAV LINK HIGHLIGHTING
   ============================================ */

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section, #home');
    const navLinks = document.querySelectorAll('.nav-menu a');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.color = 'var(--text-light)';
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = 'var(--accent-cyan)';
        }
    });
});

/* ============================================
   HEADER SCROLL EFFECT
   ============================================ */

const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
        navbar.style.boxShadow = '0 5px 20px rgba(93, 253, 255, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

/* ============================================
   PARTICLE BACKGROUND (OPTIONAL)
   ============================================ */

function createParticles() {
    const heroSection = document.querySelector('.hero');
    if (!heroSection) return;

    // Note: Particles are created via CSS gradients for performance
    // This function is a placeholder for potential future enhancements
}

createParticles();

/* ============================================
   CONTACT LINK VALIDATION & UPDATES
   ============================================ */

// Helper function to update contact links
window.updateContactLinks = function(email = 'your.email@example.com', github = 'https://github.com', linkedin = 'https://linkedin.com', twitter = 'https://twitter.com') {
    const emailLink = document.querySelector('a[href^="mailto:"]');
    const githubLink = document.querySelectorAll('a[href^="https://github.com"]');
    const linkedinLink = document.querySelectorAll('a[href^="https://linkedin.com"]');
    const twitterLink = document.querySelectorAll('a[href^="https://twitter.com"]');

    if (emailLink) emailLink.href = `mailto:${email}`;
    githubLink.forEach(link => link.href = github);
    linkedinLink.forEach(link => link.href = linkedin);
    twitterLink.forEach(link => link.href = twitter);
};

/* ============================================
   LOG INITIALIZATION
   ============================================ */

console.log('%c🚀 Welcome to Michael\'s Portfolio!', 'color: #87ceeb; font-size: 16px; font-weight: bold;');
console.log('%cMade with passion using HTML, CSS, and JavaScript', 'color: #5dfdff; font-size: 12px;');
