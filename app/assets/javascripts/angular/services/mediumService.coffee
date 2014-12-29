angular.module('Fit').factory 'MediumService', ($resource, $http, $routeParams) ->
	class MediumService
		constructor: (mediumId, errorHandler) ->
			@service = $resource('/media/:id.json',
				{id: mediumId},
				{
					'query': { method: 'GET', isArray: false },
					'create': { method: 'POST'}
				}
			)
			@errorHandler = errorHandler

			defaults = $http.defaults.headers
			defaults.patch = defaults.patch || {}
			defaults.patch['Content-Type'] = 'application/json'

		create: (attributes, successHandler) ->
			new @service(medium: attributes).$save ((medium) -> successHandler(medium)), @errorHandler

		getData: () ->
			@service.query((-> null), @errorHandler)