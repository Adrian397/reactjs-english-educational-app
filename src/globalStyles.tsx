import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,*::before,*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Rubik", sans-serif;
}

html{
   scroll-behavior: smooth;
}

body{
    background-color: rgb(251, 248, 255);
}
`;

export default GlobalStyle;
