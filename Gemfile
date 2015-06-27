source 'http://rubygems.org'

# Environment versions. These versions will be used for main development
# Make sure your own environment contains the same versions of Ruby and Ruby on Rails
ruby '2.2.0'
gem 'rails', '4.2.0'

# Gems for assets
gem 'sass-rails', '~> 5.0.3'
gem 'coffee-rails'
gem 'sprockets'

# Database gems
gem 'pg'
gem 'schema_plus'
gem 'redis'

# Rails server
gem 'passenger'

# Common gems
gem 'quiet_assets'
gem 'uglifier', '>= 1.3.0'
gem 'turbolinks'
gem 'jbuilder', '~> 2.2.11'
gem 'sdoc', '~> 0.4.1', group: :doc
gem 'devise'
gem 'paperclip'
gem 'active_model_serializers', '~> 0.10.0.rc2'
#gem 'active_model_serializers', '~> 0.9.3'
#gem 'active_model_serializers', '~> 0.8.3'
#gem 'active_model_serializers', github: 'rails-api/active_model_serializers'

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
	gem 'rails-assets-purecss', '~> 0.6.0'
	gem 'rails-assets-angular', '~> 1.4.1'
	gem 'rails-assets-angular-route', '~> 1.4.1'
	gem 'rails-assets-angular-resource', '~> 1.4.1'
end