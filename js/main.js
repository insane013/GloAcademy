new WOW().init();
$(function () {
  $(".projects__slider").slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: true,
    infinite: true,
    speed: 1000,
  });
});
