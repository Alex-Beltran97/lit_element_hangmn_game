import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js'

// Styles
import styles from './co-key-styles';

// Context
import ContextService from '../../context/context-service';

@customElement('co-key')
export class CoKey extends LitElement {
  static styles = [ styles ];

  @property({ type: String, attribute: "letter-key" })
    letter: string = "";

  @property({ type: ContextService, attribute: false})
    contextService: ContextService = ContextService.getInstance();

  render() {
    return html `
      <p class="key" @click="${ () => this._wordIterator(this.letter) }">
        <span>${ this.letter }</span>
      </p>
    `;
  }

  _wordIterator(word: string) {
    const secretWord = this.contextService.getWord;
    for (const i in secretWord) {
      if(secretWord[i] === word) {
        this._checkWord(word, i);
      };
    };
  };

  _checkWord(letter:string, index: string) {
    const detail = { letter, index: (index as unknown) as number };
    const customEvent = new CustomEvent("checkWord", {composed: true, bubbles: true, detail});
    document.dispatchEvent(customEvent);
  };

}

declare global {
  interface HTMLElementTagNameMap {
    "co-key": CoKey;
  }
}