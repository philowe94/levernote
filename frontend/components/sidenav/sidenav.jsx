import React from 'react'
import { Link } from 'react-router-dom';

class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.handleNewNote = this.handleNewNote.bind(this);
        this.handleLinkToNotes = this.handleLinkToNotes.bind(this);
    }

    handleNewNote() {
        let notebookId;
        if (this.props.match.params.notebookId) {
            notebookId = this.props.match.params.notebookId;
        } else {
            notebookId = null;
        }

        let newnote = {
            title: '',
            body: '',
            author_id: this.props.currentUser.id,
            notebook_id: notebookId
        }

        this.props.createNote(newnote)
            .then((res) => {
                if (this.props.match.params.notebookId) {
                    this.props.history.push(`/notebooks/${this.props.match.params.notebookId}/notes/${res.note.id}`);        
                } else {
                    this.props.history.push(`/notes/${res.note.id}`);        
                }
            })
    }

    handleLinkToNotes() {
        this.props.updateFilterTags([]);
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
                <div className="side-nav-user">
                    <div className="side-nav-user-icon">

                        {currentUser.email[0]}
                    </div>
                    <div className="side-nav-user-email">
                        {currentUser.email}
                    </div>
                </div>
                <button onClick={this.handleNewNote} className="new-note">
                    <div className="plus-icon">+</div><div>New Note</div>
                </button>
                <ul className="side-nav-list">
                    
                    <li>
                        <Link to="/notes" onClick={this.handleLinkToNotes}><i className="fas fa-sticky-note fa-fw"></i> Notes</Link>
                    </li>
                    <li>
                        <Link to="/notebooks"><i className="fas fa-book fa-fw"></i> Notebooks</Link>
                    </li>
                    <li>
                        <Link to="/Tags"><i className="fas fa-tag fa-fw"></i> Tags</Link>
                    </li>
                    <li>
                        <Link to="/" onClick={logout}>Sign out {currentUser.name}</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default SideNav;