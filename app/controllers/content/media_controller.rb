class Content::MediaController < ApplicationController
	before_filter :authenticate_user!, except: :show
	respond_to :json

	def index
		respond_with Medium.all, each_serializer: MediumIndexSerializer
	end

	def new
		medium = current_user.media.build
		respond_with medium
	end

	def show
		medium = Medium.includes([{comments: :user}, :user]).find(params[:id])
		respond_with medium
	end

	def create
		medium = current_user.media.build(medium_params)

		if medium.save
			logger.info "INFO: New medium uploaded: #{medium.image_video_file_name}"
			render json: medium, status: 201
		else
			logger.info "ERROR: Uploading new medium file #{medium.errors.full_messages}"
			render json: medium, status: 400
		end
	end

	def destroy
		medium = Medium.find(params[:id])

		if current_user.id == medium.user_id && medium.destroy
			logger.info "INFO: medium removed: #{medium.image_video_file_name}"
			render json: medium, status: 201
		else
			logger.info "ERROR: Removing medium with id: #{medium.id}, reason(s): #{medium.errors.full_messages}"
			render json: medium, status: 400
		end
	end

	private
		def medium_params
			params.require(:medium).permit(:image_video, :text)
		end
end