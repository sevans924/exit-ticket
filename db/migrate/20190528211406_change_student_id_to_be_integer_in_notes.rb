class ChangeStudentIdToBeIntegerInNotes < ActiveRecord::Migration[5.2]
  def change
        change_column :notes, :student_id, :integer
  end
end
