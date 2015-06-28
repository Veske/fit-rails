@Fit.service 'SessionService', [
	'$resource', '$routeParams', '$location', 'Common',
	($resource, $routeParams, $location, Common) ->
		$resource '/users/:param.json', {param: '@param'},
			login: {
				method: 'POST'
			},
			logout: {
				method: 'DELETE'
			}
]