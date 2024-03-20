import styled from "styled-components"
import ImageNotFound from "../../assets/img/recarregar-pagina.png";
import ImageCompra from "../../assets/img/compra-realizada.png";

import Button from "../Button";
import { useNavigate } from "react-router-dom";
import { IFeedBack } from "../../interfaces/IFeedBack";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;
  padding: 6.4rem;
  background-color: var(--lighter);
  border-radius: .4rem;
`

const Titulo = styled.h2`
  color: var(--color-txt);
  font-size: 2rem;
  text-align: center;
`

const Moldura = styled.div`
  border-bottom: .1rem solid var(--color-border-alt);
  max-width: 44.7rem;
  width: 100%;
  text-align: center;
`

const ImageNot = styled.img`
  width: 17.8rem;
`

const ImageComprar = styled.img`
    width: 23.8rem;

  @media screen and (min-width: 1080px) {
    width: 29.5rem;
  }
`

const FeedBack = ({ tipo }: IFeedBack) => {
  const navigate = useNavigate();

  return (
    <Container>
      <Titulo>
        {tipo === 'compra' ? 'Compra realizada com sucesso!' : 'Parece que não há nada por aqui :('}
      </Titulo>

      {tipo === 'compra' ?
        <ImageComprar src={ImageCompra} />
        :
        <Moldura>
          <ImageNot src={ImageNotFound} />
        </Moldura>}
      <Button
        text={tipo === 'compra' ? 'Voltar' : 'Recarregar página'}
        $transform={tipo === 'compra' ? 'uppercase' : 'none'}
        $minHeight={4}
        onClick={() => navigate('/')}
      />
    </Container>
  )
}

export default FeedBack;