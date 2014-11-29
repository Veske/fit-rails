class UsersController < ApplicationController
	before_filter :authenticate_user!
	before_filter :admin_only, :except => [:show, :followers, :following]
	respond_to :json

	def index
		users = User.all
		roles = User.roles.keys.map { |role| {name: role.titleize, key: role} }

		respond_to do |format|
			format.html
			format.json { render json: {users: users, roles: roles} }
		end
	end

	def show
		user = User.includes(:media).find(params[:id])
		locals user: user
	end

	# TODO: This action was here by default, but the whole process seems to work without it too.
	# Needs testing and then remove it.
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

	def following
		user  = User.find(params[:id])
		users = user.following
		render 'users/show_follow', locals: {user: user, users: users, title: 'following'}
	end

	def followers
		user  = User.find(params[:id])
		users = user.followers
		render 'users/show_follow', locals: {user: user, users: users, title: 'followers'}
	end

	private
		def admin_only
			unless current_user.admin?
				go_back
			end
		end

		def secure_params
			if current_user && current_user.admin?
				params.require(:user).permit(:role, :name, :email, :password, :password_confirmation, :current_password)
			else
				params.require(:user).permit(:name, :email, :password, :password_confirmation, :current_password)
			end
		end
end
