import React from 'react';
import { Link } from 'react-router-dom';
import NavbarSessionLinksContainer from './navbar_session_links_container'

const Navbar = ({ currentUser, logout }) => {

    return (
        <header className="header">

        <div className="navbar">
           
            <Link to="/" className="logo-link-navbar"> 
                <img src={window.logoURL} className="logo"/>
                <p>Levernote</p>
            </Link>
     
            <ul className="top-level-nav">
                <li><a href="https://github.com/philowe94/">Github</a></li>
                <li><a href="https://www.linkedin.com/in/philip-lowe-274b9a9a/">Linkedin</a></li>
            </ul>
            <NavbarSessionLinksContainer />
        </div>
        </header>
    )
}

export default Navbar