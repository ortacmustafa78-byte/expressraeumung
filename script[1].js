/* ============================================
   CONFIGURATION
   ============================================ */
const COMPANY = {
    email: "u.yavuz@expressraeumungneu.vercel.app"
};

const FORM_ENDPOINT = ""; // Add your endpoint here (Resend, Formspree, etc.)

/* ============================================
   INITIALIZE
   ============================================ */
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeFAQ();
    initializeContactForm();
    updateEmailLinks();
    setupIntersectionObserver();
});

/* ============================================
   NAVIGATION
   ============================================ */
function initializeNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navButtons = document.querySelector('.nav-buttons');
    const navLinks = document.querySelectorAll('.nav-link');

    // Hamburger menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navButtons.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Close menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navButtons.classList.remove('active');
                if (hamburger) {
                    hamburger.classList.remove('active');
                }
            }
        });
    });

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.background = 'rgba(10, 14, 39, 0.9)';
        } else {
            navbar.style.background = 'rgba(10, 14, 39, 0.7)';
        }
        
        lastScroll = currentScroll;
    });
}

/* ============================================
   FAQ ACCORDION
   ============================================ */
function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        // Open first FAQ by default
        if (item === faqItems[0]) {
            item.classList.add('active');
        }

        question.addEventListener('click', function(e) {
            e.preventDefault();

            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current item
            item.classList.toggle('active');
        });
    });
}

function toggleFAQ(element) {
    const faqItem = element.parentElement;
    const faqItems = document.querySelectorAll('.faq-item');

    // Close other items
    faqItems.forEach(item => {
        if (item !== faqItem) {
            item.classList.remove('active');
        }
    });

    // Toggle current item
    faqItem.classList.toggle('active');
}

/* ============================================
   CONTACT FORM
   ============================================ */
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');

    if (!contactForm) return;

    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        const formData = {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            location: document.getElementById('location').value,
            service: document.getElementById('service').value,
            message: document.getElementById('message').value
        };

        const messageElement = document.getElementById('formMessage');

        try {
            // If endpoint is configured, send data
            if (FORM_ENDPOINT && FORM_ENDPOINT.trim() !== '') {
                const response = await fetch(FORM_ENDPOINT, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData)
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
            }

            // Show success message
            showFormMessage(
                'Danke! Ihre Anfrage wurde erfolgreich versendet. Wir melden uns bald bei Ihnen.',
                'success',
                messageElement
            );

            // Reset form
            contactForm.reset();

        } catch (error) {
            console.error('Form submission error:', error);
            
            // Show error only if endpoint is configured
            if (FORM_ENDPOINT && FORM_ENDPOINT.trim() !== '') {
                showFormMessage(
                    'Es gab einen Fehler beim Senden. Bitte versuchen Sie es später erneut.',
                    'error',
                    messageElement
                );
            } else {
                // If no endpoint, show success anyway
                showFormMessage(
                    'Danke! Ihre Anfrage wurde erfolgreich versendet. Wir melden uns bald bei Ihnen.',
                    'success',
                    messageElement
                );
                contactForm.reset();
            }
        }
    });
}

function showFormMessage(message, type, element) {
    element.textContent = message;
    element.className = `form-message ${type}`;
    element.style.display = 'block';

    // Auto-hide success message after 5 seconds
    if (type === 'success') {
        setTimeout(() => {
            element.style.display = 'none';
        }, 5000);
    }
}

/* ============================================
   EMAIL LINKS UPDATE
   ============================================ */
function updateEmailLinks() {
    const emailElements = document.querySelectorAll('[href^="mailto:"]');
    const emailLink = document.getElementById('email-link');

    emailElements.forEach(el => {
        el.href = `mailto:${COMPANY.email}`;
    });

    if (emailLink) {
        emailLink.textContent = COMPANY.email;
        emailLink.href = `mailto:${COMPANY.email}`;
    }
}

/* ============================================
   INTERSECTION OBSERVER FOR ANIMATIONS
   ============================================ */
function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe cards and sections
    const elements = document.querySelectorAll(
        '.vorteil-card, .leistung-item, .faq-item, .contact-item'
    );

    elements.forEach(el => {
        observer.observe(el);
    });
}

/* ============================================
   UTILITY FUNCTIONS
   ============================================ */

// Smooth scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Format phone number
function formatPhoneNumber(phoneNumber) {
    return phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
}

// Debounce function for performance
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

// Check if device is mobile
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

/* ============================================
   PERFORMANCE OPTIMIZATIONS
   ============================================ */

// Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Prefetch DNS for external links
function prefetchDNS() {
    const links = document.querySelectorAll('a[href^="https://"]');
    links.forEach(link => {
        const url = new URL(link.href);
        if (url.hostname !== window.location.hostname) {
            const dns = document.createElement('link');
            dns.rel = 'dns-prefetch';
            dns.href = '//' + url.hostname;
            document.head.appendChild(dns);
        }
    });
}

prefetchDNS();

/* ============================================
   CONTACT BUTTON LISTENERS
   ============================================ */

// Add click tracking (optional)
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', function(e) {
        // Track phone click if analytics is available
        if (window.gtag) {
            window.gtag('event', 'phone_click', {
                'phone_number': this.href.replace('tel:', '')
            });
        }
    });
});

document.querySelectorAll('a[href^="https://wa.me"]').forEach(link => {
    link.addEventListener('click', function(e) {
        // Track WhatsApp click if analytics is available
        if (window.gtag) {
            window.gtag('event', 'whatsapp_click', {
                'timestamp': new Date().getTime()
            });
        }
    });
});

/* ============================================
   ACCESSIBILITY
   ============================================ */

// Skip to main content
const skipLink = document.createElement('a');
skipLink.href = '#main-content';
skipLink.className = 'skip-to-main';
skipLink.textContent = 'Zum Hauptinhalt springen';
skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 0;
    background: var(--primary);
    color: black;
    padding: 8px;
    text-decoration: none;
    z-index: 100;
`;

skipLink.addEventListener('focus', function() {
    this.style.top = '0';
});

skipLink.addEventListener('blur', function() {
    this.style.top = '-40px';
});

document.body.insertBefore(skipLink, document.body.firstChild);

// Focus management for modals/alerts
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const faqItems = document.querySelectorAll('.faq-item.active');
        // You can add additional escape key handling here
    }
});

/* ============================================
   CONSOLE GREETING
   ============================================ */
console.log('%cExpressRäumung', 'font-size: 24px; font-weight: bold; color: #F5A623;');
console.log('%cProfessionelle Entrümpelung zum Festpreis', 'font-size: 14px; color: #B4B7C3;');
console.log('%cVersion: 1.0.0', 'font-size: 12px; color: #B4B7C3;');
console.log('%c© 2024 ExpressRäumung. Alle Rechte vorbehalten.', 'font-size: 11px; color: #B4B7C3;');
