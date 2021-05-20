import {
    RECEIVE_NOTEBOOKS,
    RECEIVE_NOTEBOOK,
    REMOVE_NOTEBOOK,
} from '../actions/notebook_actions'

const notebooksReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    
    switch(action.type) {
        case RECEIVE_NOTEBOOKS:
            return action.notebooks;
        case RECEIVE_NOTEBOOK:
            newState[action.notebook.id] = action.notebook;
            return newState;
        case REMOVE_NOTEBOOK:
            delete newState[action.notebookId]
            return newState;
        default:
            return oldState;
    }
}

export default notebooksReducer;