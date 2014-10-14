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
end
