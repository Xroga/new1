// Mobile Nav Toggle
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Close nav on link click (mobile)
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });

  // Billing Toggle
  const billingToggle = document.getElementById('billingToggle');
  const monthlyLabel = document.getElementById('monthlyLabel');
  const annualLabel = document.getElementById('annualLabel');
  const starterPrice = document.getElementById('starterPrice');
  const proPrice = document.getElementById('proPrice');

  billingToggle.addEventListener('change', function() {
    if (this.checked) {
      // Annual pricing (20% off)
      starterPrice.textContent = Math.round(29 * 0.8 * 12 / 12); // $23.2/mo
      proPrice.textContent = Math.round(79 * 0.8 * 12 / 12); // $63.2/mo
      monthlyLabel.classList.remove('active');
      annualLabel.classList.add('active');
    } else {
      starterPrice.textContent = '29';
      proPrice.textContent = '79';
      monthlyLabel.classList.add('active');
      annualLabel.classList.remove('active');
    }
  });

  // Smooth Scroll for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Contact Form Validation
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.querySelector('input[type="text"]');
    const email = this.querySelector('input[type="email"]');
    
    if (!name.value.trim() || !email.value.trim()) {
      alert('Please fill in your name and email.');
      return;
    }

    if (!email.value.includes('@') || !email.value.includes('.')) {
      alert('Please enter a valid email address.');
      return;
    }

    alert('Thank you! We will get back to you shortly.');
    this.reset();
  });
});