angular.module('Fit')
.controller "DashboardCtrl", [
	'$scope', '$location', '$http', 'UserService', 'Common', 'FeedService',
	($scope, $location, $http, UserService, Common, FeedService) ->
		$scope.users = []
		$scope.feed = []

		initData = ->
			new FeedService().$query(
				(response) ->
					$scope.feed = response.media
				(error) ->
# Handle error
			)

			new UserService().$query(
				(response) ->
					$scope.users = response.users
			)

		$scope.select_medium = (medium) ->
			$location.url('/media/' + medium.id)

		initData()
]