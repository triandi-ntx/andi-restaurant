class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <header class="header">
    <a href="/">
        <h1 class="nav_logo">Andi Restaurant</h1>
    </a>
    <button class="menu" id="menu" aria-label="button menu dropdown on mobile">☰</button>
    <nav id="drawer" class="nav">
        <ul class="nav_list">
            <li class="nav_item"><a href="/">Home</a></li>
            <li class="nav_item"><a href="#/favorite">Favorite</a></li>
            <li class="nav_item"><a href="https://blog-triandi.me/" target="_blank" rel="noopener">About</a></li>
            <li class="nav_item"><button tabindex="0" aria-label="button for toggle light or dark mode" type="button" id="dark-mode" class="light">
            <i class="fas fa-moon"></i> </button> </li>
        </ul>
    </nav>
</header>
        `;
  }
}

customElements.define('nav-bar', NavBar);
