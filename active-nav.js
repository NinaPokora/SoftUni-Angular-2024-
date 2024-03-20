// This script assumes your links are relative and do not include the domain name.

document.addEventListener('DOMContentLoaded', (event) => {
  const navLinks = document.querySelectorAll('.nav-links a');
  const currentUrl = window.location.pathname;

  navLinks.forEach((link) => {
    if (link.getAttribute('href') === currentUrl) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

