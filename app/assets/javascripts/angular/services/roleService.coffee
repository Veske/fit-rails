@Fit.factory 'RoleService', [
	'$resource',
	($resource) ->
		$resource '/roles/:id.json',
			{
				id: '@id'
			},
			{
				query: {isArray: false}
			}
]