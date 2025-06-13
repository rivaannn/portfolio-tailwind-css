/**
 * Navigation Module
 * Handles mobile menu, navbar scroll effects, and active link highlighting
 */

class Navigation {
  constructor() {
    this.hamburger = null;
    this.navMenu = null;
    this.navbar = null;
    this.navLinks = [];
    this.sections = [];

    this.init();
  }

  init() {
    document.addEventListener('DOMContentLoaded', () => {
      this.setupElements();
      this.setupHamburgerMenu();
      this.setupNavbarScrollEffect();
      this.setupActiveNavigation();
      this.setupSmoothScrolling();
    });
  }

  setupElements() {
    this.hamburger = document.querySelector('#hamburger');
    this.navMenu = document.querySelector('#nav-menu');
    this.navbar = document.querySelector('#navbar');
    this.navLinks = document.querySelectorAll('.nav-link');
    this.sections = document.querySelectorAll('section[id]');
  }

  setupHamburgerMenu() {
    if (this.hamburger && this.navMenu) {
      this.hamburger.addEventListener('click', () => {
        this.hamburger.classList.toggle('hamburger-active');
        this.navMenu.classList.toggle('hidden');
      });

      // Close mobile menu when clicking outside
      window.addEventListener('click', (e) => {
        if (
          !this.hamburger.contains(e.target) &&
          !this.navMenu.contains(e.target)
        ) {
          this.hamburger.classList.remove('hamburger-active');
          this.navMenu.classList.add('hidden');
        }
      });
    }
  }

  setupNavbarScrollEffect() {
    if (this.navbar) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
          this.navbar.classList.add('navbar-scrolled');
        } else {
          this.navbar.classList.remove('navbar-scrolled');
        }
      });
    }
  }

  setupActiveNavigation() {
    if (this.sections.length > 0 && this.navLinks.length > 0) {
      window.addEventListener('scroll', () => {
        let current = '';
        this.sections.forEach((section) => {
          const sectionTop = section.offsetTop - 200;
          if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
          }
        });

        this.navLinks.forEach((link) => {
          link.classList.remove('text-primary', 'dark:text-sky-400');
          if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('text-primary', 'dark:text-sky-400');
          }
        });
      });
    }
  }

  setupSmoothScrolling() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      });
    });
  }
}

// Initialize navigation
const navigation = new Navigation();
