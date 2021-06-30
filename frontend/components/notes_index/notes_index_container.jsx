import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import NotesIndex from './notes_index';
import { fetchNotes } from '../../actions/note_actions';
import { fetchTags } from '../../actions/tag_actions';
import { updateFilterTags } from '../../actions/filter_tags_actions';

const mapStateToProps = ({ session, entities: { notes, tags }, ui: { filterTags }} ) => {
    return {
        notes: Object.values(notes),
        url: `/notes/`,
        notebookName: "Notes",
        tags: tags,
        filterTags: filterTags
    }
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    fetchNotes: () => dispatch(fetchNotes()),
    fetchTags: () => dispatch(fetchTags()),
    updateFilterTags: (tags) => dispatch(updateFilterTags(tags))
});

export default connect(mapStateToProps,mapDispatchToProps)(NotesIndex);