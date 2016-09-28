// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function() {

  // make the settings-icon turn on click
  $('.offer_settings_icon').on('click', function() {

      if ($(this).hasClass("active-settings-icon")) {
        $(this).removeClass("active-settings-icon");

      } else if ($('.offer_settings_icon').hasClass("active-settings-icon")) {
        $('.offer_settings_icon').removeClass("active-settings-icon");
        $(this).addClass("active-settings-icon");

        $(document).click(function() {
          $('.offer_settings_icon').removeClass("active-settings-icon");
        });
      } else {
        $(this).addClass("active-settings-icon");

        $(document).click(function() {
          $('.offer_settings_icon').removeClass("active-settings-icon");
        });
      }
    })

}) // end of doc.function
