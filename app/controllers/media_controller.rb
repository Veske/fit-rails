class MediaController < ApplicationController
	before_filter :authenticate_user!, except: :show

	def index
		@media = Media.all
	end

	def new
		@medium = current_user.medias.build
	end

	def show
		@medium = Media.find(params[:id])
	end

	def create
		@medium = current_user.medias.build(media_params)

		if @medium.save
			redirect_to medium_path(@medium), notice: 'New file uploaded'
		else
			redirect_to new_medium_path, alert: "Could not upload File: #{@medium.errors.full_messages}"
		end
	end

	def destroy
		@medium = Media.find(params[:id]).destroy

		if @medium.destroy
			redirect_to media_path, notice: 'File removed.'
		else
			redirect_to new_medium_path, alert: "Couldn't delete File: #{@medium.errors.full_messages}"
		end
	end

	private
		def media_params
			params.require(:media).permit(:image_video, :text)
		end
end