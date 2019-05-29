class CreateNotes < ActiveRecord::Migration[5.2]
  def change
    create_table :notes do |t|
      t.string :topic
      t.text :content
      t.string :prompt
      t.references :student, foreign_key: true
      t.references :teacher, foreign_key: true

      t.timestamps
    end
  end
end
