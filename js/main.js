$(function() {
  $('.top-slider__inner').slick({
    arrows: false,
    dots: true,
    autoplay: true
  });
  

  var mixer1 = mixitup('.products__items', {
    selectors: {
      control: '.filter-1'
    }
  });

  var mixer2 = mixitup('.new-products__items', {
    selectors: {
      control: '.filter-2'
    }
  });

});
