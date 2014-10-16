# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

$(document).on 'ready page:load', ->
  console.log('Ready')

  $('form').submit ->
    $.ajax '/comments/create',
      type: 'GET'
      dataType: "JSON"
      error: (jqXHR, textStatus, errorThrown) ->
        $('h2').append "AJAX Error: #{textStatus}"
      success: (data, textStatus, jqXHR) ->
        $('h2').append "Successful AJAX call: #{data}"



 # $.ajax '/',
  #  type: 'GET'
   # dataType: 'json'
   # error: (jqXHR, textStatus, errorThrown) ->
   #   $('body').append "AJAX Error: #{textStatus}"
   # success: (data, textStatus, jqXHR) ->
    #  $('body').append "Successful AJAX call: #{data}"