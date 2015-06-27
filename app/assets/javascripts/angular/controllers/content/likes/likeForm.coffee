@Fit.controller "LikeFormCtrl", [
	'$scope', '$routeParams', 'LikeService', 'Common',
	($scope, $routeParams, LikeService, Common) ->
		$scope.like = []

		$scope.newLike = (medium) ->
			LikeService.like({id: $routeParams.id, user_id: Common.get_current_user.id},
				(response) ->
					medium.likes.push(response.id)
			)

		$scope.destroyLike = (medium) ->
			for i, like of medium.likes
				if like.user_id == Common.get_current_user().id then $scope.like = like.user_id

			LikeService.unlike({id: $routeParams.id, like_id: $scope.like},
				(response) ->
					for i, like of medium.likes
						if like.user_id == $scope.like then medium.likes.splice(i, 1)
			)
]
