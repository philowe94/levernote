import * as NoteApiUtil from '../util/note_api_util';

//Export constants

const RECEIVE_NOTES = 'RECEIVE_NOTES';
const RECEIVE_NOTE = 'RECEIVE_NOTE';
const REMOVE_NOTE = 'REMOVE_NOTE';

//action creators
const receiveNotes = (notes) => {
    return ({
        type: RECEIVE_NOTES, 
        notes
    })
}

const receiveNote = (note) => {
    return ({
        type: RECEIVE_NOTE,
        note
    })
}

const removeNote = (noteId) => {
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
    .then(notes => receiveNotes(notes))
}

export const fetchNote = (noteId) => {
    return NoteApiUtil.fetchNote(noteId)
    .then(note => receiveNote(note))
}

export const createNote = (note) => {
    return NoteApiUtil.createNote(note)
    .then(note => receiveNote(note))
}

export const updateNote = (note) => {
    return NoteApiUtil.updateNote(note)
    .then(note => receiveNotes(note))
}

export const deleteNote = (noteId) => {
    return NoteApiUtil.deleteNote(noteId)
    .then(() => removeNote(noteId))
}