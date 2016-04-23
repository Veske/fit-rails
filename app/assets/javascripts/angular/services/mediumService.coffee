@Fit.service 'MediumService', [
	'$resource', '$http', '$routeParams',
	($resource, $http, $routeParams) ->
		$resource '/media/:id.json', {id: '@id'}, {
			query: {
				isArray: true
			},
			get: {
				method: 'GET',
				isArray: false
			}
		}
]