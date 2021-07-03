import {
    RECEIVE_NOTE_TAGS,
    RECEIVE_NOTE_TAG,
    REMOVE_NOTE_TAG
} from '../actions/note_tag_actions';

const noteTagsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    
    switch (action.type) {
        case RECEIVE_NOTE_TAGS:
            return action.note_tags;
        case RECEIVE_NOTE_TAG:
            newState[action.note.id] = action.note_tag;
            return newState;
        case REMOVE_NOTE_TAG:
            delete newState[action.noteId];
            return newState;
        default:
            return oldState;
    }
}

export default noteTagsReducer