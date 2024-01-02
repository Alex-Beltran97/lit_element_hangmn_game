import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js'

// styles
import styles from './co-section-styles';

// Components
import '../../components/co-key-row/co-key-row';
import '../../components/co-secret-word/co-secret-word';

@customElement('co-section')
export class CoSection extends LitElement {
  static styles = [ styles ];

  @property({ type: String, attribute: false })
    firstKeyRow: string[] = ["Q", "W", "E", "R","T", "Y", "U", "I", "O", "P"];

  @property({ type: String, attribute: false })
    secondKeyRow: string[] = ["A", "S", "D", "F","G", "H", "J", "K", "L", "Ñ"];

  @property({ type: String, attribute: false })
    thirdKeyRow: string[] = ["Z", "X", "C", "V","B", "N", "M"];

  @property({ type: Array, attribute: false })
    answer: string[] = ["Q", "U", "E", "S", "O"];

  constructor() {
    super();

  };

  render() {

    return html `
      <section class="container">
        <figure class="img">
          <img src="./assets/images/10.png" alt="Game Image" />
        </figure>
        <div class="answer">
          <co-secret-word secret-word="${this._sendingSecretWord()}"></co-secret-word>
        </div>
        <p class="final-result">YOU WIN 😁</p>
        <div class="keys">
          <co-key-row 
            letter="${ this._setLetters(this.firstKeyRow) }"
          >
          </co-key-row>
          <co-key-row 
            letter="${ this._setLetters(this.secondKeyRow) }"
          >
          </co-key-row>
          <co-key-row 
            letter="${ this._setLetters(this.thirdKeyRow) }"
          >
          </co-key-row>
        </div>
      </section>
    `;
  }

  _setLetters(letters: string[] = []) : string {
    return JSON.stringify(letters);
  }

  _sendingSecretWord() : string {
    return JSON.stringify(this.answer);
  }

}

declare global {
  interface HTMLElementTagNameMap {
    "co-section": CoSection;
  }
}