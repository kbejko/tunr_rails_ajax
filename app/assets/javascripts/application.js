// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function(){

  $(".test_ajax_get").on("click", function(){
    $.ajax({
      type: 'GET',
      url: "artists",
      dataType: 'json'
    }).done(function(response) {
      console.log(response)
    }).fail(function(response) {
      console.log("Ajax get request failed")
    })
  })

  $(".test_ajax_post").on("click", function(){
    var name = $(".name").val()
    var photoUrl = $(".photo_url").val()
    var nationality = $(".nationality").val()
    $.ajax({
      type: 'POST',
      url: "artists",
      dataType: 'json',
      data: {
        artist: {
          name: name,
          nationality: nationality,
          photo_url: photoUrl
        }
      }
    }).done(function(response){
      console.log(response)
      $("ul.artists").append("<li><a href='/artists/" + response.id + "'>" + response.name + "</a></li>")
    }).fail(function(response){
      console.log("Ajax post request failed")
    })
  })

  $(".test_ajax_put").on("click", function(){
    $.ajax({
      type: 'PUT',
      dataType: 'json',
      url: "artists/6",
      data: {
        artist: {
          name: "Robert Goulet",
          nationality: "American",
          photo_url: "http://media.giphy.com/media/u5yMOKjUpASwU/giphy.gif"
        }
      }
    }).done(function(response){
      console.log(response)
    }).fail(function(response){
      console.log("failed to update")
    })
  })

  $(".test_ajax_delete").on("click", function(){
    $.ajax({
      type: 'DELETE',
      dataType: 'json',
      url: "artists/9"
    }).done(function(response){
      console.log("DELETED")
      console.log(response)
    }).fail(function(){
      console.log("Failed to delete")
    })
  })
})
