var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 16,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  $(".next").on("click",function(){
    swiper.slideNext(500, function(){});
  });

  $(".prev").on("click",function(){
    swiper.slidePrev(500, function(){});
  });