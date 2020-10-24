function zoomin(elem) {
  let src = elem.prop("src");
  $(".modal").show();
  $(".modal-content").show();
  $(".modal .modal-content")
    .children()
    .prop("src", src);
}

$(".grid-image img").on("click", function() {
  zoomin($(this));
});
