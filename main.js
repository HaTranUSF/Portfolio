in · JS
/* ===== NAVBAR SCROLL EFFECT ===== */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });
 
/* ===== TYPING ANIMATION ===== */
const phrase = 'Data Analyst';
let charIndex = 0;
const typedEl = document.getElementById('typed-text');
 
function type() {
  if (charIndex <= phrase.length) {
    typedEl.textContent = phrase.slice(0, charIndex++);
    setTimeout(type, 100);
  }
}
setTimeout(type, 600);
 
/* ===== SCROLL REVEAL ===== */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });
 
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
 
/* ===== SKILL BAR ANIMATION ===== */
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.bar-fill').forEach(fill => {
        fill.style.width = fill.dataset.width + '%';
      });
      barObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });
 
const skillsSection = document.getElementById('skills');
if (skillsSection) barObserver.observe(skillsSection);
 
/* ===== COPY EMAIL ===== */
function copyEmail(e) {
  e.preventDefault();
  e.stopPropagation();
  navigator.clipboard.writeText('mhaftran@gmail.com').then(() => {
    const toast = document.getElementById('copy-toast');
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2200);
  });
}
 
/* ===== ACTIVE NAV LINK ===== */
const sections = document.querySelectorAll('section[id], header[id]');
const navLinks = document.querySelectorAll('.nav-links a');
 
const activeLinkObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === '#' + id
          ? 'var(--white)'
          : '';
      });
    }
  });
}, { threshold: 0.4 });
 
sections.forEach(s => activeLinkObserver.observe(s));
