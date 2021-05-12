import React from 'react';
import { Link } from 'react-router-dom';

const NavbarSessionLinks = ({ currentUser, logout }) => {

    const loginorSignupLinks = () => (
        <nav className="session-nav">
            <Link to="/login">Log In</Link>
        </nav>
    );
    const greetingAndLogout = () => (
        <nav className="session-nav">
            <h2>Hello {currentUser.email}</h2>
            <Link to="/" onClick={logout}>Log out!</Link>
        </nav>
    )

    return currentUser ? greetingAndLogout(): loginorSignupLinks();
}

export default NavbarSessionLinks