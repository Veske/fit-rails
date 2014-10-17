class MediaController < ApplicationController
	before_filter :authenticate_user!, except: :show

	def index
		media = Media.all
		render 'index', locals: {media: media}
	end

	def new
		medium = current_user.medias.build
		render 'new', locals: { medium: medium }
	end

	def show
		@medium = Media.find(params[:id])
		@comments = @medium.comments
		@users = User.joins(comments: :media).where(comments: {media_id: @medium.id})
	end

	def create
		medium = current_user.medias.build(media_params)

		if medium.save
			logger.info "INFO: New media uploaded: #{medium.image_video_file_name}"
			redirect_to medium_path(medium), notice: 'New file uploaded'
		else
			logger.info "ERROR: Uploading new media file #{medium.errors.full_messages}"
			redirect_to new_medium_path, alert: "Could not upload File: #{medium.errors.full_messages}"
		end
	end

	def destroy
		medium = Media.find(params[:id])

		if current_user.id == medium.user_id && medium.destroy
			logger.info "INFO: Media removed: #{medium.image_video_file_name}"
			redirect_to media_path, notice: 'File removed.'
		else
			logger.info "ERROR: Removing new medi with id: #{medium.id}, reason(s): #{medium.errors.full_messages}"
			redirect_to new_medium_path, alert: "Couldn't delete File: #{medium.errors.full_messages}"
		end
	end

	private
		def media_params
			params.require(:media).permit(:image_video, :text)
		end
end