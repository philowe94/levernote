import React from 'react'
import { Link } from 'react-router-dom';
import { fetchNotes } from '../../actions/note_actions';

class NotesIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        fetchNotes();
    }

    render() {

        let { currentUser, logout } = this.props;
 
        let { notes } = this.props;
        debugger

        return(
            <div className="notes-index">
                <ul className="notes-index-list">
                    {notes.map(note => (
                        <li>
                            <div>
                                {note.title}
                            </div>
                            <div>
                                {note.body}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default NotesIndex;