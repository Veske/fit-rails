class MediaController < ApplicationController

	def index
		@media = Media.all
	end

	def new
		@medium = Media.new
	end

	def show
		@medium = Media.find(params[:id])
	end

	def create
		@medium = Media.new(media_params)
		@medium.save
		redirect_to media_path
	end

	def destroy
		Media.find(params[:id]).destroy
		flash[:success] = "Medium removed."
		redirect_to media_path
	end

	private
		def media_params
			params.require(:media).permit(:image_video)
		end
end
