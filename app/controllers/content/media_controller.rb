class Content::MediaController < ApplicationController
	before_filter :authenticate_user!, except: :show

	def index
		locals media: Medium.all
	end

	def new
		locals medium: current_user.media.build
	end

	def show
		medium = Medium.includes(:comments, :likes).find(params[:id])
		users = User.joins(comments: :medium).where(comments: {medium_id: medium.id})

		locals comment:     Comment.new,
		       medium:      medium,
		       users:       users,
	           like:        Like.new
	end

	def create
		medium = current_user.media.build(medium_params)

		if medium.save
			logger.info "INFO: New medium uploaded: #{medium.image_video_file_name}"
			redirect_to medium_path(medium), notice: 'New file uploaded'
		else
			logger.info "ERROR: Uploading new medium file #{medium.errors.full_messages}"
			redirect_to new_medium_path, alert: "Could not upload File: #{medium.errors.full_messages}"
		end
	end

	def destroy
		medium = Medium.find(params[:id])

		if current_user.id == medium.user_id && medium.destroy
			logger.info "INFO: medium removed: #{medium.image_video_file_name}"
			redirect_to media_path, notice: 'File removed.'
		else
			logger.info "ERROR: Removing medium with id: #{medium.id}, reason(s): #{medium.errors.full_messages}"
			redirect_to new_medium_path, alert: "Couldn't delete File: #{medium.errors.full_messages}"
		end
	end

	private
		def medium_params
			params.require(:medium).permit(:image_video, :text)
		end
end