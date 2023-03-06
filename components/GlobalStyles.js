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
        font-family: PTSans;
        position: relative;
    }

    :root {
        --lightgray: #f4f4f8;
        --darkgray: #e6e6ea;
        --yellow: #fed766;
        --blue: #2ab7ca;
        --red: #fe4a49;
    }

    * {
        box-sizing: border-box;
    }

    @font-face {
        font-family: PTSans;
        src: url("/fonts/PTSans-Regular.ttf") format("truetype");
    }
`;

export default GlobalStyles;
