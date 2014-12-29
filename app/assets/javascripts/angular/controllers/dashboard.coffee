angular.module('Fit')
.controller "DashboardCtrl", [
	'$scope',
	'$location',
	'$http',
	'UserService',
	'Common',
	'FeedService',
	($scope, $location, $http, UserService, Common, FeedService) ->
		$scope.users = []
		$scope.feed = []
		serverErrorHandler = Common.serverErrorHandler

		$scope.init = ->
			@userService = new UserService(serverErrorHandler)
			@feedService = new FeedService(serverErrorHandler)
			@userService.all($scope)
			@feedService.all($scope)

		$scope.viewUsers = ->
			$location.url('/users')

		$scope.selectMedium = (medium) ->
			$location.url('/media/' + medium.id)
]