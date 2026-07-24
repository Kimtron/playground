// Main JavaScript utilities and Bootstrap initialization

// Bootstrap Utilities
const BSUtils = {
  initTooltips() {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    return tooltipTriggerList.map(el => new bootstrap.Tooltip(el));
  },
  
  initPopovers() {
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    return popoverTriggerList.map(el => new bootstrap.Popover(el));
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
          alert('Message sent successfully!');
          form.reset();
        }
      } catch (error) {
        console.error('Error sending message:', error);
        alert('Error sending message. Please try again.');
      }
    });
  }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', function() {
  console.log('🎨 Initializing Playground...');
  
  BSUtils.initTooltips();
  BSUtils.initPopovers();
  initSmoothScroll();
  handleContactForm();
  
  console.log('✅ Playground fully loaded!');
});

export { BSUtils, initSmoothScroll, handleContactForm };
