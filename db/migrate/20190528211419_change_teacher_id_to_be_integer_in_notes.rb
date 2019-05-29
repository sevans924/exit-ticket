class ChangeTeacherIdToBeIntegerInNotes < ActiveRecord::Migration[5.2]
  def change
    change_column :notes, :teacher_id, :integer

  end
end
