import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html{
    font-size: 62.5%;
  }
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  body {
    box-sizing: border-box;
    font-family: 'Orbitron', sans-serif;
    font-size: 1.6rem;
    color: #fff;
  }
  h1 {
    font-size: 8rem
  }
  h2 {
    font-size: 3.2rem;
  }
  h3 {
    font-size:2.4rem;
  }
  h4 {
    font-size: 1.8rem;
  }
  img {
    display: block;
  }
  ul {
    padding: 0;
  }
  li {
    list-style: none;
  }
  a{
    display:block;
    text-decoration: none;
    color:inherit;
  }
  `;
