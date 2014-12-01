angular.module('Fit').factory 'Common', ['$window', ($window) ->

	{
		# Display a toast on the top of the page to show info
		# @params: $scope, text
		flashNotification: ($scope, text) ->
			$scope.message = text
			$scope.notify = true
			setTimeout(() ->
				$scope.notify = false
			, 2000)

	}


]