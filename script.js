'use strict';
var numberOfItems = $('#user-tbl .tbl-row').length; // Get total number of the items that should be paginated
var limitPerPage = 2; // Limit of items per each page

$('#user-tbl .tbl-row:gt(' + (limitPerPage - 1) + ')').hide(); // Hide all items over page limits (e.g., 5th item, 6th item, etc.)

var totalPages = Math.round(numberOfItems / limitPerPage); // Get number of pages

$(".pagination").append(" <li class='page-item active'><a class='page-link' href='#'>1</a></li>"); // Add first page marker

// Loop to insert page number for each sets of items equal to page limit (e.g., limit of 4 with 20 total items = insert 5 pages)
for (var i = 2; i <= totalPages; i++) {
    $(".pagination").append(" <li class='page-item'><a class='page-link' href='#'> "+ i +"</a></li>"); // Insert page number into pagination tabs
}


// Function that displays new items based on page number that was clicked
$(".pagination li.page-item").on("click", function() {
    // Check if page number that was clicked on is the current page that is being displayed
    if ($(this).hasClass('active')) {
        return false; // Return false (i.e., nothing to do, since user clicked on the page number that is already being displayed)
    } else {
        var currentPage = $(this).index(); // Get the current page number
        $(".pagination li").removeClass('active'); // Remove the 'active' class status from the page that is currently being displayed
        $(this).addClass('active'); // Add the 'active' class status to the page that was clicked on
        $("#user-tbl .tbl-row").hide(); // Hide all items in loop, this case, all the list groups
        var grandTotal = limitPerPage * (currentPage+1); // Get the total number of items up to the page number that was clicked on

        for (var i =grandTotal - limitPerPage ; i < grandTotal; i++) {
                $("#user-tbl .tbl-row:eq(" + i + ")").show(); // Show items from the new page that was selected
            }

        }

});
