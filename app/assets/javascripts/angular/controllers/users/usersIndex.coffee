angular.module('Fit')
.controller "UsersIndexCtrl", [
	'$scope',
	'$http',
	'Common',
	'UserService',
	'RoleService',
	($scope, $http, Common, UserService, RoleService) ->
		$scope.users = []
		$scope.roles = []
		$scope.notify = false
		serverErrorHandler = Common.serverErrorHandler

		$scope.init = ->
			@userService = new UserService(serverErrorHandler)
			@roleService = new RoleService(serverErrorHandler)
			@userService.all($scope)
			@roleService.all($scope)

		$scope.updateUser = (user, selectedRole) ->
			@userService.updateRole(user, {role: selectedRole.key}, $scope)


]