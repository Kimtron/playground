// BonBon - Super Library Entry Point
// Project by Kimberley Hale
// Where the treat is both, and one is the fallback
// Combines Vite and Rollup for maximum bundling flexibility

console.log('🍭 BonBon Library Initializing...');

// Bootstrap initialization
document.addEventListener('DOMContentLoaded', function() {
  console.log('✨ BonBon loaded successfully!');
  
  // Initialize Bootstrap components
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // Add smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

// Export BonBon API
const BonBon = {
  version: '1.0.0',
  bundler: 'Vite + Rollup',
  creator: 'Kimberley Hale',
  concept: 'Where the treat is both, and one is the fallback',
  initialized: true
};

export default BonBon;
