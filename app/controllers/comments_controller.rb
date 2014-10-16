class CommentsController < ApplicationController

	def index

	end

	def show

	end

	def new
		#@comment = current_user.comments.build
	end

	def create

	end

	def destroy
		@medium = Media.find(params[media_id])
		@comment = @medium.comments.find(params[:id]).destroy

		if @comment.destroy
			logger.info "INFO: Comment removed: #{@comment}"
			redirect_to root_path, notice: 'File removed.'
		else
			redirect_to root_path, alert: "Couldn't delete comment: #{@comment.errors.full_messages}"
		end
	end
end
