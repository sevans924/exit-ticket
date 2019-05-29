class RemoveTimeFromNotes < ActiveRecord::Migration[5.2]
  def change
    remove_column :notes, :time, :string
  end
end
