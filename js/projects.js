// PROJECT CARD GLOW EFFECT
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
  });
});

// PROJECTS SCROLL ANIMATION
const projectsObserver = new IntersectionObserver(
  entries => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = `${index * 0.15}s`;
        entry.target.classList.add('show');
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll('.project-card').forEach(card => {
  card.classList.add('hidden');
  projectsObserver.observe(card);
});
