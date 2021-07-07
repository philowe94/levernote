import {
    RECEIVE_CURRENT_NOTEBOOK,
} from '../actions/filter_tags_actions';

const filterTagsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    let newState = Object.assign([], oldState);

    switch (action.type) {
        case RECEIVE_CURRENT_NOTEBOOK:
            return action.notebook;
        default:
            return oldState
    }
}

export default filterTagsReducer;