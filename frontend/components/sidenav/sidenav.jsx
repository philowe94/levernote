import React from 'react'
import { Link } from 'react-router-dom';

class SideNav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        let { currentUser, logout } = this.props;
        
        //Things to Display 
        //logged in user email
        //  drop down > sign out
        //Search ??
        //+ New Note
        //"Home"
        //"Shortcuts"
        //Notes
        //Notebooks
        //Tags
        //"Shared with me"
        //"Trash"
        return(
            <div className="side-nav">
                <ul className="side-nav-list">
                    <li>
                        {currentUser.email}
                    </li>
                    <li>
                        <Link to="/" onClick={logout}>Sign out {currentUser.name}</Link>
                    </li>
                    <li>
                        <a href="#">New Note</a>
                    </li>
                    <li>
                        <a href="#">Notes</a>
                    </li>
                    <li>
                        <a href="#">Notebooks</a>
                    </li>
                    <li>
                        <a href="#">Tags</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default SideNav;