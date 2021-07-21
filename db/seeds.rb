# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'


User.destroy_all
Board.destroy_all
Pin.destroy_all


#seed-users
user1 = User.create!({ username: 'zen', email: 'zen@zenterest.net', password: '123456' })

#seed-boards
board1 = Board.create!({ title: 'String Theory', description: '', author_id: user1.id })
board2 = Board.create!({ title: 'Dutch Art', description: '', author_id: user1.id })
board3 = Board.create!({ title: 'Pastels', description: '', author_id: user1.id })
board4 = Board.create!({ title: 'Phase Shift', description: '', author_id: user1.id })


#seed-pins

pin1 = Pin.new({ 
  title: 'Bloom Orb', 
  description: 'The orb slowly blooms into a floral array of red roses before retracting back onto itself.', 
  author_id: user1.id, 
  board_id: board1.id })
file = open('https://zenterest-seeds.s3.us-east-2.amazonaws.com/z_01.gif')
pin1.image.attach(io: file, filename: 'z_01.gif')
pin1.save!

pin2 = Pin.new({ 
  title: 'Tonal Lava', 
  description: 'Slow waves of cool blues calmly shift into hues of pink and bright orange.', 
  author_id: user1.id, 
  board_id: board1.id })
file = open('https://zenterest-seeds.s3.us-east-2.amazonaws.com/z_02.jpeg')
pin2.image.attach(io: file, filename: 'z_02.jpeg')
pin2.save!

pin3 = Pin.new({ 
  title: 'Shifting Girl', 
  description: 'The only difference between past and present is semantics. Lives, lived, will live. Dies, died, will die.', 
  author_id: user1.id, 
  board_id: board1.id })
file = open('https://zenterest-seeds.s3.us-east-2.amazonaws.com/z_03.png')
pin3.image.attach(io: file, filename: 'z_03.png')
pin3.save!

pin4 = Pin.new({ 
  title: 'Pastel Lava', 
  description: 'Rays of pinks extend out from the pastel blue background to make a calming composition.', 
  author_id: user1.id, 
  board_id: board2.id })
file = open('https://zenterest-seeds.s3.us-east-2.amazonaws.com/z_04.jpeg')
pin4.image.attach(io: file, filename: 'z_04.jpeg')
pin4.save!

pin5 = Pin.new({ 
  title: 'Phase Shifter', 
  description: 'The stone statue is rendered to glitch and morph into brightly colored variants.', 
  author_id: user1.id, 
  board_id: board2.id })
file = open('https://zenterest-seeds.s3.us-east-2.amazonaws.com/z_05.gif')
pin5.image.attach(io: file, filename: 'z_05.gif')
pin5.save!

pin6 = Pin.new({ 
  title: 'Shiny Floater', 
  description: 'The metalic shape shifts and contorts in space with a rainbow material reflection.', 
  author_id: user1.id, 
  board_id: board2.id })
file = open('https://zenterest-seeds.s3.us-east-2.amazonaws.com/z_06.gif')
pin6.image.attach(io: file, filename: 'z_06.gif')
pin6.save!

pin7 = Pin.new({ 
  title: 'String Theory', 
  description: 'When one can no longer observe the microcosmos with human sight, we are left to rely on mathematics to guide us. ', 
  author_id: user1.id, 
  board_id: board3.id })
file = open('https://zenterest-seeds.s3.us-east-2.amazonaws.com/z_07.gif')
pin7.image.attach(io: file, filename: 'z_07.gif')
pin7.save!

pin8 = Pin.new({ 
  title: 'Eternal Shell', 
  description: 'The magic seashell was recovered from the cosmic bay where the sands of time cover the plane.', 
  author_id: user1.id, 
  board_id: board3.id })
file = open('https://zenterest-seeds.s3.us-east-2.amazonaws.com/z_08.gif')
pin8.image.attach(io: file, filename: 'z_08.gif')
pin8.save!

pin9 = Pin.new({ 
  title: 'Summer Day', 
  description: 'The oil paints sprawl on the canvas, bursting into bright and cheerful colors.', 
  author_id: user1.id, 
  board_id: board3.id })
file = open('https://zenterest-seeds.s3.us-east-2.amazonaws.com/z_09.jpeg')
pin9.image.attach(io: file, filename: 'z_09.jpeg')
pin9.save!

pin10 = Pin.new({ 
  title: 'Blurred Tinman', 
  description: 'With a pinkish face, the tin soldier stands at attention with his blue officer cap.', 
  author_id: user1.id, 
  board_id: board4.id })
file = open('https://zenterest-seeds.s3.us-east-2.amazonaws.com/z_010.jpeg')
pin10.image.attach(io: file, filename: 'z_010.jpeg')
pin10.save!

pin11 = Pin.new({ 
  title: 'Ethereal Lasagna', 
  description: 'Only served at the most exclusive cosmic parties. Comes with a complementary cheesy sauce.', 
  author_id: user1.id, 
  board_id: board4.id })
file = open('https://zenterest-seeds.s3.us-east-2.amazonaws.com/z_011.gif')
pin11.image.attach(io: file, filename: 'z_010.gif')
pin11.save!

pin12 = Pin.new({ 
  title: 'Levitating Cheerios', 
  description: 'Cereal is a fundamental and sacred food for some, and here we see it floating above a pastel plane.', 
  author_id: user1.id, 
  board_id: board4.id })
file = open('https://zenterest-seeds.s3.us-east-2.amazonaws.com/z_012.gif')
pin12.image.attach(io: file, filename: 'z_012.gif')
pin12.save!

