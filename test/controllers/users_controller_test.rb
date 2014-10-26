require 'test_helper'

class UsersControllerTest < ActionController::TestCase
	include Devise::TestHelpers

	def setup
		@test_user_admin = users(:test_user_admin)
		@test_user = users(:test_user)
	end

	# Authentication tests
	test 'should get index as authenticated admin user' do
		sign_in users(:test_user_admin)
		@request.env['HTTP_REFERER'] = 'http://test.host/users'
		get :index
		assert_response :success
	end

	test 'should redirect to users when not authenticated as admin' do
		sign_in users(:test_user)
		@request.env['HTTP_REFERER'] = 'http://test.host/users'
		get :index
		assert_redirected_to @request.env['HTTP_REFERER']
	end

	test 'should redirect to sign_in when not authenticated' do
		@request.env['HTTP_REFERER'] = 'http://test.host/users/sign_in'
		get :index
		assert_redirected_to @request.env['HTTP_REFERER']
	end


	# Routing tests
	test "should route to users index" do
		assert_routing '/users', {controller: "users", action: "index"}
	end

	test "should redirect following when not logged in" do
		@request.env['HTTP_REFERER'] = 'http://test.host/users/sign_in'
		get :following, id: @test_user_admin
		assert_redirected_to @request.env['HTTP_REFERER']
	end

	test "should redirect followers when not logged in" do
		@request.env['HTTP_REFERER'] = 'http://test.host/users/sign_in'
		get :followers, id: @test_user_admin
		assert_redirected_to @request.env['HTTP_REFERER']
	end
end