@Fit.factory 'InterceptorService', [
	'$q', '$rootScope', '$location'
	($q, $rootScope, $location) ->

		# We intercept requests that get a 401 - unauthorized response, and redirect the user
		# to /sign_in page
		responseError: (response) ->
			if response.status == 401
				$rootScope.$broadcast('event:unauthorized');
				$location.path('/users/sign_in');
				return response;
			$q.reject(response);
]