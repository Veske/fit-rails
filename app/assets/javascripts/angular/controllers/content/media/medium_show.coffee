@Fit.controller "MediumShowCtrl", [
	'$scope', '$routeParams', 'MediumService', 'Common', 'UserService',
	($scope, $routeParams, MediumService, Common, UserService) ->
		$scope.medium = []
		$scope.comments = []
		$scope.likes = []
		$scope.avatar = []
		$scope.userHasLiked = 'false'
		$scope.current_user = Common.get_current_user().id

		$scope.$watch 'likes', ((newVal) ->
			match = 0
			if $scope.likes.length == 0
				$scope.userHasLiked = 'false'
			else
				# Iterate over all likes and see if the current user has made a like
				# IF so, make match == to 1
				for like in $scope.likes
					if like.user_id == Common.get_current_user().id then match = 1

				# IF match is 1, we change our variable to true to show appropriate content and vice versa
				if match == 1 then $scope.userHasLiked = 'true' else $scope.userHasLiked = 'false'
		), true

		$scope.set_avatar = () ->
			user_service = new UserService(serverErrorHandler)
			user_service.set_avatar($routeParams.id, $scope)

		query_medium = ->
			MediumService.get({id: $routeParams.id},
				(response) ->
					$scope.medium = response
					$scope.avatar = response.user.avatar
					$scope.comments = response.comments
					$scope.likes = response.likes
				(error) ->
# Deal with error
			)

		$scope.templates = [
			{name: 'commentsShow.html', url: 'templates/content/comments/_show.html'},
			{name: 'commentsForm.html', url: 'templates/content/comments/_form.html'},
			{name: 'likesForm.html', url: 'templates/content/likes/_form.html'},
			{name: 'likeDestroy.html', url: 'templates/content/likes/_destroy.html'}]

		serverErrorHandler = ->
			alert("There was a server error, please reload the page and try again.")

		query_medium()
]