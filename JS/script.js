const showMoreBtnFunc = function () {
  let showMore = document.querySelector(".services__show-more-btn");

  showMore.addEventListener("click", function () {
    let showMoreBtn = document.querySelector(".services__show-more-btn");
    let servicesMenu = document.querySelector(".services__menu");

    if (!showMoreBtn.classList.contains("open", "btn--rotate")) {
      showMoreBtn.classList.add("open", "btn--rotate");
      showMoreBtn.textContent = "Скрыть";
      servicesMenu.classList.add("services__menu--open");
      servicesMenu.classList.remove("services__menu--close");
    } else {
      showMoreBtn.classList.remove("open", "btn--rotate");
      showMoreBtn.textContent = "Показать все";
      servicesMenu.classList.add("services__menu--close");
      servicesMenu.classList.remove("services__menu--open");
    }
  });
};
showMoreBtnFunc();

let swiperSlideAll = document.querySelectorAll(".swiper-slide");
let swiperWrapper = document.querySelector(".swiper-wrapper");
let containerMenu = document.querySelector(".container__menu");
let servicesMenu = document.querySelector(".services__menu");

function myFunction(x) {
  if (x.matches) {
    let swiper = new Swiper(".swiper", {
      spaceBetween: 16,
      slidesPerView: 1.18,
      allowTouchMove: true,
      speed: 400,
      height: 72,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    for (let i = 0; i < swiperSlideAll.length; i++) {
      if (!swiperSlideAll[i].classList.contains("swiper-slide")) {
        swiperSlideAll[i].classList.add("swiper-slide");
      }
    }
    swiperWrapper.classList.add("swiper-wrapper");
    containerMenu.classList.add("swiper");
  } else {
    let swiper = new Swiper(".swiper", {
      cssMode: false,
    });
    swiper.destroy();

    for (let i = 0; i < swiperSlideAll.length; i++) {
      if (swiperSlideAll[i].classList.contains("swiper-slide")) {
        swiperSlideAll[i].classList.remove("swiper-slide");
      }
    }
    swiperWrapper.classList.remove("swiper-wrapper");
    containerMenu.classList.remove("swiper");
  }
}

var x = window.matchMedia("(max-width: 768px)");
myFunction(x);
x.addEventListener("change", myFunction);
