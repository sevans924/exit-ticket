# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Note.destroy_all


note1 = Note.create(title: "what I learned", content: "Brutus is a liar", time: "5/16/19" )
note2 = Note.create(title: "I learned...", content: "That Caesar should have listened to all of the omens and stayed home.", time: "5/16/19" )
note3 = Note.create(title: "In class...", content: "I learned that Caesar died on the floor of the senate in Rome.", time: "5/16/19" )
note4 = Note.create(title: "In class...", content: "I learned that August wasn't the real son of Caesar.", time: "5/16/19" )
note5 = Note.create(title: "I'm not sure if...", content: "Caesar was the first emperor of Rome or not.", time: "5/16/19" )
note6 = Note.create(title: "I'm not sure...", content: "why Brutus wanted to kill Caesar, he was so nice to him!", time: "5/16/19" )
note7 = Note.create(title: "I'm not sure if...", content: "Caesar was Brutus' father?", time: "5/16/19" )
note8 = Note.create(title: "I'm not sure....", content: "What the ides of March are.", time: "5/16/19" )
note9 = Note.create(title: "what I learned", content: "Caesar's wife had some crazy dreams", time: "5/16/19" )
note10 = Note.create(title: "what I learned", content: "Cleopatra was a boss.", time: "5/16/19" )
