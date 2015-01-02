angular.module('Fit')
.controller "SessionCtrl", [
	'$scope',
	'$location',
	'$http',
	'UserService',
	'Common',
	'SessionService',
	'$window'
	($scope, $location, $http, UserService, Common, SessionService, $window) ->
		serverErrorHandler = Common.serverErrorHandler
		$scope.remember_me = false
		$scope.email = []
		$scope.password = []
		$scope.message = []
		$scope.sessionService = []

		$scope.init = ->
			@userService = new UserService(serverErrorHandler)
			$scope.sessionService = new SessionService(serverErrorHandler)

		$scope.sign_in = (email, password, remember_me) ->
			$scope.sessionService.login($scope, { email: email, password: password })

		$scope.sign_out = ->
			$scope.sessionService = new SessionService(serverErrorHandler)
			$scope.sessionService.logout($scope, current_user)

]