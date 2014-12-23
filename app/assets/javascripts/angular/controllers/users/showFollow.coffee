angular.module('Fit').controller "ShowFollowCtrl", ($scope, $timeout, $routeParams, $location, $http, $window) ->
	$scope.user = []
	$scope.users = []

	$scope.getUsers()
	$scope.getRelationships()

	$scope.getUsers = () ->
		$http.get('/users/' + $routeParams.id + '.json')
		.success (data) =>
			$scope.user = data.user
		.error (data) ->
			console.log('error!')

	$scope.getRelationships = () ->
		console.log("Here")
		if $routeParams.type == 'following'
			console.log("following")
			$http.get('/users/' + $routeParams.id + '/following.json')
			.success (data) =>
				console.log(data)
				$scope.user = data.user
			.error (data) ->
				console.log('error!')
		else
			console.log("followers")