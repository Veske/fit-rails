angular.module('Fit').controller "MediaIndexCtrl", ($scope, $timeout, $routeParams, $location, $http, $window) ->
	$scope.media = []

	$http.get('/media.json')
	.success (data) =>
		$scope.media = data
	.error (data) ->
		console.log('error!')

	$scope.selectMedium = (medium) ->
		$location.url('/media/' + medium.id)
