angular.module('Fit')
.factory 'RelationshipService', [
	'$resource',
	'$http',
	'$routeParams',
	($resource, $http, $routeParams) ->
		class RelationshipService
			constructor: (errorHandler) ->
				@service = $resource('/users/:id/:relationship_type.json',
					{id: '@id', relationship_type: '@type'},
					{
						'query':    { method: 'GET', isArray: false },
						'create':   { method: 'POST' }
					}
				)
				@errorHandler = errorHandler

				defaults = $http.defaults.headers
				defaults.patch = defaults.patch || {}
				defaults.patch['Content-Type'] = 'application/json'

			allFollowers: (userId, relationShipType, $scope) ->
				@service.query {id: userId, relationship_type: relationShipType},
					(data) ->
						$scope.user = data.user
						$scope.users = data.users
					, @errorHandler

			allFollowing: (userId, relationShipType, $scope) ->
				@service.query {id: userId, relationship_type: relationShipType},
					(data) ->
						$scope.user = data.user
						$scope.users = data.users
					, @errorHandler

			follow: (user, followers, $scope) ->
				$http({
					method: 'POST',
					url: '/relationships.json',
					data:
						followed_id: user.id
				}).success((data) ->
					followers.push(data.relationship)
					$scope.is_following = true
				).error(->
					@errorHandler
				)

			unFollow: (user, followers, $scope) ->
				$http({
					method: 'DELETE',
					url: '/relationships/' + $scope.id + '.json',
				}).success((data) ->
					for key, follower of followers
						if follower.id == $scope.id
							followers.splice(key, 1)
					$scope.is_following = false
				).error(->
					@errorHandler
				)
]