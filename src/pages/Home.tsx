import Button from "../components/Button";
import MovieCard from "../components/MovieCard";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <MovieCard />
      <Button text="Adicionar ao carrinho" icon={true} />
    </>
  )
}

export default Home;