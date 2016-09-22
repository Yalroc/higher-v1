// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function() {

// HIDE FOLDERS WHICH ARE CLOSED

for (var i = 0 ; i < 11; i++) {
  var concat = ".tree-folder-level-0";
  for (var j = 0 ; j < i; j++) {
    concat = concat + ", " + ".tree-folder-level-" + (j + 1);
  }
  // HIDE FOLDERS WHICH ARE CLOSED
  $('.tree-folder-level-' + i + '.folder-closed').nextUntil(concat).hide();
}

// HIDE FOLDERS WHICH ARE CLOSED
    //   $('.tree-folder-level-0.folder-closed').nextUntil( ".tree-folder-level-0" ).hide();
    //   $('.tree-folder-level-1.folder-closed').nextUntil( ".tree-folder-level-0, .tree-folder-level-1" ).hide();
    //   $('.tree-folder-level-2.folder-closed').nextUntil( ".tree-folder-level-0, .tree-folder-level-1, .tree-folder-level-2" ).hide();
    //   $('.tree-folder-level-3.folder-closed').nextUntil( ".tree-folder-level-0, .tree-folder-level-1, .tree-folder-level-2, .tree-folder-level-3" ).hide();
    //   $('.tree-folder-level-4.folder-closed').nextUntil( ".tree-folder-level-0, .tree-folder-level-1, .tree-folder-level-2, .tree-folder-level-3, .tree-folder-level-4" ).hide();
    //   $('.tree-folder-level-5.folder-closed').nextUntil( ".tree-folder-level-0, .tree-folder-level-1, .tree-folder-level-2, .tree-folder-level-3, .tree-folder-level-4, .tree-folder-level-5" ).hide();
    //   $('.tree-folder-level-6.folder-closed').nextUntil( ".tree-folder-level-0, .tree-folder-level-1, .tree-folder-level-2, .tree-folder-level-3, .tree-folder-level-4, .tree-folder-level-5, .tree-folder-level-6" ).hide();
    //   $('.tree-folder-level-7.folder-closed').nextUntil( ".tree-folder-level-0, .tree-folder-level-1, .tree-folder-level-2, .tree-folder-level-3, .tree-folder-level-4, .tree-folder-level-5, .tree-folder-level-6, .tree-folder-level-7" ).hide();

//MAKE FOLDER LEVELS COLLAPSEABLE
    // make the folders at level 0 collapsable
    $('.tree-folder-level-0').on('click', function(e) {

        if ($(this).hasClass("folder-open")) {
          $(this).removeClass("folder-open").addClass("folder-closed");
          $(this).find(".fa-folder-open").addClass("fa-folder").removeClass("fa-folder-open");
          $(this).nextUntil( ".tree-folder-level-0" ).hide()

        } else if ($(this).hasClass("folder-closed")) {
          $(this).removeClass("folder-closed").addClass("folder-open");
          $(this).nextUntil( ".tree-folder-level-0" ).removeClass("folder-closed").addClass("folder-open");
          $(this).find(".fa-folder").addClass("fa-folder-open").removeClass("fa-folder");
          $(this).nextUntil( ".tree-folder-level-0" ).find(".fa-folder").addClass("fa-folder-open").removeClass("fa-folder");
          $(this).nextUntil( ".tree-folder-level-0" ).show()
        }
    });

    // make the folders at level 1 collapsable
    $('.tree-folder-level-1').on('click', function() {

        if ($(this).hasClass("folder-open")) {
          $(this).removeClass("folder-open").addClass("folder-closed");
          $(this).find(".fa-folder-open").addClass("fa-folder").removeClass("fa-folder-open");
          $(this).nextUntil( ".tree-folder-level-0, .tree-folder-level-1" ).hide()

        } else if ($(this).hasClass("folder-closed")) {
          $(this).removeClass("folder-closed").addClass("folder-open");
          $(this).nextUntil( ".tree-folder-level-1" ).removeClass("folder-closed").addClass("folder-open");
          $(this).find(".fa-folder").addClass("fa-folder-open").removeClass("fa-folder");
          $(this).nextUntil( ".tree-folder-level-1" ).find(".fa-folder").addClass("fa-folder-open").removeClass("fa-folder");
          $(this).nextUntil( ".tree-folder-level-1" ).show()
        }
      });

    // make the folders at level 2 collapsable
    $('.tree-folder-level-2').on('click', function() {

        if ($(this).hasClass("folder-open")) {
          $(this).removeClass("folder-open").addClass("folder-closed");
          $(this).find(".fa-folder-open").addClass("fa-folder").removeClass("fa-folder-open");
          $(this).nextUntil( ".tree-folder-level-0, .tree-folder-level-1, .tree-folder-level-2" ).hide()

        } else if ($(this).hasClass("folder-closed")) {
          $(this).removeClass("folder-closed").addClass("folder-open");
          $(this).nextUntil( ".tree-folder-level-2" ).removeClass("folder-closed").addClass("folder-open");
          $(this).find(".fa-folder").addClass("fa-folder-open").removeClass("fa-folder");
          $(this).nextUntil( ".tree-folder-level-2" ).find(".fa-folder").addClass("fa-folder-open").removeClass("fa-folder");
          $(this).nextUntil( ".tree-folder-level-2" ).show()
        }
      });

    // make the folders at level 3 collapsable
    $('.tree-folder-level-3').on('click', function() {

        if ($(this).hasClass("folder-open")) {
          $(this).removeClass("folder-open").addClass("folder-closed");
          $(this).find(".fa-folder-open").addClass("fa-folder").removeClass("fa-folder-open");
          $(this).nextUntil( ".tree-folder-level-0, .tree-folder-level-1, .tree-folder-level-2, .tree-folder-level-3" ).hide()

        } else if ($(this).hasClass("folder-closed")) {
          $(this).removeClass("folder-closed").addClass("folder-open");
          $(this).nextUntil( ".tree-folder-level-3" ).removeClass("folder-closed").addClass("folder-open");
          $(this).find(".fa-folder").addClass("fa-folder-open").removeClass("fa-folder");
          $(this).nextUntil( ".tree-folder-level-3" ).find(".fa-folder").addClass("fa-folder-open").removeClass("fa-folder");
          $(this).nextUntil( ".tree-folder-level-3" ).show()
        }
      });

    // make the folders at level 4 collapsable
    $('.tree-folder-level-4').on('click', function() {

        if ($(this).hasClass("folder-open")) {
          $(this).removeClass("folder-open").addClass("folder-closed");
          $(this).find(".fa-folder-open").addClass("fa-folder").removeClass("fa-folder-open");
          $(this).nextUntil( ".tree-folder-level-0, .tree-folder-level-1, .tree-folder-level-2, .tree-folder-level-3, .tree-folder-level-4" ).hide()

        } else if ($(this).hasClass("folder-closed")) {
          $(this).removeClass("folder-closed").addClass("folder-open");
          $(this).nextUntil( ".tree-folder-level-4" ).removeClass("folder-closed").addClass("folder-open");
          $(this).find(".fa-folder").addClass("fa-folder-open").removeClass("fa-folder");
          $(this).nextUntil( ".tree-folder-level-4" ).find(".fa-folder").addClass("fa-folder-open").removeClass("fa-folder");
          $(this).nextUntil( ".tree-folder-level-4" ).show()
        }
      });

    // make the folders at level 5 collapsable
    $('.tree-folder-level-5').on('click', function() {

        if ($(this).hasClass("folder-open")) {
          $(this).removeClass("folder-open").addClass("folder-closed");
          $(this).find(".fa-folder-open").addClass("fa-folder").removeClass("fa-folder-open");
          $(this).nextUntil( ".tree-folder-level-0, .tree-folder-level-1, .tree-folder-level-2, .tree-folder-level-3, .tree-folder-level-4, .tree-folder-level-5" ).hide()

        } else if ($(this).hasClass("folder-closed")) {
          $(this).removeClass("folder-closed").addClass("folder-open");
          $(this).nextUntil( ".tree-folder-level-5" ).removeClass("folder-closed").addClass("folder-open");
          $(this).find(".fa-folder").addClass("fa-folder-open").removeClass("fa-folder");
          $(this).nextUntil( ".tree-folder-level-5" ).find(".fa-folder").addClass("fa-folder-open").removeClass("fa-folder");
          $(this).nextUntil( ".tree-folder-level-5" ).show()
        }
      });

    // make the folders at level 6 collapsable
    $('.tree-folder-level-6').on('click', function() {

        if ($(this).hasClass("folder-open")) {
          $(this).removeClass("folder-open").addClass("folder-closed");
          $(this).find(".fa-folder-open").addClass("fa-folder").removeClass("fa-folder-open");
          $(this).nextUntil( ".tree-folder-level-0, .tree-folder-level-1, .tree-folder-level-2, .tree-folder-level-3, .tree-folder-level-4, .tree-folder-level-5, .tree-folder-level-6" ).hide()

        } else if ($(this).hasClass("folder-closed")) {
          $(this).removeClass("folder-closed").addClass("folder-open");
          $(this).nextUntil( ".tree-folder-level-6" ).removeClass("folder-closed").addClass("folder-open");
          $(this).find(".fa-folder").addClass("fa-folder-open").removeClass("fa-folder");
          $(this).nextUntil( ".tree-folder-level-6" ).find(".fa-folder").addClass("fa-folder-open").removeClass("fa-folder");
          $(this).nextUntil( ".tree-folder-level-6" ).show()
        }
      });

    // make the folders at level 7 collapsable
    $('.tree-folder-level-7').on('click', function() {

        if ($(this).hasClass("folder-open")) {
          $(this).removeClass("folder-open").addClass("folder-closed");
          $(this).find(".fa-folder-open").addClass("fa-folder").removeClass("fa-folder-open");
          $(this).nextUntil( ".tree-folder-level-0, .tree-folder-level-1, .tree-folder-level-2, .tree-folder-level-3, .tree-folder-level-4, .tree-folder-level-5, .tree-folder-level-6, .tree-folder-level-7" ).hide()

        } else if ($(this).hasClass("folder-closed")) {
          $(this).removeClass("folder-closed").addClass("folder-open");
          $(this).nextUntil( ".tree-folder-level-7" ).removeClass("folder-closed").addClass("folder-open");
          $(this).find(".fa-folder").addClass("fa-folder-open").removeClass("fa-folder");
          $(this).nextUntil( ".tree-folder-level-7" ).find(".fa-folder").addClass("fa-folder-open").removeClass("fa-folder");
          $(this).nextUntil( ".tree-folder-level-7" ).show()
        }
      });

    // make the folders at level 8 collapsable
    $('.tree-folder-level-8').on('click', function() {

        if ($(this).hasClass("folder-open")) {
          $(this).removeClass("folder-open").addClass("folder-closed");
          $(this).find(".fa-folder-open").addClass("fa-folder").removeClass("fa-folder-open");
          $(this).nextUntil( ".tree-folder-level-0, .tree-folder-level-1, .tree-folder-level-2, .tree-folder-level-3, .tree-folder-level-4, .tree-folder-level-5, .tree-folder-level-6, .tree-folder-level-7, .tree-folder-level-8" ).hide()

        } else if ($(this).hasClass("folder-closed")) {
          $(this).removeClass("folder-closed").addClass("folder-open");
          $(this).nextUntil( ".tree-folder-level-8" ).removeClass("folder-closed").addClass("folder-open");
          $(this).find(".fa-folder").addClass("fa-folder-open").removeClass("fa-folder");
          $(this).nextUntil( ".tree-folder-level-8" ).find(".fa-folder").addClass("fa-folder-open").removeClass("fa-folder");
          $(this).nextUntil( ".tree-folder-level-8" ).show()
        }
      });


}) // end of doc.function
