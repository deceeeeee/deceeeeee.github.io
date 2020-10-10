$(document).ready(function() {
  $(window).scroll(function() {
    function fade_in(classname) {
      var element_post = $(classname).offset().top;
      var current_post = $(window).scrollTop();

      if (element_post < current_post + 700) {
        $(classname).css({
          animation: "fadein 2s",
          visibility: "visible"
        });
      }
    }

    $(".introduction").each(function() {
      fade_in(this);
    });

    $(".card-container").each(function() {
      fade_in(this);
    });
  });
});
