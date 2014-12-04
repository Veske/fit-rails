angular.module('Fit').controller "MediaViewCtrl", ($scope, $timeout, $routeParams, $location, $http, $window) ->
	$scope.media = []

	$http.get('/media.json')
	.success (data) =>
		$scope.media = data.media
		console.log(data.media)
	.error (data) ->
		console.log('error!')
