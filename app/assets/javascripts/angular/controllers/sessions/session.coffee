angular.module('Fit')
.controller "SessionCtrl", [
	'$scope', '$location', '$http', 'UserService', 'Common', 'SessionService', '$window'
	($scope, $location, $http, UserService, Common, SessionService, $window) ->
		serverErrorHandler = Common.serverErrorHandler
		$scope.remember_me = false
		$scope.email = []
		$scope.password = []
		$scope.message = []
		$scope.sessionService = []
		$scope.current_user = []

		$scope.init = ->
			@userService = new UserService(serverErrorHandler)

		$scope.init_current_user = (user) ->
			$scope.current_user = user
			Common.update_current_user(user)


		$scope.sign_in = (isValid) ->
			$scope.submitted = true
			if isValid
				SessionService.login({param: 'sign_in'}, user: {email: $scope.email, password: $scope.password},
				(response)->
					if response.error
						console.log(response.error)
					else
						Common.update_current_user(response)
						$window.location.href = '/'
				)
			else


		$scope.sign_out = ->
			console.log(Common.get_current_user())
			SessionService.logout({param: 'sign_out'}, {user: Common.get_current_user()}, (response)->
				if response.error
					console.log(response.error)
				else
					$window.location.href = '/'
			)

		$scope.create = (isValid) ->
			$scope.submitted = true
			if isValid
				UserService.create_user(user: {
					name: $scope.name,
					email: $scope.email,
					password: $scope.password,
					password_confirmation: $scope.password_confirmation
				}, submit: 'Sign up', (response)->
					console.log(response)
				)
				console.log(isValid)
#@userService.createUser(user, $scope)
			else

]