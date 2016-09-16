// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function() {

    // make the folders at level 0 collapsable
    $('.tree-folder-level-0').on('click', function() {

        if ($(this).hasClass("folder-open")) {
          $(this).removeClass("folder-open").addClass("folder-closed");
          $(this).nextUntil( ".tree-folder-level-0" ).hide()

        } else if ($(this).hasClass("folder-closed")) {
          $(this).removeClass("folder-closed").addClass("folder-open");
          $(this).nextUntil( ".tree-folder-level-0" ).show()
        }
  });

    // make the folders at level 1 collapsable
    $('.tree-folder-level-1').on('click', function() {

        if ($(this).hasClass("folder-open")) {
          $(this).removeClass("folder-open").addClass("folder-closed");
          $(this).nextUntil( ".tree-folder-level-0, .tree-folder-level-1" ).hide()

        } else if ($(this).hasClass("folder-closed")) {
          $(this).removeClass("folder-closed").addClass("folder-open");
          $(this).nextUntil( ".tree-folder-level-1" ).show()
        }
    });

    // make the folders at level 2 collapsable
    $('.tree-folder-level-2').on('click', function() {

        if ($(this).hasClass("folder-open")) {
          $(this).removeClass("folder-open").addClass("folder-closed");
          $(this).nextUntil( ".tree-folder-level-0, .tree-folder-level-1, .tree-folder-level-2" ).hide()

        } else if ($(this).hasClass("folder-closed")) {
          $(this).removeClass("folder-closed").addClass("folder-open");
          $(this).nextUntil( ".tree-folder-level-2" ).show()
        }
    });

    // make the folders at level 3 collapsable
    $('.tree-folder-level-3').on('click', function() {

        if ($(this).hasClass("folder-open")) {
          $(this).removeClass("folder-open").addClass("folder-closed");
          $(this).nextUntil( ".tree-folder-level-0, .tree-folder-level-1, .tree-folder-level-2, .tree-folder-level-3" ).hide()

        } else if ($(this).hasClass("folder-closed")) {
          $(this).removeClass("folder-closed").addClass("folder-open");
          $(this).nextUntil( ".tree-folder-level-3" ).show()
        }
    });

    // make the folders at level 2 collapsable
    $('.tree-folder-level-4').on('click', function() {

        if ($(this).hasClass("folder-open")) {
          $(this).removeClass("folder-open").addClass("folder-closed");
          $(this).nextUntil( ".tree-folder-level-0, .tree-folder-level-1, .tree-folder-level-2, .tree-folder-level-3, .tree-folder-level-4" ).hide()

        } else if ($(this).hasClass("folder-closed")) {
          $(this).removeClass("folder-closed").addClass("folder-open");
          $(this).nextUntil( ".tree-folder-level-4" ).show()
        }
    });

    // make the folders at level 2 collapsable
    $('.tree-folder-level-5').on('click', function() {

        if ($(this).hasClass("folder-open")) {
          $(this).removeClass("folder-open").addClass("folder-closed");
          $(this).nextUntil( ".tree-folder-level-0, .tree-folder-level-1, .tree-folder-level-2, .tree-folder-level-3, .tree-folder-level-4, .tree-folder-level-5" ).hide()

        } else if ($(this).hasClass("folder-closed")) {
          $(this).removeClass("folder-closed").addClass("folder-open");
          $(this).nextUntil( ".tree-folder-level-5" ).show()
        }
    });

    // make the folders at level 2 collapsable
    $('.tree-folder-level-6').on('click', function() {

        if ($(this).hasClass("folder-open")) {
          $(this).removeClass("folder-open").addClass("folder-closed");
          $(this).nextUntil( ".tree-folder-level-0, .tree-folder-level-1, .tree-folder-level-2, .tree-folder-level-3, .tree-folder-level-4, .tree-folder-level-5, .tree-folder-level-6" ).hide()

        } else if ($(this).hasClass("folder-closed")) {
          $(this).removeClass("folder-closed").addClass("folder-open");
          $(this).nextUntil( ".tree-folder-level-6" ).show()
        }
    });

    // make the folders at level 2 collapsable
    $('.tree-folder-level-7').on('click', function() {

        if ($(this).hasClass("folder-open")) {
          $(this).removeClass("folder-open").addClass("folder-closed");
          $(this).nextUntil( ".tree-folder-level-0, .tree-folder-level-1, .tree-folder-level-2, .tree-folder-level-3, .tree-folder-level-4, .tree-folder-level-5, .tree-folder-level-6, .tree-folder-level-7" ).hide()

        } else if ($(this).hasClass("folder-closed")) {
          $(this).removeClass("folder-closed").addClass("folder-open");
          $(this).nextUntil( ".tree-folder-level-7" ).show()
        }
    });


}) // end of doc.function


// else if ($(this).hasClass(".tree-folder-level-1")) {
//           $(this).nextUntil( ".tree-folder-level-1" ).hide()
//         } else if ($(this).hasClass(".tree-folder-level-2")) {
//           $(this).nextUntil( ".tree-folder-level-2" ).hide()
//         } else if ($(this).hasClass(".tree-folder-level-3")) {
//           $(this).nextUntil( ".tree-folder-level-3" ).hide()
//         } else if ($(this).hasClass(".tree-folder-level-4")) {
//           $(this).nextUntil( ".tree-folder-level-4" ).hide()
//         } else if ($(this).hasClass(".tree-folder-level-5")) {
//           $(this).nextUntil( ".tree-folder-level-5" ).hide()
//         } else if ($(this).hasClass(".tree-folder-level-6")) {
//           $(this).nextUntil( ".tree-folder-level-6" ).hide()
//         } else if ($(this).hasClass(".tree-folder-level-7")) {
//           $(this).nextUntil( ".tree-folder-level-7" ).hide()
//         } else if ($(this).hasClass(".tree-folder-level-8")) {
//           $(this).nextUntil( ".tree-folder-level-8" ).hide()
//         } else if ($(this).hasClass(".tree-folder-level-9")) {
//           $(this).nextUntil( ".tree-folder-level-9" ).hide()
//         }
