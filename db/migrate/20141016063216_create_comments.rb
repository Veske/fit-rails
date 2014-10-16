class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :text,       null: false, default: ''
      t.integer :user_id,   null: false
      t.integer :media_id,  null: false

      t.timestamps
    end
	  add_index :comments, :user_id
	  add_index :comments, :media_id
  end
end
