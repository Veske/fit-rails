angular.module('Fit')
.factory 'Common', [
	'$window',
	'$http',
	($window, $http) ->
		{
			currentUser: {}

			# Display a toast on the top of the page to show info
			# @params: $scope, text
			flashNotification: ($scope, text) ->
				$scope.message = text
				$scope.notify = true
				setTimeout(() ->
					$scope.notify = false
				, 2000)

			# Display a notification on server errors
			serverErrorHandler: () ->
				alert("There was a server error, please reload the page and try again.")

			get_current_user: ->
				@currentUser

			update_current_user: (user) ->
				if user
					@currentUser.id = user.id
					@currentUser.name = user.name
					@currentUser.email = user.email
					@currentUser.authorized = 'true'
				else
					@currentUser.authorized = 'false'
		}
]