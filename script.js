// Smooth Scroll Behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Testimonials Auto‑Scroll
const slider = document.querySelector('.testimonials-slider');
let scrollPos = 0;
setInterval(() => {
  if (!slider) return;
  scrollPos += 310;
  if (scrollPos >= slider.scrollWidth - slider.clientWidth) scrollPos = 0;
  slider.scrollTo({ left: scrollPos, behavior: 'smooth' });
}, 3500);
