import React from 'react';
import './Feature.css'

const Feature = () => {
    return (
        <div>
            <div className="featured-movies">
                <h2 id="featured-movies" className="moviesection-title">Featured Movies</h2>
                <div className="movie-card">
                    {[
                        { src: "src/images/wildrobotposter.jpeg", title: "The Wild Robot" },
                        { src: "src/images/dune2poster.png", title: "Dune: Part Two" },
                        { src: "src/images/pacificrimposter.png", title: "Pacific Rim Uprising" },
                        { src: "src/images/batmanposter.png", title: "Batman" },
                        { src: "src/images/titanicposter.png", title: "Titanic" },
                        { src: "src/images/walleposter.png", title: "WALL-E" }
                    ].map((movie, index) => (
                        <div className="movie-container" key={index}>
                            <button className="rent-button">Rent</button>
                            <img className="movie-img" src={movie.src} alt="movie image" />
                            <h3 className="movie-title">{movie.title}</h3>
                        </div>
                    ))}
                </div>
            </div>

            <div className="popular-shows">
                <h2 id="popular-shows" className="moviesection-title">Popular Shows</h2>
                <div className="movie-card">
                    {[
                        { src: "src/images/brooklyn99poster.png", title: "Brooklyn Nine-Nine" },
                        { src: "src/images/gameofthronesposter.png", title: "Game of Thrones" },
                        { src: "src/images/lethalweaponposter.png", title: "Lethal Weapon" },
                        { src: "src/images/strangerthingsposter.png", title: "Stranger Things" },
                        { src: "src/images/peakyblindersposter.png", title: "Peaky Blinders" },
                        { src: "src/images/thelastofusposter.png", title: "The Last of Us" }
                    ].map((show, index) => (
                        <div className="movie-container" key={index}>
                            <button className="rent-button">Rent</button>
                            <img className="movie-img" src={show.src} alt="movie image" />
                            <h3 className="movie-title">{show.title}</h3>
                        </div>
                    ))}
                </div>
            </div>

            <div className="popular-movies">
                <h2 id="popular-movies" className="moviesection-title">Popular Movies</h2>
                <div className="movie-card">
                    {[
                        { src: "src/images/barbieposter.png", title: "Barbie" },
                        { src: "src/images/jurassicworldposter.png", title: "Jurassic World: Fallen Kingdom" },
                        { src: "src/images/suzumeposter.png", title: "Suzume" },
                        { src: "src/images/500daysofsummerposter.png", title: "500 Days of Summer" },
                        { src: "src/images/beemovieposter.png", title: "The Bee Movie" },
                        { src: "src/images/deadpoolwolverineposter.png", title: "Deadpool & Wolverine" }
                    ].map((movie, index) => (
                        <div className="movie-container" key={index}>
                            <button className="rent-button">Rent</button>
                            <img className="movie-img" src={movie.src} alt="movie image" />
                            <h3 className="movie-title">{movie.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Feature;
