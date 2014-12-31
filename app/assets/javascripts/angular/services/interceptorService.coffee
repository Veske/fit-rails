@Fit.factory 'InterceptorService', [
	'$q',
	'$rootScope',
	'$location'
	($q, $rootScope, $location) ->
		# optional method
		request: (config) ->
			config

		# optional method
		responseError: (response) ->
			if response.status == 401
				$rootScope.$broadcast('event:unauthorized');
				$location.path('/users/sign_in');
				return response;
			$q.reject(response);
]