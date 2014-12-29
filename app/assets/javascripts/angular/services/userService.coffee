angular.module('Fit')
.factory 'UserService', [
	'$resource',
	'$http',
	'$routeParams',
	($resource, $http, $routeParams) ->
		class UserService
			constructor: (errorHandler) ->
				@service = $resource('/users/:id.json',
					{id: '@id'},
					{
						'query':    { method: 'GET', isArray: false },
						'create': { method: 'POST'}
					}
				)
				@errorHandler = errorHandler

				defaults = $http.defaults.headers
				defaults.patch = defaults.patch || {}
				defaults.patch['Content-Type'] = 'application/json'

			all: ($scope) -> @service.query(((data)-> $scope.users = data.users), @errorHandler)
]