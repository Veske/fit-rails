class Comment < ActiveRecord::Base
	belongs_to :user
	belongs_to :medium

	validates :text,
	          :presence => {length: { maximum: 255 }, message: 'Inputted text is too long (Maximum is 255 characters)'}
	validates :user_id,
	          :presence => { message: 'No user_id provided'}
	validates :medium_id,
	          :presence => { message: 'No medium_id provided' }
end
