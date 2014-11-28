@fit_rails.controller 'UsersCtrl', ['$scope', '$location', '$http', ($scope, $location, $http) ->
	$scope.users = []

	$http.get('/users.json')
	.success (users) =>
		$scope.users = users
		console.log(users)
	.error (data) ->
		console.log('error!')

]