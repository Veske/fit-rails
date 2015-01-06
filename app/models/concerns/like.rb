module Like
	extend ActiveSupport::Concern

	# ========= LIKE ============
	# Methods that help forming likes with users and aid with
	# queries involving likes between users
	#
	# Likes use Redis. We add new like with sadd:
	#
	#   sadd:	Add member to the set stored at key. If member is already a member of this set,
	#           no operation is performed. If key does not exist, a new set is created with
	#           member as its sole member.
	#
	#  :likes is a medium with an ID, that can have many likers with user ID's
	#

	# Like a user
	def like!(medium_id)
		$redis.sadd(redis_like_key(:likes, medium_id), self.id)
	end

	# Unlike a user
	def unlike!(medium_id)
		$redis.srem(redis_like_key(:likes, medium_id), self.id)
	end

	# Users that self likes
	def likes
		user_ids = $redis.smembers("medium:#{self.id}:#{:likes}")
	end

	# Helper method to generate redis keys
	def redis_like_key(like_type, medium_id)
		"medium:#{medium_id}:#{like_type}"
	end
end