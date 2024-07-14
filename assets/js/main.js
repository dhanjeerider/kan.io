(function ($) {
  'use strict';

  // gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

  var imJs = {
      m: function (e) {
          imJs.d();
          imJs.methods();
      },
      d: function (e) {
          this._window = $(window),
          this._document = $(document),
          this._body = $('body'),
          this._html = $('html')
      },
      methods: function (e) {
        imJs.swiperActivation();
        imJs.vedioActivation();
        imJs.videoMovement();
        imJs.splitText();
        imJs.smoothScroll();
        imJs.parallaxJS(); 
        imJs.HoverImageRevel(); 
        imJs.showRightRevel(); 
        imJs.myAudio(); 
        imJs.metismenu(); 
        imJs.sideMenu(); 
        imJs.stickySidebar(); 
        imJs.searchOpton(); 
        imJs.magicCoursor(); 
        imJs.caseVarticleScroll(); 
        imJs.wowActive(); 
        imJs.counterUp();
        imJs.preloader();
      },
      swiperActivation: function (){
        $(document).ready(function() {
          var swiper = new Swiper(".projectSlider", {
            slidesPerView: 1,
            spaceBetween: 30,
            speed: 2000,
            loop: true,
            grabCursor: true,
            autoplay: true,
            pagination: {
              el: ".swiper-pagination",
              clickable:"true",
            },
            breakpoints:{
              576:{
                slidesPerView: 1,
              },
              0:{
                slidesPerView: 1,
              },
            },
          });
        });
        $(document).ready(function() {
          var swiper = new Swiper(".projectSlider2", {
            slidesPerView: 3,
            spaceBetween: 30,
            speed: 2000,
            loop: true,
            grabCursor: true,
            autoplay: true,
            pagination: {
              el: ".swiper-pagination3",
              clickable:"true",
            },
            breakpoints:{
              992:{
                slidesPerView: 3,
              },
              768:{
                slidesPerView: 2,
              },
              576:{
                slidesPerView: 1,
              },
              0:{
                slidesPerView: 1,
              },
            },
          });
        });
        $(document).ready(function() {
          var swiper = new Swiper(".projectSlider3", {
            slidesPerView: 2.4,
            spaceBetween: 30,
            speed: 2000,
            loop: true,
            grabCursor: true,
            autoplay: true,
            pagination: {
              el: ".swiper-pagination3",
              clickable:"true",
            },
            breakpoints:{
              992:{
                slidesPerView: 2.4,
              },
              768:{
                slidesPerView: 2,
              },
              576:{
                slidesPerView: 1,
              },
              0:{
                slidesPerView: 1,
              },
            },
          });
        });
        $(document).ready(function() {
          var swiper = new Swiper(".projectSlider4", {
            slidesPerView: 5,
            spaceBetween: 30,
            speed: 2000,
            loop: true,
            grabCursor: true,
            autoplay: true,
            pagination: {
              el: ".swiper-pagination4",
              clickable:"true",
            },
            breakpoints:{
              992:{
                slidesPerView: 5,
              },
              768:{
                slidesPerView: 3,
              },
              576:{
                slidesPerView: 2,
              },
              320:{
                slidesPerView: 1,
                centeredSlides: true,
              },
            },
          });
        });
        $(document).ready(function() {
          var swiper = new Swiper(".pricingSlider", {
            slidesPerView: 3,
            spaceBetween: 24,
            speed: 1800,
            loop: true,
            centeredSlides: true,
            grabCursor: true,
            autoplay: {
              delay: 3500,
            },
            pagination: {
              el: ".swiper-pagination5",
              clickable:"true",
            },
            breakpoints:{
              992:{
                slidesPerView: 3,
              },
              768:{
                slidesPerView: 2,
                centeredSlides: false,
              },
              576:{
                slidesPerView: 1,
              },
              0:{
                slidesPerView: 1,
              },
            },
          });
        });
        $(document).ready(function() {
          var swiper = new Swiper(".cs-testimonialSlider2", {
            slidesPerView: 2,
            spaceBetween: 30,
            speed: 3000,
            loop: true,
            grabCursor: true,
            autoplay: true,
            pagination: {
              el: ".swiper-paginations",
              clickable:"true",
            },
            breakpoints:{
              992:{
                slidesPerView: 2,
              },
              768:{
                slidesPerView: 1,
              },
              576:{
                slidesPerView: 1,
              },
              0:{
                slidesPerView: 1,
              },
            },
          });
        });
        $(document).ready(function() {
          var swiper = new Swiper(".cs-testimonialSlider", {
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 3000,
            loop: true,
            grabCursor: true,
            autoplay: true,
            pagination: {
              el: ".swiper-pagination2",
              clickable:"true",
            },
          });
        });
        $(document).ready(function() {
          var swiper = new Swiper(".cs-serviceSlider", {
            slidesPerView: 3,
            spaceBetween: 20,
            speed: 3000,
            loop: true,
            grabCursor: true,
            autoplay: false,
            pagination: {
              el: ".swiper-pagination2",
              clickable:"true",
            },
            breakpoints:{
              1200:{
                slidesPerView: 3,
              },
              992:{
                slidesPerView: 2,
              },
              768:{
                slidesPerView: 2,
              },
              576:{
                slidesPerView: 1,
              },
              0:{
                slidesPerView: 1,
              },
            },
          });
        });
        $(document).ready(function() {
          var swiper = new Swiper(".brandSlider", {
            slidesPerView: 5,
            spaceBetween: 30,
            speed: 2000,
            loop: true,
            grabCursor: true,
            autoplay: true,
            pagination: {
              el: ".swiper-pagination",
              clickable:"true",
            },
            breakpoints:{
              991:{
                slidesPerView: 5,
              },
              768:{
                slidesPerView: 4,
              },
              576:{
                slidesPerView: 3,
              },
              0:{
                slidesPerView: 3,
              },
            },
          });
        });

      }, 
      vedioActivation: function (e) {
        $(document).ready(function(){
          $('.popup-youtube, .popup-video').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
          });
        });
      },
      videoMovement:function(){
        /////////////////////////////////////////////////////
       const all_btns = gsap.utils.toArray(".movement");
       if (all_btns.length > 0) {
         var all_btn = gsap.utils.toArray(".movement");
       }
       else {
         var all_btn = gsap.utils.toArray("#btn_wrapper");
       }
       const all_btn_cirlce = gsap.utils.toArray(".moves");
       all_btn.forEach((btn, i) => {
         $(btn).mousemove(function (e) {
           callParallax(e);
         });
         function callParallax(e) {
           parallaxIt(e, all_btn_cirlce[i], 80);
         }

         function parallaxIt(e, target, movement) {
           var $this = $(btn);
           var relX = e.pageX - $this.offset().left;
           var relY = e.pageY - $this.offset().top;

           gsap.to(target, 0.5, {
             x: ((relX - $this.width() / 2) / $this.width()) * movement,
             y: ((relY - $this.height() / 2) / $this.height()) * movement,
             ease: Power2.easeOut,
           });
         }
         $(btn).mouseleave(function (e) {
           gsap.to(all_btn_cirlce[i], 0.5, {
             x: 0,
             y: 0,
             ease: Power2.easeOut,
           });
         });
       });
       /////////////////////////////////////////////////////
      },
      splitText: function () {

        // For Banner area animation

        // without scroll tigger
        if (window.innerWidth > 768){
        var quote = $(".quote");
        if (quote.length){
          $(document).ready(function () {
            gsap.registerPlugin(SplitText);

            var tl = gsap.timeline(),
              mySplitText = new SplitText(".quote", { type: "words,chars" }),
              chars = mySplitText.chars; //an array of all the divs that wrap each character
            
            gsap.set(".quote", { perspective: 400 });
            
            
            tl.from(chars, {
              duration: 1.5,
              opacity: 0,
              scale: 0,
              y: 80,
              rotationX: 180,
              transformOrigin: "0% 50% -50",
              ease: "back",
              stagger: 0.07
            });
            
        });
      }
    }

      // without scroll tigger
      var quote_2 = $(".quote-2");
      if (quote_2.length){
        $(document).ready(function () {
          gsap.registerPlugin(SplitText);

          var tl = gsap.timeline(),
            mySplitText = new SplitText(".quote-2", { type: "words,chars" }),
            chars = mySplitText.chars; //an array of all the divs that wrap each character
          
          gsap.set(".quote-2", { perspective: 400 });
          
          console.log(chars);
          
          tl.from(chars, {
            duration: .8,
            opacity: 0,
            scale: 0,
            y: 80,
            rotationX: 180,
            transformOrigin: "0% 50% -50",
            ease: "back",
            stagger: 0.01
          });
        });
      }



      // scroll trigger for body
      var split_me =  $('.split-me');
      if(split_me.length){ 
        $(document).ready(function () {
            let p = gsap.utils.toArray(".split-me");

            gsap.set(p, { autoAlpha: 1 });

            p.forEach((p) => {
            let splitHide = new SplitText(p, {
                type: "words",
                wordsClass: "hide"
            });

            let split = new SplitText(p, {
                type: "words,lines",
                linesClass: "lines",
                wordsClass: "words"
            });

            gsap.from(split.words, {
                duration: 1.2,
                yPercent: 100,
                ease: "power3.out",
                stagger: 0.02,
                scrollTrigger: {
                trigger: p
                }
            });
            });

        });
      }

      // scroll trigger for body
      if (window.innerWidth > 768){
      $(document).ready(function () {
          let splitTextLines = gsap.utils.toArray(".text-anim p, .text-anim");

          splitTextLines.forEach(splitTextLine => {
          const tl = gsap.timeline({
              scrollTrigger: {
              trigger: splitTextLine,
              start: 'top 90%',
              duration: 2,
              end: 'bottom 60%',
              scrub: false,
              markers: false,
              toggleActions: 'play none none none'
              }
          });

          const itemSplitted = new SplitText(splitTextLine, { type: "lines" });
          gsap.set(splitTextLine, { perspective: 400 });
          itemSplitted.split({ type: "lines" })
          tl.from(itemSplitted.lines, { duration: 1, delay: 0.3, opacity: 0, rotationX: -80, force3D: true, transformOrigin: "top center -50", stagger: 0.1 });
          });
      });
    }

      },
      smoothScroll: function (e) {
        $(document).on('click', '.onepage .main-nav a[href^="#"]', function (event) {
          event.preventDefault();
      
          $('html, body').animate({
              scrollTop: $($.attr(this, 'href')).offset().top
          }, 1500);
        });

        $(document).on('click', '.smooth-scroll-1', function (event) {
          event.preventDefault();
      
          $('html, body').animate({
              scrollTop: $($.attr(this, 'href')).offset().top
          }, 1500);
        });
      },
      parallaxJS: function (e) {
        // Parallax Stuff
      if ($(".stuff").length) {
          var stuff = $('.stuff').get(0);
          var parallaxInstance = new Parallax(stuff);
      }
      if ($(".stuff2").length) {
          var stuff = $('.stuff2').get(0);
          var parallaxInstance = new Parallax(stuff);
      }
      if ($(".stuff3").length) {
          var stuff = $('.stuff3').get(0);
          var parallaxInstance = new Parallax(stuff);
      }
      if ($(".stuff4").length) {
          var stuff = $('.stuff4').get(0);
          var parallaxInstance = new Parallax(stuff);
      }
    },
    HoverImageRevel: function (e) {
      $(document).ready(function () {
        let cs_service_item_1 = gsap.utils.toArray(".cs-service-animation");
        const serviceImgItems = document.querySelectorAll(".cs-service-item-1");

        function followImageCursor(event, serviceImgItem) {
          const contentBox = serviceImgItem.getBoundingClientRect();
          const dx = event.clientX - contentBox.left;
          const dy = event.clientY - contentBox.top;
          serviceImgItem.children[4].style.transform = `translate(${dx}px, ${dy}px)`;
        }

        serviceImgItems.forEach((item, i) => {
          item.addEventListener("mousemove", (event) => {
            followImageCursor(event, item);
          });
        });
      });
    },
    showRightRevel: function () {
      let hoverTab = document.getElementsByClassName('cs-hover-tab');
      if (hoverTab.length) {

        $(".cs-hover-tab").on("mouseenter", function () {
            $(this).addClass("active").siblings().removeClass("active");
          }),

          gsap.utils.toArray(".cs-show-revel-right").forEach((e) => {
            gsap.set(e, {
                opacity: 0,
                y: 100
              }),
              gsap.to(e, {
                scrollTrigger: {
                  trigger: e,
                  start: "top 90%",
                  end: "bottom 60%",
                  markers: !1
                },
                opacity: 1,
                y: -0,
                ease: "power2.out",
                duration: 2,
                stagger: 0.5
              });
          });
      };

    },

      myAudio: function (e){
        $(document).ready (function(){
          function myFunction() {
            var x = document.getElementById("myAudio").duration;
           
          };
          $(function() {
            $('audio').audioPlayer();
        });
        
        });
      },
      // metismenu
      metismenu:function(){
        $('#mobile-menu-active').metisMenu();
      },
       // side menu desktop
       sideMenu:function(){
        $(document).on('click', '.menu-btn', function () {
          $("#side-bar").addClass("show");
          $("#anywhere-home").addClass("bgshow");
        });
        $(document).on('click', '.close-icon-menu', function () {
          $("#side-bar").removeClass("show");
          $("#anywhere-home").removeClass("bgshow");
        });
        $(document).on('click', '#anywhere-home', function () {
          $("#side-bar").removeClass("show");
          $("#anywhere-home").removeClass("bgshow");
        });
        $(document).on('click', '.onepage .mainmenu li a', function () {
          $("#side-bar").removeClass("show");
          $("#anywhere-home").removeClass("bgshow");
        });
      },
       // side menu desktop
      
      stickySidebar: function () {
        if (typeof $.fn.theiaStickySidebar !== "undefined") {
          $(".sticky-coloum-wrap .tp-sticky-column-item").theiaStickySidebar({
            additionalMarginTop: 130,
          });
        }
      },
      // Search Bar show & hide
      searchOpton:function(){
        $(document).on('click', '.search-icon', function () {
          $(".search-input-area").addClass("show");
        });
        $(document).on('click', '.search-input-area input', function () {
          $(".search-input-area").addClass("show");
        });
        $(document).on('click', '.search-input-inner before', function () {
          $(".search-input-area").addClass("show");
        });
        $('html').click(function (e) {
          if (!$(e.target).hasClass('show')) {
            $(".search-close-icon").removeClass("show");
          }
          $(document).on('click', '.search-close-icon', function () {
            $(".search-input-area").removeClass("show");
          });
        });
      },
      // Magic Coursor
      magicCoursor: function () {
        var myCursor = $('.cs-cursor');
        if (myCursor.length) {
          if ($("body").length) {
            const e = document.querySelector(".cursor-inner"),
              t = document.querySelector(".cursor-outer");
            var n, i = 0,
              W = 0,
              intro = 0,
              o = !1;
            // if($('.xoxo_fn_intro').length){intro=1;}
            var buttons = "a, button, .active-progress, .search-click, .action-menu, .swiper-button-next, .swiper-button-prev";
            var remove_cursor = ".learn-more-btn, .swiper-slider-main-main-wrapper-portfolio .thumbnail, .single-portfolio-style-five a, .mySwiper_portfolio-5-scale-none a";
            // link mouse enter + move
            window.onmousemove = function (s) {
              o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
            }, $("body").on("mouseenter", buttons, function () {
              e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
            }), $("body").on("mouseleave", buttons, function () {
              $(this).is("a") && $(this).closest(".cursor-link").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
            }), e.style.visibility = "visible", t.style.visibility = "visible";
            // slider mouse enter
            var mightyBody = jQuery('body');
            mightyBody.on('mouseenter', remove_cursor, function () {
              e.classList.add('cursor-remove');
              t.classList.add('cursor-remove');
            }).on('mouseleave', remove_cursor, function () {
              e.classList.remove('cursor-remove');
              t.classList.remove('cursor-remove');
            });
          }
        }
      },
      caseVarticleScroll: function () {

        let varticle_scroll = document.getElementsByClassName('carticle-slide-active');
        if (varticle_scroll.length) {
  
          gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  
          const scrollMain = ScrollSmoother.create(); // global scroll
          const wrapper = document.querySelector(".scroller-wrapper"); // slider wrapper
          const scroller = wrapper.querySelector(".scroller"); // slider scroller
          const timelines = []; // gsap stuff storage for cleanup
  
          //set random color theme
          document.body.style.setProperty('--hue', Math.round(Math.random() * 360));
  
          const getToValue = () =>
            scroller.scrollWidth - wrapper.getBoundingClientRect().width; // calculate max distance to move.
  
          const mm = gsap.matchMedia(); // Self cleaning media query engine of gsap
  
          mm.add("(min-width:641px)", () => {
  
            // scrollTrigger pre-pinning animation
            let beforeST = gsap.fromTo(
              scroller, {
                x: () => {
                  let distance =
                    scroller.getBoundingClientRect().top + window.scrollY;
                  return distance * 0.5;
                },
                opacity: 0.2
              }, {
                x: () => 0,
                opacity: 1,
                ease: "none",
                immediateRender: true,
                scrollTrigger: {
                  trigger: scroller,
                  start: -10,
                  end: "50% 46.99%",
                  //markers:true,
                  invalidateOnRefresh: true,
                  scrub: true
                }
              }
            );
            timelines.push(beforeST);
  
            // scrollTrigger pinned
            let mainST = gsap.fromTo(
              scroller, {
                x: () => 0
              }, {
                x: () => -getToValue(),
                immediateRender: false,
                ease: "none",
                scrollTrigger: {
                  trigger: scroller,
                  start: "50% 47%",
                  end: () =>
                    "+=" + Math.min(getToValue(), Math.max(window.innerHeight, window.innerWidth) + 200),
                  pin: true,
                  markers: false,
                  invalidateOnRefresh: true,
                  scrub: true,
                  onRefresh: function () {}
                }
              }
            );
            timelines.push(mainST);
  
            // scrollTrigger post-pinning animation
            let afterST = gsap.fromTo(
              scroller, {
                x: () => -getToValue(),
                opacity: 1
              }, {
                x: () => -getToValue() - window.innerWidth * 0.5,
                opacity: 0,
                ease: "none",
                scrollTrigger: {
                  trigger: scroller,
                  start: () => mainST.scrollTrigger.end,
                  end: () => "+=" + window.innerHeight * 0.75,
                  invalidateOnRefresh: true,
                  markers: false,
                  scrub: true
                }
              }
            );
            timelines.push(afterST);
  
            // cleanup
            return () => {
              while (timelines.length > 0) {
                timelines.pop().kill();
              }
              gsap.set([scroller, wrapper], {
                clearProps: "all"
              });
            };
          });
  
        }
  
  
  
  
      },
       // wow js activation
       wowActive: function () {
        new WOW().init();
      },
      // counter up
      counterUp: function (e) {
        $('.counter').counterUp({
            delay: 10,
            time: 1000
          });
          $('.counter').addClass('animated fadeInDownBig');
          $('h3').addClass('animated fadeIn');
    },
    preloader:function(){

      var preload = $("#kan-loader");

      if (preload.length){
        window.addEventListener('load',function(){
          document.querySelector('#kan-loader').classList.add("loaded")  ;
        }); 
      };

    },

      
  }

  $(window).on("scroll", function() {
    var ScrollBarPostion = $(window).scrollTop();
    if (ScrollBarPostion > 150) {
      $(".eblog-header-area").addClass("header-sticky");      
    } else {
      $(".eblog-header-area").removeClass("header-sticky");
      $(".eblog-header-area .eblog-header-top").removeClass("remove-content");     
    }
  });

  var swiper = new Swiper(".echo-hm2-video-Swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  /* magnificPopup img view */
	$('.gallery-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

  // stickySidebar
    if (typeof $.fn.theiaStickySidebar !== "undefined") {
      $(".sticky-coloum-wrap .sticky-coloum-item").theiaStickySidebar({
        additionalMarginTop: 130,
      });
    }

  
    var tp_light = $('.tp-dark-light');
        if(tp_light.length){
        var toggle = document.getElementById("tp-data-toggle");
        var storedTheme = localStorage.getItem('echo-theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
        if (storedTheme)
            document.documentElement.setAttribute('data-theme', storedTheme)
            toggle.onclick = function() {
            var currentTheme = document.documentElement.getAttribute("data-theme");
            var targetTheme = "light";

            if (currentTheme === "light") {
                targetTheme = "dark";
            }
            document.documentElement.setAttribute('data-theme', targetTheme)
            localStorage.setItem('echo-theme', targetTheme);
        };
    }


  var win=$(window);
  var totop = $('.scroll-top-btn');    
  win.on('scroll', function() {
      if (win.scrollTop() > 150) {
          totop.fadeIn();
      } else {
          totop.fadeOut();
      }
  });
  totop.on('click', function() {
      $("html,body").animate({
          scrollTop: 0
      }, 500)
  });

  // Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
  imJs.m();


  $(document).ready(function() {
    // Listen for the collapse show event
    $('.faq-accordion-one .accordion-collapse').on('show.bs.collapse', function () {
      // Find the parent .accordion-item and add the 'show' class
      $(this).closest('.accordion-item').addClass('show');
    });
  
    // Listen for the collapse hide event
    $('.faq-accordion-one .accordion-collapse').on('hide.bs.collapse', function () {
      // Find the parent .accordion-item and remove the 'show' class
      $(this).closest('.accordion-item').removeClass('show');
    });
  });
})(jQuery, window)
