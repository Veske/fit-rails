angular.module('Fit').controller "LikeFormCtrl", ($scope, $routeParams, $http, LikeService) ->
	$scope.like = []

	$scope.init = ->
		@likeService = new LikeService($routeParams.id, serverErrorHandler)

	$scope.newLike = (medium) ->
		@likeService.create({'user_id': current_user.id}, successHandler , medium)

	$scope.destroyLike = (medium) ->
		for key, like of medium.likes
			if like.user_id == current_user.id then $scope.like = like
		@likeService.delete($scope.like, medium)

	serverErrorHandler = ->
		alert("There was a server error, please reload the page and try again.")

	successHandler = (like, medium) ->
		medium.likes.push(like)
