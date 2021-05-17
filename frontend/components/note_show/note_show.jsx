import React, { useState } from 'react'
import ReactQuill from 'react-quill';

import {fetchNote} from '../../actions/note_actions';

class NoteShow extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        let options = {
            theme:'snow'
        }
        fetchNote(this.props.match.params.noteId)
    }
    
    render() {
        const {noteId, note, notes} = this.props;
        //console.log(noteId);
        //console.log(notes);
        return(
            <div className="note-show">
                <ReactQuill theme="snow" />
            </div>
            
        )
       
    }
}

export default NoteShow;