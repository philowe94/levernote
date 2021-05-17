//react
import React from "react";
import ReactDOM from "react-dom";

//testing
import * as SessionAPIUtil from './util/session_api_util'

import * as NotesActions from './actions/note_actions'

import * as SessionActions from './actions/session_actions'

//components
import configureStore from './store/store';
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {

  //notesAPI Testing
  window.fetchNotes = NotesActions.fetchNotes;
  window.fetchNote = NotesActions.fetchNote;
  window.createNote = NotesActions.createNote;
  window.updateNote = NotesActions.updateNote;
  window.deleteNote = NotesActions.deleteNote;

    //store
    let store;
    if (window.currentUser) {
      const preloadedState = {
        entities: {
          users: { [window.currentUser.id]: window.currentUser }
        },
        session: { id: window.currentUser.id }
      };
      store = configureStore(preloadedState);
      delete window.currentUser;
    } else {
      store = configureStore();
    }    
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
});

