angular.module('Fit')
.controller "SessionCtrl", [
	'$scope', '$location', '$http', 'UserService', 'Common', 'SessionService', '$window'
	($scope, $location, $http, UserService, Common, SessionService, $window) ->
		serverErrorHandler = Common.serverErrorHandler
		$scope.remember_me = false
		$scope.current_user = []

		$scope.init_current_user = (user) ->
			$scope.current_user = user
			Common.update_current_user(user)


		$scope.sign_in = (isValid) ->
			console.log($scope.user)
			if $scope.submitted == true
				$scope.submitted = false
			else
				$scope.submitted = true

			if isValid
				session = new SessionService({param: 'sign_in'})
				session.email = $scope.user.email
				session.password = $scope.user.password
				session.$login()

		$scope.sign_out = ->
			SessionService.logout({param: 'sign_out'}, {user: Common.get_current_user()}, (response)->
				if response.error
					console.log(response.error)
				else
					$window.location.href = '/'
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