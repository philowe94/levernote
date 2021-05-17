import {
    RECEIVE_NOTES,
    RECEIVE_NOTE,
    REMOVE_NOTE
} from '../actions/note_actions';

const notesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    
    switch (action.type) {
        case RECEIVE_NOTES:
            
            return action.notes;
        case RECEIVE_NOTE:
            
            newState[action.note.id] = action.note;
            
            return newState;
        case REMOVE_NOTE:
            delete newState[action.note.id];
        default:
            return oldState;
    }
}

export default notesReducer

