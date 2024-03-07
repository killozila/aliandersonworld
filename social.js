document.addEventListener("DOMContentLoaded", function() {
    var section3 = document.querySelector(".section3");
    var section4 = document.querySelector(".section4");
    var section5 = document.querySelector(".section5");
    var section6 = document.querySelector(".section6");
    var social = document.querySelector(".social");

    if (section3 && section4 && section5 && section6 && social) {
      var hideSocial = function() {
        social.style.display = "none";
      };

      var showSocial = function() {
        social.style.display = "block";
      };

      section3.addEventListener("mouseenter", hideSocial);
      section3.addEventListener("mouseleave", showSocial);

      section4.addEventListener("mouseenter", hideSocial);
      section4.addEventListener("mouseleave", showSocial);

      section5.addEventListener("mouseenter", hideSocial);
      section5.addEventListener("mouseleave", showSocial);

      section6.addEventListener("mouseenter", hideSocial);
      section6.addEventListener("mouseleave", showSocial);
    }
  });