angular.module('Fit').factory 'MediaShow', ($resource, $http, $routeParams) ->
	class Comments
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
			new @service(list: attributes).$save ((list) -> successHandler(list)), @errorHandler

		all: () ->
			@service.query((-> null), @errorHandler)