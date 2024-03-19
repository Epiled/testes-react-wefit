import Button from "../components/Button";
import MovieCard from "../components/MovieCard";
import Header from "../components/Header";
import CardContent from "../components/CardContent";

const Home = () => {
  return (
    <>
      <Header />
      <CardContent />
      <MovieCard />
      <Button text="Adicionar ao carrinho" icon={true} />
    </>
  )
}

export default Home;