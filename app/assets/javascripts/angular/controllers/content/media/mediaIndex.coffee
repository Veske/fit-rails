angular.module('Fit')
.controller "MediaIndexCtrl", [
	'$scope',
	'$routeParams',
	'$location',
	'$http',
	'$upload',
	'MediumService',
	($scope, $routeParams, $location, $http, $upload, MediumService) ->
		$scope.media = []
		$scope.text = []
		$scope.file = []

		$scope.init = ->
			@mediumService = new MediumService($routeParams.id, serverErrorHandler)
			@mediumService.all().$promise.then(
				(data) ->
					$scope.media = data
			)

		$scope.selectMedium = (medium) ->
			$location.url('/media/' + medium.id)

		$scope.upload = (file, text) ->
			$upload.upload(
				url: "/media.json"
				method: 'POST'
				data: { text: text }
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
				$scope.media.push data.medium
			)

		$scope.chooseFile = ($files) ->
			$scope.file = $files[0]

		$scope.userOwnsMedium = (medium) ->
			if medium.user_id == current_user.id then true

		$scope.destroyMedium = (medium) ->
			@mediumService.delete(medium, $scope.media)

		$scope.templates = [
			{ name: 'mediumNew.html', 		url: 'templates/content/media/_form.html'},
			{ name: 'mediumDestroy.html',	url: 'templates/content/media/_destroy.html'}]

		serverErrorHandler = ->
			alert("There was a server error, please reload the page and try again.")
]

