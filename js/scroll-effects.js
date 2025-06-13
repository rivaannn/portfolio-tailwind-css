/**
 * Scroll Effects Module
 * Handles back to top button and other scroll-based interactions
 */

class ScrollEffects {
  constructor() {
    this.backToTopButton = null;
    this.init();
  }

  init() {
    document.addEventListener('DOMContentLoaded', () => {
      this.setupBackToTop();
    });
  }

  setupBackToTop() {
    this.backToTopButton = document.querySelector('#back-to-top');

    if (this.backToTopButton) {
      // Show/hide back to top button based on scroll position
      window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
          this.backToTopButton.classList.add('opacity-100', 'visible');
          this.backToTopButton.classList.remove('opacity-0', 'invisible');
        } else {
          this.backToTopButton.classList.add('opacity-0', 'invisible');
          this.backToTopButton.classList.remove('opacity-100', 'visible');
        }
      });

      // Smooth scroll to top when clicked
      this.backToTopButton.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      });
    }
  }
}

// Initialize scroll effects
const scrollEffects = new ScrollEffects();
