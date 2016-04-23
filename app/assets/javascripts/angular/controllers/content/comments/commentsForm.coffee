@Fit.controller 'CommentsFormCtrl', [
	'$scope', '$routeParams', 'CommentService', 'Common',
	($scope, $routeParams, CommentService, Common) ->
		$scope.text = []

		$scope.newComment = (isValid, medium) ->
			if isValid
				comment = new CommentService({medium_id: medium.id})
				comment.text = $scope.text
				comment.user_id = Common.get_current_user().id
				comment.$save()
				medium.comments.push(comment)
				$scope.text = []
				$scope.commentForm.$setPristine();
				$scope.commentForm.$setUntouched();

]
