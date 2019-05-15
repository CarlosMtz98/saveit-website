$( document ).ready(function() {

  // Get started!
  console.log('Hello World!');
  navBarScroll();

});

function navBarScroll() {
  $(document).scroll(function () {
    var $nav = $(".nav-container");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
}

$(document).on('click', 'a[href^="#"]', function (e) {
  e.preventDefault();
  $('html, body').stop().animate({
      scrollTop: $($(this).attr('href')).offset().top
  }, 1000, 'linear');
});