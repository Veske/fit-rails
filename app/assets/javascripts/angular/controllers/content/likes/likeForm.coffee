angular.module('Fit').controller "LikeFormCtrl", ($scope, $routeParams, $http, LikeService) ->

	$scope.init = ->
		@likeService = new LikeService($routeParams.id, serverErrorHandler)

	$scope.newLike = (medium) ->
		@likeService.create({'user_id': current_user.id}, successHandler , medium)


	$scope.destroyLike = (medium) ->
		$scope.like = []
		for key, like of medium.likes
			if like.user_id == current_user.id
				$scope.like = like

		$http({
			method: 'DELETE',
			url:    './media/' + medium.id + '/likes/' + $scope.like.id + '.json',
		}).success( (data) ->
			for key, like of medium.likes
				if like.id == data.id
					medium.likes.splice(key, 1)
		).error( ->
			# Display error notification
		)

	serverErrorHandler = ->
		alert("There was a server error, please reload the page and try again.")

	successHandler = (like, medium) ->
		medium.likes.push(like)
