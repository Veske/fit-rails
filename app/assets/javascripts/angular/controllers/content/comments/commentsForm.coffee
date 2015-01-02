angular.module('Fit')
.controller "CommentsFormCtrl", [
	'$scope',
	'$routeParams',
	'CommentService',
	'Common',
	($scope, $routeParams, CommentService, Common) ->
		$scope.notify = false

		$scope.init = ->
			@commentService = new CommentService($routeParams.id, serverErrorHandler)

		$scope.newComment = (text, medium) ->
			@commentService.create({ text: text, user_id: Common.get_current_user().id }, successHandler, medium, $scope)

		successHandler = (comment, medium) ->
			medium.comments.push(comment)

		serverErrorHandler = ->
			alert("There was a server error, please reload the page and try again.")
]
