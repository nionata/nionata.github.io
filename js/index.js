$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll != 0) {
    $("#nav").addClass("top-bar");
    $("#social").removeClass("social-tran");
  } else {
    $("#nav").removeClass("top-bar");
    $("#social").addClass("social-tran");
  }
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - $('#nav').height()
        }, 1000);
        return false;
      }
    }
  });
});

var myData = JSON.parse("data")
var app = new Vue({
  el: "app",
  data: {
    "projects": json.projects,
    "experience": json.experience
  }
})
