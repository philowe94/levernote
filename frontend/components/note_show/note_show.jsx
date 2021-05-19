import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import { fetchNotes } from '../../actions/note_actions';

class NoteShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            title: '',
            body: '',
            updated_at: new Date(),
        };

        this.handleBodyChange = this.handleBodyChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleBodyChange(value) {
        console.log(value);
        this.setState({ body: value });
        this.props.updateNote(this.state);
    }

    update(field) {

        return e => {
            this.setState({ [field]: e.currentTarget.value });
            this.props.updateNote(this.state);
        }
    }

    handleDelete() {
        let notesArr = Object.values(this.props.notes);
        let nextNoteId = notesArr[notesArr.length -2].id;
        debugger
        this.props.deleteNote(this.state.id)
        .then(() => {
            this.props.history.push(`${nextNoteId}`);
        });

    }

    componentDidMount(){
        if (this.props.note) {
            this.setState(this.props.note);
        }
    }

    componentDidUpdate(prevProps){
        if (this.props.noteId !== prevProps.noteId) {
            this.setState(this.props.note);
        }
    }
    
    render() {
        
        return(
            <div className="note-show">
                <input 
                    className="note-show-title"
                    type="text"
                    placeholder="Title"
                    value={this.state.title}
                    onChange={this.update('title')}
                    />
                <button
                    onClick={this.handleDelete}>
                        Delete Note
                </button> 
                
                <ReactQuill theme="snow" 
                    value={this.state.body}
                    placeholder="Body"
                    onChange={this.handleBodyChange}
                />
            </div>
            
        )
       
    }
}

export default NoteShow;