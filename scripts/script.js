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
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "30px",
});

var slickNext = document.querySelector(".slick-next");
var slickPrev = document.querySelector(".slick-prev");

slickPrev.innerHTML = `<i class="fas fa-angle-left"></i>`;
slickNext.innerHTML = `<i class="fas fa-angle-right"></i>`;

var searchBtn = document.getElementById("search_btn");
var searchPanel = document.querySelector(".search");
var body=document.getElementsByTagName("body")

$("#search_btn").click(function () {
  if (searchPanel.style.display != "block") {
    $(".search").slideDown(500);
    console.log("Sa");
    $(this).html(`<i class="fa-solid fa-xmark"></i> Bağla`);
  } else {
    $(".search").slideUp(500);
    $(this).html(`<i class="fas fa-search"></i> Saytda Axtarış`);
  }
});

$(".change_theme").click(function(){
$("body").toggleClass("dark_body")
$(".logo").toggleClass("text-light")
$("h4").toggleClass("text-light")
$(".vacancy-item").toggleClass("text-light")
$(".slick-inner").toggleClass("text-light")
$(".add-fav-btn").toggleClass("text-dark")
$("#search_btn").toggleClass("bg-light text-dark")
$(this).toggleClass("text-dark bg-light")

if($("body").hasClass("dark_body")){
  $(this).html(`<i class="fa-solid fa-sun"></i>`)
}else{
  $(this).html(`<i class="fas fa-moon"></i>`)
}
})
