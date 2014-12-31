angular.module('Fit')
.factory 'SessionService', [
	'$resource',
	'$http',
	'$routeParams',
	'Common',
	($resource, $http, $routeParams, Common) ->
		class SessionService
			constructor: (errorHandler) ->
				@service = $resource '/users/:param.json', {},
					'login':  { method: 'POST' },
					'logout': { method: 'DELETE' }

				@errorHandler = errorHandler

				defaults = $http.defaults.headers
				defaults.patch = defaults.patch || {}
				defaults.patch['Content-Type'] = 'application/json'

			login: (newUser) ->
				promise = @service.login(param: 'sign_in',newUser).$promise
				promise.then((data)->
					console.log(data)
					#updateCurrentUser(result.user, result.authorized)
				)
				promise
]