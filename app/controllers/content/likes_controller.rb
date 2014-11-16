class Content::LikesController < ApplicationController

	def index
		locals users: User.joins(likes: :medium).where(likes: {medium_id: params[:medium_id]})
	end

	def create
		like = current_user.likes.build(like_params)
		like.medium_id = params[:medium_id]

		if like.save
			logger.info "INFO: New like created: #{like.id}"
			render nothing: true
		else
			logger.info "ERROR: Could not like medium #{like.errors.full_messages}"
			render nothing: true
		end
	end

	def destroy
		like = Like.find(params[:id])

		if current_user.id == like.user_id && like.destroy
			logger.info "INFO: Unlike medium with id: #{like.medium.id}"
			redirect_to medium_path(like.medium), notice: 'Unliked.'
		else
			logger.info "ERROR: Unlike for medium with id: #{like.medium.id} failed, reason(s): #{like.errors.full_messages}"
			redirect_to medium_path(like.medium), notice: 'Was not able to unlike this medium.'
		end
	end

	private
		def like_params
			params.require(:like).permit(:user_id, :medium_id)
		end

end
