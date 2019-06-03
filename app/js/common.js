$(function() {

	// фиксирование меню
	// $(window).scroll(function() {
	// 	if( 10 <= $(window).scrollTop() ) {
	// 		$(".header").addClass("header--fixed");
	// 	} else {
	// 		$(".header").removeClass("header--fixed");
	// 	}
	// });
	
	// Mobile menu
	$(".nav").click(function() {
		$(this).toggleClass("nav--expanded");
	});

	// ссылка проигрывания видео
	$(".fancy-video-trigger a").fancybox({
		afterShow: function() {
		   var vid = document.getElementById("fancy-video"); 
		   vid.play(); 
		  },
		  afterClose: function() {
			var vid = document.getElementById("fancy-video"); 
		   vid.load(); 
		}
	});

	//tabs begin				
	var flag2 = false,
		  flag3 = false;
		
	$(".js-tab").click(function() {
		var index = $(this).index();
		$(this).closest('.js-tab-wrapper').find(".js-tab").removeClass("js-tab--active").eq(index).addClass("js-tab--active");
		$(this).closest('.js-tab-wrapper').find(".js-tab-item").hide().eq(index).fadeIn("normal");

		// для табов со слик-слайдером и плагином до-после 
		  if( $(this).closest('.p-tabs').hasClass('before-after-tabs') ) {

			switch(index) {
				case 0:
					$('.js-slider-1').find('.before-after__item').twentytwenty();
					break;
				case 1:
					$('.js-slider-2').find('.before-after__item').twentytwenty();
					if(!flag2) {
						beforeAfter('.js-slider-2');
						flag2 = true;
					}
					break;
				case 2:
					$('.js-slider-3').find('.before-after__item').twentytwenty();
					if(!flag3) {
						beforeAfter('.js-slider-3');
						flag3 = true;
					}
					break;
			}
		}
	  });
	//tab end

	// sliders begin
	function beforeAfter(slider) {

		$(slider).slick({
			infinite: true,
			swipe: false,
			slidesToShow: 3,
			dots: true,
			prevArrow: '<button type="button" class="slick-prev"></button>',
			nextArrow: '<button type="button" class="slick-next"></button>',
			responsive: [
				{
				breakpoint: 1199,
				settings: {
					slidesToShow: 2
				}
				},
				{
				breakpoint: 767,
				settings: {
					slidesToShow: 1
				}
				}
			]
		});
	}

	$('.before-after__item').twentytwenty();
	beforeAfter('.js-slider-1');

	$('.standarts-slider').slick({
		dots: true,
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-next"></button>',
		appendDots: $('.standarts-slider-dots'),
		appendArrows: $('.standarts-slider-arrows'),
		fade: true,
		cssEase: 'ease'
	});




	

});

// попап с формой
(function() {
	
	var dlgtrigger = document.querySelectorAll( '.js-call-modal' ),
		somedialog = document.getElementById( 'dialog' ),
		dlg = new DialogFx( somedialog );

	for(i=0; i < dlgtrigger.length; ++i){
		dlgtrigger[i].addEventListener( 'click', dlg.toggle.bind(dlg) );
	}
	
	document.getElementById('quiz').addEventListener('click', function(e){
		if(e.target && e.target.id== 'quiz-order-btn'){
			var chosenService = document.getElementById('quiz-result-link').textContent;
			document.getElementById('quiz-result-input').value = chosenService;
			dlg.toggle(dlg);
		}
	 });
})();