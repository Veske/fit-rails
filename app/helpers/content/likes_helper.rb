module Content::LikesHelper

	def likes_count(medium_id)
		Like.where(medium_id: medium_id).count
	end

	def unlike_params(user_id, medium_id)
		like = Like.where(user_id: user_id, medium_id: medium_id).first!
		return like.id
	end
end
