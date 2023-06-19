$(function(){
    $('.owl-carousel.ocv').owlCarousel({
      items: 1,
      loop: false,
      nav: false,
      margin: 0
    });
    // this code below enables drag and drop vertically. Unfortunately I was unable to disable horizontal drag and drop so it will remain active, but we already have something now =D
    $('.owl-carousel.ocv').data('owl.carousel').difference = function(first, second) {
      return {
          x: first.x - second.x + (first.y - second.y),
          y: first.y - second.y
      };
  };
  });