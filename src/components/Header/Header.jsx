import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className='nav-bar'>
            <div className='nav-logo'>
                <h1><a href="/">T-Shirt Hub</a></h1>
            </div>
            <div className='nav-links'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/review">Order Review</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    );
};

export default Header;