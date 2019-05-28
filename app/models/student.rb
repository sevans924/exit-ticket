class Student < ApplicationRecord

  has_many :notes
  has_many :teachers, through: :notes

end
