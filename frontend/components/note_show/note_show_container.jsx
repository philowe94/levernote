import { connect } from 'react-redux';
import { fetchNotes, fetchNote, updateNote, deleteNote } from '../../actions/note_actions';
import { createTag } from '../../actions/tag_actions';
import NoteShow from './note_show';

const mapStateToProps = ({entities: { notes }}, ownProps) => {
    const note = notes[ownProps.match.params.noteId];
    
    return {
        notes: notes,
        note: note,
        noteId: ownProps.match.params.noteId,
    }
}
    

const mapDispatchToProps = dispatch => {
    return {
        fetchNotes: () => dispatch(fetchNotes()),
        fetchNote: noteId => dispatch(fetchNote(noteId)),
        updateNote: note => dispatch(updateNote(note)),
        deleteNote: noteId => dispatch(deleteNote(noteId)),
        createTag: tag => dispatch(createTag(tag)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteShow);