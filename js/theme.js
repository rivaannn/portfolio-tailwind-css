/**
 * Theme Management Module
 * Handles dark mode toggle and theme persistence
 */

class ThemeManager {
  constructor() {
    this.darkToggle = null;
    this.html = document.querySelector('html');
    this.init();
  }

  init() {
    // Initialize theme from localStorage or system preference
    this.initializeTheme();

    // Setup dark mode toggle when DOM is ready
    document.addEventListener('DOMContentLoaded', () => {
      this.setupDarkModeToggle();
    });
  }

  initializeTheme() {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      this.html.classList.add('dark');
    } else {
      this.html.classList.remove('dark');
    }
  }
  setupDarkModeToggle() {
    this.darkToggle = document.querySelector('#theme-toggle');

    if (this.darkToggle) {
      this.darkToggle.addEventListener('click', () => {
        if (this.html.classList.contains('dark')) {
          this.html.classList.remove('dark');
          localStorage.theme = 'light';
        } else {
          this.html.classList.add('dark');
          localStorage.theme = 'dark';
        }
      });
    }
  }
}

// Initialize theme manager
const themeManager = new ThemeManager();
