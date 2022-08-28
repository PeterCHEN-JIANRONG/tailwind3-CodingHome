"use strict";

console.log('Hello!');
$(document).ready(function () {
  console.log('HesSchool Hello!'); // navbar add .active

  $("header #menuBtn").click(function (e) {
    e.preventDefault();
    $("header .navbar").toggleClass("active"); // $(this).addClass("active");
  }); // close navbar

  $("header .navbar .link").click(function (e) {
    e.preventDefault();
    $("header .navbar").removeClass("active");
  }); // swiper 
  // 你想要學習的程式， 都在這裡

  var swiperProgram = new Swiper(".swiper-program", {
    slidesPerView: "auto",
    spaceBetween: 8,
    speed: 1000,
    freeMode: true,
    centeredSlides: false,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    },
    breakpoints: {
      640: {},
      768: {
        spaceBetween: 16
      },
      1024: {}
    }
  });
  var swiperFeedbackImg = new Swiper(".swiper-feedback-img", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: ".feedback .swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".feedback .navigation-next",
      prevEl: ".feedback .navigation-prev"
    }
  });
  var swiperFeedback = new Swiper(".swiper-feedback", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    }
  });
  swiperFeedback.controller.control = [swiperFeedbackImg];
  swiperFeedbackImg.controller.control = [swiperFeedback];
});
//# sourceMappingURL=all.js.map
