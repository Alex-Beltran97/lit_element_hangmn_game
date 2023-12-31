import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'

import styles from './co-footer-styles';

@customElement('co-footer')
export class CoFooter extends LitElement {
  static styles = [ styles ];

  render() {
    return html `
      <footer class="footer"}>
        <hr />
        <p>Pedro Alexander Beltran Hernandez @ 2023 - Todos los derechos reservados</p>
      </footer>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "co-footer": CoFooter;
  }
}
