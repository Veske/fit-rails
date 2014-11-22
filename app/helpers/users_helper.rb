module UsersHelper

	# Check for views to see if user has any media uploaded
	def has_media?(user)
		user.media.length > 0 ? true : false
	end
end