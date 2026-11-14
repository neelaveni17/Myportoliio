// script.js
// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;

function setTheme(dark) {
  if (dark) {
    root.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️'; // sun icon for light mode
  } else {
    root.setAttribute('data-theme', 'light');
    themeToggle.textContent = '🌙'; // moon icon for dark mode
  }
  localStorage.setItem('darkMode', dark ? 'true' : 'false');
}
// Initialize theme based on localStorage; default to dark if not set
const saved = localStorage.getItem('darkMode');
if (saved === null) {
  setTheme(true);
} else {
  setTheme(saved === 'true');
}

themeToggle.addEventListener('click', () => {
  const isDark = root.getAttribute('data-theme') === 'dark';
  setTheme(!isDark);
});

// Mobile navigation toggle
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Simple contact form validation
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.elements['name'].value.trim();
  const email = form.elements['email'].value.trim();
  const message = form.elements['message'].value.trim();
  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }
  // Basic email pattern check
  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }
  alert('Message sent! (This is a demo, no server processing.)');
  form.reset();
});

