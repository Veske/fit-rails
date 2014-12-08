angular.module('Fit').controller "MediumShowCtrl", ($scope, $timeout, $routeParams, $location, $http, $window) ->
	$scope.medium = []
	$scope.comments = []
	$scope.likes = []

	$scope.templates = [
		{name: 'commentsShow.html', url: 'templates/content/comments/_show.html'},
		{ name: 'commentsForm.html', url: 'templates/content/comments/_form.html'}]

	$http.get('/media/' + $routeParams.id + '.json')
	.success (data) =>
		$scope.medium = data.medium
		$scope.comments = data.medium.comments
		$scope.likes = data.medium.likes
		console.log($scope.medium)
	.error (data) ->
		console.log('error!')

