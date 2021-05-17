import React from 'react';
import SideNavContainer from '../sidenav/sidenav_container';
import NotesIndexContainer from '../notes_index/notes_index_container';
import {Route, Switch, Link} from 'react-router-dom';
import NoteShowContainer from '../note_show/note_show_container'

const Main = () => {
    return (
        <div className="main">
            <SideNavContainer />
            <NotesIndexContainer />
            <Route exact path="/notes/:noteId" component={NoteShowContainer} />
        </div>
    )
}

export default Main;