angular.module('Fit')
.factory 'LikeService', [
	'$resource',
	'$http',
	'$routeParams',
	($resource, $http, $routeParams) ->
		class LikeService
			constructor: (errorHandler) ->
				@service = $resource('/media/:id/likes/:like_id.json',
					{
						id: '@id',
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

			create: (attributes, successHandler, medium, mediumId) ->
				# Success event triggers function successHandler()
				new @service(like: attributes).$save { id: mediumId }, ((like) -> successHandler(like, medium)), @errorHandler

			delete: (like, medium, mediumId) ->
				new @service().$delete {like_id: like.id, id: mediumId}, ((data) ->
					# Handle success event by splicing the likes array with deleted like
					for key, like of medium.likes
						if like.id == data.id then medium.likes.splice(key, 1)
				), @errorHandler
]