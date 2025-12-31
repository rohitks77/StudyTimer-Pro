// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Install button click handler
// Replace '#' with your actual Chrome Web Store URL when published
const CHROME_STORE_URL = 'https://chrome.google.com/webstore/detail/YOUR_EXTENSION_ID';

document.querySelectorAll('.install-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        // For now, show alert. Replace with actual Chrome Web Store URL
        if (button.getAttribute('href') === '#') {
            e.preventDefault();
            alert('Extension will be available on Chrome Web Store soon!\n\nFor now, you can load it unpacked in Chrome:\n1. Go to chrome://extensions/\n2. Enable "Developer mode"\n3. Click "Load unpacked"\n4. Select the extension folder');
            
            // When published, uncomment this:
            // window.open(CHROME_STORE_URL, '_blank');
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all animated elements
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.feature-card, .step, .screenshot-item, .contact-card, .testimonial-card, .faq-item'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add floating animation to hero image
const heroImage = document.querySelector('.extension-preview');
if (heroImage) {
    let floatDirection = 1;
    let floatPosition = 0;
    
    setInterval(() => {
        floatPosition += 0.5 * floatDirection;
        
        if (floatPosition >= 10 || floatPosition <= -10) {
            floatDirection *= -1;
        }
        
        heroImage.style.transform = `translateY(${floatPosition}px)`;
    }, 50);
}

// Add hover effect to feature cards
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Console message
console.log('%c StudyTimer Pro ', 'background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); color: white; padding: 10px 20px; font-size: 16px; font-weight: bold;');
console.log('%c Track Your Study Progress ', 'color: #6366f1; font-size: 14px; font-weight: bold;');
console.log('%c Visit: https://timerstudy.rohitks.com.np ', 'color: #475569; font-size: 12px;');
console.log('%c Copyright © 2025 Rohit K.S. All rights reserved. ', 'color: #94a3b8; font-size: 11px;');

// Performance optimization: Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}
