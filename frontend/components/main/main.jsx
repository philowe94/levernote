import React from 'react';
import SideNavContainer from '../sidenav/sidenav_container';
import NotesIndexContainer from '../notes_index/notes_index_container';
import {Route, Switch, Link} from 'react-router-dom';
import NoteShowContainer from '../note_show/note_show_container'
import NotebookIndexContainer from '../notebooks_index/notebooks_index_container'
import NotebookShowContainer from '../notebook_show/notebook_show_container'
import TagsIndexContainer from '../tags/tags_index_container'

const Main = () => {
    return (
        <div className="main">
            <Switch>
                <Route path="/notebooks/:notebookId" component={SideNavContainer} />
                <Route component={SideNavContainer} />
            </Switch> 
            <Route path="/notes/" component={NotesIndexContainer} />
            <Route path="/notes/:noteId" component={NoteShowContainer} />
            <Route exact path="/notebooks/" component={NotebookIndexContainer} />
            <Route path="/notebooks/:notebookId/" component={NotebookShowContainer} />
            <Route path="/notebooks/:notebookId/notes/:noteId" component={NoteShowContainer} />
            <Route path="/tags/" component={TagsIndexContainer} />
        </div>
    )
}

export default Main;