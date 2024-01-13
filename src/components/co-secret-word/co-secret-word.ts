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

  @property({ type: Array, attribute: false })
    answerPrompt: string[] = [];

  constructor() {
    super();
  }

  render() {
    return html `
      ${ this._handleSecretWord() }
    `;
  }

  _handleSecretWord() : TemplateResult<1>[] {
    this._answerIsCompleted();
    return this.answerPrompt.map( (gap: string) => html `
      <p 
        class="gap ${ gap !== "_" && `has-word` }"
        >${ gap }</p>
    `);
  };

  _answerIsCompleted() {
    const result = this.answer.join("") === this.answerPrompt.join("");
    this.dispatchEvent(new CustomEvent('final-resutl', { bubbles: true, composed: true, detail: result}));
  };

  _coveringSecretWord() : void {
    this.answerPrompt = this.answer.map( _ => "_");
  }

  _showLetter(detail : CustomEvent ) : void {
    const { letter, index } = detail.detail;
    const answerPrompt = [...this.answerPrompt];
    answerPrompt[index] = letter;
    this.answerPrompt = [...answerPrompt];
  }

  _getSecretWord(word: string) {
    this.answer = JSON.parse(word);
  };

  connectedCallback(): void {
    super.connectedCallback();
    this._getSecretWord(this.secretWord);

    this._coveringSecretWord();

    document.addEventListener("checkWord", (detail) =>{
      this._showLetter(detail as CustomEvent);
    });
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