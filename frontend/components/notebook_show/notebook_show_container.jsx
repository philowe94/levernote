import { connect } from 'react-redux';
import NotesIndex from '../notes_index/notes_index';

const mapStateToProps = (state, ownProps) => {
    let notebook = state.entities.notebooks[ownProps.match.params.notebookId];
    return {
        notebook: notebook,
        notes: state.entities.notes,
        url: `/notebooks/${ownProps.match.params.notebookId}/notes/`
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchNotes: () => dispatch(fetchNotebook(ownProps.match.params.notebookId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesIndex);