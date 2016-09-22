// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function() {

// HIDE FOLDERS WHICH ARE CLOSED




var concat = ".tree-folder-level-0";
for (var i = 0 ; i < 11; i++) {
  for (var j = 0 ; j < i; j++) {
    concat = concat + ", " + ".tree-folder-level-" + (j + 1);
  }
  // HIDE FOLDERS WHICH ARE CLOSED
  $('.tree-folder-level-' + i + '.folder-closed').nextUntil(concat).hide();

    // MAKE FOLDER LEVELS COLLAPSEABLE
    $('.tree-folder-level-' + i).on('click', function() {

      if ($(this).hasClass("folder-open")) {
        $(this).removeClass("folder-open").addClass("folder-closed");
        $(this).find(".fa-folder-open").addClass("fa-folder").removeClass("fa-folder-open");
        $(this).nextUntil(concat).hide()

      } else if ($(this).hasClass("folder-closed")) {
        $(this).removeClass("folder-closed").addClass("folder-open");
        $(this).nextUntil( ".tree-folder-level-" + i ).removeClass("folder-closed").addClass("folder-open");
        $(this).find(".fa-folder").addClass("fa-folder-open").removeClass("fa-folder");
        $(this).nextUntil( ".tree-folder-level-" + i ).find(".fa-folder").addClass("fa-folder-open").removeClass("fa-folder");
        $(this).nextUntil( ".tree-folder-level-" + i ).show()
      }
    });
  }
}) // end of doc.function


// HIDE FOLDERS WHICH ARE CLOSED
    //   $('.tree-folder-level-0.folder-closed').nextUntil( ".tree-folder-level-0" ).hide();
    //   $('.tree-folder-level-1.folder-closed').nextUntil( ".tree-folder-level-0, .tree-folder-level-1" ).hide();
    //   $('.tree-folder-level-2.folder-closed').nextUntil( ".tree-folder-level-0, .tree-folder-level-1, .tree-folder-level-2" ).hide();
    //   $('.tree-folder-level-3.folder-closed').nextUntil( ".tree-folder-level-0, .tree-folder-level-1, .tree-folder-level-2, .tree-folder-level-3" ).hide();
    //   $('.tree-folder-level-4.folder-closed').nextUntil( ".tree-folder-level-0, .tree-folder-level-1, .tree-folder-level-2, .tree-folder-level-3, .tree-folder-level-4" ).hide();
    //   $('.tree-folder-level-5.folder-closed').nextUntil( ".tree-folder-level-0, .tree-folder-level-1, .tree-folder-level-2, .tree-folder-level-3, .tree-folder-level-4, .tree-folder-level-5" ).hide();
    //   $('.tree-folder-level-6.folder-closed').nextUntil( ".tree-folder-level-0, .tree-folder-level-1, .tree-folder-level-2, .tree-folder-level-3, .tree-folder-level-4, .tree-folder-level-5, .tree-folder-level-6" ).hide();
    //   $('.tree-folder-level-7.folder-closed').nextUntil( ".tree-folder-level-0, .tree-folder-level-1, .tree-folder-level-2, .tree-folder-level-3, .tree-folder-level-4, .tree-folder-level-5, .tree-folder-level-6, .tree-folder-level-7" ).hide();

// MAKE FOLDER LEVELS COLLAPSEABLE
    // // make the folders at level 0 collapsable
    // $('.tree-folder-level-0').on('click', function(e) {

    //     if ($(this).hasClass("folder-open")) {
    //       $(this).removeClass("folder-open").addClass("folder-closed");
    //       $(this).find(".fa-folder-open").addClass("fa-folder").removeClass("fa-folder-open");
    //       $(this).nextUntil( ".tree-folder-level-0" ).hide()

    //     } else if ($(this).hasClass("folder-closed")) {
    //       $(this).removeClass("folder-closed").addClass("folder-open");
    //       $(this).nextUntil( ".tree-folder-level-0" ).removeClass("folder-closed").addClass("folder-open");
    //       $(this).find(".fa-folder").addClass("fa-folder-open").removeClass("fa-folder");
    //       $(this).nextUntil( ".tree-folder-level-0" ).find(".fa-folder").addClass("fa-folder-open").removeClass("fa-folder");
    //       $(this).nextUntil( ".tree-folder-level-0" ).show()
    //     }
    // });

    // // make the folders at level 1 collapsable
    // $('.tree-folder-level-1').on('click', function() {

    //     if ($(this).hasClass("folder-open")) {
    //       $(this).removeClass("folder-open").addClass("folder-closed");
    //       $(this).find(".fa-folder-open").addClass("fa-folder").removeClass("fa-folder-open");
    //       $(this).nextUntil( ".tree-folder-level-0, .tree-folder-level-1" ).hide()

    //     } else if ($(this).hasClass("folder-closed")) {
    //       $(this).removeClass("folder-closed").addClass("folder-open");
    //       $(this).nextUntil( ".tree-folder-level-1" ).removeClass("folder-closed").addClass("folder-open");
    //       $(this).find(".fa-folder").addClass("fa-folder-open").removeClass("fa-folder");
    //       $(this).nextUntil( ".tree-folder-level-1" ).find(".fa-folder").addClass("fa-folder-open").removeClass("fa-folder");
    //       $(this).nextUntil( ".tree-folder-level-1" ).show()
