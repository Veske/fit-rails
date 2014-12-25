angular.module('Fit').controller "UsersIndexCtrl", ($scope, $timeout, $routeParams, $location, $http, $window, Common) ->

	$scope.users = []
	$scope.roles = []
	$scope.notify = false

	# Get all users
	$http.get('/users.json')
	.success (data) =>
		$scope.users = data.users
	.error (data) ->
		console.log('error!')

	# Get all roles related to users
	$http.get('/roles.json')
	.success (data) =>
		$scope.roles = data
	.error (data) ->
		console.log('error!')

	$scope.updateUser = (user, selectedRole) ->
		$http({
			method: 'PATCH',
			url:    './users/' + user.id + '.json',
			data:   user: {role: selectedRole.key}
		}).success( (data) ->
			console.log(data)
			if user.id == data.user.id
				user.role = data.user.role
				Common.flashNotification($scope, 'Updated role for user: ' + user.name)
		).error( ->
			# Display error notification
		)