# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

$(document).on 'ready page:load', ->

  # Seems that doing this by just using CScript will be troublesome. Wait for AngularJS implementation

  #$('form').submit ->
  #  $.ajax '/media',
  #    type: 'GET'
  #    dataType: "HTML"
  #    error: (jqXHR, textStatus, errorThrown) ->
  #      $('h2').append "AJAX Error: #{textStatus}"
  #    success: (data, textStatus, jqXHR) ->
  #      $('#comments').load('/media/1')

  #setInterval (=> $('#comments').load('/media')), 5000