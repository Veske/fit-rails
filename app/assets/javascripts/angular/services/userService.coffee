angular.module('Fit')
.factory 'UserService', [
	'$resource',
	'$http',
	'$routeParams',
	'Common',
	($resource, $http, $routeParams, Common) ->
		class UserService
			constructor: (errorHandler) ->
				@service = $resource '/users/:id.json', {},
					'query':    { method: 'GET', isArray: false },
					'create':   { method: 'POST' },
					'update':   { method: 'PATCH' }
					'save': {method: 'POST'}

				@errorHandler = errorHandler

				defaults = $http.defaults.headers
				defaults.patch = defaults.patch || {}
				defaults.patch['Content-Type'] = 'application/json'

			all: ($scope) -> @service.query(((data)-> $scope.users = data.users), @errorHandler)

			find: (userId, $scope) ->
				@service.get {id: userId}, (
					(data) ->
						$scope.media = data.media
						$scope.user = data.user
						$scope.followers = data.followers
						$scope.following = data.following
						$scope.is_following = data.is_following
				), @errorHandler

			updateRole: (user, attributes, $scope) ->
				new @service(user: attributes).$update {id: user.id},
					(data) ->
						if user.id == data.user.id
							user.role = data.user.role
							Common.flashNotification($scope, 'Updated role for user: ' + user.name)
				, @errorHandler

			updateUser: (user, userId, $scope) ->
				delete user['id']
				delete user['authorized']
				new @service(user: user).$update {id: userId},
					(data) ->
						console.log(data)
				, @errorHandler

			createUser: (user, $scope) ->
				new @service(user: user).$save {id: ''},
					(data) ->
						console.log(data)
				, @errorHandler
]