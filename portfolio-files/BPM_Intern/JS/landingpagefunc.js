$(document).ready(function () {
  $("#login").on("click", function () {
    $("#modal").fadeIn();
  });

  $(".fa-times").on("click", function () {
    $("#modal").fadeOut();
  });

  $("#post_code").on("keyup", function () {
    var data = $("#post_code").val();
    if (!jQuery.isNumeric(data)) {
      $("#post_code").val("");
    }
  });

  $("#phone").on("keyup", function () {
    var data = $("#phone").val();
    if (!jQuery.isNumeric(data)) {
      $("#phone").val("");
    }
  });

  $("#confirmpw").on("change", function () {
    var pw = $("#password").val();
    var confirmpw = $("#confirmpw").val();
    if (pw != confirmpw) {
      alert("Password does not match with the confirmed password!");
      $("#password").val("");
      $("#confirmpw").val("");
    }
  });
});
