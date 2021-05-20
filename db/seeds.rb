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
    notebook_id: 1    
)

note2 = Note.create!(
    title: 'Mothers Day Shopping List', 
    body: '1. Flowers 2. ???', 
    author_id: udemo.id,
    notebook_id: 1    
)

note3 = Note.create!(
    title: 'Test note', 
    body: '1. Eggs 2. Milk', 
    author_id: udemo.id,
    notebook_id: 1    
)

note4 = Note.create!(
    title: 'Test note 2', 
    body: '1. Flowers 2. ???', 
    author_id: udemo.id,
    notebook_id: 1    
)

note5 = Note.create!(
    title: 'Test note 3', 
    body: '1. Eggs 2. Milk', 
    author_id: udemo.id,
    notebook_id: 2    
)

note6 = Note.create!(
    title: 'Test note 4', 
    body: '1. Flowers 2. ???', 
    author_id: udemo.id,
    notebook_id: 2    
)

note7 = Note.create!(
    title: 'Test note 7', 
    body: '1. Eggs 2. Milk', 
    author_id: udemo.id,
    notebook_id: notebook1.id    
)

note8 = Note.create!(
    title: 'Test note 8', 
    body: '1. Flowers 2. ???', 
    author_id: udemo.id,
    notebook_id: notebook1.id    
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
