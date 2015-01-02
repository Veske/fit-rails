angular.module('Fit')
.controller "FollowFormCtrl", [
	'$scope',
	'$routeParams',
	'RelationshipService',
	'Common',
	($scope, $routeParams, RelationshipService, Common) ->
		serverErrorHandler = Common.serverErrorHandler

		$scope.init = ->
			@relationshipService = new RelationshipService(serverErrorHandler)

		$scope.follow = (user, followers) ->
			@relationshipService.follow(user, followers, $scope)

		$scope.unFollow = (user, followers) ->
			@relationshipService.unFollow(user, followers, $scope)
]
