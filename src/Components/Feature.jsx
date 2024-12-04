import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Genres from "./Genres.jsx"
import './Feature.css'

const Feature = () => {
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
        },
        {
            genre: "Thriller",
            id: 53
        },
        {
            genre: "Adventure",
            id: 12
        },
        {
            genre: "Animation",
            id: 16
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
            const sixMovies = [];
            shuffle(response.data.results);
            sixMovies.push(response.data.results.pop());
            sixMovies.push(response.data.results.pop());
            sixMovies.push(response.data.results.pop());
            sixMovies.push(response.data.results.pop());
            sixMovies.push(response.data.results.pop());
            sixMovies.push(response.data.results.pop());
            setMovies(sixMovies);
        })();
    }, []);

    return (
        <div>
            <div className="featured-movies">
            <h2 id="featured-movies" className="moviesection-title">Now Playing</h2>
            <div className="movie-card">
                {movies.map((movie) => (
                    <div key={movie.id} className="movie-card" onClick={() => { loadMovie(movie.id) }}>
                        <div className="movie-container">
                            <button className="rent-button">Rent</button>
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                                className="movie-img"
                            />
                            <h3 className="movie-title">{movie.title}</h3>
                        </div>
                    </div>
                ))}
                </div>
            </div>
            {/* <Genres genresList={genres} /> */}
        </div>
    );
};

export default Feature;
