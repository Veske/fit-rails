angular.module('Fit').controller "ShowFollowCtrl", ($scope, $timeout, $routeParams, $location, $http, $window) ->

	$http.get('/users/' + $routeParams.id + '.json')
	.success (data) =>
		$scope.user = data.user
	.error (data) ->
		console.log('error!')
