class FooterCustom extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer tabindex="0">
    <ul>
      <li>
        Copyright © 2022 - Andi Restaurant
      </li>
      <li>
        Submission 2 with <i title="love" class="fa fa-heart"></i> by
        Andi
      </li>
    </ul>
  </footer>
        `;
  }
}

customElements.define('footer-custom', FooterCustom);
