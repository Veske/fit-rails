class CommentsController < ApplicationController
	before_filter :authenticate_user!

	def create
		@comment = current_user.comments.build(comment_params)

		if @comment.save
			logger.info "INFO: New post created with id #{@comment.id}."
			render :nothing => true
		else
			logger.debug "ERROR: failed to create new comment #{@comment.errors.full_messages}."
			render :nothing => true
		end
	end

	def destroy
		@comment = Comment.find(params[:id])

		if  current_user.id == @comment.user_id && @comment.destroy
			logger.info "INFO: Comment with id: #{@comment.id} removed."
			redirect_to medium_path(@comment.media_id), notice: 'Comment deleted!'
		else
			# TODO: add validation to Comment for this case
			logger.debug "ERROR: failed to remove comment with id #{@comment.id}, Thrown errors: #{@comment.errors.full_messages}."
			redirect_to medium_path(@comment.media_id), alert: "Couldn't delete comment: #{@comment.errors.full_messages}."
		end
	end

	private
		def comment_params
			params.require(:comment).permit(:text, :user_id, :media_id)
		end
end
