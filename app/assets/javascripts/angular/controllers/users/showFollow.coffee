angular.module('Fit').controller "ShowFollowCtrl", ($scope, $timeout, $routeParams, $location, $http, $window) ->
	$scope.user = []
	$scope.users = []

	# Get relationships depending which link was chosen
	# params : type: following && followers
	if $routeParams.type == 'following'
		$http.get('/users/' + $routeParams.id + '/following.json')
		.success (data) =>
			$scope.user = data.user
			$scope.users = data.users
		.error (data) ->
			console.log('error!')
	else
		$http.get('/users/' + $routeParams.id + '/followers.json')
		.success (data) =>
			$scope.user = data.user
			$scope.users = data.users
		.error (data) ->
			console.log('error!')