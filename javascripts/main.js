﻿$(window).load(function () {

  $("#divId").endlessScroll({ 
      width: '90px', 
      height: '10px', 
      steps: -2, 
      speed: 40, 
      mousestop: true 
  });

  // Recopy the previous line to add scrolling to other divs.

});
(function($) {
	$(function() {
	  fr = new FilmRoll({
	    container: '#film_roll',
	    height: 330
	  });
	});
    function adjustStyle(width) {
	    width = parseInt(width);
	    if (width < 700) {
	        $("#size-stylesheet").attr("href", "stylesheets/stylesheet.css"); 
	        $("#size-stylesheet").attr("href", "stylesheets/styles.css");
	    }
	}
    adjustStyle($(this).width());
    $(window).resize(function() {
        adjustStyle($(this).width());
    });

    $(window).bind("scroll", function() {
	// ドキュメントの高さ
	scrollHeight = $(document).height();
	// ウィンドウの高さ+スクロールした高さ→ 現在のトップからの位置
	scrollPosition = $(window).height() + $(window).scrollTop();
	// フッターの高さ
	footHeight = $("footer").height();
	
	// スクロール位置がフッターまで来たら
	if ( scrollHeight - scrollPosition  <= footHeight ) {
		// ページトップリンクをフッターに固定
		$(".pageTop a").css({"position":"absolute","bottom": "0px"});
	} else {
		// ページトップリンクを右下に固定
		$(".pageTop a").css({"position":"fixed","bottom": "0px"});
		}
	});
	// ページ内リンクをクリックすると
	$('a[href^=#]').click(function(){
 		// スクロールスピード
 		var speed = 500;
 		// クリックしたリンク先を保存
		var href= $(this).attr("href");
		// クリックしたリンク先が#または空のときは
		var target = $(href == "#" || href == "" ? 'html' : href);
		// トップへ移動する
		var position = target.offset().top;
		// リンク先へスムーズに移動する
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});
    //回し続けてみる
    var angle = 0;
    setInterval(function(){
                angle+=1;
             $("#s00 img").rotate(angle);
    },10);//

	$(window).bind("load", function() {
	    $("#fade").fadeIn(1000); // フェードインの実行
	});
	$(window).bind("load", function() {
	    $("#fade_footer").fadeIn(1000); // フェードインの実行
	});
	$(window).load(function() {
		$('.flexslider').flexslider();
	});

	$(document).ready(function(){
	  $.doTimeout(3500, function(){
	    $('.repeat.go').removeClass('go');
	    return true;
	  });
	  $.doTimeout(3520, function(){
	    $('.repeat').addClass('go');
	    return true;
	  });
	});
  $.fn.menumaker = function(options) {
      
      var cssmenu = $(this), settings = $.extend({
        title: "Menu",
        format: "dropdown",
        sticky: false
      }, options);

      return this.each(function() {
        cssmenu.prepend('<div id="menu-button">' + settings.title + '</div>');
        $(this).find("#menu-button").on('click', function(){
          $(this).toggleClass('menu-opened');
          var mainmenu = $(this).next('ul');
          if (mainmenu.hasClass('open')) { 
            mainmenu.hide().removeClass('open');
          }
          else {
            mainmenu.show().addClass('open');
            if (settings.format === "dropdown") {
              mainmenu.find('ul').show();
            }
          }
        });

        cssmenu.find('li ul').parent().addClass('has-sub');

        multiTg = function() {
          cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
          cssmenu.find('.submenu-button').on('click', function() {
            $(this).toggleClass('submenu-opened');
            if ($(this).siblings('ul').hasClass('open')) {
              $(this).siblings('ul').removeClass('open').hide();
            }
            else {
              $(this).siblings('ul').addClass('open').show();
            }
          });
        };

        if (settings.format === 'multitoggle') multiTg();
        else cssmenu.addClass('dropdown');

        if (settings.sticky === true) cssmenu.css('position', 'fixed');

        resizeFix = function() {
          if ($( window ).width() > 768) {
            cssmenu.find('ul').show();
          }

          if ($(window).width() <= 768) {
            cssmenu.find('ul').hide().removeClass('open');
          }
        };
        resizeFix();
        return $(window).on('resize', resizeFix);

      });
  };
})(jQuery);

(function($){
$(document).ready(function(){

$("#cssmenu").menumaker({
   title: "Menu",
   format: "multitoggle"
});


});
})(jQuery);

