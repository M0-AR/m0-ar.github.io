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


// Progress bars
var p = document.querySelectorAll('.progress-bar');
p[0].setAttribute("style", "width:100%;transition:1s all");
p[1].setAttribute("style", "width:60%;transition:1s all");
p[2].setAttribute("style", "width:40%;transition:1s all");
p[3].setAttribute("style", "width:75%;transition:1s all");
});
