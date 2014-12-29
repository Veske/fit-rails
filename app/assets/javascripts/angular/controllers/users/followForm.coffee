angular.module('Fit')
.controller "FollowFormCtrl", [
	'$scope',
	'$routeParams',
	'RelationshipService',
	'Common',
	($scope, $routeParams, RelationshipService, Common) ->
		$scope.current_user = current_user
		serverErrorHandler = Common.serverErrorHandler

		$scope.init = ->
			@relationshipService = new RelationshipService(serverErrorHandler)

		$scope.follow = (user, followers) ->
			@relationshipService.follow(user, followers, $scope)

		$scope.unFollow = (user, followers) ->
			$scope.id = []
			for key, follower of followers
				if follower.follower_id == $scope.current_user.id
					$scope.id = follower.id
			@relationshipService.unFollow(user, followers, $scope)
]
