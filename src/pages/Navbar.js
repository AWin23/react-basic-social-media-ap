import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


export const Navbar = () => {
    return (
        <div>
            { /* NAVBAR: */}
            <Link to="/"> HOME </Link>
            <Link to="/about"> ABOUT </Link>
            <Link to="/profile/:username"> PROFILE </Link>
        </div>
    );
}