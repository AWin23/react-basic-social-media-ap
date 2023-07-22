import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


export const Navbar = () => {
    return (
        <div>
            { /* NAVBAR: */}
            <Link to="/"> HOME </Link>
            <Link to="/profile"> PROFILE </Link>
            <Link to="/about"> ABOUT </Link>
        </div>
    );
}