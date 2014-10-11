class AddUserIdToMedia < ActiveRecord::Migration
	def change
		add_column :media, :user_id, :integer

		add_index :media, :user_id
	end
end
