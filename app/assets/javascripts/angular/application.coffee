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
	.when '/media',
		templateUrl: 'templates/content/media/index.html',
		controller: 'MediaIndexCtrl'
	.when '/media/:id',
		templateUrl: 'templates/content/media/show.html',
		controller: 'MediumShowCtrl'
	.otherwise
		redirectTo: '/'

