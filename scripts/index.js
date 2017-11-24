/**
 * Created by moersing on 17/11/2017.
 */
 (function (exports) {
    var $ = exports.$
    window.onload = function () {
        $('.swiper-container-h').addClass('show')
        var mTwoText1 = $('.m-two-text1')
        var mTwoText2 = $('.m-two-text2')
        var mTwoText3 = $('.m-two-text3')
        var mTwoText4 = $('.m-two-text4')
        var mTwoFooter = $('.m-two-footer')
        var mSwiperOneContent = $('.m-swiper-one-content')
        var mTwoPk = $('.m-two-pk')
        var oneSlideTimeout1
        var swiperV = new Swiper('.swiper-container-h', {
            direction: 'vertical',
            loop: true,
            speed:500,
            on: {
                init: function () {
                    swiperAnimateCache(this); //隐藏动画元素
                    swiperAnimate(this); //初始化完成开始动画
                },
                slideChange: function () {
                    switch (this.activeIndex) {
                        case 1:
                        $('.m-swiper-one-content').css({transform: 'translate3d(0px, 0px, 0px)'})
                        mTwoText1.removeClass('fadeInUp')
                        mTwoText2.removeClass('bounceInLeft')
                        mTwoText3.removeClass('bounceInRight')
                        mTwoPk.removeClass('bounceIn')
                        mTwoText4.removeClass('fadeInUp')
                        break
                        case 2:
                        setTimeout(function () {
                            $(document.body).css({background: '#fff'})
                            mTwoFooter.css({transform: ' scale(1,1)'})
                        }, 400)
                        break
                    }
                    swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
                }
            }
        });

        var swiperScrollbar = new Swiper('.swiper-container-scrollbar', {
            scrollbar: '.swiper-container-scrollbar .swiper-scrollbar',
            direction: 'vertical',
            slidesPerView: 'auto',
            mousewheelControl: true,
            freeMode: true,
            nested: true,
        });
        var tFlag = 0;
        var PAGES = {
            page4Fun: function () {
                setTimeout(function () {
                    var tommyt = setInterval(function () {
                        var tommyNum = document.getElementById('t-uti');
                        tommyNum.innerHTML = Number(tommyNum.innerHTML) + 1;
                        Number(tommyNum.innerHTML) >= 80 && clearInterval(tommyt)
                    }, 20)
                }, 4000)
            },
            page5fun: function () {
                setTimeout(function () {
                    var page5int = setInterval(function () {
                        tFlag -= .8;
                        tFlag <= $(window).height() - $('#changeTranslate').height() && clearInterval(page5int);
                        $('#changeTranslate').css({transform: 'translate3d(0px, ' + tFlag + 'px, 0px)'})
                    }, 1)
                    setTimeout(function () {
                        if (swiperV.activeIndex === 10) {
                            swiperV.slideNext()
                        }
                    }, 3500)
                }, 3300)
            },
            page6Fun: function () {
                var num = 0;
                setTimeout(function () {
                    var tommyt = setInterval(function () {
                        num++
                        var tommyNum = document.getElementById('t-page5-num');
                        tommyNum.innerHTML = num + 'W';
                        num >= 5 && clearInterval(tommyt)
                    }, 200)
                }, 4000)
            }
        }
        var startScroll, touchStart, touchCurrent;
        swiperV.slides.on('touchstart', function (e) {
          startScroll = this.scrollTop;
          touchStart = e.targetTouches[0].pageY;
      }, true);
        swiperV.slides.on('touchmove', function (e) {
          touchCurrent = e.targetTouches[0].pageY;
          var touchesDiff = touchCurrent - touchStart;
          var slide = this;
          var onlyScrolling =
          (slide.scrollHeight > slide.offsetHeight) &&
          (
              (touchesDiff < 0 && startScroll === 0) ||
              (touchesDiff > 0 && startScroll === (slide.scrollHeight - slide.offsetHeight)) ||
              (startScroll > 0 && startScroll < (slide.scrollHeight - slide.offsetHeight))
              );
          if (onlyScrolling) {
            e.stopPropagation();
        }
    }, true);
        $('.menu-container').hide();

        swiperV.on('slideChangeTransitionEnd', function () {
          if (this.activeIndex > 2 && this.activeIndex < 7) {
            $('.menu-container').show();
            $('.dropdown-menu li').removeClass("active-menu");
            $('.menu-' + this.activeIndex).addClass("active-menu")
        } else {
            $('.menu-container').hide();
        }
    })

        $('.swiper-arrow').on('click', function () {
          swiperV.slideNext();
      })
        $('.menu-container').hide();
        var swiperInner1 = new Swiper('.swiper-container-w', {
            pagination: {
                el: '.swiper-pagination',
            },
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            autoplay: {
                delay: 1000,
                stopOnLastSlide: false,
                disableOnInteraction: false,
            },
        });

        $('.meeting').on('click', function () {
          swiperV.slideTo(3);
          $(".dropdown-menu").hide();
      })
        $('.hotel').on('click', function () {
          swiperV.slideTo(4);
          $(".dropdown-menu").hide();
      })
        $('.transport').on('click', function () {
          swiperV.slideTo(5);
          $(".dropdown-menu").hide();
      })
        $('.travel').on('click', function () {
          swiperV.slideTo(6);
          $(".dropdown-menu").hide();
      })
        $('.menu').on('click', function () {
          $(".dropdown-menu").toggle();
      })
      var swiperInner = new Swiper('.swiper-container-v', {
          pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true,
        autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
        },
    });
   var toPage = function(index){
      swiperV.slideTo(index);
      $("index").addClass("active-menu");
      $("index").addClass("active-menu");
      $("index").addClass("active-menu");
      $("index").addClass("active-menu");
      $("index").addClass("active-menu");
      $(".dropdown-menu").hide();
    }
  }

})(window)
