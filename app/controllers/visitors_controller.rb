class VisitorsController < ApplicationController
	respond_to :json

	def index
		if user_signed_in?
			redirect_to dashboard_path
		end
	end
end
