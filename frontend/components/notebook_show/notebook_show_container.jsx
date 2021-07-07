import { connect } from 'react-redux';
import NotesIndex from '../notes_index/notes_index';
import { 
    fetchNotebooks,
    fetchNotebook,
    updateCurrentNotebook 
} from '../../actions/notebook_actions'
import { updateFilterTags } from '../../actions/filter_tags_actions';
import { fetchTags } from '../../actions/tag_actions';


const mapStateToProps = (state, ownProps) => {
    
    return {
        notebooks: state.entities.notebooks,
        notes: Object.values(state.entities.notes),
        url: `/notebooks/${ownProps.match.params.notebookId}/notes/`,
        tags: state.entities.tags,
        filterTags: state.ui.filterTags,
        currentNotebookId: ownProps.match.params.notebookId,

    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchNotebooks: () => dispatch(fetchNotebooks()),
        fetchNotebook: () => dispatch(fetchNotebook()),
        fetchNotes: () => dispatch(fetchNotebook(ownProps.match.params.notebookId)),
        fetchTags: () => dispatch(fetchTags()),
        updateFilterTags: (tags) => dispatch(updateFilterTags(tags)),
        updateCurrentNotebook: (notebook) => dispatch(updateCurrentNotebook(notebook)),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesIndex);