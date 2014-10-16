# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

$(document).on 'ready page:load', ->

  # Seems that doing this by just using CScript will be troublesome. Wait for AngularJS implementation

  $('form').submit ->
    $.ajax '/comments',
      type: 'GET'
      data:  { media_id: 1 }
      dataType: "JSON"
      error: (jqXHR, textStatus, errorThrown) ->
        $('h2').append "AJAX Error: #{textStatus}"
      success: (data, textStatus, jqXHR) ->
        for f in data
          console.log(f.text)
        $('h2').append "Successful AJAX call: #{data}"