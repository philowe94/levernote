import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import SideNav from './sidenav'
import { createNote } from '../../actions/note_actions';
import { withRouter } from 'react-router-dom'

const mapStateToProps = ({ session, entities: { users }} ) => {
    return {
        currentUser: users[session.id]
    }
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    createNote: (note) => dispatch(createNote(note))
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SideNav));