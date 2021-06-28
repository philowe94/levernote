import React from 'react'

class TagsIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchTags();
    }

    render () {
        let tagDivs = Object.values(this.props.tags).map((tag) => (
            <div>
                <p>{tag.name}</p>
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