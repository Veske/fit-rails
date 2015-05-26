@Fit.factory 'FeedService', [
	'$resource',
	($resource) ->
		$resource '/feed/:id.json',
			{
				id: '@id'
			},
			{
				query: {isArray: false}
			}
]