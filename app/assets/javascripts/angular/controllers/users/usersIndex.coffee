angular.module('Fit')
.controller "UsersIndexCtrl", [
	'$scope', '$http', 'Common', 'UserService', 'RoleService',
	($scope, $http, Common, UserService, RoleService) ->
		$scope.users = []
		$scope.roles = []
		$scope.notify = false

		initData = ->
			new UserService().$query(
				(response) ->
					$scope.users = response.users
			)

			new RoleService().$query(
				(response) ->
					console.log(response)
#$scope.roles = response
			)

		$scope.updateUser = (user, selectedRole) ->
			@userService.updateRole(user, {role: selectedRole.key}, $scope)

		initData()
]