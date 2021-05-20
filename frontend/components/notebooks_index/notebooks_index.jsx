import React from 'react';

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
                    <h2></h2>
                </div>
            </div>
        )
    }
}

export default NotebooksIndex;