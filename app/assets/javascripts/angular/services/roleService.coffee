angular.module('Fit')
.factory 'RoleService', [
	'$resource',
	'$http',
	'$routeParams',
	($resource, $http, $routeParams) ->
		class RoleService
			constructor: (errorHandler) ->
				@service = $resource('/roles/:id.json',
					{id: '@id'},
					{
						'query':    { method: 'GET', isArray: true },
						'create':   { method: 'POST'}
					}
				)
				@errorHandler = errorHandler

				defaults = $http.defaults.headers
				defaults.patch = defaults.patch || {}
				defaults.patch['Content-Type'] = 'application/json'

			all: ($scope) -> @service.query(((data)-> $scope.roles = data), @errorHandler)
]