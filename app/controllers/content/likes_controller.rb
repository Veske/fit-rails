class Content::LikesController < ApplicationController

	def index
		locals users: User.joins(likes: :medium).where(likes: {medium_id: params[:medium_id]})
	end

	def create
		like = current_user.likes.build(like_params)
		like.medium_id = params[:medium_id]

		if like.save
			logger.info "INFO: New like created: #{like.id}"
			render json: like, status: 201
		else
			logger.info "ERROR: Could not like medium #{like.errors.full_messages}"
			render json: like, status: 400
		end
	end

	def destroy
		like = Like.find(params[:id])

		if current_user.id == like.user_id && like.destroy
			logger.info "INFO: Unlike medium with id: #{like.medium.id}"
			render json: like, status: 201
		else
			logger.info "ERROR: Unlike for medium with id: #{like.medium.id} failed, reason(s): #{like.errors.full_messages}"
			render json: like, status: 400
		end
	end

	private
		def like_params
			params.require(:like).permit(:user_id)
		end

end
