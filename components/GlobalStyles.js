import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: Arial, Helvetica, sans-serif,
    }

    * {
        box-sizing: border-box;
    }

    @font-face {
        font-family: AppleGothic;
        src: url("/../../public/fonts/applegothic.ttf") format("truetype");
    }
`;

export default GlobalStyles;
