# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

#= require_self
#= require_tree ./controllers/
#= require_tree ./directives/
#= require_tree ./services/

@fit_rails = angular.module("fit_rails", ['ngRoute'])

@fit_rails.config(['$routeProvider', ($routeProvider) ->
	# Route for '/'
	$routeProvider.when('/', { templateUrl: '../../views/visitors/index.html.erb', controller: 'TestCtrl' } )
	$routeProvider.when('/users', { templateUrl: '../../views/users/index.html.erb', controller: 'TestCtrl' } )

	# Default
	$routeProvider.otherwise( { templateUrl: '../../views/visitors/index.html.erb', controller: 'TestCtrl' } )

])