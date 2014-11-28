@fit_rails.controller 'VisitorsCtrl', ['$scope', '$location', '$http', ($scope, $location, $http) ->

	$scope.users = []
	$scope.viewUsers = ->
		$location.url('/users')

	$http.get('/users.json')
	.success (users) =>
		$scope.users = users
		console.log($scope.users)
		console.log('Count of users: ' + $scope.users.length)
	.error (data) ->
		console.log('error!')


]