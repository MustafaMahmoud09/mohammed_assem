/**
 * script.js — Mohamed Assem | Network Engineer Portfolio
 * Features: Navbar scroll, mobile menu, scroll reveal,
 *           skill bar animation, contact form handler
 */

'use strict';

/* ============================================================
   1. NAVBAR — Scroll state & active link tracking
   ============================================================ */
const navbar  = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');

function updateNavbar() {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

// Highlight active section in nav
function updateActiveLink() {
  const sections = document.querySelectorAll('section[id]');
  const scrollPos = window.scrollY + 90;

  sections.forEach(section => {
    const sectionTop    = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId     = section.getAttribute('id');
    const link = document.querySelector(`.nav-link[href="#${sectionId}"]`);

    if (link) {
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    }
  });
}

window.addEventListener('scroll', () => {
  updateNavbar();
  updateActiveLink();
}, { passive: true });

// Set initial state
updateNavbar();


/* ============================================================
   2. HAMBURGER MOBILE MENU
   ============================================================ */
const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navMenu.classList.toggle('open');
  // Prevent body scroll when menu open
  document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
});

// Close menu when a link is clicked
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// Close menu on outside click
document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target) && navMenu.classList.contains('open')) {
    hamburger.classList.remove('open');
    navMenu.classList.remove('open');
    document.body.style.overflow = '';
  }
});


/* ============================================================
   3. SCROLL REVEAL ANIMATIONS
   ============================================================ */
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger children within the same parent group
      const delay = entry.target.dataset.delay || 0;
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, delay);
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
});

// Add staggered delays to grouped items
function assignStaggerDelays(selector, delayStep = 120) {
  const groups = {};
  document.querySelectorAll(selector).forEach(el => {
    const parent = el.parentElement;
    if (!groups[parent]) groups[parent] = [];
    groups[parent].push(el);
  });
  Object.values(groups).forEach(group => {
    group.forEach((el, i) => {
      el.dataset.delay = i * delayStep;
    });
  });
}

assignStaggerDelays('.skill-card', 80);
assignStaggerDelays('.cert-card', 100);
assignStaggerDelays('.project-card', 120);
assignStaggerDelays('.timeline-item', 150);

revealElements.forEach(el => revealObserver.observe(el));


/* ============================================================
   4. SKILL BAR ANIMATION
   Triggers when the skills section enters viewport
   ============================================================ */
const skillBarFills = document.querySelectorAll('.skill-bar-fill');

const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar   = entry.target;
      const width = bar.dataset.width || '0';
      // Small initial delay so it's visible to the user
      setTimeout(() => {
        bar.style.width = width + '%';
      }, 300);
      barObserver.unobserve(bar);
    }
  });
}, { threshold: 0.4 });

skillBarFills.forEach(bar => barObserver.observe(bar));


/* ============================================================
   5. CONTACT FORM HANDLER (UI only — no backend)
   ============================================================ */
const contactForm = document.getElementById('contact-form');
const formNote    = document.getElementById('form-note');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name    = contactForm.name.value.trim();
    const email   = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    // Basic validation
    if (!name || !email || !message) {
      formNote.textContent = 'Please fill in all required fields.';
      formNote.className   = 'form-note error';
      return;
    }

    if (!isValidEmail(email)) {
      formNote.textContent = 'Please enter a valid email address.';
      formNote.className   = 'form-note error';
      return;
    }

    // Simulate sending
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    submitBtn.disabled   = true;
    submitBtn.innerHTML  = '<i class="fa-solid fa-spinner fa-spin"></i> Sending…';

    setTimeout(() => {
      contactForm.reset();
      formNote.textContent = '✓ Thank you! Your message has been received. I\'ll get back to you soon.';
      formNote.className   = 'form-note success';
      submitBtn.disabled   = false;
      submitBtn.innerHTML  = '<i class="fa-solid fa-paper-plane"></i> Send Message';
      // Clear success message after 6 seconds
      setTimeout(() => { formNote.textContent = ''; formNote.className = 'form-note'; }, 6000);
    }, 1600);
  });

  // Clear form note on input
  contactForm.querySelectorAll('input, textarea').forEach(field => {
    field.addEventListener('input', () => {
      if (formNote.classList.contains('error')) {
        formNote.textContent = '';
        formNote.className   = 'form-note';
      }
    });
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


/* ============================================================
   6. SMOOTH SCROLL — for older browsers fallback
   ============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = parseInt(getComputedStyle(document.documentElement)
        .getPropertyValue('--nav-h')) || 70;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});


/* ============================================================
   7. ACTIVE NAV LINK STYLE (CSS injection)
   ============================================================ */
const activeNavStyle = document.createElement('style');
activeNavStyle.textContent = `
  .nav-link.active {
    color: var(--accent) !important;
    background: var(--accent-dim) !important;
  }
`;
document.head.appendChild(activeNavStyle);


/* ============================================================
   8. TYPING EFFECT — Hero tagline subtle shimmer on load
   ============================================================ */
window.addEventListener('load', () => {
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(20px)';
    setTimeout(() => {
      heroContent.style.transition = 'opacity 0.9s ease, transform 0.9s ease';
      heroContent.style.opacity = '1';
      heroContent.style.transform = 'translateY(0)';
    }, 200);
  }

  // Trigger hero reveal after a slight delay
  document.querySelectorAll('#hero .reveal').forEach((el, i) => {
    setTimeout(() => {
      el.classList.add('visible');
    }, 300 + i * 200);
  });
});


/* ============================================================
   9. PERFORMANCE: Throttle scroll listener
   ============================================================ */
let ticking = false;
const originalScroll = window.onscroll;

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      updateNavbar();
      updateActiveLink();
      ticking = false;
    });
    ticking = true;
  }
}, { passive: true });
