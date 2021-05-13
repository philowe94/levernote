import React from 'react';
import { Link } from 'react-router-dom';
import NavbarSessionLinksContainer from './navbar_session_links_container'

const Navbar = ({ currentUser, logout }) => {

    return (
        <div className="navbar">
           
            <Link to="/" className="logo-link"> <img src={window.logoURL} className="logo"/>Levernote</Link>
     
            <ul className="top-level-nav">
                <li><a href="#">Why Levernote</a></li>
                <li><a href="https://github.com/philowe94/">Github</a></li>
                <li><a href="https://www.linkedin.com/in/philip-lowe-274b9a9a/">Linkedin</a></li>
            </ul>
            <NavbarSessionLinksContainer />
        </div>
    )
}

export default Navbar