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
  });
});
//# sourceMappingURL=all.js.map
