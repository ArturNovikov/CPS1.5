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

let swiperSlideAll = document.querySelectorAll(".services__element");
let containerMenu = document.querySelector(".container__menu");
let servicesMenu = document.querySelector(".services__menu");
let x = window.matchMedia("(max-width: 768px)");
function myFunction(x) {
  if (x.matches) {
    for (let i = 0; i < swiperSlideAll.length; i++) {
      if (!swiperSlideAll[i].classList.contains("swiper-slide")) {
        swiperSlideAll[i].classList.add("swiper-slide");
      }
    }
    if (!servicesMenu.classList.contains("swiper-wrapper")) {
      servicesMenu.classList.add("swiper-wrapper");
    }
    if (!containerMenu.classList.contains("swiper")) {
      containerMenu.classList.add("swiper");
    }

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
  } else {
    console.log("max");
    let swiper = new Swiper(".swiper", {});
    swiper.destroy();
    for (let i = 0; i < swiperSlideAll.length; i++) {
      if (swiperSlideAll[i].classList.contains("swiper-slide")) {
        swiperSlideAll[i].classList.remove("swiper-slide");
      }
    }
    servicesMenu.classList.remove("swiper-wrapper");
    containerMenu.classList.remove("swiper");
  }
}
myFunction(x);
x.addEventListener("change", myFunction);

