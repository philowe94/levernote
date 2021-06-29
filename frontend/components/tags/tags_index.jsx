import React from 'react';
import { Link } from 'react-router-dom';

class TagsIndex extends React.Component {
    constructor(props) {
        super(props);

        this.handleTagLink = this.handleTagLink.bind(this);
    }

    handleTagLink(tag) {
        this.props.updateFilterTags([tag]);
    }

    componentDidMount() {
        this.props.fetchTags();
    }

    render () {
        let tagDivs = Object.values(this.props.tags).map((tag) => (
            <div>
                <Link to="/notes" onClick={() => this.handleTagLink(tag)}>
                    {tag.name}
                </Link>
            </div>
        ))

        return (
            <div>
                <h1>Tags Index</h1>
                {tagDivs}
            </div> 
        )
    }
}

export default TagsIndex;