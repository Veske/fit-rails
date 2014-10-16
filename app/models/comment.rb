class Comment < ActiveRecord::Base
	belongs_to :user
	belongs_to :media

	validates :text,
	          :presence => {length: { maximum: 255 }, message: 'Inputted text is too long (Maximum is 255 characters)'}
	validates :user_id,
	          :presence => { message: 'No user_id provided'}
	validates :media_id,
	          :presence => { message: 'No media_id provided' }
end
