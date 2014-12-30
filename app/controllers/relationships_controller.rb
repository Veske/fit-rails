class RelationshipsController < ApplicationController
	before_filter :authenticate_user!
	respond_to :json

	def create
		user = User.find(params[:user_to_follow_id])
		current_user.follow!(user)
		render json: 201
	end

	def destroy
		user = User.find(params[:id])
		current_user.unfollow!(user)
		render json: 201
	end
end