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
var waypoint = new Waypoint({
  element: document.getElementById('exp-id'),
  handler: function() {

    console.log("waypoint")

    var p = document.querySelectorAll('.progress-bar');
    p[0].setAttribute("style", "width:100%;transition:1s all;");
    p[1].setAttribute("style", "width:95%;transition:1.5s all;");
    p[2].setAttribute("style", "width:85%;transition:1.7s all;");
    p[3].setAttribute("style", "width:99%;transition:2s all;");

  },
  offset: '90%'
});

// Owl Carousel, Todo: not working
$('.owl-carousel').owlCarousel();

});

// Work
var filterized = $(".filter-container").filterizr({
  animationDuration: .5,
});
