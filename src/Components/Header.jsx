import { useState } from 'react'
import './Header.css'

function Header() {

    return (
        <div class="header">
            <h1 class="header-title">MANGOFLIX</h1>
            <div class="nav-links">
                <a href="#featured-movies" class="nav-link">Featured</a>
                <a href="#popular-shows" class="nav-link">Shows</a>
                <a href="#popular-movies" class="nav-link">Movies</a>
            </div>
            <button class="buttons" type="button" onclick="alert('Signed in')">Sign in</button>
        </div>
    )
}

export default Header