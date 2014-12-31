angular.module('Fit')
.factory 'SessionService', [
	'$resource',
	'$http',
	'$routeParams',
	'Common',
	'$window'
	($resource, $http, $routeParams, Common, $window) ->
		class SessionService
			constructor: (errorHandler) ->
				@service = $resource '/users/:param.json', {},
					'login':  { method: 'POST' },
					'logout': { method: 'DELETE' }

				@errorHandler = errorHandler

				defaults = $http.defaults.headers
				defaults.patch = defaults.patch || {}
				defaults.patch['Content-Type'] = 'application/json'

			@currentUser = {}

			authorized = ->
				getCurrentUser().authorized is 'true'

			getCurrentUser = ->
				currentUser

			updateCurrentUser = (user) ->
				if user
					currentUser.id = user.id
					currentUser.name = user.name
				currentUser.authorized = authorized

			login: ($scope, newUser) ->
				new @service(user: newUser).$save {param: 'sign_in'},
					(data) ->
						console.log(data)
						if data.error then Common.flashNotification($scope, data.error)
						if data.user then Common.updateCurrentUser(data.user)
						if Common.isAuthorized() then $window.location.href = '/'
						#console.log(Common.getCurrentUser())
						#console.log(Common.isAuthorized())
						#console.log(data)
					, @errorHandler
]