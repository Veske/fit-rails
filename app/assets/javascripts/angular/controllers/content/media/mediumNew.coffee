angular.module('Fit').controller "MediumNewCtrl", ($scope, $timeout, $routeParams, $location, $http, $window, Common) ->

	console.log("Here")
	$scope.upload = ($files) ->
		console.log("Here")
		console.log($files)