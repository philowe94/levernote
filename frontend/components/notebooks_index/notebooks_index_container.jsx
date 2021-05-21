import { connect } from 'react-redux';
import { fetchNotebooks, createNotebook, deleteNotebook } from '../../actions/notebook_actions';
import NotebooksIndex from './notebooks_index';

const mapStateToProps = ({ session, entities : { notebooks, users }}) => {
    return {
        notebooks: Object.values(notebooks),
        currentUser: users[session.id]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchNotebooks: () => dispatch(fetchNotebooks()),
        createNotebook: (notebook) => dispatch(createNotebook(notebook)),
        deleteNotebook: (notebookId) => dispatch(deleteNotebook(notebookId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotebooksIndex);