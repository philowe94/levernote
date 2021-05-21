import React from 'react';
import { Link } from 'react-router-dom';

class NotebooksIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newNotebookName: ''
        }
        this.handleNewNotebook = this.handleNewNotebook.bind(this);
    }
    
    handleNewNotebook() {
        let newNotebook = {
            name: this.state.newNotebookName,
            author_id: this.props.currentUser.id,
        }
        this.props.createNotebook(newNotebook);
    }

    
    update(field) {

        return e => {
            this.setState({ [field]: e.currentTarget.value });
            this.props.updateNote(this.state);
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
                    <input 
                        className="new-notebook-input"
                        type="text"
                        placeholder="New notebook name"
                        value={this.props.newNotebookName}
                        onChange={this.update('newNotebookName')}/>
                    <button 
                        onClick={this.handleNewNotebook}
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
                            <li>
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
                                        className="delete-button"
                                        onClick={this.handleDelete}>
                                            Delete
                                    </button>
                                     
                                </div>
                                
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default NotebooksIndex;