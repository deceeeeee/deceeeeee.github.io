function zoomin(elem, type) {
  let src = elem.prop("src");
  $(".modal").show();
  $(".modal-content." + type).show();
  $(".modal .modal-content")
    .children()
    .prop("src", src);
}

$("img").on("click", function() {
  zoomin($(this), "img");
});
