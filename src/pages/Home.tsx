import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import ListaMovies from "../components/ListaMovies";

const Home = () => {
  const navigate = useNavigate();

  return (
    <main>
      <ListaMovies />
      <Button 
          text="Voltar" 
          transform="uppercase" 
          onClick={() => navigate('/compra-realizada')} 
          />
    </main>
  )
}

export default Home;