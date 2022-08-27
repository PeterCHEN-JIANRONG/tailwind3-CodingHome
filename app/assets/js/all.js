console.log('Hello!');

$(document).ready(() => {
  console.log('HesSchool Hello!');

  // navbar add .active
  $("header #menuBtn").click(function (e) {
    e.preventDefault();
    $("header .navbar").toggleClass("active");
    // $(this).addClass("active");
  });

  // close navbar
  $("header .navbar .link").click(function (e) {
    e.preventDefault();
    $("header .navbar").removeClass("active");
  });

  
  // swiper 
  // 你想要學習的程式， 都在這裡
  var swiper = new Swiper(".programSwiper", {
    slidesPerView: "auto",
    spaceBetween: 8,
    speed:1000,
    freeMode: true,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter:true,
    },
    breakpoints: {
      640: {
      },
      768: {
        spaceBetween: 16,
      },
      1024: {
      },
    },
  });
});