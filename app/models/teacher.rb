class Teacher < ApplicationRecord

  has_many :notes
  has_many :students, through: :notes


end
