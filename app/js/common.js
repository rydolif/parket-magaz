$(function() {

//------------------------------гамбургер-----------------------------
  var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


//------------------------------гамбургер-----------------------------
  $('.hamburger').click(function() {
    $(this).toggleClass('hamburger--active');
    $('.nav').toggleClass('nav--active');
    $('body').toggleClass('no-scroll');
  });

//---------------------------js-----------------------
  $('.tabs__wrap').hide();
  $('.tabs__wrap:first').show();
  $('.tabs ul a:first').addClass('tabs__link--active');
   $('.tabs ul a').click(function(event){
    event.preventDefault();
    $('.tabs ul a').removeClass('tabs__link--active');
    $(this).addClass('tabs__link--active');
    $('.tabs__wrap').hide();
     var selectTab = $(this).attr('href');
    $(selectTab).fadeIn();
  });

  
});
