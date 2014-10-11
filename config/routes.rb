Rails.application.routes.draw do

	mount Upmin::Engine => '/admin'
	devise_for :users
	resources :users
    resources :media

	root to: 'visitors#index'
end
