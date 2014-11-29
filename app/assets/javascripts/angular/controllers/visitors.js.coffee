@fit_rails.controller 'VisitorsCtrl', ['$scope', '$location', '$http',  '$window', ($scope, $location, $http, $window) ->

	$scope.users = []

	$http.get('/users.json')
	.success (users) =>
		$scope.users = users
	.error (data) ->
		console.log('error!')

	$scope.viewUsers = ->
		$location.path('/users')
		$window.location.href = '/users'
		console.log("Redirected")


]