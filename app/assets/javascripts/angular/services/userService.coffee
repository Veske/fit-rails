@Fit.service 'UserService', [
	'$resource', '$http', '$routeParams', 'Common',
	($resource, $http, $routeParams, Common) ->
		$resource '/users/:id/:options.json', {id: '@id', options: '@options'},
			create_user: {
				method: 'POST'
			},
			set_avatar: {
				method: 'POST'
			},
			update_user: {
				method: 'PATCH'
			},
			find: {
				method: 'GET'
			},
			update_role: {
				method: 'PATCH'
			}
]