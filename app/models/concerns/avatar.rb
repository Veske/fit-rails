module Avatar
	extend ActiveSupport::Concern

	# ========= AVATAR ============
	# Methods that help to set avatars for users and aid with
	# queries involving user avatars
	#
	# AVATARS uses Redis.
	# We add a new avatar in the following form: avatar:#{user_id}, #{medium_id}
	#
	# EXAMPLE: avatar:1, 9
	#
	#
	# We add new avatar with sadd:
	#
	#   sadd:	Add member to the set stored at key. If member is already a member of this set,
	#           no operation is performed. If key does not exist, a new set is created with
	#           member as its sole member.
	#
	#

	# Set a new avatar for self
	def set_avatar!(avatar_params)
		puts avatar_params[:medium_id]
		$redis.sadd(redis_avatar_key(self.id), avatar_params[:medium_id])
	end

	# Remove avatar from self
	def remove_avatar!(medium_id)
		$redis.srem(redis_like_key(:likes, medium_id), self.id)
	end

	# Avatar that self has set
	def user_avatar
		user_ids = $redis.smembers("medium:#{self.id}:#{:likes}")
	end

	# Helper method to generate redis keys
	def redis_avatar_key(user_id)
		"avatar:#{user_id}"
	end
end