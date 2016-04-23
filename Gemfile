source 'http://rubygems.org'

# Environment versions. These versions will be used for main development
# Make sure your own environment contains the same versions of Ruby and Ruby on Rails
ruby '2.3.0'
gem 'rails', '4.2.6'

# Gems for assets
gem 'sass-rails'
gem 'coffee-rails'
gem 'sprockets'
gem 'compass'
gem 'compass-rails'

# Database gems
gem 'pg'
gem 'schema_plus'
gem 'redis'

# Rails server
gem 'passenger'

# Common gems
gem 'quiet_assets'
gem 'uglifier'
gem 'turbolinks'
gem 'jbuilder'
gem 'sdoc', group: :doc
gem 'devise'
gem 'paperclip'
gem 'active_model_serializers', '~> 0.10.0.rc2'

group :development do
	gem 'better_errors'
	gem 'binding_of_caller', :platforms=>[:mri_21]
	gem 'rails_layout'
end

group :production do
	gem 'rails_12factor'
end

# Included web assets required by the project
source 'https://rails-assets.org' do
	gem 'rails-assets-bootstrap', '~> 3.3.5'
	gem 'rails-assets-pure', '~> 0.6.0'
	gem 'rails-assets-angular', '~> 1.4.1'
	gem 'rails-assets-angular-route', '~> 1.4.1'
	gem 'rails-assets-angular-resource', '~> 1.4.1'
	gem 'rails-assets-angular-ui', '~> 0.4.0'
	gem 'rails-assets-angular-devise', '~> 1.1.0'
end