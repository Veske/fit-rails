angular.module('Fit')
.factory 'LikeService', [
	'$resource',
	'$http',
	'$routeParams',
	'Common',
	($resource, $http, $routeParams, Common) ->
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

			create: (medium, attributes) ->
				new @service(like: attributes).$save { id: medium.id },
					(data) ->
						medium.likes.push(attributes.user_id)
				, @errorHandler

			delete: (like, medium, mediumId) ->
				new @service().$delete {like_id: 1, id: mediumId}, ((data) ->
					# Handle success event by splicing the likes array with deleted like
					for key, like of medium.likes
						if parseInt(like) == Common.get_current_user().id then medium.likes.splice(key, 1)
				), @errorHandler
]