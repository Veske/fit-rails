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
	# We remove an avatar with srem:
	#
	#   srem:   Remove the specified members from the set stored at key.
	#           Specified members that are not a member of this set are ignored.
	#           If key does not exist, it is treated as an empty set and this command returns 0.
	#           An error is returned when the value stored at key is not a set.
	#
	# We remove the whole key to ensure that no duplicates are created with del
	#
	#   del:    Removes the specified keys. A key is ignored if it does not exist.
	#           Complexity: O(N), when removing a single key, complexity is O(1)


	# Set a new avatar for self
	# If user allready has an avatar, delete it's last avatar and replace it with the new one
	def set_avatar!(avatar_params)
		if self.current_avatar[0] != avatar_params[:medium_id] && self.current_avatar.size <= 1
			$redis.sadd(redis_avatar_key(self.id), avatar_params[:medium_id])
		else
			$redis.del(redis_avatar_key(self.id))
			$redis.sadd(redis_avatar_key(self.id), avatar_params[:medium_id])
		end
	end

	# Remove avatar from self
	def remove_avatar!(medium_id)
		$redis.srem(redis_avatar_key(:medium_id), self.id)
	end

	# Avatar that self has set
	def current_avatar
		$redis.smembers("avatar:#{self.id}")
	end

	# Helper method to generate redis keys
	def redis_avatar_key(user_id)
		"avatar:#{user_id}"
	end
end