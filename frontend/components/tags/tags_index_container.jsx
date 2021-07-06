import { connect } from 'react-redux';
import TagsIndex from './tags_index';
import { updateFilterTags } from '../../actions/filter_tags_actions';
import {
    createTag,
    updateTag,
    deleteTag,
} from '../../actions/tag_actions';

const mapStateToProps = (state) => {
    
    return {
        tags: state.entities.tags,
    }
}

const mapDispatchToProps = (dispatch) => {
    
    return {
        fetchTags: () => dispatch(fetchTags()),
        updateFilterTags: (tags) => dispatch(updateFilterTags(tags)),
        createTag: (tag) => dispatch(createTag(tag)),
        updateTag: (tag) => dispatch(updateTag(tag)),
        deleteTag: (tagId) => dispatch(deleteTag(tagId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TagsIndex);