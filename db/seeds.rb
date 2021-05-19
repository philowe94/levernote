# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


udemo = User.create!(email: 'demo', password: 'password')
uphil = User.create!(email: 'philip.lowe94@gmail.com', password: 'password')

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
    title: 'Games to play after graduating aA',
    body: '1. Resident Evil 8',
    author_id: uphil.id
)

note4 = Note.create!(
    title: 'Second note for phil',
    body: 'This is the content of the second note for phil',
    author_id: uphil.id
)

notebook1 = Notebook.create!(
    name: 'Shopping Lists',
    author_id: udemo.id
)