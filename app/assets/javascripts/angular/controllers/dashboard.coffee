angular.module('Fit').controller "DashboardCtrl", ($scope, $timeout, $routeParams, $location, $http, $window) ->
	$scope.users = []

	$http.get('/users.json')
	.success (data) =>
		$scope.users = data.users
	.error (data) ->
		console.log('error!')

	$scope.viewUsers = ->
		$location.url('/users')
		#$window.location.href = '/users'
		console.log("Redirected")