import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
})

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

const clearErrors = () => ({
    type: CLEAR_SESSION_ERRORS,
})

export const clearSessionErrors = () => (dispatch) => {
    dispatch(clearErrors());
}

export const signup = user => dispatch => (
    SessionAPIUtil.signup(user)
    .then(user => (
        dispatch(receiveCurrentUser(user))), 
        err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
)

export const login = user => dispatch => (
    SessionAPIUtil.login(user)
    .then(user => (
        dispatch(receiveCurrentUser(user))), 
        err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);

export const logout = () => dispatch => (
    SessionAPIUtil.logout()
    .then(user => (
        dispatch(logoutCurrentUser())
    ))
)