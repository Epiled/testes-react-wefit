import styled from "styled-components";
import ImageLoading from "../../assets/img/loader.png";

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

const Carregando = () => {
  return (
    <CarregandoBox>
      <CarregandoImage src={ImageLoading} />
    </CarregandoBox>
  )
}

export default Carregando;
