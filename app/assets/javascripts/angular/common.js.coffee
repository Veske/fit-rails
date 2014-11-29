@fit_rails.factory 'Common', ['$window', ($window) ->

	flashNotification = ($scope, text) ->
		console.log("Here")
		$scope.message = text
		$scope.notify = true
		setTimeout(()->
			$scope.notify = false
		, 2000)
]