export const fetchNotes = () => (
    $.ajax({
        method: 'GET',
        url: 'api/notes',
    })
);

export const fetchNote = noteId => (
    $.ajax({
        method: 'GET',
        url: `api/notes/${noteId}/`,
    })
);

export const createNote = note => (
    $.ajax({
        method: 'POST',
        url: 'api/notes',
        data: { note }
    })
);

export const updateNote = note => {
    let newNote = {
        note: {
            title: note.title,
            body: note.body,
            author_id: note.author_id,
            notebook_id: note.notebook_id,
        }
    }
    return $.ajax({
        method: 'PATCH',
        url: `api/notes/${note.id}`,
        data: newNote
    })
}

export const deleteNote = noteId => (
    $.ajax({
        method: 'DELETE',
        url: `api/notes/${noteId}`,
    })
);