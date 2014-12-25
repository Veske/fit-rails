angular.module('Fit').controller "CommentsFormCtrl", ($scope, $timeout, $routeParams, $location, $http, $window) ->

	$scope.newComment = (text, medium) ->
		$http({
			method: 'POST',
			url:    './media/' + $routeParams.id + '/comments' + '.json',
			data:   comment: {text: text, user_id: 1}
		}).success( (data) ->
			medium.comments.push(data.comment)
		).error( ->
			# Display error notification
		)