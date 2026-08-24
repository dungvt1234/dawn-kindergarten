/* ============================================================
   DAWN KINDERGARTEN · Mầm non Bình Minh
   main.js — tương tác chung toàn site
   ============================================================ */
(function () {
  'use strict';

  /* ---------- 1. Mobile drawer ---------- */
  var drawer = document.querySelector('.drawer');
  var burger = document.querySelector('.burger');
  var drawerClose = document.querySelector('.drawer__close');
  var drawerLinks = document.querySelectorAll('.drawer__link');

  function openDrawer() { if (drawer) drawer.classList.add('is-open'); }
  function closeDrawer() { if (drawer) drawer.classList.remove('is-open'); }

  if (burger) burger.addEventListener('click', openDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  if (drawer) drawer.addEventListener('click', function (e) { if (e.target === drawer) closeDrawer(); });
  drawerLinks.forEach(function (l) { l.addEventListener('click', closeDrawer); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeDrawer(); });

  /* ---------- 2. Reveal on scroll ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- 3. Lightbox (gallery) ---------- */
  var lightbox = document.querySelector('.lightbox');
  var lightboxImg = document.querySelector('.lightbox__img');
  var lightboxCaption = document.querySelector('.lightbox__caption');
  var lightboxClose = document.querySelector('.lightbox__close');

  function openLightbox(src, caption) {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src;
    lightboxImg.alt = caption || '';
    if (lightboxCaption) lightboxCaption.textContent = caption || '';
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
  }
  if (lightbox) {
    document.querySelectorAll('[data-lightbox]').forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        var src = el.getAttribute('data-lightbox') || el.getAttribute('href');
        var caption = el.getAttribute('data-caption') || '';
        openLightbox(src, caption);
      });
    });
    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function (e) { if (e.target === lightbox) closeLightbox(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeLightbox(); });
  }

  /* ---------- 4. Form validation (real-time + submit) ---------- */
  var forms = document.querySelectorAll('form[data-validate]');
  function validateField(field) {
    var wrap = field.closest('.field');
    if (!wrap) return true;
    var value = field.value.trim();
    var valid = true;
    if (field.hasAttribute('required') && !value) valid = false;
    if (valid && field.type === 'tel' && value) {
      valid = /^[0-9+\s.-]{9,15}$/.test(value);
    }
    if (valid && field.type === 'email' && value) {
      valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }
    wrap.classList.toggle('field--invalid', !valid);
    return valid;
  }
  forms.forEach(function (form) {
    form.querySelectorAll('.field__input, .field__select, .field__textarea').forEach(function (field) {
      field.addEventListener('blur', function () { validateField(field); });
      field.addEventListener('input', function () {
        if (field.closest('.field').classList.contains('field--invalid')) validateField(field);
      });
    });
    form.addEventListener('submit', function (e) {
      var fields = form.querySelectorAll('.field__input, .field__select, .field__textarea');
      var allValid = true;
      fields.forEach(function (f) { if (!validateField(f)) allValid = false; });
      if (!allValid) {
        e.preventDefault();
        var firstInvalid = form.querySelector('.field--invalid');
        if (firstInvalid) firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  });

  /* ---------- 5. Header shadow on scroll ---------- */
  var header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
    }, { passive: true });
  }

  /* ---------- 6. Footer year ---------- */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
