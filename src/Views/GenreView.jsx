import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./GenreView.css";

const genres = [
  { genre: "Science Fiction", id: 878 },
  { genre: "Thriller", id: 53 },
  { genre: "Adventure", id: 12 },
  { genre: "Family", id: 10751 },
  { genre: "Animation", id: 16 },
  { genre: "Action", id: 28 },
  { genre: "Drama", id: 18 },
  { genre: "Fantasy", id: 14 },
  { genre: "Horror", id: 27 },
  { genre: "Comedy", id: 35 }
];

function GenreView() {
  const { genre_id } = useParams();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const selectedGenre = genres.find(genre => genre.id === parseInt(genre_id));
  const genreName = selectedGenre ? selectedGenre.genre : "Movies in Genre";

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&with_genres=${genre_id}&page=${page}`
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }
    fetchMovies();
  }, [genre_id, page]);

  return (
    <div className="hero">
      <h2>{genreName}</h2>
      <div className="genre-view-container">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id} className="genre-view-item">
              <Link to={`/movies/details/${movie.id}`}>
                {movie.poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={movie.title}
                    className="genre-view-image"
                  />
                ) : (
                  <div className="no-image">No Image Available</div>
                )}
              </Link>
            </div>
          ))
        ) : (
          <p>No movies available for this genre.</p>
        )}
      </div>
    </div>
  );
}

export default GenreView;