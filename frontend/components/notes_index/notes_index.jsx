import React from 'react'
import { Link } from 'react-router-dom';
import NotesIndexItem from './notes_index_item'
import NotesList from './notes_list'

class NotesIndex extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            notes: Object.values(this.props.notes),
            filterTags: [],
            filteredNotes: [],
        }

        this.toggleFilterTag = this.toggleFilterTag.bind(this);
    }

    //given a tag object, add the tag object to the state filterTags
    toggleFilterTag(tag) {
        if (!this.state.filterTags.includes(tag)) {
            let tagsList = this.state.filterTags.concat(tag);
            this.setState({
                filterTags: tagsList,
            }, () => {
                console.log(this.state.filterTags);
                this.filterNotes();
            })
        } else {
            let tagsList = this.state.filterTags.filter((tag2) => tag != tag2 );
            this.setState({
                filterTags: tagsList,
            }, () => {
                console.log(this.state.filterTags);
                this.filterNotes();
            })
        }

    }

    filterNotes() {
        let filteredNotes = this.state.notes.filter((note) => {
            //get all tag ids from the note
            let tagIds = []
            note.tags.forEach((tag) => {
                tagIds.push(tag.id);
            })

            //if all of the filtertags are found in the note tags
            return this.state.filterTags.every((tag) => {
                return tagIds.includes(tag.id);                
            })
        })

        this.setState({
            filteredNotes: filteredNotes
        }, () => {
        })
    }

    componentDidMount() {
        this.props.fetchNotes();
        this.props.fetchTags();

    }

    renderTags() {
        
        if (this.props.tags == []) {
            return (
                <div></div>
            )
        } else {
            return (
                <div>
                    {Object.values(this.props.tags).map((tag) => (
                        <div>
                            <button onClick={() => this.toggleFilterTag(tag)}>{tag.name}</button>
                        </div>
                    ))}
                </div>
            )
        }
    }

    render() {

        let notes = [];

        if (this.state.filterTags.length > 0) {
            notes = this.state.filteredNotes;
        } else {
            notes = this.state.notes;
        }

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
                        {Object.values(this.state.notes).length} notes
                    </div>
                </div>
                {this.renderTags()}
                
                <NotesList notes={notes} url={this.props.url}/>
            </div>
        )
    }
}

export default NotesIndex;