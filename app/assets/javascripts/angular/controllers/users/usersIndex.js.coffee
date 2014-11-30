@fit_rails.controller 'UsersIndexCtrl',
	['$scope', '$location', '$http', 'Common',
	($scope, $location, $http, Common) ->

		$scope.users = []
		$scope.roles = []
		$scope.notify = false

		$http.get('/users.json')
		.success (data) =>
			$scope.users = data.users
			$scope.roles = data.roles
		.error (data) ->
			console.log('error!')

		$scope.updateUser = (user, selectedRole) ->
			$http({
				method: 'PATCH',
				url:    './users/' + user.id + '.json',
				data:   user: {role: selectedRole.key}
			}).success( (data) ->
				for user in $scope.users
					if user.id == data.user.id
						user.role = data.user.role
						Common.flashNotification($scope, 'Updated role for user: ' + user.name)
			).error( ->
				# Display error notification
			)
]