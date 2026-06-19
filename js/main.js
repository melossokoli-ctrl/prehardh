(function () {

  'use strict';



  const FESTIVAL_DATE = new Date('2026-09-04T18:00:00+02:00');

  const LANG_KEY = 'hardhfest-lang';



  const translations = {

    sq: {

      'lang.label': 'Gjuha',

      'nav.home': 'Ballina',

      'nav.news': 'Lajme',

      'nav.artists': 'Artistët',

      'nav.testimonials': 'Përshtypje',

      'nav.shop': 'Hardh Shop',

      'nav.gallery': 'Galeria',

      'nav.location': 'Lokacioni',

      'nav.contact': 'Kontakti',

      'topbar.dates': '4, 5, 6 Shtator 2026 · Rahovec',

      'hero.motto': "Për kokërr t'qefit",

      'hero.dates': '4, 5, 6 Shtator 2026',

      'hero.location': 'Rahovec, Kosovë',

      'hero.locationAria': 'Hap lokacionin në Google Maps',

      'hero.cta': 'Hyrje Falas',

      'countdown.heading': 'Deri në Hardh Fest',

      'countdown.days': 'ditë',

      'countdown.hours': 'orë',

      'countdown.mins': 'minuta',

      'countdown.secs': 'sekonda',

      'headliner.desc': 'Për herë të parë në Kosovë! Legjenda e muzikës pop vjen në skenën e Hardh Fest në Rahovec me hitet që kanë shënuar histori.',

      'section.artists': 'Artistët',

      'section.news': 'Lajme',

      'section.testimonials': 'Përshtypje',

      'section.sponsors': 'Sponsorët',

      'section.board': 'Bordi',

      'section.gallery': 'Galeria',

      'section.newsletter': 'Newsletter',

      'section.contact': 'Kontakti',

      'cta.more': 'Shiko më shumë',

      'cta.poster': 'Shiko posterin',

      'cta.soon': 'Së Shpejti',

      'cta.moreNews': 'Lexo më shumë lajme',

      'artists.more': 'Më shumë artistë',

      'artists.updates': 'Njoftime të reja',

      'newsletter.desc': 'Bëhu pjesë e komunitetit Hardh Fest dhe merr lajmet e fundit',

      'newsletter.email': 'Email adresa',

      'newsletter.btn': 'Abonohu',

      'newsletter.success': 'U regjistrua! ✓',

      'contact.intro': 'Ke pyetje rreth festivalit? Dëshiron të bëhesh sponsor? Na shkruaj!',

      'contact.name': 'Emri',

      'contact.namePh': 'Shkruani emrin tuaj',

      'contact.email': 'Email',

      'contact.emailPh': 'Shkruani email-in tuaj',

      'contact.subject': 'Subjekti',

      'contact.subjectPh': 'Shkruani subjektin',

      'contact.message': 'Mesazhi',

      'contact.messagePh': 'Shkruani mesazhin tuaj...',

      'contact.send': 'Dërgo',

      'contact.sending': 'Duke dërguar...',

      'contact.success': 'U dërgua! ✓',

      'footer.links': 'Linqet',

      'footer.contact': 'Kontakt',

      'footer.copy': '© 2026 Hardh Fest · Rahovec, Kosovë',

    },

    en: {

      'lang.label': 'Language',

      'nav.home': 'Home',

      'nav.news': 'News',

      'nav.artists': 'Artists',

      'nav.testimonials': 'Testimonials',

      'nav.shop': 'Hardh Shop',

      'nav.gallery': 'Gallery',

      'nav.location': 'Location',

      'nav.contact': 'Contact',

      'topbar.dates': '4, 5, 6 September 2026 · Rahovec',

      'hero.motto': 'For the love of grapes',

      'hero.dates': '4, 5, 6 September 2026',

      'hero.location': 'Rahovec, Kosovo',

      'hero.locationAria': 'Open location in Google Maps',

      'hero.cta': 'Free Entry',

      'countdown.heading': 'Until Hardh Fest',

      'countdown.days': 'days',

      'countdown.hours': 'hours',

      'countdown.mins': 'minutes',

      'countdown.secs': 'seconds',

      'headliner.desc': 'For the first time in Kosovo! The pop music legend comes to the Hardh Fest stage in Rahovec with hits that made history.',

      'section.artists': 'Artists',

      'section.news': 'News',

      'section.testimonials': 'Testimonials',

      'section.sponsors': 'Sponsors',

      'section.board': 'Board',

      'section.gallery': 'Gallery',

      'section.newsletter': 'Newsletter',

      'section.contact': 'Contact',

      'cta.more': 'See more',

      'cta.poster': 'View poster',

      'cta.soon': 'Coming Soon',

      'cta.moreNews': 'Read more news',

      'artists.more': 'More artists',

      'artists.updates': 'New announcements',

      'newsletter.desc': 'Join the Hardh Fest community and get the latest updates',

      'newsletter.email': 'Email address',

      'newsletter.btn': 'Subscribe',

      'newsletter.success': 'Subscribed! ✓',

      'contact.intro': 'Questions about the festival? Want to become a sponsor? Write to us!',

      'contact.name': 'Name',

      'contact.namePh': 'Enter your name',

      'contact.email': 'Email',

      'contact.emailPh': 'Enter your email',

      'contact.subject': 'Subject',

      'contact.subjectPh': 'Enter subject',

      'contact.message': 'Message',

      'contact.messagePh': 'Write your message...',

      'contact.send': 'Send',

      'contact.sending': 'Sending...',

      'contact.success': 'Sent! ✓',

      'footer.links': 'Links',

      'footer.contact': 'Contact',

      'footer.copy': '© 2026 Hardh Fest · Rahovec, Kosovo',

    },

  };



  let currentLang = localStorage.getItem(LANG_KEY) || 'sq';



  function t(key) {

    return translations[currentLang][key] || translations.sq[key] || key;

  }



  function applyLanguage(lang) {

    currentLang = lang === 'en' ? 'en' : 'sq';

    localStorage.setItem(LANG_KEY, currentLang);

    document.documentElement.lang = currentLang;



    document.querySelectorAll('[data-i18n]').forEach((el) => {

      const key = el.getAttribute('data-i18n');

      const text = t(key);

      if (text) el.textContent = text;

    });



    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {

      const key = el.getAttribute('data-i18n-placeholder');

      const text = t(key);

      if (text) el.placeholder = text;

    });



    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {

      const key = el.getAttribute('data-i18n-aria');

      const text = t(key);

      if (text) el.setAttribute('aria-label', text);

    });



    document.querySelectorAll('.lang-switch__btn').forEach((btn) => {

      const active = btn.getAttribute('data-lang') === currentLang;

      btn.classList.toggle('is-active', active);

      btn.setAttribute('aria-pressed', active ? 'true' : 'false');

    });

  }



  function initLanguage() {

    applyLanguage(currentLang);



    document.querySelectorAll('.lang-switch__btn').forEach((btn) => {

      btn.addEventListener('click', () => {

        const lang = btn.getAttribute('data-lang');

        if (lang && lang !== currentLang) applyLanguage(lang);

      });

    });

  }



  function initHero() {

    const hero = document.querySelector('.hero');

    if (!hero) return;



    const markReady = () => hero.classList.add('is-ready');

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {

      markReady();

      return;

    }



    window.setTimeout(markReady, 1200);

  }



  const ids = {

    days: ['hero-days'],

    hours: ['hero-hours'],

    mins: ['hero-mins'],

    secs: ['hero-secs'],

  };



  function pad(n) {

    return String(Math.max(0, n)).padStart(2, '0');

  }



  function updateCountdown() {

    const now = Date.now();

    const diff = FESTIVAL_DATE - now;



    if (diff <= 0) {

      Object.values(ids).flat().forEach((id) => {

        const el = document.getElementById(id);

        if (el) el.textContent = '00';

      });

      return;

    }



    const days = Math.floor(diff / 86400000);

    const hours = Math.floor((diff % 86400000) / 3600000);

    const mins = Math.floor((diff % 3600000) / 60000);

    const secs = Math.floor((diff % 60000) / 1000);



    ids.days.forEach((id) => { const el = document.getElementById(id); if (el) el.textContent = pad(days); });

    ids.hours.forEach((id) => { const el = document.getElementById(id); if (el) el.textContent = pad(hours); });

    ids.mins.forEach((id) => { const el = document.getElementById(id); if (el) el.textContent = pad(mins); });

    ids.secs.forEach((id) => { const el = document.getElementById(id); if (el) el.textContent = pad(secs); });

  }



  updateCountdown();

  setInterval(updateCountdown, 1000);



  initLanguage();

  initHero();



  const nav = document.getElementById('nav');

  const navBurger = document.getElementById('navBurger');

  const navLinks = document.getElementById('navLinks');



  const navSectionLinks = [...navLinks.querySelectorAll('a[href^="#"]')].filter(
    (a) => a.getAttribute('href').length > 1
  );

  function updateActiveNav() {
    const offset = 130;
    let current = navSectionLinks[0]?.getAttribute('href') || '#ballina';

    navSectionLinks.forEach((link) => {
      const id = link.getAttribute('href');
      const section = document.querySelector(id);
      if (section && window.scrollY >= section.offsetTop - offset) {
        current = id;
      }
    });

    navSectionLinks.forEach((link) => {
      link.classList.toggle('is-active', link.getAttribute('href') === current);
    });
  }

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
    updateActiveNav();
  }, { passive: true });

  updateActiveNav();



  navBurger.addEventListener('click', () => {

    navBurger.classList.toggle('active');

    navLinks.classList.toggle('open');

    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';

  });



  navLinks.querySelectorAll('a').forEach((link) => {

    link.addEventListener('click', () => {

      navBurger.classList.remove('active');

      navLinks.classList.remove('open');

      document.body.style.overflow = '';

    });

  });



  const revealEls = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver(

    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add('visible');

          revealObserver.unobserve(entry.target);

        }

      });

    },

    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }

  );



  revealEls.forEach((el) => revealObserver.observe(el));



  const testimonialTrack = document.getElementById('testimonialTrack');

  const testimonialPrev = document.getElementById('testimonialPrev');

  const testimonialNext = document.getElementById('testimonialNext');

  const testimonialDots = document.getElementById('testimonialDots');



  if (testimonialTrack && testimonialDots) {

    const cards = testimonialTrack.querySelectorAll('.testimonial-card');

    let current = 0;



    cards.forEach((_, i) => {

      const dot = document.createElement('button');

      dot.className = 'testimonials-carousel__dot' + (i === 0 ? ' is-active' : '');

      dot.setAttribute('aria-label', `Përshtypje ${i + 1}`);

      dot.addEventListener('click', () => goTo(i));

      testimonialDots.appendChild(dot);

    });



    const dots = testimonialDots.querySelectorAll('.testimonials-carousel__dot');



    function goTo(index) {

      current = (index + cards.length) % cards.length;

      testimonialTrack.style.transform = `translateX(-${current * 100}%)`;

      cards.forEach((c, i) => c.classList.toggle('is-active', i === current));

      dots.forEach((d, i) => d.classList.toggle('is-active', i === current));

    }



    if (testimonialPrev) testimonialPrev.addEventListener('click', () => goTo(current - 1));

    if (testimonialNext) testimonialNext.addEventListener('click', () => goTo(current + 1));

  }



  const newsletterForm = document.getElementById('newsletterForm');

  if (newsletterForm) {

    newsletterForm.addEventListener('submit', (e) => {

      e.preventDefault();

      const btn = newsletterForm.querySelector('button');

      const original = t('newsletter.btn');

      btn.textContent = t('newsletter.success');

      newsletterForm.reset();

      setTimeout(() => { btn.textContent = original; }, 3000);

    });

  }



  const contactForm = document.getElementById('contactForm');

  if (contactForm) {

    contactForm.addEventListener('submit', (e) => {

      e.preventDefault();

      const btn = contactForm.querySelector('button[type="submit"]');

      const original = t('contact.send');

      btn.textContent = t('contact.sending');

      btn.disabled = true;



      setTimeout(() => {

        btn.textContent = t('contact.success');

        btn.style.background = 'linear-gradient(135deg, #4caf50, #388e3c)';

        contactForm.reset();



        setTimeout(() => {

          btn.textContent = original;

          btn.style.background = '';

          btn.disabled = false;

        }, 3000);

      }, 1200);

    });

  }



  function openLightbox(img) {

    if (!img) return;



    const src = img.currentSrc || img.src;

    if (!src) return;



    const overlay = document.createElement('div');

    overlay.className = 'lightbox';

    overlay.setAttribute('role', 'dialog');

    overlay.setAttribute('aria-modal', 'true');



    const fullImg = document.createElement('img');

    fullImg.src = src;

    fullImg.alt = img.alt || '';



    overlay.appendChild(fullImg);

    document.body.appendChild(overlay);

    document.body.style.overflow = 'hidden';



    function closeLightbox() {

      overlay.remove();

      document.body.style.overflow = '';

      document.removeEventListener('keydown', onKeyDown);

    }



    function onKeyDown(e) {

      if (e.key === 'Escape') closeLightbox();

    }



    overlay.addEventListener('click', closeLightbox);

    document.addEventListener('keydown', onKeyDown);

  }



  document.querySelectorAll(

    '.gallery__item, .shop-grid__item, .promo-card__img, .headliner__poster, .news-exit-card__img'

  ).forEach((item) => {

    item.addEventListener('click', (e) => {

      const img = item.tagName === 'IMG' ? item : item.querySelector('img');

      if (!img) return;

      e.preventDefault();

      openLightbox(img);

    });

  });

  document.querySelectorAll('.promo-card__poster-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const img = btn.closest('.promo-card')?.querySelector('.promo-card__img img');
      if (img) openLightbox(img);
    });
  });

})();


