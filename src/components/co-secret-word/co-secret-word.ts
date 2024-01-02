import { LitElement, TemplateResult, html } from 'lit';
import { customElement, property} from 'lit/decorators.js';

// styles
import styles from './co-secret-word-styles';

@customElement('co-secret-word')
export class CoSecretWord extends LitElement {
  static styles = [ styles ];

  @property({ type: String, attribute: "secret-word" })
    secretWord: string = "";

  @property({ type: Array, attribute: false })
    answer: string[] = [];

  constructor() {
    super();
  }

  render() {
    return html `
      ${ this._handleSecretWord() }
    `;
  }

  _handleSecretWord() : TemplateResult<1>[] {
    return this._coveringSecretWord().map( (gap: string) => html `
      <p class="gap ${ gap !== "_" && `has-word` }">${ gap }</p>
    `);
  };

  _coveringSecretWord() : string[]{
    return this.answer.map( _ => "_");
  }

  _getSecretWord(word: string) {
    this.answer = JSON.parse(word);
  };

  connectedCallback(): void {
    super.connectedCallback();
    this._getSecretWord(this.secretWord);
  }
  
  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.answer = [];
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'co-secret-word': CoSecretWord;
  }
}