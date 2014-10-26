require 'test_helper'

class Content::MediaControllerTest < ActionController::TestCase
	include Devise::TestHelpers

	test 'should get index as authenticated admin user' do
		sign_in users(:test_user_admin)
		@request.env['HTTP_REFERER'] = 'http://test.host/media'
		get :index
		assert_response :success
	end
end