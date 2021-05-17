import React from 'react';
import SideNavContainer from '../sidenav/sidenav_container';
import NotesIndexContainer from '../notes_index/notes_index_container';

const Main = () => {
    return (
        <div className="main">
            <SideNavContainer />
            <NotesIndexContainer />
        </div>
    )
}

export default Main;