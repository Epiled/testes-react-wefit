import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 0 2.4rem;

  @media screen and (min-width: 1080px) {
    padding: 0 1.6rem;
  }
`

const ContainerPadrao = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}

export default ContainerPadrao;