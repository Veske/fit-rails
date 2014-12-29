# Define Angular routes here
# Syntax:  templateUrl: path to html template to show
#          controller:  define what Angular controller to use for the rendered template
angular.module('Fit').config [
	'$routeProvider'
	'$locationProvider'
	($routeProvider, $locationProvider) ->
		$routeProvider
		.when '/',
			templateUrl: 'templates/dashboard/index.html',
			controller: 'DashboardCtrl'
		.when '/users',
			templateUrl: 'templates/users/index.html',
			controller: 'UsersIndexCtrl'
		.when '/users/:id',
			templateUrl: 'templates/users/show.html',
			controller: 'UsersShowCtrl'
		.when '/users/:id/:type',
			templateUrl: 'templates/users/show_follow.html',
			controller:  'ShowFollowCtrl'
		.when '/users/:id/:type',
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
		# Enabling html5Mode
		$locationProvider.html5Mode true
]