$(document).ready(function(){
	// 메인 초기 실행
	var www = $(window).width();
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

	// setTimeout(function(){
	// 	$('.mg > li').on('mouseenter', function(){
	// 		var data = $(this).data('bg');
	// 		var dom = '<div class="bgDom"></div>';
	// 		$('.bgDom').remove();
	// 		$(dom).insertAfter('#header_wrap');
	// 		$('.bgDom').css('background-image','url('+data+')');
	// 		setTimeout(function(){
	// 			$('.bgDom').addClass('on');
	// 		},10);
	// 	});

	// 	$('.mg > li').on('mouseleave', function(){
	// 		var data = $(this).data('bg');
	// 		$('html').css('background-image','url(' + data + ')');
	// 	});
	// }, 1500);
	

	//===================================
	// video modal
	//===================================

	// var gdVideo = $('#gd-video');
	// var gdVideo02 = $('#gd-video-02');

	// function playGDModalVid(playerID) {
	// 	var player = $f(playerID.get(0));

	// 	player.addEvent('ready', function(progress) {
	// 			player.api('play');
	// 	});
	// }

	// function pauseGDModalVid(playerID) {
	// 	var player = $f(playerID.get(0));
	// 	player.addEvent('ready', function() {
	// 			player.api('pause');
	// 	});
	// }


	// function openVideoModal(event) {
	// 	event.preventDefault();

	// 	var duration = 200,
	// 			modalId = $(this).attr('href'),
	// 			modal = $(modalId),
	// 			inner = modal.find(".gd-inner");

	// 	$('#gd-video').attr(
	// 		'src',
	// 		'https://player.vimeo.com/video/448760460?autoplay=1'
	// 	);

	// 	$(".gd-inner").fitVids({
	// 		customSelector: "iframe[src^='https://player.vimeo.com']"
	// 	});

	// 	modal.removeClass('closed').addClass('opened');

	// 	setTimeout(function() {
	// 		inner.fadeIn(duration, function() {
	// 			playGDModalVid(gdVideo);
	// 		});
	// 	}, duration);
	// }


	// function closeVideoModal(event) {
	// 	event.preventDefault();

	// 	var duration = 200,
	// 			modal = $(this).closest(".gd-modal"),
	// 			inner = modal.find(".gd-inner");

	// 	inner.fadeOut(duration, function() {
	// 		pauseGDModalVid(gdVideo);
	// 		modal.removeClass('opened').addClass('closed');
	// 	});
	// }



	// function openVideoModal02(event) {
	// 	event.preventDefault();
	// 	var duration = 200,
	// 			modalId = $(this).attr('href'),
	// 			modal = $(modalId),
	// 			inner = modal.find(".gd-inner");

	// 	$('#gd-video-02').attr(
	// 		'src',
	// 		'https://player.vimeo.com/video/443275240?autoplay=1'
	// 	);

	// 	$(".gd-inner").fitVids({
	// 		customSelector: "iframe[src^='https://player.vimeo.com']"
	// 	});

	// 	modal.removeClass('closed').addClass('opened');

	// 	setTimeout(function() {
	// 		inner.fadeIn(duration, function() {
	// 			playGDModalVid(gdVideo02);
	// 		});
	// 	}, duration);
	// }


	// function closeVideoModal02(event) {
	// 	event.preventDefault();

	// 	var duration = 200,
	// 			modal = $(this).closest(".gd-modal"),
	// 			inner = modal.find(".gd-inner");

	// 	inner.fadeOut(duration, function() {
	// 		pauseGDModalVid(gdVideo02);
	// 		modal.removeClass('opened').addClass('closed');
	// 	});
	// }

	// $('.gd-show-modal').on('click', openVideoModal);
	// $('.gd-show-modal').on('touchstart', openVideoModal);

	// $('#gd-modal-overlay').on('click', closeVideoModal);
	// $('#gd-modal-overlay').on('touchstart', closeVideoModal);
	
	// $('.gd-show-modal-02').on('click', openVideoModal02);
	// $('.gd-show-modal-02').on('touchstart', openVideoModal02);

	// $('#gd-modal-overlay-02').on('click', closeVideoModal02);
	// $('#gd-modal-overlay-02').on('touchstart', closeVideoModal02);
})