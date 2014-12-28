angular.module('Fit').controller "MediaShowCtrl", ($scope, $routeParams, MediaShow) ->
	$scope.medium = []
	$scope.comments = []
	$scope.likes = []
	$scope.userHasLiked = 'false'

	# Function that is ran upon page load
	$scope.init = ->
		mediumService = new MediaShow($routeParams.id, serverErrorHandler)
		queryMedium(mediumService)

	$scope.$watch "likes", ((newVal) ->
		match = 0
		if $scope.likes.length == 0
			$scope.userHasLiked = 'false'
		else
			# Iterate over all likes and see if the current user has made a like
			# IF so, make match == to 1
			for key, like of $scope.likes
				if like.user_id == current_user.id
					match = 1

			# IF match is 1, we change our variable to true to show appropriate content and vice versa
			if match == 1
				$scope.userHasLiked = 'true'
			else
				$scope.userHasLiked = 'false'
	), true

	queryMedium = (mediumService) ->
		mediumService.all().$promise.then(
			(data) ->
				$scope.medium = data.medium
				$scope.comments = data.medium.comments
				$scope.likes = data.medium.likes
			(error) ->
				serverErrorHandler()
		)

	$scope.templates = [
		{ name: 'commentsShow.html', url: 'templates/content/comments/_show.html'},
		{ name: 'commentsForm.html', url: 'templates/content/comments/_form.html'},
		{ name: 'likesForm.html',    url: 'templates/content/likes/_form.html'},
		{ name: 'likeDestroy.html',  url: 'templates/content/likes/_destroy.html'}]

	serverErrorHandler = ->
		alert("There was a server error, please reload the page and try again.")