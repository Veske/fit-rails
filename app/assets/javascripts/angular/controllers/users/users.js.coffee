@fit_rails.controller 'UsersCtrl', ['$scope', '$location', '$http', ($scope, $location, $http) ->
	$scope.users = []
	$scope.roles = []

	$http.get('/users.json')
	.success (data) =>
		$scope.users = data.users
		$scope.roles = data.roles
		console.log(data.users)
	.error (data) ->
		console.log('error!')

	$scope.updateUser = (user, selectedRole) ->
		# Update the role of user
		console.log(user.name + " " + selectedRole.key )



]