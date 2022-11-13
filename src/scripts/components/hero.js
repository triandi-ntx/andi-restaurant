class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="hero">
    <div tabindex="0" class="hero_inner">
        <h1 class="hero_title">Welcome To <span class="hero_bold">Andi Restaurant</h1>
        <p class="hero_tagline">Our restaurant not only serves delicious food but also serves refreshing drinks!</p>
        <a href="#main-content" class="hero_button">Read More</a>
    </div>
</div>
        `;
  }
}

customElements.define('hero-element', Hero);
