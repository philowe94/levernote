import {
    RECEIVE_TAGS,
    RECEIVE_TAG,
    REMOVE_TAG,
} from '../actions/tag_actions';

const tagsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_TAGS:
            return action.tags;
        case RECEIVE_TAG:
            newState[action.tag.id] = action.tag;
            return newState;
        case REMOVE_TAG:
            delete newState[action.tagId];
            return newState;
        default:
            return oldState;
    }
}

export default tagsReducer;