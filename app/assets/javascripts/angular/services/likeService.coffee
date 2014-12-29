angular.module('Fit').factory 'LikeService', ($resource, $http, $routeParams) ->
	class LikeService
		constructor: (mediumId, errorHandler) ->
			@service = $resource('/media/:id/likes/:like_id.json',
				{
					id: mediumId,
					like_id: '@likeId'
				},
				{
					'query':  { method: 'GET', isArray: false },
					'create': { method: 'POST'},
					'delete': { method: 'DELETE' }
				}
			)
			@errorHandler = errorHandler

			defaults = $http.defaults.headers
			defaults.patch = defaults.patch || {}
			defaults.patch['Content-Type'] = 'application/json'

		create: (attributes, successHandler, medium) ->
			new @service(like: attributes).$save ((like) -> successHandler(like, medium)), @errorHandler

		all: () ->
			@service.query((-> null), @errorHandler)