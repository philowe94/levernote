import React from 'react'
import { Link } from 'react-router-dom';

const convertDate = dateTime => {
    let dateObject = new Date(dateTime);
        
    const dateOptions = { month: 'numeric', day: 'numeric', year: 'numeric' };
    let date = dateObject.toLocaleDateString('en-US', dateOptions);
    
    const now = new Date();
    const dateObj = new Date(date);

    if ((now.getDate() === dateObj.getDate()) && (now.getMonth() === dateObj.getMonth()) && (now.getYear() === dateObj.getFullYear())) {
        return `Today`;
    }

    if ((now.getDate() - dateObj.getDate() === 1) || (now.getMonth() - dateObj.getMonth() === 1) || (now.getYear() - dateObj.getFullYear() === 1)) {
        return `Yesterday`;
    }

    return date;
};

const NotesIndexItem = props => {
    let strippedbody = props.note.body.replace(/(<([^>]+)>)/gi, "").substring(0,80);

    
    return(
        <Link to={`${props.url}${props.note.id}`} >

        <li>
                <div className="notes-index-item-title">
                    {props.note.title}
                </div>
                <div className="notes-index-item-body">
                    {strippedbody}...
                </div>
                <div className="notes-index-item-footer">
                    <div className="notes-index-item-time">
                        {convertDate(props.note.updated_at)}
                    </div>
                    <div className="notes-index-item-tags">
                        {Object.values(props.note.tags).map((tag) => (
                            <div className="notes-index-item-tag">
                                {tag.name}
                            </div>
                        ))}
                    </div>
                </div>
        </li>
        </Link>

    )
}
   

export default NotesIndexItem;