import { Link } from 'react-router-dom';
import './Hero.css'; // Assuming you have a CSS file for styling

function Hero() {

    return (
        <div className="button-overlay">
            <img className="wildrobotimg" src="src/images/herosectionimg.png" alt="movie image" />
            <div className="text-signup">
                <h1 className="hero-title">All your Movies and Shows!</h1>
                <div className="hero-email">
                    <input className="email-input" type="email" placeholder="Email address" />
                    <Link to="/register" className="getstarted-button">Register</Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;