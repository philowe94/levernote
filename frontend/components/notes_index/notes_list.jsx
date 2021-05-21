import React from 'react'
import { Link } from 'react-router-dom';
import NotesIndexItem from './notes_index_item'

class NotesList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    render() {
        let notes = Object.values(this.props.notes).reverse();
        
        return(
            <ul className="notes-index-list">
                {notes.map(note => (
                    <NotesIndexItem note={note} key={note.id} url={this.props.url} />
                ))}
            </ul>
        )
    }
}

export default NotesList;