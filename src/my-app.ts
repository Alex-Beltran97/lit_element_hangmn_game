import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js'

// Components
import './page/co-section/co-section';
import './page/co-footer/co-footer';

@customElement('my-app')
export class MyApp extends LitElement {
  static styles = [ css 
    `
      .title {
        font-size: 1.313rem;
        text-align: center;
        margin: 2.688rem 0;
      }
    `
  ];
  
  render() {
    return html `
      <h1 class="title">The Hangman Game</h1>
      <co-section></co-section>
      <co-footer></co-footer>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-app": MyApp;
  }
}