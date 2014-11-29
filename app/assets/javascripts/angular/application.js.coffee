# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

#= require_self
#= require_tree ./controllers/
#= require_tree ./directives/
#= require_tree ./services/

@fit_rails = angular.module("fit_rails", ['ngRoute'])
.value('$sniffer', { history: true })

@fit_rails.config(["$httpProvider", ($httpProvider) ->
	$httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content')
])