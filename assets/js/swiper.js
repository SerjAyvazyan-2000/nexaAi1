






let heroSwiper = new Swiper(".hero-swiper", {
    spaceBetween: 20,
    slidesPerView:3,
    loop: true,
    centeredSlides: true,

    autoplay: {
        delay: 1,
        disableOnInteraction: false,
    },
    speed: 3000,
    on: {
        slideChange: updateImproveHeroStyle,
        transitionStart: updateImproveHeroStyle,

    },
    breakpoints: {
        320: {slidesPerView: 2.1,spaceBetween: 8,},
        400: {slidesPerView: 2.5,spaceBetween: 8,},
        500: {slidesPerView: 3,},
        600: {slidesPerView: 2.5,},
        700: {slidesPerView: 3,},

        800: {slidesPerView: 4,},

        1000: {slidesPerView: 4.1,spaceBetween: 12,},

        1399: {slidesPerView: 5.3,spaceBetween: 12,},

    },


});

function updateImproveHeroStyle() {
    const allItemsImprove = document.querySelectorAll(".improve-hero-card");

    allItemsImprove.forEach((item) => {
        const lowQuality = item.getAttribute("data-low");
        const highQuality = item.getAttribute("data-high");
        const cardName = item.querySelector(".improve-card-name p");

        const slide = item.closest(".swiper-slide");
        if (slide.classList.contains("swiper-slide-active")) {
            item.classList.add("active");

            // setTimeout(() => {
            //     cardName.textContent = "Результат";
            // }, 300);

            // Обновляем фон плавно
            // setTimeout(() => {
            //     if (highQuality) {
            //         item.style.backgroundImage = `url('${highQuality}')`;
            //
            //     }
            // }, 300);
        } else {
            // cardName.textContent = "Оригинал";
            item.classList.remove("active");
            //
            // if (lowQuality) {
            //     item.style.backgroundImage = `url('${lowQuality}')`;
            //
            // }
        }
    });
}


updateImproveHeroStyle();



let reviewsSwiper;
let currentDirection;

function initSwiper() {
  const direction = window.innerWidth <= 992 ? "horizontal" : "vertical";

  if (reviewsSwiper && currentDirection === direction) return;

  if (reviewsSwiper) reviewsSwiper.destroy(true, true);

  currentDirection = direction;

  reviewsSwiper = new Swiper(".reviews-swiper", {
    direction,
    loop: true,
    speed: 5500,

    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },

    freeMode: {
      enabled: true,
      momentum: false,
    },

    slidesPerView: 3,
    spaceBetween: 10,
    pagination: {
      el: ".reviews-pagination",
      clickable: true,
    },

    breakpoints: {
      320:  { slidesPerView: 1 },
      490:  { slidesPerView: 1.2 },
      620:  { slidesPerView: 1.5 },
      810:  { slidesPerView: 2 },
      992:  { slidesPerView: 3 },
      1096: { slidesPerView: 3 },
      1232: { slidesPerView: 3 },
    },
  });

  const wrapper = document.querySelector(".reviews-swiper");

  wrapper.addEventListener("mouseenter", () => reviewsSwiper.autoplay.stop());
  wrapper.addEventListener("mouseleave", () => reviewsSwiper.autoplay.start());
}

document.addEventListener("DOMContentLoaded", initSwiper);
window.addEventListener("resize", () => {
  clearTimeout(window._rs);
  window._rs = setTimeout(initSwiper, 200);
});