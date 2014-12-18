angular.module('Fit').controller "MediaIndexCtrl", ($scope, $timeout, $routeParams, $location, $http, $window, $upload) ->
	$scope.media = []
	$scope.text = []
	$scope.file = []

	$scope.templates = [
		{ name: 'mediumNew.html', 		url: 'templates/content/media/_form.html'},
		{ name: 'mediumDestroy.html',	url: 'templates/content/media/_destroy.html'}]

	$http.get('/media.json')
	.success (data) =>
		$scope.media = data
	.error (data) ->
		console.log('error!')

	$scope.selectMedium = (medium) ->
		$location.url('/media/' + medium.id)

	$scope.upload = (file, text) ->
		$upload.upload(
			url: "/media.json"
			method: 'POST'
			data: {text: $scope.text}
			file: file
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
			console.log(data)
			$scope.media.push data.medium
		)

	$scope.chooseFile = ($files) ->
		$scope.file = $files[0]

	$scope.userOwnsMedium = (medium) ->
		if medium.user_id == current_user.id
			true

	$scope.destroyMedium = (medium) ->
		$http({
			method: 'DELETE',
			url:    './media/' + medium.id + '.json',
		}).success( (data) ->
			# Remove medium
		).error( ->
			# Display error notification
		)
