# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# Create seed users
User.create([
	{name: 'Admin', email: 'admin@admin.com', password: 'changeme', role: 2},
	{name: 'User', email: 'user@user.com', password: 'changeme', role: 0}
])

Medium.create([
	{text: 'Some text nr1', image_video: File.new("#{Rails.root}/public/images/1.png"), user_id: 1},
	{text: 'Some text nr2', image_video: File.new("#{Rails.root}/public/images/2.jpg"), user_id: 1},
    {text: 'Some text nr3', image_video: File.new("#{Rails.root}/public/images/3.jpg"), user_id: 2}
])

Comment.create([
	{text: 'Random comment 123', user_id: 1, medium_id: 1},
    {text: 'Comment about picture', user_id: 2, medium_id: 1},
	{text: 'Random comment 123', user_id: 1, medium_id: 2},
	{text: 'Comment about picture', user_id: 2, medium_id: 2},
	{text: 'Random comment 123', user_id: 1, medium_id: 3},
	{text: 'Comment about picture', user_id: 2, medium_id: 3}
])