import DrawerInitiator from '../utils/drawer-Initiator';
import DarkMode from '../utils/dark-mode';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({
    button, content, drawer, hero, toggle, currentTheme,
  }) {
    this._button = button;
    this._content = content;
    this._drawer = drawer;
    this._hero = hero;
    this._toggle = toggle;
    this._currentTheme = currentTheme;

    this._initialAppShell();
    this._initialDarkMode();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      content: this._content,
      drawer: this._drawer,
      hero: this._hero,
    });
  }

  _initialDarkMode() {
    // eslint-disable-next-line no-undef
    DarkMode.init({
      toggle: this._toggle,
      currentTheme: this._currentTheme,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#main-content').focus();
    });
  }
}

export default App;
