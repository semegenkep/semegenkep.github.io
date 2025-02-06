$(document).ready(function(){
    $('.slick-slider').slick({
        dots: true,
        infinite: true,
        /*adaptiveHeight: true,*/
        lazyLoad: 'ondemand',
        variableWidth: false,
        speed: 300,
        fade: true,
        swipe: true,
        swipeToSlide: true,
        pauseOnHover: true,
        pauseOnFocus: true,
        pauseOnDotsHover: true,
        cssEase: 'linear',
        autoplay: false,
        autoplaySpeed: 8000
    });
  });