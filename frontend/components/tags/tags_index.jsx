import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '0px',
    },
  };

class TagsIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tagToRename: null,
            newTagName: '',
            modalTitle: '',
            showModal: false,
            submitFunction: null,
        }
        this.handleNewTag = this.handleNewTag.bind(this);
        this.handleRenameTag = this.handleRenameTag.bind(this);
        this.handleOpenRenameTagModal = this.handleOpenRenameTagModal.bind(this);
        this.handleCloseRenameTagModal = this.handleCloseRenameTagModal.bind(this);
        this.handleOpenNewTagModal = this.handleOpenNewTagModal.bind(this);
        this.handleCloseNewTagModal = this.handleCloseNewTagModal.bind(this);
        this.handleDeleteTag = this.handleDeleteTag.bind(this);
        this.handleTagLink = this.handleTagLink.bind(this);
    }

    handleNewTag() {
        let newtag = {
            name: this.state.newTagName,
        }

        this.props.createTag(newtag);
        this.handleCloseRenameTagModal();
    }

    handleRenameTag() {
        let newtag = this.state.tagToRename;
        newtag.name = this.state.newTagName;
        this.props.updateTag(newtag);
        this.handleCloseRenameTagModal()
    }

    handleOpenRenameTagModal(tag) {
        this.setState({ 
            showModal: true,
            tagToRename: tag,
            newTagName: tag.name,
            modalTitle: 'Rename Tag',
            submitFunction: this.handleRenameTag });
    }
      
    handleCloseRenameTagModal () {
        this.setState({ showModal: false });
    }

    handleOpenNewTagModal() {
        this.setState({ 
            newTagName: '',
            showModal: true,
            modalTitle: 'New Tag',
            submitFunction: this.handleNewTag });
    }
      
      
    handleCloseNewTagModal () {
        this.setState({ showModal: false });
    }

    handleDeleteTag(tagId) {
        this.props.deleteTag(tagId)
    }

    handleTagLink(tag) {
        this.props.updateFilterTags([tag]);
    }

    handleDeleteTag(tagId) {
        this.props.deleteTag(tagId)
    }
    

    update(field) {

        return e => {
            this.setState({ [field]: e.currentTarget.value });
            //this.props.updateNote(this.state);
        }
    }

    componentDidMount() {
        this.props.fetchTags();
    }


    render () {
        let tagDivs = Object.values(this.props.tags).sort((a,b) => (a.name > b.name) ? 1 : -1 ).map((tag) => (
            <div key={tag.id} className="tags-index-tag">
                <div className="tag-link-container">
                    <div className="tag-link">
                        <Link to="/notes" onClick={() => this.handleTagLink(tag)}>
                            {tag.name.substring(0,20)}
                        </Link>
                    </div>
                </div>
                <div className="tag-link-buttons">
                    <button
                        className="rename-button"
                        onClick={() => {
                            this.handleOpenRenameTagModal(tag);
                        }}>
                            Rename
                    </button>
                    <button
                        className="delete-button"
                        onClick={() => {
                            this.handleDeleteTag(tag.id);
                        }}>
                            Delete
                    </button>
                </div>
                
            </div>
        ))

        return (
            <div className="tags-index">
                <div className="tags-index-header">
                    <div className="tags-index-header-title">
                        Tags
                    </div>
                    <button 
                        className="new-tag-button" 
                        onClick={() => this.handleOpenNewTagModal()}>
                        <i className="fas fa-tag fa-fw"></i> New Tag
                    </button>
                </div>
                {tagDivs}
                <Modal
                    isOpen={this.state.showModal}
                    style={customStyles}
                    >
                    <div className="rename-notebook-modal">
                        <h2 className="notebooks-index-header">{this.state.modalTitle}</h2>
                        <label htmlFor="rename-notebook-input">Name</label>
                        <input
                            id="rename-notebook-input" 
                            className="rename-notebook-input"
                            type="text"
                            placeholder="Tag name"
                            value={this.state.newTagName}
                            onChange={this.update('newTagName')}/>
                        <div className="rename-notebook-modal-buttons">
                            <button 
                                onClick={() => {
                                    this.state.submitFunction();
                                }}
                                className="rename-notebook-modal-continue">
                                Continue
                            </button>
                            <button className="rename-notebook-modal-cancel" 
                                onClick={this.handleCloseRenameTagModal}>Cancel</button>
                        </div>
                    </div>
                </Modal>
            </div>

        )
    }
}

export default TagsIndex;