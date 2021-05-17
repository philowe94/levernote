import { connect } from 'react-redux';
import { fetchNote } from '../../actions/note_actions';
import NoteShow from './note_show';

const mapStateToProps = ({entities: { notes }}, ownProps) => ({
    notes: Object.values(notes),

    note: notes[ownProps.match.params.noteId],
    noteId: ownProps.match.params.noteId
});
    

const mapDispatchToProps = dispatch => ({
    fetchNote: noteId => dispatch(fetchNote(noteId))
});

export default connect(mapStateToProps,mapDispatchToProps)(NoteShow);