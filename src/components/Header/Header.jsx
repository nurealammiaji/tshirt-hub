import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className='links'>
            <Link to="/">Home</Link>
            <Link to="/review">Order Review</Link>
        </nav>
    );
};

export default Header;