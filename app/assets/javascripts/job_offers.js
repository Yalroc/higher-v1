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
  });

  // nested dropdowns code
  $(".dropdown-menu > li > a.trigger").on("click",function(e){
    var current=$(this).next();
    var grandparent=$(this).parent().parent();
    if($(this).hasClass('left-caret')||$(this).hasClass('right-caret'))
      $(this).toggleClass('right-caret left-caret');
    grandparent.find('.left-caret').not(this).toggleClass('right-caret left-caret');
    grandparent.find(".sub-menu:visible").not(current).hide();
    current.toggle();
    e.stopPropagation();
  });
  $(".dropdown-menu > li > a:not(.trigger)").on("click",function(){
    var root=$(this).closest('.dropdown');
    root.find('.left-caret').toggleClass('right-caret left-caret');
    root.find('.sub-menu:visible').hide();
  });



}) // end of doc.function
