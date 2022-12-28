import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
        background-color: #f4f4f8;
        height: 100vh;
    }

    * {
        box-sizing: border-box;
    }

    @font-face {
        font-family: AppleGothic;
        src: url("/fonts/PTSans-Regular.ttf") format("truetype");
    }
`;

export default GlobalStyles;
