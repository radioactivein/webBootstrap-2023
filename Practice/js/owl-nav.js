$('.owl-carousel.twoslide').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    nav:false,
    autoplay: true,
    responsive:{
        0:{
            items:1,
            
        },
        600:{
            items:1,
        },
        1000:{
            items:2,
            loop:true
        }
    }
});



$('.owl-carousel-vertical').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    nav:false,
    autoplay: true,
    responsive:{
        0:{
            items:1,
            
        },
        600:{
            items:1,
        },
        1000:{
            items:2,
            loop:true
        }
    }
});