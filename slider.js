var swiper = new Swiper('.swiper1', {
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  effect: 'fade',
  loop: true,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

 let size = screen.width;
 if( size == 1024){
  var swiper = new Swiper('.swiper2', {
    slidesPerView: 3,
    spaceBetween: 10,
    // init: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
    breakpoints: {
      '@1.00': {
        slidesPerView:3,
        spaceBetween: 20,
      },
    }
  });
 }else{
  var swiper = new Swiper('.swiper2', {
    slidesPerView: 1,
    spaceBetween: 10,
    // init: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
    breakpoints: {
      '@1.00': {
        slidesPerView:3,
        spaceBetween: 20,
      },
    }
  });
 }


