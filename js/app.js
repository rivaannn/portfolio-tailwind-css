/**
 * Main Application Entry Point
 * Coordinates all modules and handles global app initialization
 */

class App {
  constructor() {
    this.modules = {
      theme: null,
      navigation: null,
      typing: null,
      scrollEffects: null,
      animations: null,
    };

    this.init();
  }

  init() {
    console.log('🚀 Portfolio App Initializing...');

    // Initialize modules
    this.loadModules();

    // Setup global event listeners
    this.setupGlobalEvents();

    console.log('✅ Portfolio App Initialized Successfully!');
  }

  loadModules() {
    // Modules are already initialized via their respective files
    // This method can be used for additional module coordination
    console.log('📦 Loading application modules...');
  }

  setupGlobalEvents() {
    // Global error handling
    window.addEventListener('error', (event) => {
      console.error('Global error caught:', event.error);
    });

    // Performance monitoring
    window.addEventListener('load', () => {
      const loadTime = performance.now();
      console.log(`⚡ Page loaded in ${Math.round(loadTime)}ms`);
    });
  }

  // Utility methods that can be used across the app
  utils = {
    debounce: (func, wait) => {
      let timeout;
      return function executedFunction(...args) {
        const later = () => {
          clearTimeout(timeout);
          func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    },

    throttle: (func, limit) => {
      let inThrottle;
      return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
          func.apply(context, args);
          inThrottle = true;
          setTimeout(() => (inThrottle = false), limit);
        }
      };
    },

    isMobile: () => {
      return window.innerWidth <= 768;
    },

    isTablet: () => {
      return window.innerWidth > 768 && window.innerWidth <= 1024;
    },

    isDesktop: () => {
      return window.innerWidth > 1024;
    },
  };
}

// Initialize the main application
const app = new App();

// Make app globally available for debugging
window.portfolioApp = app;
