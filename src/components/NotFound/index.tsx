import styled from "styled-components"
import ImageNotFound from "../../assets/img/recarregar-pagina.png";
import Button from "../Button";

const Container = styled.div`
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
`

const Moldura = styled.div`
  border-bottom: .1rem solid var(--color-border-alt);
  max-width: 44.7rem;
  width: 100%;
  text-align: center;
`

const Image = styled.img`
  width: 17.8rem;
`

const NotFound = () => {
  return (
    <Container>
      <Titulo>
        Parece que não há nada por aqui :(
      </Titulo>

      <Moldura>
        <Image src={ImageNotFound} />
      </Moldura>

      <Button text="Recarregar página" />
    </Container>
  )
}

export default NotFound;