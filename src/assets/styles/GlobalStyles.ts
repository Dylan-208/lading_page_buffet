import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }

  html {
    scroll-behavior: smooth;
    
  }

  body {
    background-color: #fffaf5;
    color: #1a1a1a;
    -webkit-font-smoothing: antialiased;
    
  }

  :root {
    --cor-primary: #fcb746;
  }
`;
export default GlobalStyles;
