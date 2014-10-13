class CreateMedia < ActiveRecord::Migration
  def change
    create_table :media do |t|
      t.attachment :image_video
      t.string :text,   default: ''

      t.timestamps
    end
  end
end
