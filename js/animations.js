/**
 * Animations Module
 * Handles AOS (Animate On Scroll) initialization and other animations
 */

class Animations {
  constructor() {
    this.init();
  }

  init() {
    document.addEventListener('DOMContentLoaded', () => {
      this.initializeAOS();
    });
  }

  initializeAOS() {
    // Check if AOS is loaded
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100,
      });
    }
  }

  // Add other animation methods here
  fadeIn(element, duration = 300) {
    element.style.opacity = 0;
    element.style.display = 'block';

    let opacity = 0;
    const timer = setInterval(() => {
      opacity += 50 / duration;
      if (opacity >= 1) {
        clearInterval(timer);
        opacity = 1;
      }
      element.style.opacity = opacity;
    }, 50);
  }

  fadeOut(element, duration = 300) {
    let opacity = 1;
    const timer = setInterval(() => {
      opacity -= 50 / duration;
      if (opacity <= 0) {
        clearInterval(timer);
        opacity = 0;
        element.style.display = 'none';
      }
      element.style.opacity = opacity;
    }, 50);
  }
}

// Initialize animations
const animations = new Animations();
