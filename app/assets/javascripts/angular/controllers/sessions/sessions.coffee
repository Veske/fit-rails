angular.module('Fit')
.controller "SessionCtrl", [
	'$scope',
	'$location',
	'$http',
	'UserService',
	'Common',
	'SessionService'
	($scope, $location, $http, UserService, Common, SessionService) ->
		serverErrorHandler = Common.serverErrorHandler
		$scope.remember_me = false
		$scope.email = []
		$scope.password = []
		$scope.message = []

		$scope.init = ->
			@userService = new UserService(serverErrorHandler)
			@sessionService = new SessionService(serverErrorHandler)

		$scope.sign_in = (email, password, remember_me) ->
			@sessionService.login($scope, { email: email, password: password })

]