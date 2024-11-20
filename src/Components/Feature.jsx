import React from 'react';
import './Feature.css'

const Feature = () => {
    return (
        <div>
            <div className="featured-movies">
                <h2 id="featured-movies" className="moviesection-title">Featured Movies</h2>
                <div className="movie-card">
                    {[
                        { src: "images/wildrobotposter.jpeg", title: "The Wild Robot" },
                        { src: "images/dune2poster.png", title: "Dune: Part Two" },
                        { src: "images/pacificrimposter.png", title: "Pacific Rim Uprising" },
                        { src: "images/batmanposter.png", title: "Batman" },
                        { src: "images/titanicposter.png", title: "Titanic" },
                        { src: "images/walleposter.png", title: "WALL-E" }
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
                        { src: "images/brooklyn99poster.png", title: "Brooklyn Nine-Nine" },
                        { src: "images/gameofthronesposter.png", title: "Game of Thrones" },
                        { src: "images/lethalweaponposter.png", title: "Lethal Weapon" },
                        { src: "images/strangerthingsposter.png", title: "Stranger Things" },
                        { src: "images/peakyblindersposter.png", title: "Peaky Blinders" },
                        { src: "images/thelastofusposter.png", title: "The Last of Us" }
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
                        { src: "images/barbieposter.png", title: "Barbie" },
                        { src: "images/jurassicworldposter.png", title: "Jurassic World: Fallen Kingdom" },
                        { src: "images/suzumeposter.png", title: "Suzume" },
                        { src: "images/500daysofsummerposter.png", title: "500 Days of Summer" },
                        { src: "images/beemovieposter.png", title: "The Bee Movie" },
                        { src: "images/deadpoolwolverineposter.png", title: "Deadpool & Wolverine" }
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
