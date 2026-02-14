// SPLASH SCREEN
window.addEventListener("load", () => {
  const splash = document.getElementById("splash-screen");

  setTimeout(() => {
    splash.classList.add("fade-out");
    document.body.classList.add("loaded");

    setTimeout(() => {
      splash.remove();
    }, 800);
  }, 2500);
});

//  NAVBAR SCROLL
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// APPROACH SECTION ANIMATION
const steps = document.querySelectorAll('.approach-step');

const approachObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

steps.forEach(step => approachObserver.observe(step));

// wpp links
window.addEventListener("load", () => {
  const whatsappButtons = document.querySelectorAll(".whatsapp-link");

  const mensagem = encodeURIComponent(
    "Olá, Maria! Vi seu portfólio e gostaria de conversar sobre um projeto."
  );

  whatsappButtons.forEach(button => {
    button.href = `https://wa.me/31986409804?text=${mensagem}`;
  });
});

// menu responsivo
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const links = document.querySelectorAll('.nav-links a');

  if (toggle && navLinks) {
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navLinks.classList.toggle('active');
    });

    links.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });

    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !toggle.contains(e.target)) {
        navLinks.classList.remove('active');
      }
    });
  }
});