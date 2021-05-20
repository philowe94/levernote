import React from 'react'
import { Link } from 'react-router-dom';
import NotesIndexItem from './notes_index_item'

class NotesIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchNotes();
    }

    render() {

        let { currentUser, logout } = this.props;
 
        let { notes } = this.props;
        return(
            <div className="notes-index">
                <ul className="notes-index-list">
                    {notes.map(note => (
                        <NotesIndexItem note={note} key={note.id} />
                    ))}
                </ul>
            </div>
        )
    }
}

export default NotesIndex;