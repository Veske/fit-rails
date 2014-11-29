@fit_rails.config(['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) ->
	# Route for '/'
	$routeProvider.when('/', { templateUrl: '../../views/visitors/index.html.erb', controller: 'VisitorsCtrl' } )
	# Route for '/users'
	$routeProvider.when('/users', { templateUrl: '../../views/users/index.html.erb', controller: 'UsersCtrl' } )

	# Default
	$routeProvider.otherwise( { redirectTo: "/" } )

	#$locationProvider.html5Mode(true)
])