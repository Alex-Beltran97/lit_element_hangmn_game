import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js'

// styles
import styles from './co-section-styles';

// Components
import '../../components/co-key-row/co-key-row';

@customElement('co-section')
export class CoSection extends LitElement {
  static styles = [ styles ];

  @property({ type: String, attribute: false })
    firstKeyRow: string[] = ["Q", "W", "E", "R","T", "Y", "U", "I", "O", "P"];

  @property({ type: String, attribute: false })
    secondKeyRow: string[] = ["A", "S", "D", "F","G", "H", "J", "K", "L", "Ñ"];

  @property({ type: String, attribute: false })
    thirdKeyRow: string[] = ["Z", "X", "C", "V","B", "N", "M"];
  
  @property({ type: String, attribute: false })
    secretKey: string[] = ["P","E","P","E"];
  
  @property({ type: String, attribute: false })
    answer: string[] = [];

  @property({ type: Number, attribute: false })
    counterImg: number = 0;

    constructor() {
      super();

      this._generateGaps(this.secretKey);

      this.addEventListener("handle-counter",this._setWrongAnswer);
    };

  render() {

    const { 
      answer,
      _setLetters,
      firstKeyRow,
      secondKeyRow,
      thirdKeyRow,
      counterImg
    } = this;

    return html `
      <section class="container">
        <figure class="img">
          <img src="./src/assets/images/${ counterImg }.png" alt="Game Image" />
        </figure>
        <div class="answer">
          ${ answer.map((letter:string) => html `
            <p>${letter}</p>
          `) }
        </div>
        <p class="final-result">YOU WIN 😁</p>
        <div class="keys">
          <co-key-row 
            letter="${ _setLetters(firstKeyRow) }"
          >
          </co-key-row>
          <co-key-row 
            letter="${ _setLetters(secondKeyRow) }"
          >
          </co-key-row>
          <co-key-row 
            letter="${ _setLetters(thirdKeyRow) }"
          >
          </co-key-row>
        </div>
      </section>
    `;
  }

  _setLetters(letters: string[] = []) : string {
    return JSON.stringify(letters);
  }

  _generateGaps(secretKey: string[]) {
    let gaps : string[] = [];

    for (let i = 0; i < secretKey.length; i++) {
      gaps.push("_");
    };

    this.answer = gaps;
  }

  _setWrongAnswer(e: CustomEvent) {

    const letterExists = this.secretKey.includes(e.detail);

    if(this.counterImg >= 0 && this.counterImg < 10 && !letterExists) {
      return this.counterImg++;
    };

    this._setCorrectAnswer(e.detail);
  }

  _setCorrectAnswer(letter: string) {
    // for (let letterIndex in this.secretKey) {
    //   if (this.secretKey[letterIndex] === letter) {
    //     this.answer[letterIndex] = letter;
    //   }
    // };
    this.answer[0] = letter;
  };
}

declare global {
  interface HTMLElementTagNameMap {
    "co-section": CoSection;
  }
}