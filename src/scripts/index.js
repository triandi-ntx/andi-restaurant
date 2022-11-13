import 'regenerator-runtime'; /* for async await transpile */
import './components/nav-bar';
import './components/hero';
import './components/footer-custom';
import '../styles/main.css';
import '../styles/root.css';
import '../styles/footer.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';

// toggle
const app = new App({
  button: document.querySelector('#menu'),
  content: document.querySelector('main'),
  drawer: document.querySelector('#drawer'),
  hero: document.querySelector('.hero'),
  toggle: document.querySelector('#dark-mode'),
  currentTheme: localStorage.getItem('theme'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
