require 'test_helper'

class UserTest < ActiveSupport::TestCase

	test 'should not save user without email, pw and name' do
		user = User.new
		assert_not user.save, "Saved user without required params"
	end

	test 'should not save without validating email with regex' do
		user = User.new({name: 'test', email: 'badEmail', password: 'changeme1234'})
		assert_not user.save, "Saved with false email"
	end

	test "should follow and unfollow a user" do
		test_user_admin = users(:test_user_admin)
		test_user  = users(:test_user)
		assert_not test_user_admin.following?(test_user)
		test_user_admin.follow(test_user)
		assert test_user_admin.following?(test_user)
		assert test_user.followers.include?(test_user_admin)
		test_user_admin.unfollow(test_user)
		assert_not test_user_admin.following?(test_user)
	end
end
