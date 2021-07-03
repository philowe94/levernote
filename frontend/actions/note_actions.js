import * as NoteApiUtil from '../util/note_api_util';

//Export constants

export const RECEIVE_NOTES = 'RECEIVE_NOTES';
export const RECEIVE_NOTE = 'RECEIVE_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';

//action creators
const receiveNotes = (notes) => ({
    type: RECEIVE_NOTES, 
    notes
})

const receiveNote = (note) => ({
    type: RECEIVE_NOTE,
    note
});

const removeNote = (noteId) => ({
    type: REMOVE_NOTE,
    noteId
})

//thunk action creators
export const fetchNotes = () => dispatch => (
    NoteApiUtil.fetchNotes()
    .then(notes => dispatch(receiveNotes(notes)))
);

export const fetchNote = (noteId) => dispatch => (
    NoteApiUtil.fetchNote(noteId)
    .then(note => dispatch(receiveNote(note)))
);


export const createNote = (note) => dispatch =>  {
    return NoteApiUtil.createNote(note)
    .then(note => dispatch(receiveNote(note)))
}

export const updateNote = (note) => dispatch => {
    return NoteApiUtil.updateNote(note)
    .then(note => dispatch(receiveNote(note)))
}

export const deleteNote = (noteId) => dispatch => (
    NoteApiUtil.deleteNote(noteId)
    .then(() => dispatch(removeNote(noteId)))
)