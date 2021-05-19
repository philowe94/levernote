import React from 'react'
import { Link } from 'react-router-dom';

class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.handleNewNote = this.handleNewNote.bind(this);
    }

    handleNewNote() {
        let noteId;
        let newnote = {
            title: 'New Note',
            body: '',
            author_id: this.props.currentUser.id,
            notebook_id: null
        }

        this.props.createNote(newnote)
            .then((res) => this.props.history.push(`/notes/${res.note.id}`));        
       
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
                        <button onClick={this.handleNewNote} className="new-note">New Note</button>
                    </li>
                    <li>
                        <Link to="/notes"><i className="fas fa-sticky-note"></i> Notes</Link>
                    </li>
                    <li>
                        <a href="#"><i className="fas fa-book-open"></i> Notebooks</a>
                    </li>
                    <li>
                        <a href="#"><i className="fas fa-tag"></i> Tags</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default SideNav;