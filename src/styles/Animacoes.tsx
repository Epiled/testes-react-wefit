import { createGlobalStyle } from "styled-components";

const Animacoes: React.FC = createGlobalStyle`
  @keyframes rotate-center {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`

export default Animacoes;