module Relationship
	extend ActiveSupport::Concern

	# ========= RELATIONSHIP ============
	# Methods that help forming relationships with users and aid with
	# queries involving relationships between users
	#
	# Relationship use Redis. We add new relationships with sadd:
	#
	#   sadd:	Add member to the set stored at key. If member is already a member of this set,
	#           no operation is performed. If key does not exist, a new set is created with
	#           member as its sole member.

	# Follow a user
	def follow!(user)
		$redis.multi do
			$redis.sadd(self.redis_key(:following), user.id)
			$redis.sadd(user.redis_key(:followers), self.id)
		end
	end

	# Unfollow a user
	def unfollow!(user)
		$redis.multi do
			$redis.srem(self.redis_key(:following), user.id)
			$redis.srem(user.redis_key(:followers), self.id)
		end
	end

	# Users that self follows
	def followers
		user_ids = $redis.smembers(self.redis_key(:followers))
		User.where(id: user_ids)
	end

	# Users that follow self
	def following
		user_ids = $redis.smembers(self.redis_key(:following))
		User.where(id: user_ids)
	end

	# Does self follow user
	def following?(user)
		#following.include?(other_user)
		$redis.sismember(self.redis_key(:following), user.id)
	end

	# Users who follow and are being followed by self
	def friends
		user_ids = $redis.sinter(self.redis_key(:following), self.redis_key(:followers))
		User.where(:id => user_ids)
	end

	# Does the user follow self
	def followed_by?(user)
		$redis.sismember(self.redis_key(:followers), user.id)
	end

	# Number of followers
	def followers_count
		$redis.scard(self.redis_key(:followers))
	end

	# Number of users being followed
	def following_count
		$redis.scard(self.redis_key(:following))
	end

	# Helper method to generate redis keys
	def redis_key(relationship_type)
		"user:#{self.id}:#{relationship_type}"
	end
end