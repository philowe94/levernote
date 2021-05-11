//react
import React from "react";
import ReactDOM from "react-dom";

//testing
import * as SessionAPIUtil from './util/session_api_util'

//components
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {

    window.signup = SessionAPIUtil.signup;
    window.login = SessionAPIUtil.login;
    window.logout = SessionAPIUtil.logout;

    const store = configureStore();
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    const root = document.getElementById("root");
    ReactDOM.render(<h1>Levernote</h1>, root);
});

