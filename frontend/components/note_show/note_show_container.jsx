import { connect } from 'react-redux';
import NoteShow from './note_show';
import { fetchNotes, fetchNote, updateNote, deleteNote } from '../../actions/note_actions';
import { createTag } from '../../actions/tag_actions';
import { updateFilterTags } from '../../actions/filter_tags_actions';
import { fetchNoteTags, deleteNoteTag, createNoteTag } from '../../actions/note_tag_actions';

const mapStateToProps = ({entities: { notes, tags, note_tags }}, ownProps) => {
    const note = notes[ownProps.match.params.noteId];
    
    return {
        notes: notes,
        note: note,
        noteId: ownProps.match.params.noteId,
        tags: tags,
        note_tags: note_tags
    }
}
    

const mapDispatchToProps = dispatch => {
    return {
        fetchNotes: () => dispatch(fetchNotes()),
        fetchNote: noteId => dispatch(fetchNote(noteId)),
        updateNote: note => dispatch(updateNote(note)),
        deleteNote: noteId => dispatch(deleteNote(noteId)),
        fetchTags: () => dispatch(fetchTags()),
        createTag: tag => dispatch(createTag(tag)),
        updateFilterTags: (tags) => dispatch(updateFilterTags(tags)),
        fetchNoteTags: () => dispatch(fetchNoteTags()),
        createNoteTag: (note_tag) => dispatch(createNoteTag),
        deleteNoteTag: (note_tagId) => dispatch(deleteNoteTag(note_tagId)),
    }   
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteShow);