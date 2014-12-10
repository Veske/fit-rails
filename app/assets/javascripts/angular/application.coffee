Fit = angular.module("Fit", ['ngRoute', 'growlNotifications', 'flow'])

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


Fit.config (flowFactoryProvider) ->
		flowFactoryProvider.defaults =
			target: "/media.json"
			permanentErrors: [
				404
				500
				501
			]
			maxChunkRetries: 1
			chunkRetryInterval: 5000
			simultaneousUploads: 4
			singleFile: true

		flowFactoryProvider.on "catchAll", (event) ->
			console.log "catchAll", arguments
