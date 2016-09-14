// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function() {

  $('.offer_settings_icon').on('click', function() {
      if ($(this).hasClass("active-settings-icon")) {
        $(this).removeClass("active-settings-icon");
      } else {
        $(this).addClass("active-settings-icon");
      }
    })
}) // end of doc.function
