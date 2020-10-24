$(document).ready(function() {
  var chevron = $("#content").offset().top;

  $("#content").on("click", function() {
    $(window).scrollTop(chevron);
  });

  $(".modal").on("click", function() {
    $(".modal").fadeOut();
    // $(".modal .modal-content").hide();
  });
});
