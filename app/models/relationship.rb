class Relationship < ActiveRecord::Base
	belongs_to :follower, class_name: 'User'
	belongs_to :followed, class_name: 'User'

	validates :follower_id,
              :presence => { message: 'No follower_id provided' }
	validates :followed_id,
              :presence => { message: 'No followed_id provided' }
end
