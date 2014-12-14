angular.module('Fit').controller "MediaIndexCtrl", ($scope, $timeout, $routeParams, $location, $http, $window) ->
	$scope.media = []

	$scope.templates = [{name: 'mediumNew.html', url: 'templates/content/media/_form.html'}]

	$http.get('/media.json')
	.success (data) =>
		$scope.media = data
	.error (data) ->
		console.log('error!')

	$scope.selectMedium = (medium) ->
		$location.url('/media/' + medium.id)
