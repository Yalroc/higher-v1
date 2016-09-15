// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function() {

  // make the settings-icon turn on click
  $('.offer_settings_icon').on('click', function() {
      if ($('.offer_settings_icon').hasClass("active-settings-icon")) {
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


  // make the star yellow on click
  $('.column-0').on('click', function() {
    if ($(this).find(".star-icon").hasClass("fa-star-o")) {
      $(this).find(".star-icon").addClass("fa-star yellow").removeClass("fa-star-o");
        // call AJAX somewhere here
    }
    else {
      $(this).find(".star-icon").addClass("fa-star-o").removeClass("fa-star yellow");
        // call AJAX somewhere here
    }
  })

  // call AJAX somewhere here

}) // end of doc.function
