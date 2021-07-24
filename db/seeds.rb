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

#demo-user
user1 = User.create!({ username: 'zen', email: 'zen@zenterest.net', password: '123456' })

#seed-group-1
board1 = Board.create!({ title: 'Phase Shift', description: '', author_id: user1.id })

  pin1 = Pin.new({ title: 'Bloom Orb', description: 'The orb slowly blooms into a floral array of red roses before retracting back onto itself.', author_id: user1.id, board_id: board1.id })
  file = open('https://zenterest-seeds.s3.us-east-2.amazonaws.com/z_01.gif')
  pin1.image.attach(io: file, filename: 'z_01.gif')
  pin1.save!

  pin2 = Pin.new({ title: 'Tonal Lava', description: 'Slow waves of cool blues calmly shift into hues of pink and bright orange.', author_id: user1.id, board_id: board1.id })
  file = open('https://zenterest-seeds.s3.us-east-2.amazonaws.com/z_02.jpeg')
  pin2.image.attach(io: file, filename: 'z_02.jpeg')
  pin2.save!

  pin3 = Pin.new({ title: 'Shifting Girl', description: 'The only difference between past and present is semantics. Lives, lived, will live. Dies, died, will die.', author_id: user1.id, board_id: board1.id })
  file = open('https://zenterest-seeds.s3.us-east-2.amazonaws.com/z_03.png')
  pin3.image.attach(io: file, filename: 'z_03.png')
  pin3.save!

  pin4 = Pin.new({ title: 'Pastel Lava', description: 'Rays of pinks extend out from the pastel blue background to make a calming composition.', author_id: user1.id, board_id: board1.id })
  file = open('https://zenterest-seeds.s3.us-east-2.amazonaws.com/z_04.jpeg')
  pin4.image.attach(io: file, filename: 'z_04.jpeg')
  pin4.save!

  pin5 = Pin.new({ title: 'Phase Shifter', description: 'The stone statue is rendered to glitch and morph into brightly colored variants.', author_id: user1.id, board_id: board1.id })
  file = open('https://zenterest-seeds.s3.us-east-2.amazonaws.com/z_05.gif')
  pin5.image.attach(io: file, filename: 'z_05.gif')
  pin5.save!

  pin6 = Pin.new({ title: 'Shiny Floater', description: 'The metalic shape shifts and contorts in space with a rainbow material reflection.', author_id: user1.id, board_id: board1.id })
  file = open('https://zenterest-seeds.s3.us-east-2.amazonaws.com/z_06.gif')
  pin6.image.attach(io: file, filename: 'z_06.gif')
  pin6.save!

  pin7 = Pin.new({ title: 'String Theory', description: 'When one can no longer observe the microcosmos with human sight, we are left to rely on mathematics to guide us. ', author_id: user1.id, board_id: board1.id })
  file = open('https://zenterest-seeds.s3.us-east-2.amazonaws.com/z_07.gif')
  pin7.image.attach(io: file, filename: 'z_07.gif')
  pin7.save!

  pin8 = Pin.new({ title: 'Eternal Shell', description: 'The magic seashell was recovered from the cosmic bay where the sands of time cover the plane.', author_id: user1.id, board_id: board1.id })
  file = open('https://zenterest-seeds.s3.us-east-2.amazonaws.com/z_08.gif')
  pin8.image.attach(io: file, filename: 'z_08.gif')
  pin8.save!

#seed-group-2
board2 = Board.create!({ title: 'John Donne', description: '', author_id: user1.id })

  pin9 = Pin.new({ title: 'Summer Day', description: 'The oil paints sprawl on the canvas, bursting into bright and cheerful colors.', author_id: user1.id, board_id: board2.id })
  file = open('https://zenterest-seeds.s3.us-east-2.amazonaws.com/z_09.jpeg')
  pin9.image.attach(io: file, filename: 'z_09.jpeg')
  pin9.save!

  pin10 = Pin.new({ title: 'Blurred Tinman', description: 'With a pinkish face, the tin soldier stands at attention with his blue officer cap.', author_id: user1.id, board_id: board2.id })
  file = open('https://zenterest-seeds.s3.us-east-2.amazonaws.com/z_010.jpeg')
  pin10.image.attach(io: file, filename: 'z_010.jpeg')
  pin10.save!

  pin11 = Pin.new({ title: 'Ethereal Lasagna', description: 'Only served at the most exclusive cosmic parties. Comes with a complementary cheesy sauce.', author_id: user1.id, board_id: board2.id })
  file = open('https://zenterest-seeds.s3.us-east-2.amazonaws.com/z_011.gif')
  pin11.image.attach(io: file, filename: 'z_010.gif')
  pin11.save!

  pin12 = Pin.new({ title: 'Levitating Cheerios', description: 'Cereal is a fundamental and sacred food for some, and here we see it floating above a pastel plane.', author_id: user1.id, board_id: board2.id })
  file = open('https://zenterest-seeds.s3.us-east-2.amazonaws.com/z_012.gif')
  pin12.image.attach(io: file, filename: 'z_012.gif')
  pin12.save!

  pin13 = Pin.new({ title: 'Salutation Array', description: 'The hands rise up from the ether and greet in an eerie loop. Where do they come from?', author_id: user1.id, board_id: board2.id })
  file = open('https://zenterest-seeds.s3.us-east-2.amazonaws.com/z_013.gif')
  pin13.image.attach(io: file, filename: 'z_013.gif')
  pin13.save!

  pin14 = Pin.new({ title: 'The 4th Dimension', description: 'Suddenly reality shifted before their very eyes, pulling every commuter on the train into a central singularity.', author_id: user1.id, board_id: board2.id })
  file = open('https://zenterest-seeds.s3.us-east-2.amazonaws.com/z_014.gif')
  pin14.image.attach(io: file, filename: 'z_014.gif')
  pin14.save!

  pin15 = Pin.new({ title: 'Home Goods Aisle', description: 'Home insulation can come in handy during hot summers and cold winters alike – and it is pink!', author_id: user1.id, board_id: board2.id })
  file = open('https://zenterest-seeds.s3.us-east-2.amazonaws.com/z_015.gif')
  pin15.image.attach(io: file, filename: 'z_015.gif')
  pin15.save!

  pin16 = Pin.new({ title: 'The Wanderer', description: '"For since the fabric of the universe is most perfect, nothing whatsoever takes place in the universe in which some relation of maximum and minimum does not appear." -Leonhard Euler, De Curvis Elasticis 1744', author_id: user1.id, board_id: board2.id })
  file = open('https://zenterest-seeds.s3.us-east-2.amazonaws.com/z_016.gif')
  pin16.image.attach(io: file, filename: 'z_016.gif')
  pin16.save!

#seed-group-3
board3 = Board.create!({ title: 'Constants and Variables', description: '', author_id: user1.id })

  pin17 = Pin.new({ title: 'Terraforming', description: 'To survive in the cosmos, man must learn to shape new habitable worlds that allow life to floursih.', author_id: user1.id, board_id: board3.id })
  file = open('https://zenterest-seeds.s3.us-east-2.amazonaws.com/z_017.gif')
  pin17.image.attach(io: file, filename: 'z_017.gif')
  pin17.save!

  pin18 = Pin.new({ title: 'Syrup Collision', description: 'Sliding past one another, the green and pink liquids ooze and repel each other in the event.', author_id: user1.id, board_id: board3.id })
  file = open('https://zenterest-seeds.s3.us-east-2.amazonaws.com/z_018.gif')
  pin18.image.attach(io: file, filename: 'z_018.gif')
  pin18.save!

  pin19 = Pin.new({ title: 'Alchemical Magic', description: '"Many have said of Alchemy, that it is for the making of gold and silver. For me such is not the aim, but to consider only what virtue and power may lie in medicines. -Paracelsus"', author_id: user1.id, board_id: board3.id })
  file = open('https://zenterest-seeds.s3.us-east-2.amazonaws.com/z_019.gif')
  pin19.image.attach(io: file, filename: 'z_019.gif')
  pin19.save!

  pin20 = Pin.new({ title: 'Blue Drone Eye', description: 'Of all automata created by mankind, one might think of drones as one of the more friendly varieties.', author_id: user1.id, board_id: board3.id })
  file = open('https://zenterest-seeds.s3.us-east-2.amazonaws.com/z_020.jpeg')
  pin20.image.attach(io: file, filename: 'z_020.jpeg')
  pin20.save!

  pin21 = Pin.new({ title: 'Red Drone Eye', description: 'The brilliant red light shines into a vivid glow against the dark blue background behind it.', author_id: user1.id, board_id: board3.id })
  file = open('https://zenterest-seeds.s3.us-east-2.amazonaws.com/z_021.jpeg')
  pin21.image.attach(io: file, filename: 'z_021.jpeg')
  pin21.save!

  pin22 = Pin.new({ title: 'Violet Manifestation', description: 'The fog that day was bright purple! There had been fog in London before, but this was a first for everyone involved.', author_id: user1.id, board_id: board3.id })
  file = open('https://zenterest-seeds.s3.us-east-2.amazonaws.com/z_022.jpeg')
  pin22.image.attach(io: file, filename: 'z_022.jpeg')
  pin22.save!

  pin23 = Pin.new({ title: 'Glass Worm', description: 'If you look closely at the belly, one can discern that the creature ate the sans-serif typography. ', author_id: user1.id, board_id: board3.id })
  file = open('https://zenterest-seeds.s3.us-east-2.amazonaws.com/z_023.gif')
  pin23.image.attach(io: file, filename: 'z_023.gif')
  pin23.save!

  pin24 = Pin.new({ title: 'Hand Signals', description: 'The creature rises his hand from the pale planar world and gives a clear sign that he comes to our world in peace.', author_id: user1.id, board_id: board3.id })
  file = open('https://zenterest-seeds.s3.us-east-2.amazonaws.com/z_024.gif')
  pin24.image.attach(io: file, filename: 'z_024.gif')
  pin24.save!

board4 = Board.create!({ title: 'String Theory', description: '', author_id: user1.id })

  pin25 = Pin.new({ title: 'Slowfall', description: 'Thinking quickly, the mage quickly reached for his enchanted talisman and summoned a magical cloak to slow his descent.', author_id: user1.id, board_id: board4.id })
  file = open('https://zenterest-seeds.s3.us-east-2.amazonaws.com/z_025.gif')
  pin25.image.attach(io: file, filename: 'z_025.gif')
  pin25.save!

  pin26 = Pin.new({ title: 'Footsie', description: 'Resting leisurely in the pale blue space, this most interesting flower twitches and slowly rotates about upon itself.', author_id: user1.id, board_id: board4.id })
  file = open('https://zenterest-seeds.s3.us-east-2.amazonaws.com/z_026.gif')
  pin26.image.attach(io: file, filename: 'z_026.gif')
  pin26.save!
  
  pin27 = Pin.new({ title: 'Ritual of Summoning', description: 'When hungry, the ability to instantly spawn a plentiful bounty of food can mean the difference between life and death.', author_id: user1.id, board_id: board4.id })
  file = open('https://zenterest-seeds.s3.us-east-2.amazonaws.com/z_027.gif')
  pin27.image.attach(io: file, filename: 'z_027.gif')
  pin27.save!

  pin28 = Pin.new({ title: 'Portal Entrance', description: 'Upon reaching the last antechamber in the temple, we saw the portal entrance before realizing that the walls around us were moving!', author_id: user1.id, board_id: board4.id })
  file = open('https://zenterest-seeds.s3.us-east-2.amazonaws.com/z_028.gif')
  pin28.image.attach(io: file, filename: 'z_028.gif')
  pin28.save!

  pin29 = Pin.new({ title: 'Vegetables', description: '"It would seem the universe does not like its peas mixed with its porridge." -R. Lutece, 1909', author_id: user1.id, board_id: board4.id })
  file = open('https://zenterest-seeds.s3.us-east-2.amazonaws.com/z_029.jpeg')
  pin29.image.attach(io: file, filename: 'z_029.jpeg')
  pin29.save!

  pin30 = Pin.new({ title: 'Glowing plume', description: 'A vivid pink light dashes across the violet plane, leaving a stunning tonal contrast', author_id: user1.id, board_id: board4.id })
  file = open('https://zenterest-seeds.s3.us-east-2.amazonaws.com/z_030.jpeg')
  pin30.image.attach(io: file, filename: 'z_030.jpeg')
  pin30.save!

  pin31 = Pin.new({ title: 'Headache Cure', description: 'The best remedy for a aching head may just be some sunshine and quality time with friends.', author_id: user1.id, board_id: board4.id })
  file = open('https://zenterest-seeds.s3.us-east-2.amazonaws.com/z_031.jpg')
  pin31.image.attach(io: file, filename: 'z_031.jpg')
  pin31.save!

  pin32 = Pin.new({ title: 'Cell Division', description: 'A pivotal step in the formation of life lies in the first cell division of the organism.', author_id: user1.id, board_id: board4.id })
  file = open('https://zenterest-seeds.s3.us-east-2.amazonaws.com/z_032.gif')
  pin32.image.attach(io: file, filename: 'z_032.gif')
  pin32.save!




