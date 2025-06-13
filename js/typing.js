/**
 * Typing Animation Module
 * Handles the typing effect for the hero section
 */

class TypingAnimation {
  constructor(options = {}) {
    this.typedTextSpan = null;
    this.cursorSpan = null;
    this.textArray = options.textArray || [
      'Web Developer',
      'Cloud Computing Enthusiast',
      'Full Stack Developer',
      'UI/UX Designer',
    ];
    this.typingDelay = options.typingDelay || 100;
    this.erasingDelay = options.erasingDelay || 50;
    this.newTextDelay = options.newTextDelay || 2000;
    this.textArrayIndex = 0;
    this.charIndex = 0;

    this.init();
  }

  init() {
    document.addEventListener('DOMContentLoaded', () => {
      this.setupElements();
      this.startTyping();
    });
  }

  setupElements() {
    this.typedTextSpan = document.querySelector('.typed-text');
    this.cursorSpan = document.querySelector('.cursor');
  }

  type() {
    if (this.charIndex < this.textArray[this.textArrayIndex].length) {
      if (!this.cursorSpan.classList.contains('typing')) {
        this.cursorSpan.classList.add('typing');
      }
      this.typedTextSpan.textContent += this.textArray[
        this.textArrayIndex
      ].charAt(this.charIndex);
      this.charIndex++;
      setTimeout(() => this.type(), this.typingDelay);
    } else {
      this.cursorSpan.classList.remove('typing');
      setTimeout(() => this.erase(), this.newTextDelay);
    }
  }

  erase() {
    if (this.charIndex > 0) {
      if (!this.cursorSpan.classList.contains('typing')) {
        this.cursorSpan.classList.add('typing');
      }
      this.typedTextSpan.textContent = this.textArray[
        this.textArrayIndex
      ].substring(0, this.charIndex - 1);
      this.charIndex--;
      setTimeout(() => this.erase(), this.erasingDelay);
    } else {
      this.cursorSpan.classList.remove('typing');
      this.textArrayIndex++;
      if (this.textArrayIndex >= this.textArray.length) {
        this.textArrayIndex = 0;
      }
      setTimeout(() => this.type(), this.typingDelay + 1100);
    }
  }

  startTyping() {
    if (this.typedTextSpan && this.cursorSpan && this.textArray.length) {
      setTimeout(() => this.type(), this.newTextDelay + 250);
    }
  }
}

// Initialize typing animation
const typingAnimation = new TypingAnimation();
