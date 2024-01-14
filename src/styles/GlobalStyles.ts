import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: #fdffff;
    color: #333;
    overflow-y: scroll;
  }

  button {
    border: none;
    background: transparent;
    outline: none;
    cursor: pointer;
  }

  a {
    cursor: pointer;
  }

  svg {
    fill: #333;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: #ebffe9;
    border-radius: 5px;
    margin-top: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #97f45c;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #cbffaa;
  }
  
`;

export default GlobalStyles;
