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
				formDataAppender = (fd, key, val) ->
				if angular.isArray(val)
					angular.forEach val, (v) ->
						fd.append key, v
				else
					fd.append key, val
				file: $file[0]
				fileFormDataName: 'image_video'
			).progress((evt) ->
				console.log "percent: " + parseInt(100.0 * evt.loaded / evt.total)
			).success((data, status, headers, config) ->
				console.log data
			)


