import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js'

// Styles
import styles from './co-result-styles';

@customElement('co-result')
export class CoResult extends LitElement {
  static styles = [ styles ];

  @property({ type: Boolean }) 
    isWinner: boolean = false;

  render() {
    return html `
      <p class="${ this.isWinner ? "winner" : "looser"}">YOU ${ this.isWinner ? "WIN 😁" : "LOOSE 😭" }</p>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "co-result": CoResult;
  }
}
