import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js'

import styles from './co-key-row-styles';

// Components
import '../co-key/co-key';

@customElement('co-key-row')
export class CoKeyRow extends LitElement {
  static styles = [ styles ];

  @property({ type: String, attribute: "letter" })
    letters: string = "";
    
  render() {
    return html `
      ${ this._getLetters().map((letter: string) => html `
        <co-key letter-key="${ letter }"></co-key>
      `) }
    `;
  }

  _getLetters() : string[] {
    return JSON.parse(this.letters);
  };
}

declare global {
  interface HTMLElementTagNameMap {
    "co-key-row": CoKeyRow;
  }
}