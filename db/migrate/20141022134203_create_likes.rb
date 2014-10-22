class CreateLikes < ActiveRecord::Migration
	def change
		create_table :likes do |t|
			t.integer :user_id, null: false
			t.integer :medium_id, null: false

			t.timestamps
		end

		add_index :likes, [:user_id, :medium_id]
	end
end
