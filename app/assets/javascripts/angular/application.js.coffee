Fit = angular.module("Fit", ['ngRoute', 'growlNotifications'])

Fit.config ($httpProvider) ->
	authToken = $("meta[name=\"csrf-token\"]").attr("content")
	$httpProvider.defaults.headers.common["X-CSRF-TOKEN"] = authToken

Fit.config ($routeProvider, $locationProvider) ->
	$locationProvider.html5Mode true
	$routeProvider.when '/',  templateUrl: '../../views/visitors/index.html.erb', controller: 'VisitorsCtrl'
	$routeProvider.when '/users', templateUrl: '../../views/users/index.html.erb', controller: 'UsersCtrl'
	# Default
	$routeProvider.otherwise( { redirectTo: "/" } )

# Makes AngularJS work with turbolinks.
$(document).on 'page:load', ->
	$('[ng-app]').each ->
		module = $(this).attr('ng-app')
		angular.bootstrap(this, [module])