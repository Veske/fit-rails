Fit = angular.module("Fit", ['ngRoute', 'growlNotifications', 'angularFileUpload'])

Fit.config ($httpProvider) ->
	authToken = $("meta[name=\"csrf-token\"]").attr("content")
	$httpProvider.defaults.headers.common["X-CSRF-TOKEN"] = authToken

Fit.config ($routeProvider, $locationProvider) ->
	$locationProvider.html5Mode true
	$routeProvider
	.when '/dashboard',
		templateUrl: 'templates/dashboard/index.html',
		controller: 'DashboardCtrl'
	.when '/users',
		templateUrl: 'templates/users/index.html',
		controller: 'UsersIndexCtrl'
	.when '/users/:id',
		templateUrl: 'templates/users/show.html',
		controller: 'UsersShowCtrl'
	.when '/users/:id/following',
		templateUrl: 'templates/users/show_follow.html',
		controller:  'ShowFollowCtrl'
	.when '/users/:id/followers',
		templateUrl: 'templates/users/show_follow.html',
		controller:  'ShowFollowCtrl'
	.when '/media',
		templateUrl: 'templates/content/media/index.html',
		controller: 'MediaIndexCtrl'
	.when '/media/:id',
		templateUrl: 'templates/content/media/show.html',
		controller: 'MediaShowCtrl'
	.otherwise
		redirectTo: '/'

