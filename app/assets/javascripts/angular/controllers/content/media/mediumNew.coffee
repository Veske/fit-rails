angular.module('Fit').controller "MediumNewCtrl", ($scope, $timeout, $routeParams, $location, $http, $window, Common, $upload) ->

	$scope.media = []
	console.log("Here")

	$scope.onFileSelect = ($files) ->
		console.log($files)

	$scope.$watch 'media', () ->
		console.log($scope.media)

	$scope.upload = ($file) ->
		fileReader = new FileReader()
		fileReader.readAsArrayBuffer($file[0])
		fileReader.onload = (e) ->
			console.log(e.target.result)
			$upload.upload(
				url: "/media.json"
				data: medium: {}
				file: $file[0]
				fileFormDataName: 'image_video'
			).progress((evt) ->
				console.log "percent: " + parseInt(100.0 * evt.loaded / evt.total)
			).success((data, status, headers, config) ->
				console.log data
			)






	$scope.upload2 = ($file) ->
		console.log($file[0])
		fileReader = new FileReader()
		fileReader.readAsArrayBuffer($file[0])
		fileReader.onload = (e) ->
			console.log(e)
			$upload.http(
				url: "/media.json"
				headers: 'Content-Type': $file[0].type
				data: medium: {text: 'text', image_video: e.target.result}
			).progress((evt) ->
				console.log "percent: " + parseInt(100.0 * evt.loaded / evt.total)
				return
			).success((data, status, headers, config) ->
				# file is uploaded successfully
				console.log data

			).error((data) ->
				console.log 'Error'
			)
