import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import NotesIndex from './notes_index';

const mapStateToProps = ({ session, entities: { users, notes }} ) => {
    return {
        currentUser: users[session.id],
        notes: Object.values(notes)
    }
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps,mapDispatchToProps)(NotesIndex);