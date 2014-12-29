# Register Fit-rails app for angular
angular.module('Fit.services', [
	'ngRoute',
	'ngResource',
	'growlNotifications',
	'angularFileUpload'
])

# Include all Angular modules
angular.module('Fit', [
	'Fit.services'
])

# Set metadata for $httpProvider
angular.module('Fit').config [
	'$httpProvider',
	($httpProvider) ->
		authToken = $("meta[name=\"csrf-token\"]").attr("content")
		$httpProvider.defaults.headers.common["X-CSRF-TOKEN"] = authToken
]
