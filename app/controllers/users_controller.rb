class UsersController < ApplicationController
	before_filter :authenticate_user!
	before_filter :admin_only, :except => :show

	def index
		@users = User.all
	end

	def show
		@user = User.find(params[:id])
		unless current_user.admin?
			unless @user == current_user
				go_back
			end
		end
	end

	def update
		@user = User.find(params[:id])
		if @user.update_attributes(secure_params)
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
		params.require(:user).permit(:role, :name, :email, :password, :password_confirmation, :current_password)
	end

end
