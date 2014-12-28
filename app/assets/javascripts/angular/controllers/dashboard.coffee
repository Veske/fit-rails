angular.module('Fit').controller "DashboardCtrl", ($scope, $timeout, $routeParams, $location, $http, $window) ->
	$scope.users = []
	$scope.feed = []

	$http.get('/users.json')
	.success (data) =>
		$scope.users = data.users
	.error (data) ->
		console.log('error!')

	$http.get('/feed.json')
	.success (data) =>
		$scope.feed = data.feed
		console.log(data)
	.error (data) ->
		console.log('error!')

	$scope.viewUsers = ->
		$location.url('/users')
		#$window.location.href = '/users'
		console.log("Redirected")

	$scope.selectMedium = (medium) ->
		$location.url('/media/' + medium.id)