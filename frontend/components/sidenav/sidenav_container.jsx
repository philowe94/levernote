import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import SideNav from './sidenav'
import { createNote } from '../../actions/note_actions';

const mapStateToProps = ({ session, entities: { users }} ) => {
    return {
        currentUser: users[session.id]
    }
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    createNote: (note) => dispatch(createNote(note))
});

export default connect(mapStateToProps,mapDispatchToProps)(SideNav);