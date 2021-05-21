import { connect } from 'react-redux';
import { fetchNotebooks, createNotebook } from '../../actions/notebook_actions';
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotebooksIndex);