import { css } from 'lit';

export default css `
  :host { 
    display: block;
  }

  .key {
    display: flex;
    width: 1.563rem;
    height: 1.563rem;
    color: white;
    background-color: var(--primary-color);
    margin: 0;
    margin-top: 0.438rem;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    cursor: pointer;
  }

  .key:hover {
    background-color: var(--primary-color-hover);
  }
  
`;