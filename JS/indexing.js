$(document).ready(function () {
  $(".nav-links").on("click", function () {
    var id = "#" + $(this).text();
    var content = $(id).offset().top;
    console.log(content);
    $(window).scrollTop(content);
  });
});
