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



    // make the folders at level 3 collapsable
    $('#collapse-all-folders-btn').on('click', function() {
      $(".tree-folder-level-1, .tree-folder-level-2, .tree-folder-level-3, .tree-folder-level-4, .tree-folder-level-5, .tree-folder-level-6, .tree-folder-level-7, .offer-js").not('.orphan-row').hide();
    });

    $('#expand-all-folders-btn').on('click', function() {
      $(".tree-folder-level-1, .tree-folder-level-2, .tree-folder-level-3, .tree-folder-level-4, .tree-folder-level-5, .tree-folder-level-6, .tree-folder-level-7, .offer-js").show();
    });

}) // end of doc.function
