// Components for Notes

// SideNav
// NotesList
// NoteDetail

<li>
            <Link to={`/notes/${props.note.id}`}>
                <div>
                    {props.note.title}
                </div>
                <div>
                    {note.body}
                </div>
                <div>
                    {note.updated_at}
                </div>
            </Link>
        </li>