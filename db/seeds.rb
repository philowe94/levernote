# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


udemo = User.create!(email: 'demo', password: 'password')
uphil = User.create!(email: 'philip.lowe94@gmail.com', password: 'password')


notebook1 = Notebook.create!(
    name: 'Shopping Lists',
    author_id: udemo.id
)

notebook2 = Notebook.create!(
    name: 'Test notebook 1',
    author_id: udemo.id
)

notebook3 = Notebook.create!(
    name: 'Test notebook 2',
    author_id: udemo.id
)

note1 = Note.create!(
    title: 'Grocery Shopping List', 
    body: '1. Eggs 2. Milk', 
    author_id: udemo.id,
    notebook_id: notebook1.id    
)

note2 = Note.create!(
    title: 'Mothers Day Shopping List', 
    body: '1. Flowers 2. ???', 
    author_id: udemo.id,
    notebook_id: notebook1.id    
)

note3 = Note.create!(
    title: 'Test note', 
    body: '1. Eggs 2. Milk', 
    author_id: udemo.id,
    notebook_id: notebook1.id    
)

note4 = Note.create!(
    title: 'Test note 2', 
    body: '1. Flowers 2. ???', 
    author_id: udemo.id,
    notebook_id: notebook2.id   
)

note5 = Note.create!(
    title: 'Test note 3', 
    body: '1. Eggs 2. Milk', 
    author_id: udemo.id,
    notebook_id: notebook2.id    
)

note6 = Note.create!(
    title: 'Test note 4', 
    body: '1. Flowers 2. ???', 
    author_id: udemo.id,
    notebook_id: notebook1.id     
)

note7 = Note.create!(
    title: 'Test note 7', 
    body: '1. Eggs 2. Milk', 
    author_id: udemo.id,
    notebook_id: notebook3.id    
)

note8 = Note.create!(
    title: 'Test note 8', 
    body: '1. Flowers 2. ???', 
    author_id: udemo.id,
    notebook_id: notebook3.id    
)

note9 = Note.create!(
    title: 'Games to play after graduating aA',
    body: '1. Resident Evil 8',
    author_id: 2
)

note10 = Note.create!(
    title: 'Second note for phil',
    body: 'This is the content of the second note for phil',
    author_id: 2
)

note11 = Note.create!(
    title: 'Favorite Programming Languages', 
    body: '1. Ruby 2. Javascript', 
    author_id: udemo.id, 
)

note12 = Note.create!(
    title: 'Javascript Notes', 
    body: 'Arrow functions capture the scope of where they were defined', 
    author_id: udemo.id, 
)

# Add tags
tag1 = Tag.create!(
    name: 'Shopping',
    author_id: udemo.id
)

tag2 = Tag.create!(
    name: 'Test',
    author_id: udemo.id
)

tag3 = Tag.create!(
    name: 'Programming',
    author_id: udemo.id
)

# Add notetags
notetag1 = NoteTag.create!(
    note_id: note1.id,
    tag_id: tag1.id,
    author_id: udemo.id,
)

notetag2 = NoteTag.create!(
    note_id: note2.id,
    tag_id: tag1.id,
    author_id: udemo.id,
)

notetag3 = NoteTag.create!(
    note_id: note1.id,
    tag_id: tag2.id,
    author_id: udemo.id,
)

notetag4 = NoteTag.create!(
    note_id: note12.id,
    tag_id: tag3.id,
    author_id: udemo.id,
)

notetag4 = NoteTag.create!(
    note_id: note11.id,
    tag_id: tag3.id,
    author_id: udemo.id,
)