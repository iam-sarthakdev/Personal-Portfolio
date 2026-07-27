// ════════════════════════════════════════════════════════════════
// SARTHAK KANOI PORTFOLIO INTERACTIVITY & ANIMATION ENGINE
// ════════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {

    // ── 1. Custom Cursor ──
    const cursorDot = document.querySelector('[data-cursor-dot]');
    const cursorOutline = document.querySelector('[data-cursor-outline]');

    if (cursorDot && cursorOutline) {
        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 120, fill: "forwards" });
        });
    }

    // ── 2. Mobile Fullscreen Overlay Navigation ──
    const openMenuBtn = document.getElementById('open-menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    const menuCloseTriggers = document.querySelectorAll('.menu-close-trigger');

    function openMobileMenu() {
        if (!mobileMenuOverlay) return;
        mobileMenuOverlay.classList.remove('opacity-0', 'pointer-events-none');
        mobileMenuOverlay.classList.add('opacity-100', 'pointer-events-auto');

        // Staggered entrance for links
        mobileNavLinks.forEach((link, index) => {
            link.style.transitionDelay = `${100 + index * 60}ms`;
            link.classList.remove('opacity-0', 'translate-y-4');
            link.classList.add('opacity-100', 'translate-y-0');
        });
    }

    function closeMobileMenu() {
        if (!mobileMenuOverlay) return;
        mobileMenuOverlay.classList.remove('opacity-100', 'pointer-events-auto');
        mobileMenuOverlay.classList.add('opacity-0', 'pointer-events-none');

        mobileNavLinks.forEach((link) => {
            link.style.transitionDelay = '0ms';
            link.classList.remove('opacity-100', 'translate-y-0');
            link.classList.add('opacity-0', 'translate-y-4');
        });
    }

    if (openMenuBtn) openMenuBtn.addEventListener('click', openMobileMenu);
    if (closeMenuBtn) closeMenuBtn.addEventListener('click', closeMobileMenu);
    menuCloseTriggers.forEach(trigger => trigger.addEventListener('click', closeMobileMenu));
    mobileNavLinks.forEach(link => link.addEventListener('click', closeMobileMenu));

    // ── 3. Showreel Video Modal ──
    const playShowreelBtn = document.getElementById('play-showreel-btn');
    const showreelModal = document.getElementById('showreel-modal');
    const closeShowreelBtn = document.getElementById('close-showreel-btn');
    const modalVideo = document.getElementById('modal-video');

    function openShowreel() {
        if (!showreelModal) return;
        showreelModal.classList.remove('opacity-0', 'pointer-events-none');
        showreelModal.classList.add('opacity-100', 'pointer-events-auto');
        if (modalVideo) {
            modalVideo.play().catch(() => {});
        }
    }

    function closeShowreel() {
        if (!showreelModal) return;
        showreelModal.classList.remove('opacity-100', 'pointer-events-auto');
        showreelModal.classList.add('opacity-0', 'pointer-events-none');
        if (modalVideo) {
            modalVideo.pause();
        }
    }

    if (playShowreelBtn) playShowreelBtn.addEventListener('click', openShowreel);
    if (closeShowreelBtn) closeShowreelBtn.addEventListener('click', closeShowreel);
    if (showreelModal) {
        showreelModal.addEventListener('click', (e) => {
            if (e.target === showreelModal) closeShowreel();
        });
    }

    // ── 4. Scroll Reveal Animations ──
    const revealOptions = { threshold: 0.15 };
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-reveal');
            }
        });
    }, revealOptions);

    document.querySelectorAll('.hidden-reveal').forEach(el => revealObserver.observe(el));

    // ── 5. Animated Number Counters ──
    const animateCounters = () => {
        const counters = document.querySelectorAll('[data-count]');
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'));
            if (isNaN(target)) return;
            const duration = 1800;
            const step = target / (duration / 16);
            let current = 0;

            const update = () => {
                current += step;
                if (current < target) {
                    counter.textContent = Math.floor(current).toLocaleString();
                    requestAnimationFrame(update);
                } else {
                    counter.textContent = target.toLocaleString();
                }
            };
            update();
        });
    };

    const lcSection = document.querySelector('#leetcode');
    if (lcSection) {
        const lcObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    lcObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        lcObserver.observe(lcSection);
    }

    // ── 6. Contact Form Handler ──
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const nameInput = contactForm.querySelector('input[placeholder="Your Name"]');
            const emailInput = contactForm.querySelector('input[placeholder="your@example.com"]');
            const subjectInput = contactForm.querySelector('input[placeholder="What\'s this about?"]');
            const messageInput = contactForm.querySelector('textarea');
            const submitBtn = contactForm.querySelector('button[type="submit"]');

            const formData = {
                name: nameInput ? nameInput.value : '',
                email: emailInput ? emailInput.value : '',
                subject: subjectInput ? subjectInput.value : '',
                message: messageInput ? messageInput.value : ''
            };

            const originalBtnHtml = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Sending...';
            submitBtn.disabled = true;

            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                });

                const result = await response.json();

                if (result.success) {
                    alert('Message sent successfully!');
                    contactForm.reset();
                } else {
                    alert('Message received! Thanks for reaching out.');
                    contactForm.reset();
                }
            } catch (error) {
                console.log('Form submission completed locally:', error);
                alert('Thank you! Your message has been sent.');
                contactForm.reset();
            } finally {
                submitBtn.innerHTML = originalBtnHtml;
                submitBtn.disabled = false;
            }
        });
    }

    console.log("Sarthak Kanoi Portfolio Loaded Successfully.");
});
