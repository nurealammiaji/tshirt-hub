import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className='links'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/review">Order Review</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    );
};

export default Header;