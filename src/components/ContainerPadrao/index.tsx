import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 0 1.6rem;
`

const ContainerPadrao = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}

export default ContainerPadrao;