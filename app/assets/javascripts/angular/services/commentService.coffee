angular.module('Fit').factory 'CommentService', ($resource, $http, $routeParams) ->
	class CommentService
		constructor: (mediumId, errorHandler) ->
			@service = $resource('/media/:id/comments/:comment_id.json',
				{
					id: mediumId,
					comment_id: '@commentId'
				},
				{
					'create': { method: 'POST'},
					'delete': { method: 'DELETE' }
				}
			)
			@errorHandler = errorHandler

			defaults = $http.defaults.headers
			defaults.patch = defaults.patch || {}
			defaults.patch['Content-Type'] = 'application/json'

		create: (attributes, successHandler, medium) ->
			# Success event triggers function successHandler()
			new @service(comment: attributes).$save ((comment) -> successHandler(comment.comment, medium)), @errorHandler

		delete: (like, medium) ->
			#new @service().$delete {like_id: like.id}, ((data) ->
				# Handle success event by splicing the likes array with deleted like
			#	for key, like of medium.likes
			#		if like.id == data.id then medium.likes.splice(key, 1)
			#), @errorHandler