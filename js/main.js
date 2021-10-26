$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true,
    anchors:['홈', '브랜드', '메뉴', '서비스', '사회공헌', '커뮤니티', '기업정보'],
    navigation: true,
		navigationPosition: 'right',
    navigationTooltips: ['홈', '브랜드', '메뉴', '서비스', '사회공헌', '커뮤니티', '기업정보'],
    onLeave: function(origin, destination, direction){
      if(destination.index > 0){
        $('.header').addClass('on');
      } else {
        $('.header').removeClass('on');
      }
    },
    afterLoad: function(origin, destination, direction){
      if(destination.index === 1){
        $('.section02 p.history').addClass('on');
      } else {
        $('.section02 p.history').removeClass('on');
      }

      if(destination.index === 2){
        $('.section03 .txt_wrap').addClass('on');
        $('.section03 .bottom_content').addClass('on');
      } else {
        $('.section03 .txt_wrap').removeClass('on');
        $('.section03 .bottom_content').removeClass('on');
      }

      if(destination.index === 3){
        $('.section04 .top_content').addClass('on');
        $('.section04 .bottom_content').addClass('on');
      } else {
        $('.section04 .top_content').removeClass('on');
        $('.section04 .bottom_content').removeClass('on');
      }

      if(destination.index === 4){
        $('.section05 .content_wrap').addClass('on');
      } else {
        $('.section05 .content_wrap').removeClass('on');
      }

      if(destination.index === 5){
        $('.section06 .content_wrap').addClass('on');
      } else if(destination.index < 5) {
        $('.section06 .content_wrap').removeClass('on');
      }
    }
	});

	//methods
	$.fn.fullpage.setAllowScrolling(true);

  // swiper
  var mainSwiper = new Swiper('.main_visu_slide', {
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
});