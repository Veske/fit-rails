class UsersController < ApplicationController
	before_filter :authenticate_user!
	before_filter :admin_only, :except => [:show, :followers, :following, :feed]
	respond_to :json

	def index
		respond_with User.all, each_serializer: UserSimpleSerializer
	end

	def roles
		roles = User.roles.keys.map { |role| {name: role.titleize, key: role} }
		respond_with roles
	end

	def show
		user = User.includes(:media).find(params[:id])
		media = user.media
		following = user.following
		followers = user.followers
		is_following = current_user.following?(user)
		respond_with user: user,
		             media: media,
		             following: following,
		             followers:    followers,
		             is_following: is_following
	end

	def following
		user  = User.find(params[:id])
		users = user.following
		respond_with user: user, users: users
	end

	def followers
		user  = User.find(params[:id])
		users = user.followers
		respond_with user: user, users: users
	end

	def set_avatar
		user = User.find(params[:id])
		user.set_avatar!(avatar_params)
		respond_with user
	end

	def update
		user = User.find(params[:id])
		if user.update_attributes(secure_params)
			logger.debug "INFO: User with id: #{user.id} updated!"
			respond_to do |format|
				format.html
				format.json { render json: {user: user} }
			end
		else
			logger.debug "INFO: Was not able to update user with id: #{user.id} - #{user.errors.full_messages}"
			respond_to do |format|
				format.html
				format.json { render json: {user: user} }
			end
		end
	end

	def destroy
		user = User.find(params[:id])
		user.destroy
		redirect_to users_path, :notice => 'User deleted.'
	end

	# We display a news feed for current_user
	def feed
		media = current_user.feed
		respond_with media, each_serializer: MediumSerializer, root: 'media'
		#respond_with feed: ActiveModel::ArraySerializer.new(media, each_serializer: MediumSerializer)
	end

	private
		def admin_only
			unless current_user.admin?
				go_back
			end
		end

		def avatar_params
			params.require(:avatar).permit(:medium_id)
		end

		def secure_params
			if current_user&.admin?
				params.require(:user).permit(:role, :name, :email, :password, :password_confirmation, :current_password)
			else
				params.require(:user).permit(:name, :email, :password, :password_confirmation, :current_password)
			end
		end
end
