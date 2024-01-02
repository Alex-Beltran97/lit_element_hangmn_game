import { css } from 'lit';

export default css `
  :host {
    display: block;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .img {
    width: 12.5rem;
    height: 13.142rem;
    margin: 0;
    padding-right: 1.375rem;
  }

  .img img {
    width: 100%;
  }

  .answer {
    display: flex;
    margin-top: 1.5rem;
    text-align: center;
  }
  
  .answer p {
    font-size: 1.875rem;
    margin: 0 0.469rem;   
    text-decoration: underline;
  }

  .final-result {
    color: red;
  }

  .keys {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2.531rem;
  }
  
`;