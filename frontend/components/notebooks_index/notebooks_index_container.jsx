import { connect } from 'react-redux';
import { fetchNotebooks } from '../../actions/notebook_actions';
import NotebooksIndex from './notebooks_index';

const mapStateToProps = ({entities : { notebooks }}) => {
    return {
        notebooks: Object.values(notebooks)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchNotebooks: () => dispatch(fetchNotebooks()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotebooksIndex);