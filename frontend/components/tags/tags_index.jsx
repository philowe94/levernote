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
        let tagDivs = Object.values(this.props.tags).sort((a,b) => (a.name > b.name) ? 1 : -1 ).map((tag) => (
            <div className="tags-index-tag">
                <Link to="/notes" onClick={() => this.handleTagLink(tag)}>
                    {tag.name}
                </Link>
            </div>
        ))

        return (
            <div className="tags-index">
                <div className="tags-index-header">Tags</div>
                {tagDivs}
            </div> 
        )
    }
}

export default TagsIndex;