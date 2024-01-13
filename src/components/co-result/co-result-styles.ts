import { css } from 'lit';

export default css `
  :host {
    display: block;
  }

  .winner {
    color: var(--primary-color);
  }

  .looser {
    color: var(--secondary-color);
  }
`;