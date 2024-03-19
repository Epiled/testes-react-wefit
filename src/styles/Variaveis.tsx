import { createGlobalStyle } from "styled-components";

const Variaveis: React.FC = createGlobalStyle`
  :root {
    --lighter: #FFFFFF;
    --darker: #000000;

    --color-main: #6A00FF;
    --color-secondary: #FFC900;
    --color-black-60: #00000099;

    --color-btn-main: #009EDD;
    --color-btn-main-hover: #0073A1;
    --color-btn-second: #039B00; 
    --color-btn-second-active: #038b00;

    --color-txt: #2F2E41;
    --color-txt-alt: #999999;

    --color-border: #D9D9D9;
  }
`

export default Variaveis;