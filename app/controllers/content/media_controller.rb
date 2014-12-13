class Content::MediaController < ApplicationController
	before_filter :authenticate_user!, except: :show
	respond_to :json

	def index
		media = Medium.all
		respond_with media.to_json
	end

	def new
		medium = current_user.media.build
		respond_with medium
	end

	def show
		medium = Medium.includes([{comments: :user}, :likes, :user]).find(params[:id])
		respond_with medium
	end

	def create
		#text: 'asd', image_video: params[:image_video]

		medium = current_user.media.build(medium_params)

		if medium.save
			logger.info "INFO: New medium uploaded: #{medium.image_video_file_name}"
			#redirect_to medium_path(medium), notice: 'New file uploaded'
			render json: medium, status: 201
		else
			logger.info "ERROR: Uploading new medium file #{medium.errors.full_messages}"
			render json: medium, status: 201
			#redirect_to new_medium_path, alert: "Could not upload File: #{medium.errors.full_messages}"
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