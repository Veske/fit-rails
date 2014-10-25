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
