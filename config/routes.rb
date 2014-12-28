Rails.application.routes.draw do

	devise_for :users
	resources :users do
		member do
			get :following, :followers
		end
	end

	scope module: 'content' do
		resources :media, only: [:index, :new, :create, :show, :destroy] do
			resources :comments, only: [:create, :destroy]
			resources :likes, only: [:create, :destroy, :index]
		end
	end

	resources :relationships,       only: [:create, :destroy]

	get '/dashboard',   to: 'dashboard#index'
	get '/feed',        to: 'dashboard#feed'
	get '/roles',       to: 'users#roles'

	root to: 'visitors#index'
end