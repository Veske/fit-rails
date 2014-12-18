class ApplicationController < ActionController::Base
	# Prevent CSRF attacks by raising an exception.
	# For APIs, you may want to use :null_session instead.
	protect_from_forgery with: :exception
	before_action :configure_permitted_parameters, if: :devise_controller?

	before_filter :intercept_html_requests
	layout nil

	def go_back
		#Attempt to redirect
		redirect_to :back, :alert => "Access denied."

		#Catch exception and redirect to root
		rescue ActionController::RedirectBackError
		redirect_to root_path, :alert => "Access denied."
	end

	private
		# Render a view and pass parameters to it
		# Example usages:
		#
		#   render action: :new, locals: { item: x }
		#   render :new, locals: { item: x }
		#   locals :new, item: x
		#
		#   render locals: { item: x }
		#   locals item: x
		def locals(action = nil, hash)
			render action: action, locals: hash
		end

		# Get HTML requests and direct them to our ng-view
		# TODO: make this method take our controller specific restrictions into consideration also
		def intercept_html_requests
			render('dashboard/index') if request.format == Mime::HTML && authenticate_user!
		end

	protected
		def configure_permitted_parameters
			devise_parameter_sanitizer.for(:sign_up) << :name
			devise_parameter_sanitizer.for(:account_update) << :name
		end
end
