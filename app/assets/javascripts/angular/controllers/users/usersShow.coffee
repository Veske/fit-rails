angular.module('Fit').controller "UsersShowCtrl", ($scope, $timeout, $routeParams, $location, $http, $window) ->

	$scope.user = []
	$scope.media = []
	$scope.followers = []
	$scope.following = []
	$scope.isFollowing = false
	$scope.current_user = current_user

	$scope.templates = [
		{ name: 'mediumDestroy.html',	url: 'templates/content/media/_destroy.html'}]

	$http.get('/users/' + $routeParams.id + '.json')
	.success (data) =>
		console.log(data)
		$scope.media = data.media
		$scope.user = data.user
		$scope.followers = data.followers
		$scope.following = data.following
		$scope.is_following = data.is_following
	.error (data) ->
		console.log('error!')

	$scope.selectMedium = (medium) ->
		$location.url('/media/' + medium.id)

	$scope.userOwnsMedium = (medium) ->
		if medium.user_id == current_user.id
			true

	$scope.destroyMedium = (medium) ->
		$http({
			method: 'DELETE',
			url:    './media/' + medium.id + '.json',
		}).success( (data) ->
			for key, medium of $scope.media
				if medium.id == data.medium.id
					$scope.media.splice(key, 1)
		).error( ->
			# Display error notification
		)

	$scope.follow = (user) ->
		$http({
			method: 'POST',
			url: './relationships.json',
			data:
				followed_id: user.id
		}).success((data) ->
			console.log(data)
			console.log($scope.followers)
			$scope.is_following = true
		).error(->
			# Display error notification
		)

	$scope.unFollow = (user) ->
		$scope.id = []
		for key, follower of $scope.followers
			if follower.follower_id == $scope.current_user.id
				$scope.id = follower.id
		$http({
			method: 'DELETE',
			url: './relationships/' + $scope.id + '.json',
		}).success((data) ->
			console.log(data)
			console.log($scope.followers)
			$scope.is_following = false
		).error(->
			# Display error notification
		)

