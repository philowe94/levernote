import React from 'react'
import { Link } from 'react-router-dom';

const NotesIndexItem = props => {
    
    return(
        <li>
            <Link to={`/notes/${props.note.id}`}>
                <div>
                    {props.note.title}
                </div>
                <div>
                    {props.note.body}
                </div>
                <div>
                    {props.note.updated_at}
                </div>
            </Link>
        </li>
    )
}
   

export default NotesIndexItem;