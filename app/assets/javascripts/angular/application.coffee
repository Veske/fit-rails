Fit = angular.module("Fit", ['ngRoute', 'growlNotifications'])

Fit.config ($httpProvider) ->
	authToken = $("meta[name=\"csrf-token\"]").attr("content")
	$httpProvider.defaults.headers.common["X-CSRF-TOKEN"] = authToken

Fit.config ($routeProvider, $locationProvider) ->

	$routeProvider
	.when '/dashboard',
		templateUrl: 'templates/dashboard/index.html',
		controller: 'DashboardCtrl'
	.when '/users',
		templateUrl: 'templates/users/index.html',
		controller: 'UsersIndexCtrl'
	.when '/media/new',
		templateUrl: 'templates/content/media/new.html',
		controller: 'MediumNewCtrl'
	.when '/media',
		templateUrl: 'templates/content/media/index.html',
		controller: 'MediaIndexCtrl'
	.when '/media/:id',
		templateUrl: 'templates/content/media/show.html',
		controller: 'MediumShowCtrl'
	.otherwise
			redirectTo: '/'
	$locationProvider.html5Mode true


# Makes AngularJS work with turbolinks.
#$(document).on 'page:load', ->
#	$('[ng-app]').each ->
#		module = $(this).attr('ng-app')
#		angular.bootstrap(this, [module])