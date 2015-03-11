@Fit.controller "CommentsFormCtrl", [
	'$scope',
	'$routeParams',
	'CommentService',
	'Common',
	($scope, $routeParams, CommentService, Common) ->
		$scope.notify = false

		$scope.newComment = (text, medium) ->
			new CommentService(
				id: $routeParams.id,
				text: text,
				user_id: Common.get_current_user().id
			).$save(( (response) ->
						medium.comments.push(response.comment)
					),
				(error) ->
					serverErrorHandler()
			)

		serverErrorHandler = ->
			alert("There was a server error, please reload the page and try again.")
]
