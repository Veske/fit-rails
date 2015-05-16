angular.module('Fit')
.factory 'MediumService', [
	'$resource',
	'$http',
	'$routeParams',
	($resource, $http, $routeParams) ->
		class MediumService
			constructor: (errorHandler) ->
				@service = $resource('/media/:id.json',
					{id: '@id'},
					{
						'all':    { method: 'GET', isArray: false },
						'create': {method: 'POST'},
						'query': {method: 'GET', isArray: false}
					}
				)
				@errorHandler = errorHandler

				defaults = $http.defaults.headers
				defaults.patch = defaults.patch || {}
				defaults.patch['Content-Type'] = 'application/json'

			create: (attributes, successHandler) ->
				new @service(medium: attributes).$save ((medium) -> successHandler(medium)), @errorHandler

			delete: (medium, $scope) ->
				new @service().$delete {id: medium.id}, ((data) ->
					for key, medium of $scope.media
						if medium.id == data.medium.id then $scope.media.splice(key, 1)
				), @errorHandler

			find: (mediumId) ->
				@service.get {id: mediumId}, (-> null), @errorHandler

			all: ($scope) ->
				@service.query ((data)->
					$scope.media = data.media
				), @errorHandler
]