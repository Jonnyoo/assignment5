import { Outlet, useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Genres from "../Components/Genres";
import "./MoviesView.css";

function MoviesView() {

    const navigate = useNavigate();

    const genres = [
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
            genre: "Family",
            id: 10751,
        },
        {
            genre: "Animation",
            id: 16
        },
        {
            genre: "Action",
            id: 28
        },
        {
            genre: "Drama",
            id: 18
        },
        {
            genre: "Fantasy",
            id: 14
        },
        {
            genre: "Horror",
            id: 27
        },
        {
            genre: "Comedy",
            id: 35
        }
    ]

    // function logout() {
    //     navigate("/");
    // }

    return (
        <div className="app-container">
            <Header />
            <Genres genresList={genres} />
            <Outlet />
        </div>
    );
}

export default MoviesView;