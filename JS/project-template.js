$(document).ready(function () {
  var chevron = $("#content").offset().top;

  $("#content").on("click", function () {
    $(window).scrollTop(chevron);
  });

  $(".dropdown").on("click", function () {
    $(".dropdown-content").toggle();
  });

  $(".modal").on("click", function () {
    $(".modal").fadeOut();
    $(".modal-content").fadeOut();
  });
});
