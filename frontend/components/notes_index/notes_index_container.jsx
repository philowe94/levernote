import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import NotesIndex from './notes_index';
import { fetchNotes } from '../../actions/note_actions';

const mapStateToProps = ({ session, entities: { notes, tags }} ) => {
    return {
        notes: notes,
        url: `/notes/`,
        notebookName: "Notes",
        tags: tags,
    }
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    fetchNotes: () => dispatch(fetchNotes()),
    fetchTags: () => dispatch(fetchTags()),
});

export default connect(mapStateToProps,mapDispatchToProps)(NotesIndex);