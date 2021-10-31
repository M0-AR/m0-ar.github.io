$(document).ready(function(){
  $(window).on('scroll', function(){
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $(".sticky").addClass("stickyadd");
    } else {
      $(".sticky").removeClass("stickyadd");
    }
  })

  var typed = new Typed(".element", {
    strings: ["Mohamad Ashmar","a Software Engineer"],
    smartBackspace: true,
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
    loopCount: Infinity,
    startDelay: 1000
  });

});
