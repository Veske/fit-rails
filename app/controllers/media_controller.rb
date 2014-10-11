class MediaController < ApplicationController

	def index
		@media = Media.all
	end

	def new
		@media = Media.new
	end

	def show
		@medium = Media.find(params[:id])
	end

	def create
		@media = Media.new(media_params)
		@media.save
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
