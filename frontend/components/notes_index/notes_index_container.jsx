import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import NotesIndex from './notes_index';
import { fetchNotes } from '../../actions/note_actions';

const mapStateToProps = ({ session, entities: { users, notes }} ) => {
    return {
        currentUser: users[session.id],
        notes: notes,
        url: `/notes/`,
        notebookName: "Notes"
    }
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    fetchNotes: () => dispatch(fetchNotes()),
});

export default connect(mapStateToProps,mapDispatchToProps)(NotesIndex);