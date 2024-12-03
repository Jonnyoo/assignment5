import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Genres from "../Components/Genres.jsx"
import Header from "../Components/Header.jsx"
import Hero from "../Components/Hero.jsx"
import Footer from "../Components/Footer.jsx"
import "./HomeView.css";
import GenreView from "./GenreView.jsx";

function HomeView() {
  const [movies, setMovies] = useState([]);
  const genres = [
    {
      genre: "Action",
      id: 28
    },
    {
      genre: "Family",
      id: 10751,
    },
    {
      genre: "Science Fiction",
      id: 878
    }
  ]

  function shuffle(array) {
    let currentIndex = array.length;

    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }

  useEffect(() => {
    (async function getMovies() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_TMDB_KEY}`
      );
      const threeMovies = [];
      shuffle(response.data.results);
      threeMovies.push(response.data.results.pop());
      threeMovies.push(response.data.results.pop());
      threeMovies.push(response.data.results.pop());
      setMovies(threeMovies);
    })();
  }, []);
  console.log("working");

  return (
    <div className="hero">
    <Header />
    <Hero />
    <GenreView />
      <Genres genresList={genres} />
      <Footer />
    </div>
  )
}

export default HomeView;