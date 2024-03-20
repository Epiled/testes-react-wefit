import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 1.6rem;
  margin-bottom: 4rem;
`

const ContainerPadrao = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}

export default ContainerPadrao;