Rails.application.routes.draw do

	mount Upmin::Engine => '/admin'
	devise_for :users
	resources :users
	# only: will be changed later to go with user owned media
    resources :media, only: [:index, :new, :create, :show, :destroy] do
	    resources :comments, only: [:create, :destroy]
    end


	root to: 'visitors#index'
end
