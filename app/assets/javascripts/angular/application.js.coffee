Fit = angular.module("Fit", ['ngRoute', 'growlNotifications'])

Fit.config ($httpProvider) ->
	authToken = $("meta[name=\"csrf-token\"]").attr("content")
	$httpProvider.defaults.headers.common["X-CSRF-TOKEN"] = authToken

Fit.config ($routeProvider, $locationProvider) ->

	$routeProvider
	.when '/',
		templateUrl: 'assets/angular/templates/visitors/index.html',
		controller: 'VisitorsCtrl'
	.when '/users',
		templateUrl: 'assets/angular/templates/users/index.html',
		controller: 'UsersIndexCtrl'
	.otherwise
			redirectTo: '/'

	$locationProvider.html5Mode true


# Makes AngularJS work with turbolinks.
#$(document).on 'page:load', ->
#	$('[ng-app]').each ->
#		module = $(this).attr('ng-app')
#		angular.bootstrap(this, [module])