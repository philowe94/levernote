import { connect } from 'react-redux';
import NotesIndex from '../notes_index/notes_index';
import {fetchNotebook} from '../../actions/notebook_actions'
import { updateFilterTags } from '../../actions/filter_tags_actions';
import { fetchTags } from '../../actions/tag_actions';


const mapStateToProps = (state, ownProps) => {
    
    let notebook = state.entities.notebooks[ownProps.match.params.notebookId];
    return {
        notebook: notebook,
        notes: Object.values(state.entities.notes),
        url: `/notebooks/${ownProps.match.params.notebookId}/notes/`,
        notebookName: notebook.name,
        tags: state.entities.tags,
        filterTags: state.ui.filterTags
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchNotes: () => dispatch(fetchNotebook(ownProps.match.params.notebookId)),
        fetchTags: () => dispatch(fetchTags()),
        updateFilterTags: (tags) => dispatch(updateFilterTags(tags))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesIndex);