$(".slick-wrap").on("init", function (event, slick) {
  var dots = $(".slick-dots li");

  dots.each(function (k, v) {
    $(this)
      .find("button")
      .addClass("heading" + k);
  });
});

$(".slick-wrap").slick({
  focusOnSelect: true,
  infinite: true,
  arrows: true,
  prevArrow:
    "<button class='slick-prev slick-arrow'  type='button' ><i class='fas fa-angle-left'></i></button>",
  nextArrow:
    "<button class='slick-next slick-arrow'  type='button' ><i class='fas fa-angle-right'></i></button>",
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "30px",
});

$(".slick-wrap-mobile").slick({
  focusOnSelect: true,
  infinite: true,
  arrows: true,
  prevArrow:
    "<button class='slick-prev slick-arrow'  type='button' ><i class='fas fa-angle-left'></i></button>",
  nextArrow:
    "<button class='slick-next slick-arrow'  type='button' ><i class='fas fa-angle-right'></i></button>",
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "30px",
});

var searchBtn = document.getElementById("search_btn");
var searchPanel = document.querySelector(".search");
var body = document.getElementsByTagName("body");

$("#search_btn").click(function () {
  if (searchPanel.style.display != "block") {
    $(".search").slideDown(500);
    $(this).html(`<i class="fa-solid fa-xmark"></i> <span>Bağla</span>`);
  } else {
    $(".search").slideUp(500);
    $(this).html(`<i class="fas fa-search"></i> <span>Saytda Axtarış</span>`);
  }
});

(function checkDarkMode() {
  var checkDarkMode = localStorage.getItem("darkMode");
  if (checkDarkMode) {
    toggleDarkMode()
  }
})();
$(".change_theme").click(toggleDarkMode);

function toggleDarkMode() {
  var darkMode = "dark_body";
  $("body").toggleClass("dark_body");
  $(".logo").toggleClass("text-light");
  $("h4").toggleClass("text-light");
  $(".vacancy-item").toggleClass("text-light");
  $(".slick-inner").toggleClass("text-light");
  $(".add-fav-btn").toggleClass("text-dark");
  $("#search_btn").toggleClass("bg-light text-dark");
  $(".wish-list").toggleClass("bg-light text-dark");
  $(this).toggleClass("text-dark bg-light");

  if ($("body").hasClass("dark_body")) {
    $(this).html(`<i class="fa-solid fa-sun"></i>`);
    localStorage.setItem("darkMode", darkMode);
  } else {
    $(this).html(`<i class="fas fa-moon"></i>`);
    localStorage.removeItem("darkMode", darkMode);
  }
}
