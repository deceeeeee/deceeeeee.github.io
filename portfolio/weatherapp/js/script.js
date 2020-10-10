$(document).ready(function() {
  $("#firstcon").fadeIn();

  $("#enter").on("click", function() {
    display_weather();
  });
  $("#city").on("keypress", function(e) {
    if (e.keyCode == 13) {
      display_weather();
    }
  });
});
