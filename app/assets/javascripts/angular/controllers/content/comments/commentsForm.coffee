angular.module('Fit')
.controller "CommentsFormCtrl", [
	'$scope',
	'$routeParams',
	'CommentService',
	($scope, $routeParams, CommentService) ->
		$scope.notify = false

		$scope.init = ->
			@commentService = new CommentService($routeParams.id, serverErrorHandler)

		$scope.newComment = (text, medium) ->
			@commentService.create({text: text, user_id: current_user.id}, successHandler, medium, $scope)

		successHandler = (comment, medium) ->
			medium.comments.push(comment)

		serverErrorHandler = ->
			alert("There was a server error, please reload the page and try again.")
]
