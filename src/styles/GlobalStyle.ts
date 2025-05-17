import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
/* Reset de margem, padding e box-sizing */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

/* Configurações globais */
html {
  font-size: 16px;
  line-height: 1.5;
  scroll-behavior: smooth;
}

body {
  color: #333;
  background-color: #fff;
  position: fixed;
  -webkit-font-smoothing: antialiased;
}

img, video {
  max-width: 100%;
  height: auto;
}

/* Define uma altura mínima para preencher a viewport */
html, body, #root {
  width: 100%;
  height: 100%;
}

h1, h2, h3, h4, h5, h6 {
  font-family: "Grandstander Variable", sans-serif;
  
}

`;

export default GlobalStyle;
