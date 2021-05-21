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

// Stuff I have to do for Friday
// Move existing note to notebook (ehh)
// Styling