class ChangeCommentNote < ActiveRecord::Migration[5.2]
  def change
    change_column :comments, :note_id, :integer

  end
end
