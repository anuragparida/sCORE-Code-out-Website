

$(document).ready(function(){
  $(".hiddenbutton").click(function(){
    $(".hiddensection").animate({
      height: 'toggle'
    });
  });
  let tranced = true;
  $(".hiddenright").click(function(){
    console.log("clicked");
    if(tranced) {
      $(".hiddenleft").css("background-image","url('images/score/normwoman.png')");
      $(".hiddenright").css("background-image","url('images/score/pixel-back.png')");
      
    }
    else {
      $(".hiddenleft").css("background-image","url('images/score/undraw_modern_life_u1ev.png')");
      $(".hiddenright").css("background-image","url('images/score/flahs+sounf.png')");
      playTone("E7","sine",5);
    }
    tranced = !tranced;
  });
});

