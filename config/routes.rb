Rails.application.routes.draw do

	mount Upmin::Engine => '/admin'
	devise_for :users
	resources :users
	# only: will be changed later to go with user owned media
    resources :media, only: [:index, :new, :create, :show, :destroy]
	resources :comments, only: [:index, :create, :destroy]

	root to: 'visitors#index'
end
