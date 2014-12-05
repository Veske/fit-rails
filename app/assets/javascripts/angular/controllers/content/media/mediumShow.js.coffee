angular.module('Fit').controller "MediumShowCtrl", ($scope, $timeout, $routeParams, $location, $http, $window) ->
	$scope.medium = []

	$http.get('/media/' + $routeParams.id + '.json')
	.success (data) =>
		$scope.medium = data
	.error (data) ->
		console.log('error!')

