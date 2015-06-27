@Fit.factory 'UserService', [
	'$resource', '$http', '$routeParams', 'Common',
	($resource, $http, $routeParams, Common) ->
		$resource '/users/:id/:options.json',
			{
				id: '@id',
				options: '@options'
			},
			{
				'query': {isArray: true},
				'avatar': {method: 'POST'}
			}

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
						# epty
				, @errorHandler

			createUser: (user, $scope) ->
				new @service(user: user).$save {id: ''},
					(data) ->
						# epty
				, @errorHandler

			set_avatar: (medium_id, $scope) ->
				new @service(avatar: {medium_id: medium_id}).$avatar {
							id: $scope.current_user,
							option: 'set_avatar',
							medium_id: medium_id
						},
					(data) ->
						console.log(data)
]