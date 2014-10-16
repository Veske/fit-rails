class Comment < ActiveRecord::Base
	belongs_to :user
	belongs_to :media

	validates :text, presence: true, length: { maximum: 255 }
	validates :user_id, presence: true
	validates :media_id, presence: true
end
