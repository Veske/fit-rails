angular.module('Fit').controller "LikeFormCtrl", ($scope, $timeout, $routeParams, $location, $http, $window) ->

	$scope.newLike = (medium) ->
		$http({
			method: 'POST',
			url:    './media/' + medium.id + '/likes' + '.json',
			data:   like: {user_id: current_user.id}
		}).success( (data) ->
			medium.likes.push(data)
		).error( ->
			# Display error notification
		)

	$scope.destroyLike = (medium) ->
		$scope.like = []
		for key, like of medium.likes
			if like.user_id == current_user.id
				$scope.like = like

		$http({
			method: 'DELETE',
			url:    './media/' + medium.id + '/likes/' + $scope.like.id + '.json',
		}).success( (data) ->
			for key, like of medium.likes
				if like.id == data.id
					medium.likes.splice(key, 1)
		).error( ->
			# Display error notification
		)