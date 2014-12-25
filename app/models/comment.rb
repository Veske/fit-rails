class Comment < ActiveRecord::Base
	belongs_to :user
	belongs_to :medium

	validates :text,
	          presence: {
		          length: { maximum: 255 }, message: 'Inputted text is too long (Maximum is 255 characters)',
	              length: { minimum: 1 },   message: 'Inputtes text is too small (Minimum is 1 character)'
	          }
	validates :user_id,
	          presence: { message: 'No user_id provided'}
	validates :medium_id,
	          presence: { message: 'No medium_id provided' }
end
