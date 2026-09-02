/* FAQ accordion */
document.querySelectorAll('.faq button').forEach(btn => {
  btn.addEventListener('click', () => btn.parentElement.classList.toggle('open'));
});

/* Animated mobile menu */
const menu = document.querySelector('.menu');
const nav = document.querySelector('.navlinks');
if (menu && nav) {
  menu.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menu.classList.toggle('open', isOpen);
    menu.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    menu.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
  }));
}

/* Contact form -> inline success state */
const form = document.querySelector('#contactForm');
const success = document.querySelector('#formSuccess');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const nameEl = document.querySelector('#name');
    if (success) {
      const heading = success.querySelector('h3');
      if (heading && nameEl && nameEl.value.trim()) {
        heading.textContent = `Thanks, ${nameEl.value.trim()}!`;
      }
      form.style.display = 'none';
      success.classList.add('show');
      success.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    form.reset();
  });
}

/* Sticky header shrink on scroll */
const header = document.querySelector('header');
const progressBar = document.querySelector('#scrollProgress');
const backToTop = document.querySelector('#backToTop');
function onScroll() {
  const scrollY = window.scrollY || document.documentElement.scrollTop;
  if (header) header.classList.toggle('scrolled', scrollY > 10);
  if (backToTop) backToTop.classList.toggle('show', scrollY > 500);
  if (progressBar) {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
    progressBar.style.width = pct + '%';
  }
}
document.addEventListener('scroll', onScroll, { passive: true });
onScroll();

if (backToTop) {
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* Scroll-reveal animations */
const revealSelectors = '.section-head, .card, .device-card, .project, .platform, .team .person, .faq, .step, .about-photo, .about-grid > div, .trust-item, .checklist .check, .tech, .contact-card, form, .process';
const revealTargets = document.querySelectorAll(revealSelectors);
if ('IntersectionObserver' in window && revealTargets.length) {
  revealTargets.forEach((el, i) => {
    el.classList.add('reveal');
    if (!el.style.getPropertyValue('--d')) el.style.setProperty('--d', i % 8);
  });
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealTargets.forEach(el => io.observe(el));
} else {
  revealTargets.forEach(el => el.classList.add('in-view'));
}

/* Animated stat counters */
const counters = document.querySelectorAll('[data-count]');
if (counters.length) {
  const animateCount = (el) => {
    const target = parseInt(el.getAttribute('data-count'), 10) || 0;
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1100;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  };
  if ('IntersectionObserver' in window) {
    const cio = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          cio.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(el => cio.observe(el));
  } else {
    counters.forEach(animateCount);
  }
}

/* Portfolio filters */
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.projects .project');
if (filterBtns.length && projectCards.length) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      projectCards.forEach(card => {
        const stack = card.getAttribute('data-stack') || '';
        const match = filter === 'all' || stack.includes(filter);
        card.classList.toggle('hide', !match);
      });
    });
  });
}
