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
		$scope.user = []

		$scope.init = ->
			@userService = new UserService(serverErrorHandler)
			@sessionService = new SessionService(serverErrorHandler)
			$scope.user = Common.get_current_user()

]