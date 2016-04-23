angular.module('Fit')
.controller "SessionCtrl", [
	'$scope', '$location', '$http', 'UserService', 'Common', 'SessionService', '$window', 'Auth'
	($scope, $location, $http, UserService, Common, SessionService, $window, Auth) ->
		serverErrorHandler = Common.serverErrorHandler
		$scope.remember_me = false
		$scope.current_user = []

		$scope.init_current_user = (user) ->
			$scope.current_user = Auth.currentUser()

		$scope.sign_in = (isValid) ->
			if $scope.submitted == true
				$scope.submitted = false
			else
				$scope.submitted = true

			if isValid
				Auth.login($scope.user).then((user) ->
					console.log(user)
				)

		$scope.sign_out = ->
			Auth.logout().then((user) ->
				console.log("Loggded out")
			)

		$scope.create = (isValid, param) ->
			$scope.submitted = true
			if isValid
				user = new UserService()
				user.name = $scope.user.name
				user.email = $scope.user.email
				user.password = $scope.user.password
				user.password_confirmation = $scope.user.password_confirmation
				user.$create_user()
]