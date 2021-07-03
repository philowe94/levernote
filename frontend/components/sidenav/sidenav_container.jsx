import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import SideNav from './sidenav'
import { createNote } from '../../actions/note_actions';
import { withRouter } from 'react-router-dom'
import { updateFilterTags } from '../../actions/filter_tags_actions';

const mapStateToProps = ({ session, entities: { users }}, ownProps ) => {
    
    return {
        currentUser: users[session.id]
    }
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    createNote: (note) => dispatch(createNote(note)),
    updateFilterTags: (tags) => dispatch(updateFilterTags(tags)),

});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SideNav));