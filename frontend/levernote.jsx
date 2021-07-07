import '@fortawesome/fontawesome-free/js/all.js';

//react
import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

//testing
import * as SessionAPIUtil from './util/session_api_util';
import * as NotebookActions from './actions/notebook_actions';
import * as SessionActions from './actions/session_actions';
import * as TagActions from './actions/tag_actions';

//components
import configureStore from './store/store';
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {

  //tags actions Testing
  window.fetchTags = TagActions.fetchTags;
  window.fetchTag = TagActions.fetchTag;
  window.createTag = TagActions.createTag;
  window.updateTag = TagActions.updateTag;
  window.deleteTag = TagActions.deleteTag;

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
    
    Modal.setAppElement(document.getElementById('root'));
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
});

