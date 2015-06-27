@Fit.service 'LikeService', [
	'$resource', '$http', '$routeParams', 'Common',
	($resource, $http, $routeParams, Common) ->
		$resource '/media/:id/likes/:like_id.json', {id: '@id', like_id: '@like_id'},
			like: {
				method: 'POST'
			},
			unlike: {
				method: 'DELETE'
			}
]

