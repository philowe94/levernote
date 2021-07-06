import React from 'react'
import { Link } from 'react-router-dom';
import NotesIndexItem from './notes_index_item'
import NotesList from './notes_list'

class NotesIndex extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            filteredNotes: [],
            showTags: false
        }

        this.toggleFilterTag = this.toggleFilterTag.bind(this);
    }

    //given a tag object, add the tag object to the store filterTags
    toggleFilterTag(tag) {
        let tagIds = []
        this.props.filterTags.forEach((tag) => {
            tagIds.push(tag.id);
        })

        if (!tagIds.includes(tag.id)) {
            let tagsList = this.props.filterTags.concat(tag);
            this.props.updateFilterTags(tagsList);

            this.setState({
                filterTags: tagsList,
            }, () => {
                console.log(this.props.filterTags);
                this.filterNotes();
            })
        } else {
            let tagsList = this.props.filterTags.filter((tag2) => tag.id != tag2.id );
            this.props.updateFilterTags(tagsList);

            
            this.setState({
                filterTags: tagsList,
            }, () => {
                console.log(this.state.filterTags);
                this.filterNotes();
            })
        }

    }

    filterNotes() {
        let filteredNotes = this.props.notes.filter((note) => {
            //get all tag ids from the note
            let tagIds = []
            note.tags.forEach((tag) => {
                tagIds.push(tag.id);
            })

            //if all of the filtertags are found in the note tags
            return this.props.filterTags.every((tag) => {
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
        this.filterNotes();
    }

    componentDidUpdate(prevProps) {
        if (this.props.filterTags !== prevProps.filterTags) {

            this.filterNotes();
        }
    }

    renderTags() {
        
        if (this.props.tags == []) {
            return (
                <div></div>
            )
        } else {
            return (
                <div className="notes-index-tags">
                    {Object.values(this.props.tags).map((tag) => {
                        let classname = "notes-index-tag";
                        let tagIds = []
                        this.props.filterTags.forEach((tag) => {
                            tagIds.push(tag.id);
                        })

                        if (tagIds.includes(tag.id)) {
                            classname = "notes-index-tag selected";
                        }

                        return (
                            <div key={tag.id} className={classname}>
                                <button onClick={() => this.toggleFilterTag(tag)}>
                                    <i className="fas fa-tag fa-fw"></i>{tag.name}
                                </button>
                            </div>
                        )
                    })}
                </div>
            )
        }
    }

    render() {

        let notes = [];

        if (this.props.filterTags.length > 0) {
            notes = this.state.filteredNotes;
        } else {
            notes = this.props.notes;
        }

        return(
            <div className="notes-index">
                <div className="notes-index-header">
                    <div className="notes-index-header-title">
                        <div className="notes-index-header-section-1" >
                            <i className="-open fa-fw"></i>
                            <div className="notes-index-header-notebook-name">
                                {this.props.notebookName}
                            </div>
                        </div>
                        <div className="notes-index-header-2">
                            {this.props.notes.length} notes
                            <div 
                                className="filter-tag-button" 
                                onClick={() => this.setState({showTags: !this.state.showTags})}>
                                <i className="fas fa-filter"></i>
                            </div>
                        </div>
                    </div>
                { ((this.props.filterTags.length > 0) || this.state.showTags) ? this.renderTags() : null}
                </div>
                
                <div className="notes-index-content">

                    <NotesList notes={notes} url={this.props.url}/>
                </div>
            </div>
        )
    }
}

export default NotesIndex;