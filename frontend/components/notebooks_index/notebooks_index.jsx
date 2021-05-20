import React from 'react';
import { Link } from 'react-router-dom';

class NotebooksIndex extends React.Component {
    constructor(props) {
        super(props)
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
                    <button>New Notebook</button>
                </div>
                <ul className="notebooks-index-list">
                    {
                        
                        this.props.notebooks.map((notebook) => (
                            <li><Link to={`/notebooks/${notebook.id}/notes`}>{notebook.name}</Link></li>
                        ))
                   
                    }
                </ul>
            </div>
        )
    }
}

export default NotebooksIndex;