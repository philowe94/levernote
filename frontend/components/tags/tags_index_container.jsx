import { connect } from 'react-redux';
import TagsIndex from './tags_index';

const mapStateToProps = (state) => {
    
    return {
        tags: state.entities.tags,
    }
}

const mapDispatchToProps = (dispatch) => {
    
    return {
        fetchTags: () => dispatch(fetchTags()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TagsIndex);