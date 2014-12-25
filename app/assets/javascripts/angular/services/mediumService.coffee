angular.module('Fit').service "MediumService", () ->
	media = []

	getProperty: ->
		media

	setProperty: (value) ->
		media = value

