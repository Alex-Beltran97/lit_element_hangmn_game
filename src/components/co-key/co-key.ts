import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js'

// Styles
import styles from './co-key-styles';

@customElement('co-key')
export class CoKey extends LitElement {
  static styles = [ styles ];

  @property({ type: String, attribute: "letter-key" })
    letter: string = "";

  render() {
    return html `
      <p class="key">
        <span>${ this.letter }</span>
      </p>
    `;
  }

}

declare global {
  interface HTMLElementTagNameMap {
    "co-key": CoKey;
  }
}