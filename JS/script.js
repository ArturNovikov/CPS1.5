let init = false;
let swiper = null;

const swiperCard = () => {
  if (window.innerWidth < 767) {
    if (!init) {
      init = true;
      swiper = new Swiper(".swiper", {
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
    }
  } else {
    swiper && swiper.destroy();
    init = false;
  }
};

swiperCard();
window.addEventListener("resize", swiperCard);

let showMore = document.querySelector(".btn__show-more");
let sectionElementHide = document.querySelectorAll(
  ".section-services__element--hide"
);

let sectionElementHide768 = document.querySelectorAll(
  ".section-services__element--hide768"
);

/*показать скрыть выпадающие элементы*/
showMore.addEventListener("click", function () {
  let showMoreBtn = document.querySelector(".btn");
  for (let i = 0; i < sectionElementHide768.length; i++) {
    if (
      sectionElementHide768[i].classList.contains(
        "section-services__element--hide768"
      )
    ) {
      sectionElementHide768[i].classList.remove(
        "section-services__element--hide768"
      );
    } else {
      sectionElementHide768[i].classList.add(
        "section-services__element--hide768"
      );
    }
  }

  for (let i = 0; i < sectionElementHide.length; i++) {
    if (
      sectionElementHide[i].classList.contains(
        "section-services__element--hide"
      )
    ) {
      sectionElementHide[i].classList.remove("section-services__element--hide");
    } else {
      sectionElementHide[i].classList.add("section-services__element--hide");
    }
  }

  /* алгоритм замены надписи и поворота стрелок */
  if (!showMoreBtn.classList.contains("open", "btn--rotate")) {
    showMoreBtn.classList.add("open", "btn--rotate");
    showMoreBtn.textContent = "Скрыть";
  } else {
    showMoreBtn.classList.remove("open", "btn--rotate");
    showMoreBtn.textContent = "Показать все";
  }
});

// Добавление и удаление класса сладера к элементу в зависимости от размера дисплея
// поиск всех элементов с классом swiper-slide
let swiperSlideAll = document.querySelectorAll(".swiper-slide");
let swiperWrapper = document.querySelector(".swiper-wrapper");
/* медиазапрос */
if (matchMedia) {
  var screen = window.matchMedia("(max-width:767px)");
  screen.addListener(changes);
  changes(screen);
}
function changes(screen) {
  if (screen.matches) {
    /* появляется свайпер: добавляются классы */
    for (let i = 0; i < swiperSlideAll.length; i++) {
      if (!swiperSlideAll[i].classList.contains("swiper-slide")) {
        swiperSlideAll[i].classList.add("swiper-slide");
      }
    }
  } else {
    /* удаляется свайпер: удаляются классы */

    for (let i = 0; i < swiperSlideAll.length; i++) {
      if (swiperSlideAll[i].classList.contains("swiper-slide")) {
        swiperSlideAll[i].classList.remove("swiper-slide");
      }
    }
  }
}
