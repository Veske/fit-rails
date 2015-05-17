@Fit.factory 'MediumService', [
	'$resource', '$http', '$routeParams',
	($resource, $http, $routeParams) ->
		$resource '/media/:id.json',
			{
				id: '@id'
			},
			{
				query: {isArray: false}
			}
]