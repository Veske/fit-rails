angular.module('Fit').controller "UsersShowCtrl", ($scope, $timeout, $routeParams, $location, $http, $window) ->

	$scope.user = []
	$scope.media = []
	$scope.followers = []
	$scope.following = []

	$scope.templates = [
		{ name: 'mediumDestroy.html',	url: 'templates/content/media/_destroy.html'}]

	$http.get('/users/' + $routeParams.id + '.json')
	.success (data) =>
		$scope.media = data.media
		$scope.user = data.user
		$scope.followers = data.followers
		$scope.following = data.following
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

