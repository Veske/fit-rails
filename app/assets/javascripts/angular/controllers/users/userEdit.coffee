angular.module('Fit')
.controller "UserEditCtrl", [
	'$scope',
	'$location',
	'$http',
	'UserService',
	'Common',
	'SessionService',
	'$window'
	($scope, $location, $http, UserService, Common, SessionService, $window) ->
		serverErrorHandler = Common.serverErrorHandler
		$scope.message = []
		$scope.sessionService = []

		$scope.init = ->
			@userService = new UserService(serverErrorHandler)
			$scope.sessionService = new SessionService(serverErrorHandler)

]