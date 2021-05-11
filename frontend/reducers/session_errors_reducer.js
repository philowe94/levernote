import {
    RECEIVE_SESSION_ERRORS,
    RECEIVE_CURRENT_USER,
} from '../actions/session_actions';

//errors are an array
//listen for 2 types of actions
//for RECEIVE_SESSION_ERRORS return the action.errors
//for RECEIVE_CURRENT_USER clear the errors array
export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        case RECEIVE_CURRENT_USER:
            return [];
    }
}