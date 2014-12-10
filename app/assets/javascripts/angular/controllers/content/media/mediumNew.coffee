angular.module('Fit').controller "MediumNewCtrl", ($scope, $timeout, $routeParams, $location, $http, $window, Common) ->

	$scope.media = []
	console.log("Here")
	$scope.upload = ($file) ->
		console.log("Here")
		console.log($file[0])
		$scope.media = $file[0]
		$http({
			method: 'POST',
			url:    './media' + '.json',
			data:   comment: {image_video: $scope.media, text: "text"}
		}).success( (data) ->
			console.log(data)
			#medium.comments.push(data.comment)
		).error( ->
			# Display error notification
		)