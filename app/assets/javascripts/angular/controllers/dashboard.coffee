angular.module('Fit')
.controller "DashboardCtrl", [
	'$scope',
	'$location',
	'$http',
	($scope, $location, $http) ->
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
		.error (data) ->
			console.log('error!')

		$scope.viewUsers = ->
			$location.url('/users')

		$scope.selectMedium = (medium) ->
			$location.url('/media/' + medium.id)
]