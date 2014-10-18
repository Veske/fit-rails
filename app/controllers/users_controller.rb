class UsersController < ApplicationController
	before_filter :authenticate_user!
	before_filter :admin_only, :except => :show

	def index
		locals users: User.all
	end

	def show
		user = User.find(params[:id])
		locals user: user
	end

	def update
		user = User.find(params[:id])
		if user.update_attributes(secure_params)
			redirect_to users_path, :notice => 'User updated.'
		else
			redirect_to users_path, :alert => 'Unable to update user.'
		end
	end

	def destroy
		user = User.find(params[:id])
		user.destroy
		redirect_to users_path, :notice => 'User deleted.'
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
