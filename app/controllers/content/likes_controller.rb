class Content::LikesController < ApplicationController
	before_filter :authenticate_user!

	def create
		current_user.like!(params[:medium_id])
		like = current_user
		render json: like, status: 201
	end

	def destroy
		current_user.unlike!(params[:medium_id])
		render json: 201
	end

	private
		def like_params
			params.require(:like).permit(:user_id)
		end
end
