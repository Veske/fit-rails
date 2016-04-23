class Like
	include LikeRedis
	alias :read_attribute_for_serialization :send
	attr_reader :user_id

	def initialize(attributes)
		@user_id = attributes[:user_id]
	end
end