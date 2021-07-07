import { connect } from 'react-redux';
import { 
    fetchNotebooks,
    createNotebook, 
    deleteNotebook,
    updateNotebook,
} from '../../actions/notebook_actions';

import NotebooksIndex from './notebooks_index';

const mapStateToProps = ({ session, entities : { notebooks, users }, ui: { filterTags, currentNotebook }}, ownProps) => {
    return {
        notebooks: Object.values(notebooks),
        currentUser: users[session.id],
        filterTags: filterTags,
        currentNotebook: currentNotebook,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchNotebooks: () => dispatch(fetchNotebooks()),

        createNotebook: (notebook) => dispatch(createNotebook(notebook)),
        deleteNotebook: (notebookId) => dispatch(deleteNotebook(notebookId)),
        updateNotebook: (notebook) => dispatch(updateNotebook(notebook)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotebooksIndex);