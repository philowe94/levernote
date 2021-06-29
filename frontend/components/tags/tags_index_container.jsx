import { connect } from 'react-redux';
import TagsIndex from './tags_index';
import { updateFilterTags } from '../../actions/filter_tags_actions';

const mapStateToProps = (state) => {
    
    return {
        tags: state.entities.tags,
    }
}

const mapDispatchToProps = (dispatch) => {
    
    return {
        fetchTags: () => dispatch(fetchTags()),
        updateFilterTags: (tags) => dispatch(updateFilterTags(tags)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TagsIndex);