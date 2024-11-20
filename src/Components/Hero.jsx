import React from 'react';
import './Hero.css'; // Assuming you have a CSS file for styling

function Hero() {
    return (
        <div class="button-overlay">
            <img class="wildrobotimg" src="src/images/herosectionimg.png" alt="movie image" />
                <div class="text-signup">
                    <h1 class="hero-title">All your Movies and Shows!</h1>
                    <div class="hero-email">
                        <input class="email-input" type="email" placeholder="Email address" />
                            <button class="getstarted-button" onclick="alert('Signed up')">Sign Up</button>
                    </div>
                </div>
        </div>
    );
};

export default Hero;