angular.module('Fit').controller "MediumNewCtrl", ($scope, $timeout, $routeParams, $location, $http, $window, $upload) ->

	$scope.media = []

	$scope.templates = [{name: 'mediumNew.html', url: 'templates/content/media/_new.html'}]

	$scope.upload = ($file, media) ->
		$upload.upload(
			url: "/media.json"
			method: 'POST'
			data: {text: 'asdsad'}
			file: $file[0]
			fileFormDataName: 'medium[image_video]'
			formDataAppender: (fd, key, val) ->
				if (angular.isArray(val))
					angular.forEach val, (v) ->
						fd.append 'medium[' + key + ']', v
				else
					fd.append 'medium[' + key + ']', val
		).progress((evt) ->
			console.log "percent: " + parseInt(100.0 * evt.loaded / evt.total)
		).success((data, status, headers, config) ->
			console.log data
			console.log media
			media.push data
		)
