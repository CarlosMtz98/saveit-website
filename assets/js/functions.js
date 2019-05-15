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