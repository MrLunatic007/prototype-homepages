document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
  
    document.querySelectorAll('.page').forEach(page => {
      observer.observe(page);
    });
  
    // Easter egg functionality
    const easterEgg = document.querySelector('.easter-egg');
    const easterEggContent = document.querySelector('.easter-egg-content');
  
    easterEgg.addEventListener('click', () => {
      easterEggContent.classList.toggle('visible');
    });
  });
  
  