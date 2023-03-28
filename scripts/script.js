$(".slick-wrap").on("init", function (event, slick) {
  var dots = $(".slick-dots li");

  dots.each(function (k, v) {
    $(this)
      .find("button")
      .addClass("heading" + k);
  });
});

$(".slick-wrap").slick({
  infinite: true,
  arrows: true,
  prevArrow:
    "<button class='slick-prev slick-arrow'  type='button' ><i class='fas fa-angle-left'></i></button>",
  nextArrow:
    "<button class='slick-next slick-arrow'  type='button' ><i class='fas fa-angle-right'></i></button>",
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 3,
  centerPadding: "30px",
});

$(".slick-wrap-mobile").slick({
  infinite: true,
  arrows: true,
  prevArrow:
    "<button class='slick-prev slick-arrow'  type='button' ><i class='fas fa-angle-left'></i></button>",
  nextArrow:
    "<button class='slick-next slick-arrow'  type='button' ><i class='fas fa-angle-right'></i></button>",
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 2,
  centerPadding: "30px",
  swipeToSlide: true,
});

var searchBtn = document.querySelector(".search_btn");
var searchPanel = document.querySelector(".search");
var body = document.getElementsByTagName("body");

$(".search_btn").click(function () {
  if (searchPanel.style.display != "block") {
    $(".search").slideDown(500);
    if ($(this).hasClass("desk")) {
      $(this).html(`<i class="fa-solid fa-xmark"></i> <span>Bağla</span>`);
    }
  } else {
    $(".search").slideUp(500);
    if ($(this).hasClass("desk")) {
      $(this).html(`<i class="fas fa-search"></i> <span>Saytda Axtarış</span>`);
    }
  }
});

function checkDarkMode() {
  var darkModeIsActive = localStorage.getItem("darkMode");
  if (darkModeIsActive) {
    toggleDarkMode();
  }
};
checkDarkMode()
$(".change_theme").click(toggleDarkMode);
function toggleDarkMode() {
  var darkMode = "dark_body";
  $("body").toggleClass("dark_body");
  // $(".logo").toggleClass("text-light");
  // $("h4").toggleClass("text-light");
  // $(".vacancy-item").toggleClass("text-light");
  // $(".slick-inner").toggleClass("text-light");
  // $(".add-fav-btn").toggleClass("text-dark");
  // $("#search_btn").toggleClass("bg-light text-dark");
  // $(".wish-list").toggleClass("bg-light text-dark");
  // $(".header").toggleClass("dark_body text-dark");
  $(".footer_container").toggleClass('dark_body')
  $(this).toggleClass("text-dark bg-light");

  if ($("body").hasClass("dark_body")) {
    $(".change_theme").html(`<i class="fa-solid fa-sun"></i>`);
    localStorage.setItem("darkMode", darkMode);
  } else {
    $(".change_theme").html(`<i class="fas fa-moon"></i>`);
    localStorage.removeItem("darkMode", darkMode);
  }
}

$(mobileNav).css("display", "block");

var myNav = document.querySelector(".header-fixed");
var mobileNav = document.querySelector(".mobile-bottom-nav");

window.onscroll = function () {
  var scrollSize = document.documentElement.scrollTop;
  var breakPoint = document.body.clientWidth;
  if (scrollSize >= 200) {
    $(myNav).slideDown()

    if (breakPoint <= 770 && scrollSize >= 200) {
      $(mobileNav).slideDown();
      
    } 
  }else {
    $(mobileNav).slideUp();
    $(myNav).slideUp()
  }
};

var mobileBtn = document.querySelectorAll(".mobile-buttons");

mobileBtn.forEach((button) => {
  $(button).click(function () {
    $(mobileBtn).removeClass("active");
    $(this).addClass("active");
  });
});


$('.see-number').click(function(){
  var number=$(this).data("number");
$('.phone-number').html(`${number}`)
$(this).attr("href",`tel:${number}`)
})