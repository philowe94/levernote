import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
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

class NotebooksIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newNotebookName: '',
            showModal: false,
            showNewNotebookModal: false,
            notebookToRename: null,
            renameNotebookName: '',
        }
        this.handleNewNotebook = this.handleNewNotebook.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleRename = this.handleRename.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleOpenNewNotebookModal = this.handleOpenNewNotebookModal.bind(this);
        this.handleCloseNewNotebookModal = this.handleCloseNewNotebookModal.bind(this);
        this.handleOpenRenameModal = this.handleOpenRenameModal.bind(this);
    }


    handleDelete(notebookId) {
        this.props.deleteNotebook(notebookId)
    }
    
    handleNewNotebook() {
        let newNotebook = {
            name: this.state.newNotebookName,
            author_id: this.props.currentUser.id,
        }
        this.props.createNotebook(newNotebook);
        this.handleCloseNewNotebookModal();
    }

    
    update(field) {

        return e => {
            this.setState({ [field]: e.currentTarget.value });
            //this.props.updateNote(this.state);
        }
    }

    convertDate(dateTime) {
        let dateObject = new Date(dateTime);
            
        const dateOptions = { month: 'numeric', day: 'numeric', year: 'numeric' };
        let date = dateObject.toLocaleDateString('en-US', dateOptions);
        
        const now = new Date();
        const dateObj = new Date(date);
    
        if ((now.getDate() === dateObj.getDate()) && (now.getMonth() === dateObj.getMonth()) && (now.getYear() === dateObj.getFullYear())) {
            return `Today`;
        }
    
        if ((now.getDate() - dateObj.getDate() === 1) || (now.getMonth() - dateObj.getMonth() === 1) || (now.getYear() - dateObj.getFullYear() === 1)) {
            return `Yesterday`;
        }
    
        return date;
    }

    handleOpenModal () {
        this.setState({ showModal: true });
      }
      
    handleCloseModal () {
        this.setState({ showModal: false });
    }

    handleOpenNewNotebookModal () {
        this.setState({ showNewNotebookModal: true });
      }
      
    handleCloseNewNotebookModal () {
        this.setState({ showNewNotebookModal: false });
    }

    handleOpenRenameModal(notebook) {
        this.handleOpenModal();

        this.setState({
            notebookToRename: notebook,
            renameNotebookName: notebook.name,
        })
    }

    handleRename() {
        let renamedNotebook = this.state.notebookToRename;
        renamedNotebook.name = this.state.renameNotebookName;
        this.props.updateNotebook(renamedNotebook);
        this.handleCloseModal();
    }

    componentDidMount() {
        this.props.fetchNotebooks();
    }

    render() {


        return (
            <div className="notebooks-index">
                <div className="notebooks-index-header">
                    <h1>Notebooks</h1>
                </div>
                <div className="notebooks-index-subheader">
                    <h2>{this.props.notebooks.length} notebooks</h2>

                    <button 
                        onClick={this.handleOpenNewNotebookModal}
                        className="new-notebook-button">
                        <i className="fas fa-book fa-fw"></i> New Notebook
                    </button>
                </div>
                <ul className="notebooks-index-list">
                    <li>
                        <div className="list-header-title">
                            TITLE
                        </div>
                        <div className="list-header-created-by">
                            CREATED BY
                        </div>
                        <div className="list-header-updated">
                            UPDATED
                        </div>
                    </li>
                    {
                        this.props.notebooks.map((notebook) => (
                            <li key={notebook.id}>
                                <div className="list-header-title">

                                    <i className="fas fa-book fa-fw"></i> 
                                    <Link to={`/notebooks/${notebook.id}/notes`}>{notebook.name}
                                    </Link>
                                </div>
                                <div className="list-header-created-by">
                                    {this.props.currentUser.email}
                                </div>
                                <div className="list-header-updated">
                                    <div>
                                        {this.convertDate(notebook.updated_at)}
                                    </div>
                                    <button
                                        className="rename-button"
                                        onClick={() => {
                                            this.handleOpenRenameModal(notebook);
                                        }}>
                                            Rename
                                    </button>
                                    <button
                                        className="delete-button"
                                        onClick={() => {
                                            this.handleDelete(notebook.id);
                                        }}>
                                            Delete
                                    </button>
                                     
                                </div>
                                
                            </li>
                        ))
                    }
                </ul>
                <Modal
                    isOpen={this.state.showModal}
                    style={customStyles}
                    >
                    <div className="rename-notebook-modal">
                        <h2 className="notebooks-index-header">Rename Notebook</h2>
                        <label htmlFor="rename-notebook-input">Name</label>
                        <input
                            id="rename-notebook-input" 
                            className="rename-notebook-input"
                            type="text"
                            placeholder="Notebook name"
                            value={this.state.renameNotebookName}
                            onChange={this.update('renameNotebookName')}/>
                        <div className="rename-notebook-modal-buttons">
                            <button 
                                onClick={() => {
                                    this.handleRename();
                                }}
                                className="rename-notebook-modal-continue">
                                Continue
                            </button>
                            <button className="rename-notebook-modal-cancel" 
                                onClick={this.handleCloseModal}>Cancel</button>
                        </div>
                    </div>
                </Modal>

                <Modal
                    isOpen={this.state.showNewNotebookModal}
                    style={customStyles}
                    >
                    <div className="rename-notebook-modal">
                        <h2 className="notebooks-index-header">New Notebook</h2>
                        <label htmlFor="rename-notebook-input">Name</label>
                        <input
                            id="rename-notebook-input" 
                            className="rename-notebook-input"
                            type="text"
                            placeholder="New notebook name"
                            value={this.props.newNotebookName}
                            onChange={this.update('newNotebookName')}/>
                        <div className="rename-notebook-modal-buttons">
                            <button 
                                onClick={
                                    this.handleNewNotebook
                                }
                                className="rename-notebook-modal-continue">
                                Continue
                            </button>
                            <button className="rename-notebook-modal-cancel" 
                                onClick={this.handleCloseNewNotebookModal}>Cancel</button>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default NotebooksIndex;