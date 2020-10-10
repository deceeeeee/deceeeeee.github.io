$(document).ready(function () {
  $(".edit").on("click", function () {
    $(".updateform").fadeIn();
  });

  $(".collapse").on("click", function () {
    $(".updateform").fadeOut();
  });
});

function updating(user) {
  $.ajax({
    url: "JS/JSONdata.php",
    method: "GET",
    data: "userid=" + user
  }).done(function (data) {
    var json = data;
    var obj = JSON.parse(json);

    console.log(user);
    $("#update-btn").val(user);
    $("#username").val(obj.Username);
    $("#name").val(obj.Name);
    $("#birthdate").val(obj.Birthday);
    $("#country").val(obj.Country);
    $("#address").val(obj.Address);
    $("#post_code").val(obj.Postalcode);
    $("#phone").val(obj.Phone);
    $("#email").val(obj.Email);
    $("#preference").val(obj.Preferences);
  });
}
