// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function() {

  $('#job_application_table').DataTable({
  // ajax: ...,
  // autoWidth: false,
  // pagingType: 'full_numbers',
  // processing: true,
  // serverSide: true,

  // Optional, if you want full pagination controls.
  // Check dataTables documentation to learn more about available options.
  // http://datatables.net/reference/option/pagingType
  "pageLength": 50

  });

  // show entries from & to
  var dataTableEntries1 = function() {
    var data = $( "#job_application_table_info" ).text().split(" ");
    return data;
  };

  // set .. of .. entries
  var dataTableEntries2 = function() {
    var data = dataTableEntries1();
    $('#entries-from').text(data[1]);
    $('#entries-to').text(data[3]);
  };
  dataTableEntries2(); // on page load

  // set .. of .. entries on search type
  $('#job_application_table_filter').find('input').on( 'keyup', function() {
    // set .. of .. entries on previous click
    dataTableEntries2();
    window.scrollTo(0, 0); // go to the top of the page when searching
  });


  // show previous 50 button
  $( "#page-switch-left" ).on( "click", function() {
    $( ".paginate_button.previous" ).trigger( "click" );
    // set .. of .. entries on previous click
    dataTableEntries2();
  });

  // show next 50 button
  $( "#page-switch-right" ).on( "click", function() {
    $( ".paginate_button.next" ).trigger( "click" );
    // set .. of .. entries on next click
    dataTableEntries2();
  });

  // make checkboxes shift-clickable
  var lastChecked = null;

  var $chkboxes = $('.chkbox');
  $chkboxes.click(function(e) {
      if(lastChecked == null) {
          lastChecked = this;
          return;
      }
      if(e.shiftKey) {
          var start = $chkboxes.index(this);
          console.log(start);
          var end = $chkboxes.index(lastChecked);
          console.log(end);

          $chkboxes.slice(Math.min(start,end), Math.max(start,end)+ 1).prop('checked', lastChecked.checked);
      }
      lastChecked = this;
  });

  // script for master checkbox (check all)
  $("#master-row-checkbox").click(function () {
    $('.chkbox').prop('checked', this.checked);
    console.log($('.chkbox'));
  });

  // script for checkboxes to be propped when col is clicked
  $('td.rank-col').on( "click", function(e) {
    if($(e.target).is('input')){
      return;
    }
    $(this).find('input').trigger( "click" );
  });


  // script for 'Years of XP' column sorting
  $('.xp-years-th-box1').addClass('active');
  $('th.xp-years-col.sorting').on( "click", function(e) {
      if ($('.xp-years-th-box1').hasClass('active')) {
        $('.xp-years-th-box1').removeClass('active');
        $(this).trigger( "click" );
      }
  });
  $('th.sorting').not('.xp-years-col').on( "click", function(e) {
      if (!$('.xp-years-th-box1').hasClass('active')) {
        $('.xp-years-th-box1').addClass('active');
      }
  });

}) // end of doc.function
