module Content::LikesHelper

	def like_exists?(user, medium)
		if medium.likes.length > 0
			medium.likes.each do |like|
				like.user_id == user.id ? true : false
			end
		else
			false
		end
	end

	def unlike_params(user, medium)
		if medium.likes.length > 0
			medium.likes.each do |like|
				like.user_id == user.id ? like.id : false
			end
		else
			false
		end
	end
end
