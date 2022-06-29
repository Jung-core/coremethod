/* init */
$(function() {
    // resize_page();
    // set_bg();
    // set_nav();
    // set_location();
    // set_mousewheel();
    // set_next();


    // $("h1 a").click(function(e) {
    //     e.preventDefault();
    //     nav = 0;
    //     page_move();
    // });

    // $("a.inquiry").click(function(e) {
    //     e.preventDefault();
    //     nav = 5;
    //     page_move();
    // });
  
});

/* set_next */
// function set_next() {
//     $("#footer a").hover(function() {
//         TweenLite.to($(this), 1, { opacity: 1, ease: Expo.easeOut });
//     }, function() {
//         TweenLite.to($(this), 1, { opacity: 0.2, ease: Expo.easeOut });
//     });

//     $("#footer a").click(function() {
//         nav++;
//         page_move();
//     });
// }

/* set_mousewheel */
// var nav = 0;
// var page_total = 5;
// var win_h;
// var scroll_flag = true;

// function set_mousewheel() {
//     $(this).on('mousewheel', function(event) {

//         event.preventDefault();

//         if (scroll_flag == true) {
//             scroll_flag = false;
//             if (event.deltaY < 0) {
//                 nav++;
//             } else {
//                 nav--;
//             }

//             page_move();
//         }
//     });
// }

/* set_nav */
// function set_nav() {
//     $("ul.nav li").each(function() {
//         // click
//         $(this).find("a").unbind("click").click(function(e) {
//             e.preventDefault();
//             var idx = $(this).parent().index();
//             nav = idx;
//             page_move();
//         });

//         // hover
//         $(this).find("a").unbind("hover").hover(function(e) {
//             var idx = $(this).parent().index();
//         });


//         if ($(this).find("a").hasClass("on")) {
            
//         }
//     });
// }

/* scroll */
// var firstLoadState = false;
// $(this).scroll(function() {

//     if ($(this).scrollTop() < $("#company").offset().top) {
//         nav = 0;
//         $("ul.nav li a").removeClass();
//         $("ul.nav li.intro a").addClass("on");
//         $(".scroll_down").css("display", "block");
//         $("#footer").css("display", "block");
//     }

//     if ($(this).scrollTop() > $("#intro").offset().top + win_h / 2) {
//         nav = 1;
//         $("ul.nav li a").removeClass();
//         $("ul.nav li.company a").addClass("on");
//         $(".scroll_down").css("display", "block");
//         $("#footer").css("display", "block");
//     }

//     if ($(this).scrollTop() > $("#company").offset().top + win_h / 2) {
//         nav = 2;
//         $("ul.nav li a").removeClass();
//         $("ul.nav li.business a").addClass("on");
//         $(".scroll_down").css("display", "block");
//         $("#footer").css("display", "block");
//     }

//     if ($(this).scrollTop() > $("#business").offset().top + win_h / 2) {
//         nav = 3;
//         $("ul.nav li a").removeClass();
//         $("ul.nav li.pepole a").addClass("on");
//         $(".scroll_down").css("display", "block");
//         $("#footer").css("display", "block");
//     }

//     if ($(this).scrollTop() > $("#pepole").offset().top + win_h / 2) {
//         nav = 4;
//         $("ul.nav li a").removeClass();
//         $("ul.nav li.location a").addClass("on");
//         $(".scroll_down").css("display", "block");
//         $("#footer").css("display", "block");
//     }

//     //페이지 최초 진입시 1번만 코드 타도록 예외처리
//     //현제 페이지의 content fade event
//     if (firstLoadState == false) {
//         fnFadeEvent();
//         firstLoadState = true;
//     }

// });

/* page_move */
// function page_move() {
//     if (nav >= page_total) nav = page_total - 1;
//     if (nav < 0) nav = 0;

//     TweenLite.to($(this), 1, { scrollTo: { y: win_h * nav, autoKill: false }, onComplete: page_move_cpt, ease: Expo.easeOut });
// }

// /* page_move_cpt */
// function page_move_cpt() {
//     scroll_flag = true;
//     fnFadeEvent();
// }

// function fnFadeEvent() {
//     $(".main_item").find(".content").css({ opacity: 0 }); //전체페이지 컨텐츠 부분 opacity 0
//     $(".intro").find(".content").css({ opacity: 1 }); //intro 컨텐츠 부분 opacity 1

//     //현재 화면의 컨텐츠 부분 opacity 1
//     var nowItem = $(".main_item").eq(nav).find(".content");
//     if (nowItem.length > 0) {
//         $(nowItem).fadeTo('fast', 1, function() { // Animation complete. })

//         });
//     }

// }


/* set_bg */
// function set_bg() {
//     $("#intro").backstretch("images/intro/bg.jpg");
//     $("#company").backstretch("images/company/bg.jpg");
//     $("#business").backstretch("images/business/bg.jpg");
//     $("#pepole").backstretch("images/pepole/bg.jpg");
//     $("#location").backstretch("images/location/bg.jpg");
// }

/* set_location */
var slider;
var slider_mode;
var slider_speed;

function set_location() {
    switch (get_device()) {
        case "pc":
            slider_mode = "fade";
            slider_speed = 700;
            break;

        case "tablet":
            slider_mode = "horizontal";
            slider_speed = 300;
            break;

        case "mobile":
            slider_mode = "horizontal";
            slider_speed = 300;
            break;
    }

    slider = $('ul.bxslider').bxSlider({
        preventDefaultSwipeY: false,
        mode: slider_mode,
        auto: false,
        pause: 3000,
        pager: false,
        easing: "ease-out",
        controls: true,
        prevText: "이전",
        nextText: "다음",
        touchEnabled: true,
        onSlideBefore: function() {},
        onSliderLoad: function() {}
    });
}

/* resize */
// $(window).resize(function() {
//     resize_page();
// });

// function resize_page() {
//     win_h = $(this).height();

//     $("#intro").height($(window).height());
//     $("#company").height($(window).height());
//     $("#business").height($(window).height());
//     $("#pepole").height($(window).height());
//     $("#location").height($(window).height());
// }

$(document).ready(function(){   
    
    //스크롤 이벤트  메인 초기 실행
	// var www = $(window).width();
	var mgl = $('.mg > li').length;
	var mglw = $('.mg > li').outerWidth();
	var dmpBar = '<div class="dmbBar"></div>';
	var mgw = mgl * mglw;
	var mgwFix = mgw + mglw;
	$('.mg').width(mgwFix);
	$(dmpBar).insertAfter('.mg');
	$('.dmbBar').width(mgwFix);
	$('.mg').addClass('on');
	setTimeout(function(){
		$('.mg').addClass('fix');
	}, 300);

    const isOnce = false;// 진입마다 효과를 반복적으로 주고 싶으면 아래 값을 false로 변경
    if ($(window).width() > 1000){
        $('#fullpage').fullpage({       
            // sectionSelector: 'section',         
            anchors: ['intro_new', 'company_new', 'business_new', 'pepole_new','portpolio_new','location_new',],
            menu: '#menu',          
            recordHistory: true,
            animateAnchor: false,
            // navigation:true,   
            // scrollOverflow: true,
            normalScrollElements: '.scrollable-content',
            afterLoad: function (anchorLink, index, destination) {
                console.log("현재 섹션번호는" + index);	 
                if(index == 1){
					$('#header .nav_box ul.nav li a').removeClass('on');
                    $('.main #fp-nav li a span').removeClass('on');
					$('#header .nav_box ul.nav li a').eq(0).addClass('on'); 
                    var $object1 = $('#fullpage > *:nth-child(' + index + ')');
                    $object1.find('.obj-animated').each(function (i, item1) {
                        var delay1 = $(item1).data('delay');
                        // 반복                    
                        setTimeout(function () {
                            $(item1).addClass('animated ' + $(item1).data('ani'));
                            if (delay1) $(item1).css("animation-delay", delay1);
                        }, 100);                        
                    });  
                    // $('#fp-nav').removeClass('off');                                      
                   
				}else if(index == 2){
					$('#header .nav_box ul.nav li a').removeClass('on');
                    $('.main #fp-nav li a span').removeClass('on');
					$('#header .nav_box ul.nav li a').eq(1).addClass('on');
                    // $('#fp-nav').removeClass('off');   
				}else if(index == 3){
					$('#header .nav_box ul.nav li a').removeClass('on');
                    $('.main #fp-nav li a span').removeClass('on');
					$('#header .nav_box ul.nav li a').eq(2).addClass('on');
                    // $('#fp-nav').removeClass('off');                    
				}else if(index == 4){
					$('#header .nav_box ul.nav li a').removeClass('on');
					$('#header .nav_box ul.nav li a').eq(3).addClass('on');
                    $('.main #fp-nav li a span').addClass('on');     
                    // $('#fp-nav').removeClass('off');                 
				}else if(index == 5){
                    $('#header .nav_box ul.nav li a').removeClass('on');
                    $('#header .nav_box ul.nav li a').eq(4).addClass('on');
                    $('.main #fp-nav li a span').removeClass('on');     
                    // $('#fp-nav').addClass('off'); 
                    // $('.mg.on.').addClass('fix');                                                 
                }
                else if(index == 6){
                    $('#header .nav_box ul.nav li a').removeClass('on');
                    $('#header .nav_box ul.nav li a').eq(5).addClass('on');
                    $('.main #fp-nav li a span').removeClass('on');
                    // $('#fp-nav').removeClass('off');    
                }
               
            },
            onLeave: function (index, nextIndex, direction) {
                var $object = $('#fullpage > *:nth-child(' + nextIndex + ')');
                if ($(window).width() > 1024) {
                    $object.find('.obj-animated').each(function (i, item) {
                        var delay = $(item).data('delay');
                        if (isOnce) {
                            // 일회성
                            $(item).addClass('animated ' + $(item).data('ani'));
                            if (delay) $(item).css("animation-delay", delay);
                        } else {
                            // 반복
                            $(item).removeClass('animated ' + $(item).data('ani'))
                            setTimeout(function () {
                                $(item).addClass('animated ' + $(item).data('ani'));
                                if (delay) $(item).css("animation-delay", delay);
                            }, 100);
                        }
                    });                    
                }  
                       
                
            }
           
        });
        $(document).on("click", "#header h1", function (e) {
            e.preventDefault();
            $.fn.fullpage.moveTo(1);
        });
       
    }
    else {
       
    }
         
    function disableScrolling(){
        $('body').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
            });              
    }
    
    function enableScrolling(){
        $('body').off('scroll touchmove mousewheel');        
    }    
 

    // modal //
    function openModal(event) {     
        event.preventDefault();        
        // var duration = 200,
            modalId = $(this).attr('href'),			
            modal = $(modalId),
            inner = modal.find(".gd-inner");
        modal.removeClass('closed').addClass('opened');
        // setTimeout(function() {
        //     inner.fadeIn(duration, function() {         
        //     });
        // }, duration);
        disableScrolling()           
    }

    function closeModal(event) {
        event.preventDefault();
        // var duration = 200,
            modal = $(this).parent(".gd-modal"),
            inner = modal.find(".gd-inner");
        // inner.fadeOut(duration, function() {      
        //     modal.removeClass('opened').addClass('closed');
        //     // enableScrolling()   
        // });  
               
        modal.removeClass('opened').addClass('closed');
        enableScrolling()   
    }

    $('.gd-show-modal').on('click', openModal);
    $('.gd-modal').on('click', function(e){
        if( $(this).is(e.target)) {
            $(this).removeClass('opened').addClass('closed');                        
       }   
       enableScrolling()     
    });
    $(".gd-inner").on('click', function(e){
        e.stopPropagation();
    })
    $('.gd-close').on('click', closeModal);       
})

