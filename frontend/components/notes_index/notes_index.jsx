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
                <div className="notes-index-header">
                    <div className="notes-index-header-section-1" >
                        <i className="-open fa-fw"></i>
                        <div className="notes-index-header-notebook-name">
                            {this.props.notebookName}
                        </div>
                    </div>
                    <div className="notes-index-header-2">
                        {Object.values(notes).length} notes
                    </div>
                </div>
                
                <NotesList notes={notes} url={this.props.url}/>
            </div>
        )
    }
}

export default NotesIndex;