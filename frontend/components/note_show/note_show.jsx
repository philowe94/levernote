import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import { createNoteTag } from '../../util/note_tag_api_util';

class NoteShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            title: '',
            body: '',
            updated_at: new Date(),
            newTagName: '',
        };

        this.handleBodyChange = this.handleBodyChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.renderTags = this.renderTags.bind(this);
        this.handleNewNoteTag = this.handleNewNoteTag.bind(this);
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
        let nextNoteId = null
        if (notesArr.length >= 2) {
            nextNoteId = notesArr[notesArr.length -2].id;
        }
        
        if (nextNoteId) {
            this.props.deleteNote(this.state.id)
            .then(() => {
                this.props.history.push(`${nextNoteId}`);
            });
        } else {
            
            this.props.deleteNote(this.state.id);
         
        }

    }

    handleNewNoteTag() {
        this.props.createTag({
            name: this.state.newTagName
        }).then((res) => {
            let note_tag = {
                note_id: this.props.note.id,
                tag_id: res.tag.id,
            }
            debugger
            createNoteTag(note_tag)
        })

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

    renderTags() {
        if (this.props.note) {
            return (
                <div>
                    {this.props.note.tags.map((tag) => {
                        return (
                            <div>
                                <button>
                                    <i className="fas fa-tag fa-fw"></i>{tag.name}
                                </button>
                            </div>
                        )
                    })}
                    <div>
                        <input 
                            type="text"
                            placeholder="New tag name"
                            value={this.props.newTagName}
                            onChange={this.update('newTagName')}/>
                        <button 
                            onClick={this.handleNewNoteTag}
                            className="new-note-tag-button">
                            Add Tag
                        </button>
                    </div>
                </div>
            )
        }
    }
    
    render() {
        
        return(
            <div className="note-show">
                <div className="note-show-header">
                    <input 
                        className="note-show-title"
                        type="text"
                        placeholder="Title"
                        value={this.state.title}
                        onChange={this.update('title')}
                        />
                    <button
                        className="delete-button"
                        onClick={this.handleDelete}>
                            Delete
                    </button> 
                </div>
                
                
                <ReactQuill theme="snow" 
                    value={this.state.body}
                    placeholder="Body"
                    onChange={this.handleBodyChange}
                />
                {this.renderTags()}
            </div>
            
        )
       
    }
}

export default NoteShow;