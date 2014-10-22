class Like < ActiveRecord::Base
	belongs_to :user
	belongs_to :medium

	validates :user_id,
              :presence => { message: 'No user_id provided' }
	validates :medium_id,
	          :presence => { message: 'No medium_id provided' }


end
