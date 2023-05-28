$(document).ready(function () {
  let preloader = $('#preloader');
  if (preloader) {
    $(window).on('load', function(){
      preloader.remove()
    });
  }
  /*Header and Back to top Class Added */
  $(window).on('scroll',function(){
    if ($(this).scrollTop() > 200) {
      $('#header').addClass('header-scrolled');
      $('.back-to-top').addClass('active');
    } else {
      $('#header').removeClass('header-scrolled');
      $('.back-to-top').removeClass('active');
    }
  });

  /*Mobile Navbar toggle */
  $(document).on('click','.mobile-nav-toggle',function(){
    $('#navbar').toggleClass('navbar-mobile');
    $(this).toggleClass('bi-list');
    $(this).toggleClass('bi-x');
  });
/*Mobile Navbar action click */
  $(document).on('click','.navbar .dropdown > a',function(e){
    if ($('#navbar').hasClass('navbar-mobile')) {
      e.preventDefault()
      $(this).next().toggleClass('dropdown-active');
    }
  });

});