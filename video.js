var video = $("video")[0];

video.volume = 0;

$(document).ready(function() {
  video.play();
});

$(".overvideo").on("click", function() {
  $(".overvideo").css({
    opacity: 0,
    pointerEvents: "none"
  });

  $(".vid").css({
    height: "100vh"
  });

  $("video").css({
    height: "100vh"
  });

  $(".third-later").css({
    height: "100vh"
  });

  $("html").animate(
    {
      scrollTop: $(".overvideo").offset().top
    },
    500
  );

  setTimeout(function() {
    $(".overvideo").css({
      opacity: 1,
      pointerEvents: "all",
      height: "70vh"
    });

    $(".third-later").css({
      height: "70vh"
    });

    $(".vid").css({
      height: "50vh"
    });

    $("video")
      .css({
        height: "auto"
      })
      .off("ended");
    video.volume = 0;
  }, 72000);

  video.volume = 1;
  video.currentTime = 0;
  video.play();
});
