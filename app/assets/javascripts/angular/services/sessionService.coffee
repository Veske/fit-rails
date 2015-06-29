@Fit.service 'SessionService', [
	'$resource', '$routeParams', '$location', 'Common',
	($resource) ->
		$resource '/users/:param.json', {param: '@param'},
			login: {
				method: 'POST'
				transformRequest: (data, headers)->
					angular.toJSON {user: data}
			},
			logout: {
				method: 'DELETE'
			}
]