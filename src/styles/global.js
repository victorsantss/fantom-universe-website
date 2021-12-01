import { createGlobalStyle } from "styled-components";
import backgroundImg from "../assets/background.jpg";

export const GlobalStyle = createGlobalStyle`
:root {
    --blue: #4284A0;
    --blue-light: #6EAAC4;

    --text-title: #7199BD;
    --text-subtitle: #B9C0E4;
    --text: #C7C7C7;
  }

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  max-height: 100vh;
  overflow: auto;
}


html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media(max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
    background-image: url(${backgroundImg});
    background-repeat: no-repeat;
    background-size: 100%;
  }

  body, input, textarea, button {
    font-family: 'Space Mono', monospace;
    font-weight: 400;
    text-shadow: 1px 1px 2px black;
  }

  button { 
    cursor: pointer;
  }

`;
