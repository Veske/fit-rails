@Fit.service 'CommentService', [
	'$resource'
	($resource) ->
		$resource '/media/:medium_id/comments/:comment_id.json', {medium_id: '@medium_id', comment_id: '@comment_id'}

]