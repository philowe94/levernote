# Levernote

Levernote is a clone of Evernote, a popular note taking web app. Levernote allows you to leverage the power of notes, and then organize your notes into collections called notebooks.

[Levernote](https://levernote.herokuapp.com/)

Notes            |  Notebooks
:-------------------------:|:-------------------------:
![Screenshot of the Notes view](./app/assets/images/screenshot1.png) | ![Screenshot of the Notebooks view](./app/assets/images/screenshot2.png)

## Local Installation

These deployment instructions are specific to Ubuntu Linux

`sudo apt-get update` and `sudo apt-get upgrade` before doing anything

You must have ruby 2.7.2 and bundler `sudo apt install ruby-bundler`.

Optionally you can use a version manager for ruby, I use asdf.

- To install asdf, `git clone https://github.com/asdf-vm/asdf.git ~/.asdf --branch v0.11.3`

- Set up asdf in your `~/.bashrc`, or whatever file you use to configure your shell, with `echo ". $HOME/.asdf/asdf.sh" >> ~/.bashrc`

- Reload your terminal to pick up the changes to your shell.

- You must have make and gcc installed `sudo apt-get install make` `sudo apt-get install build-essential`

- `asdf plugin-add ruby` followed by `asdf install ruby 2.7.2`

You must have postgreSQL installed.

 - To install postgreSQL, `sudo apt-get install postgresql postgresql-client`
 
 - To launch postgreSQL, `sudo service postgresql start`

 - To install postgreSQL development headers for ruby, `sudo apt-get install libpq-dev`

 - You must create a postgreSQL role that matches your linux username
    - `sudo -u postgres psql`
    - In the postgres terminal, `CREATE ROLE <username> WITH LOGIN;`
    - Give yourself the appropriate permissions `ALTER ROLE <username> CREATEDB;`
    - Exit the psql terminal with `exit`

 - You must create the databases `createdb levernote_development` `createdb levernote_test`

You must have NVM installed.
 
 - Once installed, `nvm install 10.13.0`

Run `nvm use` so that nvm uses the version specified in the .nvmrc

`bundle install` followed by `npm install`

Install rails with `sudo apt install ruby-railties`

Initialize the database with `rails db:reset`. You must be running PostgreSQL `sudo service postgresql start`.

Start the server with `rails s`

In a different terminal tab, compile the javascript with `npm run webpack`

Navigate your broswer to `localhost:3000`

## Deployment

These are instructions on how to deploy to Heroku

Install heroku `curl https://cli-assets.heroku.com/install.sh | sh`

`heroku git:remote -a levernote`

`git push heroku main`

## Techologies Used

Levernote is built with PostgreSQL, Rails, React, and Redux

PostgreSQL is used to store the users, notes, and notebooks in a database. 

Rails is used to create an API interface for the back end. Rails performs SQL queries and outputs data from the database in the form of JSON objects.

React is used to create a front-end for the information output by the API. Thunk actions perform API calls and then send the response to a Reducer which populates the Redux store. Then the React components use information from the store, such as the current user or some subset of notes, to present information.

## Features

### Notes

Notes are a table in the database with columns for `title`, `body`, `notebook_id`, and `author_id`.

Users are able to create, view, update, and delete notes.

Users see their notes after logging in and clicking Notes on the left sidebar. This will then display a notes list where the user can pick a note to view.

A challenging aspect of implementing the notes feature was creating a way to edit them. This was done by implementing a rich text editor library called React-Quill, and synchronizing the value of that component with the state of its container component. Then the database was updated based on the state change.

```Javascript

class NotesList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    render() {
        let notes = Object.values(this.props.notes).reverse();
        
        return(
            <ul className="notes-index-list">
                {notes.map(note => (
                    <NotesIndexItem note={note} key={note.id} url={this.props.url} />
                ))}
            </ul>
        )
    }
}
```

### Notebooks

Notebooks are a table in the database with columns for name and author_id. They have many notes through database associations.

Users are able to create, view, and delete notebooks.

Userse see their notebooks after logging in and clicking Notebooks on the left sidebar. This will then display a list of notebooks where the user can pick a notebook. Selecting a notebook then displays a list of the notes in that notebook utilizing components built for the Notes feature.

Implementing Notebooks required figuring out how to reuse existing components for new functionality. This was mostly done by wrapping them in new Redux Container components, and then utilizing the react router to use these new containers based on the url. It required some work to make the existing components fit a more general case.

```Javascript
import { connect } from 'react-redux';
import NotesIndex from '../notes_index/notes_index';

const mapStateToProps = (state, ownProps) => {
    let notebook = state.entities.notebooks[ownProps.match.params.notebookId];
    return {
        notebook: notebook,
        notes: state.entities.notes,
        url: `/notebooks/${ownProps.match.params.notebookId}/notes/`,
        notebookName: notebook.name,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchNotes: () => dispatch(fetchNotebook(ownProps.match.params.notebookId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesIndex);
```

### Tags

Tags are a table in the database with columns for name and author_id. They have many notes through a join table of NoteTags.

Users are able to create, view, rename, and delete tags. Users can add tags to notes. Users can use tags to filter through their notes, either by one tag at a time or combinations of tags. 

Users see thier tags after logging in and clicking Tags on the left sidebar. This displays a list of the users tags. Users can create tags here. Tags can also be created when viewing a note in the tag section of that note.

Implementing Tags required more complex database code than the previously existing features, as it necessitated the use of a join table. It also involved a lot of modifications to existing components to incorporate the tags. Both the notes index and the individual note components contain new interactive elements related to tags, such as filtering the list of tags, or adding/removing tags from the note.

## Future

Implement search feature to allow users to filter notes based on a string.

Implement note templates to give users preset suggestions for different kinds of notes.


