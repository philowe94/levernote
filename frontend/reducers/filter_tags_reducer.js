import {
    RECEIVE_FILTER_TAGS,
} from '../actions/filter_tags_actions';

const filterTagsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_FILTER_TAGS:
            return action.filtertags;
        default:
            return oldState
    }
}

export default filterTagsReducer;