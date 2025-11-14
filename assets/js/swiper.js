let heroSwiper = new Swiper(".hero-swiper", {
  spaceBetween: 20,
  slidesPerView: 3,
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
    320: { slidesPerView: 2.1, spaceBetween: 8 },
    400: { slidesPerView: 2.5, spaceBetween: 8 },
    500: { slidesPerView: 3 },
    600: { slidesPerView: 2.5 },
    700: { slidesPerView: 3 },
    800: { slidesPerView: 4 },
    1000: { slidesPerView: 5, spaceBetween: 12 },
    1399: { slidesPerView: 5.3, spaceBetween: 12 },
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





let reviewsSwiper = null;
let lastMode = null;

function initReviewsSwiper() {
  const isDesktop = window.innerWidth >= 992;
  const mode = isDesktop ? "desktop" : "mobile";

  if (reviewsSwiper && lastMode === mode) return;

  if (reviewsSwiper) {
    reviewsSwiper.destroy(true, true);
    reviewsSwiper = null;
  }

  lastMode = mode;

  reviewsSwiper = new Swiper(".reviews-swiper", {
    direction: isDesktop ? "vertical" : "horizontal",
    loop: true,
    speed: isDesktop ? 6000 : 600,
    allowTouchMove: !isDesktop,

    autoplay: isDesktop
      ? {
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false, 
        }
      : false,

    slidesPerView: isDesktop ? 3 : 1,
    spaceBetween: 10,

    pagination: {
      el: ".reviews-pagination",
      clickable: true,
    },

    breakpoints: {
      320: { slidesPerView: 1 },
      576: { slidesPerView: 1.4 },
      768: { slidesPerView: 2 },
      992: { slidesPerView: 3 },
    },
  });

  if (isDesktop) {
    const wrapper = document.querySelector(".reviews-swiper");

    wrapper.addEventListener("mouseenter", () => {
      if (reviewsSwiper?.autoplay) {
        reviewsSwiper.autoplay.stop();
      }
    });

    wrapper.addEventListener("mouseleave", () => {
      if (reviewsSwiper?.autoplay) {
        reviewsSwiper.autoplay.start();
      }
    });
  }
}

window.addEventListener("load", initReviewsSwiper);

let resizeTimer = null;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(initReviewsSwiper, 200);
});