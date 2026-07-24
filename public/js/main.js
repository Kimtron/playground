// BonBon - Master JavaScript Utilities
// Bootstrap + Tailwind + Vite/Rollup Super Library
// Created by Kimberley Hale

const BonBonUtils = {
  // Bootstrap utilities
  initTooltips() {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    return tooltipTriggerList.map(el => new bootstrap.Tooltip(el));
  },
  
  initPopovers() {
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    return popoverTriggerList.map(el => new bootstrap.Popover(el));
  },

  // Vite dev server detection
  isDevServer() {
    return import.meta.env.DEV;
  },

  getMode() {
    return import.meta.env.MODE;
  }
};

// Smooth Scroll Handler
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// Form Handler
function handleContactForm() {
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
      };

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        
        const result = await response.json();
        if (result.success) {
          alert('✨ Message sent by BonBon!');
          form.reset();
        }
      } catch (error) {
        console.error('BonBon Error:', error);
        alert('Error sending message. Please try again.');
      }
    });
  }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', function() {
  console.log('🍭 BonBon Initializing...');
  console.log(`📦 Mode: ${BonBonUtils.getMode()}`);
  
  BonBonUtils.initTooltips();
  BonBonUtils.initPopovers();
  initSmoothScroll();
  handleContactForm();
  
  console.log('✅ BonBon fully loaded!');
});

export { BonBonUtils, initSmoothScroll, handleContactForm };
