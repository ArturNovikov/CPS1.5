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

/* let createServicesElement = newItemTemplate.cloneNode(true); */

/* поиск шаблона и создание клона */
/* let sectionTemplate = document.querySelector("#section-template").content;
let clonedTemplate = sectionTemplate.cloneNode(true);
let sectionMenu = document.querySelector(".section-services__menu");
sectionMenu.appendChild(clonedTemplate);
 */
