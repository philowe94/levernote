import * as NoteApiUtil from '../util/note_api_util';

//Export constants

export const RECEIVE_NOTES = 'RECEIVE_NOTES';
export const RECEIVE_NOTE = 'RECEIVE_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';

//action creators
const receiveNotes = (notes) => {
    
    return ({
        type: RECEIVE_NOTES, 
        notes
    })
}

const receiveNote = ({note}) => {
    return ({
        type: RECEIVE_NOTE,
        note
    })
}

const removeNote = ({note}) => {
    return ({
        type: REMOVE_NOTE,
        noteId
    })
}

//thunk action creators
//fetchNotes
//fetchNote
//createNote
//updateNote
//deleteNote
export const fetchNotes = () => {
    return NoteApiUtil.fetchNotes()
    .then(notes => {
        
        console.log(notes);
        return dispatch(receiveNotes(notes));
    })
}

export const fetchNote = (noteId) => {
    return NoteApiUtil.fetchNote(noteId)
    .then(note => dispatch(receiveNote(note)))
}

export const createNote = (note) => {
    return NoteApiUtil.createNote(note)
    .then(note => dispatch(receiveNote(note)))
}

export const updateNote = (note) => {
    return NoteApiUtil.updateNote(note)
    .then(note => dispatch(receiveNotes(note)))
}

export const deleteNote = (noteId) => (
    NoteApiUtil.deleteNote(noteId)
    .then(() => dispatch(removeNote(noteId)))
)

window.receiveNotes = receiveNotes;