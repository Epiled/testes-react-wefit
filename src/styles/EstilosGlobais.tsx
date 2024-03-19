import Animacoes from "./Animacoes";
import ResetCSS from "./ResetCSS";
import Variaveis from "./Variaveis";

const EstilosGlobais: React.FC = () => {
  return <>
    <ResetCSS />
    <Animacoes />
    <Variaveis />
  </>;
}

export default EstilosGlobais;