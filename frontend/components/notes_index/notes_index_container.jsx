import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import NotesIndex from './notes_index';
import { fetchNotes } from '../../actions/note_actions';
import { fetchTags } from '../../actions/tag_actions';
import { updateFilterTags } from '../../actions/filter_tags_actions';
import { 
    fetchNotebooks,
    updateCurrentNotebook 
} from '../../actions/notebook_actions'

const mapStateToProps = ({ session, entities: { notes, notebooks, tags }, ui: { filterTags }} ) => {
    return {
        notebooks: notebooks, 
        notes: Object.values(notes),
        url: `/notes/`,
        notebookName: "Notes",
        tags: tags,
        filterTags: filterTags,
        currentNotebook: null,
        currentNotebookId: null,
    }
}

const mapDispatchToProps = dispatch => ({
    fetchNotebooks: () => dispatch(fetchNotebooks()),

    fetchNotebook: (notebookId) => dispatch(fetchNotebook(notebookId)),
    logout: () => dispatch(logout()),
    fetchNotes: () => dispatch(fetchNotes()),
    fetchTags: () => dispatch(fetchTags()),
    updateFilterTags: (tags) => dispatch(updateFilterTags(tags)),
    updateCurrentNotebook: (notebook) => dispatch(updateCurrentNotebook(notebook)),

});

export default connect(mapStateToProps,mapDispatchToProps)(NotesIndex);