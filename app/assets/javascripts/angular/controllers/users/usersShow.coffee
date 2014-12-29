angular.module('Fit')
.controller "UsersShowCtrl", [
	'$scope',
	'$routeParams',
	'$location',
	'UserService',
	'Common',
	'MediumService',
	($scope, $routeParams, $location, UserService, Common, MediumService) ->
		# Initialize $scope variables
		$scope.user = []
		$scope.media = []
		$scope.followers = []
		$scope.following = []
		$scope.isFollowing = false
		serverErrorHandler = Common.serverErrorHandler

		# Function that is ran upon page load to initalize services
		$scope.init = ->
			@userService = new UserService(serverErrorHandler)
			@mediumService = new MediumService(serverErrorHandler)
			@userService.find($routeParams.id, $scope)

		$scope.selectMedium = (medium) -> $location.url('/media/' + medium.id)

		# Check to know if we should show the delete medium button
		$scope.userOwnsMedium = (medium) ->
			if medium.user_id == current_user.id then true

		$scope.destroyMedium = (medium) ->
			@mediumService.delete(medium, $scope)

		# These templates are used to show little partials on the currently loaded page that
		# use different controllers
		$scope.templates = [
			{ name: 'mediumDestroy.html',	url: 'templates/content/media/_destroy.html'}]
]