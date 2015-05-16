angular.module('Fit')
.factory 'FeedService', [
	'$resource',
	'$http',
	'$routeParams',
	($resource, $http, $routeParams) ->
		class FeedService
			constructor: (errorHandler) ->
				@service = $resource('/feed/:id.json',
					{id: '@id'},
					{
						'query':    { method: 'GET', isArray: false }
					}
				)
				@errorHandler = errorHandler

				defaults = $http.defaults.headers
				defaults.patch = defaults.patch || {}
				defaults.patch['Content-Type'] = 'application/json'

			all: ($scope) -> @service.query(( (response)->
				$scope.feed = response.media
			), @errorHandler)
]