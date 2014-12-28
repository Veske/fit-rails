class DashboardController < ApplicationController
	before_filter :authenticate_user!
	respond_to :json

	# We intercept this action to start displaying angular views
	def index

	end

	# We display a new feed for current_user
	def feed
		feed_items = current_user.feed
		respond_with feed: ActiveModel::ArraySerializer.new(feed_items, each_serializer: MediumSerializer)
	end
end