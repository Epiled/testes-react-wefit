import styled from "styled-components";
import ImageLoading from "../../assets/img/loader.png";
import { dimenssoesImagem } from "../../utils/dimenssoesImagem";

const CarregandoBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

const CarregandoImage = styled.img`
  width: 8.3rem;
  height: 8.3rem;
  animation: rotate-center 1s infinite linear;
`

const Carregando = ({ altText = "Carregando..."}) => {
  const {width, height} = dimenssoesImagem(ImageLoading);

  return (
    <CarregandoBox>
      <CarregandoImage src={ImageLoading} alt={altText} width={width} height={height} />
    </CarregandoBox>
  )
}

export default Carregando;
