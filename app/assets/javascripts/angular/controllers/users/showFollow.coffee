angular.module('Fit')
.controller "ShowFollowCtrl", [
	'$scope',
	'$routeParams',
	'$http',
	'RelationshipService',
	'Common',
	($scope, $routeParams, $http, RelationshipService, Common) ->
		$scope.user = []
		$scope.users = []
		serverErrorHandler = Common.serverErrorHandler

		$scope.init = ->
			relationshipService = new RelationshipService(serverErrorHandler)

			# Get relationships depending which link was chosen
			# params : type: following && followers
			if $routeParams.type == 'following'
				relationshipService.allFollowing($routeParams.id, $routeParams.type, $scope)
			else
				relationshipService.allFollowers($routeParams.id, $routeParams.type, $scope)
]