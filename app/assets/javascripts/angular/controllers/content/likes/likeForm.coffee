@Fit.controller "LikeFormCtrl", [
	'$scope', '$routeParams', 'LikeService', 'Common',
	($scope, $routeParams, LikeService, Common) ->
		$scope.like = []

		$scope.newLike = (medium) ->
			new LikeService(id: $routeParams.id, user_id: Common.get_current_user.id).$save(( (response) ->
				medium.likes.push(response.user.id)
			))

		$scope.destroyLike = (medium) ->
			for i, like of medium.likes
				if like.user_id == Common.get_current_user().id then $scope.like = like.user_id

			new LikeService(
				id: $routeParams.id,
				like_id: $scope.like
			).$delete(
				(response) ->
					for i, like of medium.likes
						if like.user_id == $scope.like then medium.likes.splice(i, 1)
			)
]
