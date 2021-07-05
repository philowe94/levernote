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
        this.handleTagLink = this.handleTagLink.bind(this);
        this.handleRemoveTag = this.handleRemoveTag.bind(this);
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
        //find id of tag if it already exists
        let newtagname = this.state.newTagName;
        let tag = Object.values(this.props.tags).find((tag) => {
            return tag.name === newtagname;
        })
        
        if(tag) {
            let note_tag = {
                note_id: this.props.note.id,
                tag_id: tag.id,
            }
            createNoteTag(note_tag)
            .then((res) => {
                this.props.fetchNote(this.props.note.id);
                this.props.fetchNoteTags();

            });
        } else {
            this.props.createTag({
                name: this.state.newTagName
            }).then((res) => {
                let note_tag = {
                    note_id: this.props.note.id,
                    tag_id: res.tag.id,
                }
                createNoteTag(note_tag)
                .then((res) => {
                    this.props.fetchNote(this.props.note.id);
                    this.props.fetchNoteTags();

                });
            })
        }
    }
    
    handleTagLink(tag) {
        this.props.updateFilterTags([tag]);
    }

    handleRemoveTag(tag) {
        //delete the appropriate notetag
        //need access to the notetags
        let note_tag_to_delete = Object.values(this.props.note_tags).find((note_tag) => {
            return (note_tag.note_id === this.props.note.id) && (note_tag.tag_id === tag.id) 
        })
        
        this.props.deleteNoteTag(note_tag_to_delete.id)
        .then((res) => {
            this.props.fetchNote(this.props.note.id);
        });
    }

    componentDidMount(){
        this.props.fetchTags();
        this.props.fetchNoteTags();
        this.props.fetchNotes()
        .then((res) => {
            this.setState(this.props.note);
        })
    }

    componentDidUpdate(prevProps){

        if (this.props.noteId !== prevProps.noteId) {
            this.props.fetchTags();

            this.setState(this.props.note);
        }
    }

    renderTags() {
        if (this.props.note) {
            return (
                <div className="note-show-footer">
                    {this.props.note.tags.map((tag) => {
                        return (
                            <div className="note-show-tag-container">
                                <div className="note-show-tag">
                                    <i className="fas fa-tag fa-fw"></i><p>{tag.name}</p><i className="fas fa-angle-down"></i>
                                </div>
                                <div className="note-show-tag-dropup">
                                    <ul>
                                        <li onClick={() => this.handleTagLink(tag)}>Filter by tag</li>
                                        <li onClick={() => this.handleRemoveTag(tag)}>Remove tag</li>
                                    </ul>
                                </div>
                            </div>
                        )
                    })}
                    <form>
                        <input 
                            type="text"
                            placeholder="Type to add..."
                            value={this.props.newTagName}
                            onChange={this.update('newTagName')}/>
                        <input
                            type="submit"
                            onClick={this.handleNewNoteTag}
                            className="new-note-tag-button">
                            
                        </input>
                    </form>
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