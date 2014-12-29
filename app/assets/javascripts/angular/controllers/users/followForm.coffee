angular.module('Fit')
.controller "FollowFormCtrl", [
	'$scope',
	'$routeParams',
	'$http',
	($scope, $routeParams, $http) ->
		$scope.current_user = current_user

		$scope.follow = (user, followers) ->
			$http({
				method: 'POST',
				url: './relationships.json',
				data:
					followed_id: user.id
			}).success((data) ->
				followers.push(data.relationship)
				$scope.is_following = true
			).error(->
				# Display error notification
			)

		$scope.unFollow = (user, followers) ->
			$scope.id = []
			for key, follower of followers
				if follower.follower_id == $scope.current_user.id
					$scope.id = follower.id
			$http({
				method: 'DELETE',
				url: './relationships/' + $scope.id + '.json',
			}).success((data) ->
				for key, follower of followers
					if follower.id == $scope.id
						followers.splice(key, 1)
				$scope.is_following = false
			).error(->
				# Display error notification
			)
]
