@Fit.factory 'CommentService', [
	'$resource'
	($resource) ->
		$resource '/media/:id/comments/:comment_id.json',
				{
					id: '@id',
					comment_id: '@comment_id'
				},

				{
					remove: {method: 'DELETE'}
				}
]