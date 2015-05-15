@Fit.controller "MediumShowCtrl", [
	'$scope',
	'$routeParams',
	'MediumService',
	'Common',
	'UserService',
	($scope, $routeParams, MediumService, Common, UserService) ->
		$scope.medium = []
		$scope.comments = []
		$scope.likes = []
		$scope.avatar = []
		$scope.userHasLiked = 'false'
		$scope.current_user = []

		mediumService = new MediumService(serverErrorHandler)

		$scope.$watch "likes", ((newVal) ->
			match = 0
			if $scope.likes.length == 0
				$scope.userHasLiked = 'false'
			else
				# Iterate over all likes and see if the current user has made a like
				# IF so, make match == to 1
				for key, like of $scope.likes
					if parseInt(like, 10) == Common.get_current_user().id then match = 1

				# IF match is 1, we change our variable to true to show appropriate content and vice versa
				if match == 1
					$scope.userHasLiked = 'true'
				else
					$scope.userHasLiked = 'false'
		), true

		$scope.set_avatar = () ->
			user_service = new UserService(serverErrorHandler)
			user_service.set_avatar($routeParams.id, $scope)

		# Function that is ran upon page load to initialize variables
		query_medium = (mediumService) ->
			$scope.current_user = Common.get_current_user().id
			mediumService.find($routeParams.id).$promise.then(
				(response) ->
					console.log(response)
					$scope.medium = response
					$scope.avatar = response.user.avatar
					$scope.comments = response.comments
#$scope.likes = response.likes
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

		query_medium(mediumService)
]