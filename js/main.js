document.addEventListener("DOMContentLoaded", function () {
  // back top
  var backTop = document.querySelector("#back-top");

  // width document
  var widthDoc = document.querySelector("body");

  // fancybox
  var fancyboxes = document.querySelectorAll(".fancybox-full");

  // navbar sticky
  var navbar = document.querySelector(".navbar");
  if (navbar) {
    var sticky = navbar.offsetTop;
  }

  //
  var headerMbBlock = document.querySelector(".header-mb-block");
  if (headerMbBlock) {
    var navMb = headerMbBlock.querySelector(".nav-mb");
  }

  // show sub title
  var subTitles = document.querySelectorAll(".sub-title__btn");

  // show sub menu
  var subMenu = document.querySelector(".sub-menu");

  const app = {
    // su ly cac su kien
    handleEvent: function () {
      const _this = this;

      // when click back top
      if (backTop) {
        backTop.onclick = function () {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        };
      }
      // header
      if (headerMbBlock) {
        var showSearch = headerMbBlock.querySelector(".header-mb__search");
        var searchMb = headerMbBlock.querySelector(".search-mb");
        var barMb = headerMbBlock.querySelector(".header-mb__bar");

        showSearch.onclick = () => {
          searchMb.classList.toggle("hidden");
        };

        barMb.onclick = () => {
          subMenu.classList.toggle("sticky");
          if (widthDoc) {
            if (subMenu.matches(".sticky")) {
              widthDoc.style.overflow = "hidden";
            } else {
              widthDoc.style.overflow = "auto";
            }
          }
        };
      }

      // show sub title
      if (subTitles) {
        subTitles.forEach(function (subTitle) {
          subTitle.onclick = function () {
            this.parentElement
              .querySelector(".sub-title__list")
              .classList.toggle("show");
          };
        });
      }
      // hide cac element khi click ra ngoai
      document.addEventListener("click", function (e) {
        // if (menuPc && btnMenu) {
        //   if (
        //     !menuPc.querySelector(".wrapper").contains(e.target) &&
        //     !e.target.matches(".icon-expandmenu")
        //   ) {
        //     menuPc.classList.remove("active");
        //     btnMenu.classList.remove("active");
        //   }
        // }
      });
    },

    // slide topic list
    slideToppicList: function () {
      var swiper = new Swiper(".mySwiperHotNews", {
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    },
    // media
    sliderMedia: function () {
      var swiper = new Swiper(".mySwiperMediaSecondary", {
        slidesPerView: 2,
        slidesPerGroup: 1,
        freeMode: true,
        watchSlidesProgress: true,
        direction: "vertical",
        mousewheel: true,
        scrollbar: {
          el: ".swiper-scrollbar",
        },
        // breakpoints: {
        //   768: {
        //     slidesPerView: 2,
        //     spaceBetween: 0,
        //     slidesPerGroup: 1,
        //   },
        // },
      });
      var swiper2 = new Swiper(".mySwiperMediaPrimary", {
        direction: "vertical",
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
        thumbs: {
          swiper: swiper,
        },
      });
    },
    // sticky bar home 1
    stickyHome1: function () {
      $(".leftSidebar-1,.rightSidebar-1").theiaStickySidebar({
        additionalMarginTop: 60,
      });
    },
    // fancybox
    fancybox: function () {
      if (fancyboxes) {
        fancyboxes.forEach(function (fancybox) {
          $(".fancybox-full a").fancybox();
        });
      }
    },
    // scroll top
    scrollFunc: function () {
      if (backTop) {
        if (
          document.body.scrollTop > 300 ||
          document.documentElement.scrollTop > 300
        ) {
          backTop.style.opacity = 1;
          backTop.style.visibility = "visible";
        } else {
          backTop.style.opacity = 0;
          backTop.style.visibility = "hidden";
        }
      }

      if (navbar) {
        if (window.pageYOffset >= sticky) {
          navbar.classList.add("sticky");
        } else {
          navbar.classList.remove("sticky");
        }
      }

      if (window.scrollY >= 100) {
        headerMbBlock.classList.add("sticky");
        navMb.classList.add("hidden");
      } else {
        headerMbBlock.classList.remove("sticky");
        navMb.classList.remove("hidden");
      }
    },

    // window scroll
    windowScroll: function () {
      var _this = this;
      window.onscroll = function () {
        // scroll top
        _this.scrollFunc();
      };
    },
    // khoi tao function start
    start: function () {
      // su ly cac su kien
      this.handleEvent();
      // window scroll
      this.windowScroll();
      // slide topic list
      this.slideToppicList();
      // media
      this.sliderMedia();
      // sticky bar home 1
      this.stickyHome1();
      // fancybox
      this.fancybox();
    },
  };

  app.start();
});
