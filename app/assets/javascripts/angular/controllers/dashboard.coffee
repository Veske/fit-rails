angular.module('Fit')
.controller "DashboardCtrl", [
	'$scope', '$location', '$http', 'UserService', 'Common', 'FeedService',
	($scope, $location, $http, UserService, Common, FeedService) ->
		$scope.users = []
		$scope.feed = []

		initData = ->
			FeedService.query(
				(response) ->
					$scope.feed = response
				(error) ->
			)

			UserService.query(
				(response) ->
					$scope.users = response
			)

		$scope.select_medium = (medium) ->
			$location.url('/media/' + medium.id)

		initData()
]