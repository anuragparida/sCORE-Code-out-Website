$(document).ready(function() {
  $(window).scroll(function() {
    if ($(window).scrollTop() > window.innerHeight * 1.5) {
      $(".counter").each(function() {
        var $this = $(this),
          countTo = $this.attr("data-count");

        $({ countNum: $this.text() }).animate(
          {
            countNum: countTo
          },

          {
            duration: 2500,
            easing: "linear",
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
              //alert('finished');
            }
          }
        );
      });
    }
  });
});
