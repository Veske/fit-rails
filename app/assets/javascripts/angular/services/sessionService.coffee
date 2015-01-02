angular.module('Fit')
.factory 'SessionService', [
	'$resource',
	'$http',
	'$routeParams',
	'Common',
	'$window',
	'$location',
	($resource, $http, $routeParams, Common, $window, $location) ->
		class SessionService
			constructor: (errorHandler) ->
				@service = $resource '/users/:param.json', {},
					'login':  { method: 'POST' },
					'logout': { method: 'DELETE' }

				@errorHandler = errorHandler

				defaults = $http.defaults.headers
				defaults.patch = defaults.patch || {}
				defaults.patch['Content-Type'] = 'application/json'

			login: ($scope, newUser) ->
				new @service(user: newUser).$save {param: 'sign_in'},
					(data) ->
						if data.error then Common.flashNotification($scope, data.error)
						if data.user then Common.update_current_user(data.user) && $window.location.href = '/'
					, @errorHandler

			logout: ($scope, user) ->
				new @service(user: user).$delete {param: 'sign_out'},
					(data) ->
						if data.error then Common.flashNotification($scope, data.error)
						$window.location.href = '/'
				, @errorHandler
]