import { Link } from 'react-router-dom'
import './Header.css'

function Header() {

    return (
        <div className="header">
            <h1 className="header-title"><Link to={`/`} className="header-title">MANGOFLIX</Link></h1>
            <div className="nav-links">
                <a href="#featured-movies" className="nav-link">Featured</a>
                <a href="#popular-shows" className="nav-link">Shows</a>
                <a href="#popular-movies" className="nav-link">Movies</a>
            </div>
            <button className="buttons" type="button" ><Link to={`/login`} className="button">Login</Link></button>
        </div>
    )
}

export default Header