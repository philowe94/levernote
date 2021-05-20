import React from 'react'
import { Link } from 'react-router-dom';
import NotesIndexItem from './notes_index_item'
import NotesList from './notes_list'

class NotesIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchNotes();
    }

    render() {
        let { notes } = this.props;
        
        return(
            <div className="notes-index">
                <NotesList notes={notes} url={this.props.url}/>
            </div>
        )
    }
}

export default NotesIndex;