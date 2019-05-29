# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Note.destroy_all
Student.destroy_all
Teacher.destroy_all




student1 = Student.create(first_name: "Joe", last_name: "Smith", email: "joe.smith@aol.com", grade: 6)
student2 = Student.create(first_name: "Moe", last_name: "Brown", email: "moby@aol.com", grade: 6)
student3 = Student.create(first_name: "Curly", last_name: "Hairs", email: "curly@hotmail.com", grade: 6)
student4 = Student.create(first_name: "Larry", last_name: "Doe", email: "DoeBoy@netscape.com", grade: 6)
student5 = Student.create(first_name: "Lucy", last_name: "Ball", email: "redhead@sbcglobal.com", grade: 6)
student6 = Student.create(first_name: "Shemp", last_name: "Stooge", email: "shempy@zoho.com", grade: 6)
student7 = Student.create(first_name: "Ricky", last_name: "Ricardo", email: "rickyh@yahoo.com", grade: 6)
student8 = Student.create(first_name: "Mary Tyler", last_name: "Moore", email: "gunnamakeit@afterall.com", grade: 6)
student9 = Student.create(first_name: "Liz", last_name: "Lemon", email: "varietyshow@nbc.com", grade: 6)
student10 = Student.create(first_name: "Leslie", last_name: "Knope", email: "Leslie@parks.com", grade: 6)

teacher1 = Teacher.create(first_name: "George", last_name: "Feeney", email: "feeheeheeney@netscape.com")

note1 = Note.create(topic: "Rome", content: "Brutus is a liar", prompt: "Today I learned that...", student: student1, teacher: teacher1)
note2 = Note.create(topic: "Rome", content: "That Caesar should have listened to all of the omens and stayed home.", prompt: "Today I learned that...", student: student2, teacher: teacher1)
note3 = Note.create(topic: "Rome", content: "I learned that Caesar died on the floor of the senate in Rome.", prompt: "Today I learned that...", student: student3, teacher: teacher1)
note4 = Note.create(topic: "Rome", content: "I learned that August wasn't the real son of Caesar.", prompt: "Today I learned that...", student: student4, teacher: teacher1)
note5 = Note.create(topic: "Rome", content: "Caesar was the first emperor of Rome or not.", prompt: "Today I learned that...", student: student5, teacher: teacher1)
note6 = Note.create(topic: "Rome", content: "why Brutus wanted to kill Caesar, he was so nice to him!", prompt: "Today I learned that...", student: student6, teacher: teacher1)
note7 = Note.create(topic: "Rome", content: "Caesar was Brutus' father?", prompt: "Today I learned that...", student: student7, teacher: teacher1)
note8 = Note.create(topic: "Rome", content: "What the ides of March are.", prompt: "Today I learned that...", student: student8, teacher: teacher1)
note9 = Note.create(topic: "Rome", content: "Caesar's wife had some crazy dreams",  prompt: "Today I learned that...", student: student9, teacher: teacher1)
note10 = Note.create(topic: "Rome", content: "Cleopatra was a boss.", prompt: "Today I learned that...", student: student10, teacher: teacher1)
