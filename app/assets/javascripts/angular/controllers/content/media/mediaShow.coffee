angular.module('Fit').controller "MediaShowCtrl", ($scope, $timeout, $routeParams, $location, $http, $window) ->
	$scope.medium = []
	$scope.comments = []
	$scope.likes = []

	$scope.templates = [
		{ name: 'commentsShow.html', url: 'templates/content/comments/_show.html'},
		{ name: 'commentsForm.html', url: 'templates/content/comments/_form.html'}
		{ name: 'likesForm.html',    url: 'templates/content/likes/_form.html'}]

	$http.get('/media/' + $routeParams.id + '.json')
	.success (data) =>
		$scope.medium = data.medium
		$scope.comments = data.medium.comments
		$scope.likes = data.medium.likes
	.error (data) ->
		console.log('error!')

