

(function($) {
	$(function(){
	$("#service .slide ul").carouFredSel({
		items : 4,
		auto    : 4000,
		prev: '#prev',
		next: '#next'
		});
	});
	$(function(){
		$("#service h3").tile();
		$("#service .text").tile();
	});
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

function Menu()
{
	document.write("<header>");
	document.write("<div id=\"headerLink\">");
	document.write("<h2><a href=\"http://ugpnet.web.fc2.com/\" target=\"_brank\">運営団体概要</a></h2>");
	document.write("<h2><a href=\"MembersWanted.html\" target=\"_brank\">新規メンバー募集</a></h2>");
	document.write("<div>");
	document.write("<div class=\"inner\"></div>");
	document.write("</header>");

	document.write("<div id=\'cssmenu\'>");
		document.write("<ul>");
		document.write("<div id=\'social-icon\'>");
			document.write("<a href=\"http://twitter.com/share?url=http://ugp-2014.github.io/&text=Œ|”\Šé‰æ’c‘ÌUGP‚ÌƒIƒtƒBƒVƒƒƒ‹ƒTƒCƒg&hashtags=#UGP\"  onclick=\"window.open(this.href, \'FBwindow\', \'width=650, height=450, menubar=no, toolbar=no, scrollbars=yes\'); return false;\">");
			document.write("<img src=\"images/icon/twitter.png\" alt=\"Twitterでシェア\"></a>");
    		document.write("<a href=\"http://www.facebook.com/share.php?u=http://ugp-2014.github.io\" onclick=\"window.open(this.href, \'FBwindow\', \'width=650, height=450, menubar=no, toolbar=no, scrollbars=yes\'); return false;\">");
    		document.write("<img src=\"images/icon/facebook.png\" alt=\"Facebookでシェア\"></a>");
    		document.write("<a href=\"https://plus.google.com/share?url=http://ugp-2014.github.io\" onclick=\"window.open(this.href, \'Gwindow\', \'width=650, height=450, menubar=no, toolbar=no, scrollbars=yes\'); return false;\">");
    		document.write("<img src=\"images/icon/google+.png\" alt=\"Google+でシェア\"></a>");
    	document.write("</div>");
    	document.write("<li class=\'active\'><a href=\'index.html\'><span>ホーム</span></a></li>");
    	document.write("<li class=\'has-sub\'><a href=\'OrganizationInfo.html\'><span>団体情報</span></a>");
    	document.write("<ul>");
    	document.write("<li><a href=\'OrganizationInfo.html\'><span>組織図</span></a></li>");
        document.write("<li><a href=\'#\'><span>制作理念</span></a></li>	");
        document.write("<li><a href=\'Mentor.html\'><span>メンター制度</span></a></li>	");
    	document.write("<li><a href=\'http://tarte1012.wix.com/koho\' target=\"_brank\"><span>広報課</span></a></li>");
    	document.write("<li class=\'has-sub\'><a href=\'MembersList.html\'><span>メンバー</span></a>");
    	document.write("<ul>");
    	document.write("<li><a href=\'http://ugpgeinou.wix.com/geinou-team\'><span>芸能班</span></a></li>");
    	document.write("<li><a href=\'http://ugpscenario.wix.com/reimeinofantasia\'><span>シナリオ班</span></a></li>");
    	document.write("<li><a href=\'Edit.html\'><span>編集・CG班</span></a></li>");
    	document.write("<li><a href=\'http://mryuto.github.io/ugp-programmer-team/\'><span>プログラマー班</span></a></li>");
    	document.write("<li><a href=\'http://ugpillust.wix.com/illust-team\'><span>イラスト班</span></a></li>");
    	document.write("<li><a href=\'Music.html\'><span>音楽班</span></a></li> ");
    	document.write("<li><a href=\'Operation.html\'><span>運営執行部</span></a></li>");
    	document.write("</ul>");
    	document.write("</li>");
    	document.write("</ul>");
    	document.write("</li>");

    	document.write("<li class=\'has-sub\'><a href=\'Work.html\'><span>作品</span></a>");
    	document.write("<ul>");
	    	document.write("<li class=\'has-sub\'><a href=\'Game.html\'><span>ゲーム</span></a>");
	    	document.write("<ul>");
		    	document.write("<li><a href=\'http://ugpplanningandprod.wix.com/ugpgamecreativeteam#!untitled/c1rgk\'><span>Light VS Light</span></a>");
		    	document.write("<li><a href=\'http://ugpplanningandprod.wix.com/ugpgamecreativeteam#!hitofuderaail/cjg9\'><span>ひと筆レール</span></a> ");
		    	document.write("<li><a href=\'http://ugpplanningandprod.wix.com/ugpgamecreativeteam#!colorwave/c15av\'><span>ColorWave</span></a>");
		    	document.write("<li><a href=\'http://ugpplanningandprod.wix.com/ugpgamecreativeteam#!nezumiaction/cee5\'><span>ねずみ退治</span></a>");
	    	document.write("</ul>");
	    	document.write("</li>");
	    	document.write("<li class=\'has-sub\'><a href=\'VoiceDrama.html\'><span>ボイスドラマ</span></a>");
	    	document.write("<ul> ");
	    	document.write("<li><a href=\'http://kanasimitanatos.xxxxxxxx.jp/\'><span>EndlessWaltz 哀しみのタナトス</span></a> ");
	    	document.write("<li><a href=\'http://escapefrom.yu-nagi.com/\'><span>Escape from the world</span></a>");
	    	document.write("<li><a href=\'http://nekoirobiyori.nekonikoban.org/\'><span>猫色日和</span></a>");
	    	document.write("<li><a href=\'http://endlesswaltzatena.web.fc2.com/\'><span>EndlessWaltz 逆襲のアテナ</span></a>");
	    	document.write("<li><a href=\'http://tatiiro.wix.com/blank\'><span>白紙の中に</span></a>");
	    	document.write("<li><a href=\'http://ugp2014.wix.com/sinken\'><span>心剣</span></a>");
	    	document.write("</ul>");
	    	document.write("</li>");
	    	document.write("<li class=\'has-sub\'><a href=\'Animation.html\'><span>アニメーション</span></a>");
	    	document.write("<ul>");
	    	document.write("<li><a href=\'http://ugp2014.wix.com/currynaruichizoku\'><span>カレーなる一族</span></a>  ");
	    	document.write("</ul>");
	    	document.write("</li>");
	    	document.write("<li><a href=\'Sound.html\'><span>ミュージック</span></a></li>");
	    	document.write("<li><a href=\'#\'><span>マガジン&ブックス</span></a></li>");
	    	document.write("<li><a href=\'#\'><span>グッズ</span></a></li>");
	    	document.write("<li><a href=\'https://ugp.booth.pm/\'><span>ストア</span></a></li>");
	    	document.write("<li><a href=\'Other.html\'><span>その他 個人作品</span></a></li>");
	    	document.write("</ul>");
    	document.write("</li>");
    	document.write("<li><a href=\'http://ameblo.jp/ugp2014/\' target=\"_brank\"><span>制作日誌</span></a></li>");
    	document.write("<li><a href=\'Link.html\'><span>リンク</span></a></li>");
    	document.write("<li><a href=\'http://ask.fm/ugp_2014\' target=\"_brank\"><span>お問い合わせ</span></a></li>");
   	document.write("</ul>");
	document.write("</div>");
	
}

function Footer()
{
	document.write("<div id=\"fade_footer\">");
	document.write("<footer>");
	document.write("<p class=\"pageTop\"><a href=\"#\"></a></p>");
	document.write("<div id=\"sitemap\">");
	document.write("<div id=\"horizontal\">");
	document.write("<h1>・団体情報</h1>");
	document.write("<h2><a href=\"OrganizationInfo.html\">組織図</a></h2>");
	document.write("<h2><a href=\"#\">制作理念</a></h2>");
	document.write("<h2><a href=\"http://tarte1012.wix.com/koho\">広報課</a></h2>");
	document.write("<br>");
	document.write("</div>");
	document.write("<div id=\"horizontal\">");
	document.write("<h1>・メンバー(班一覧)</h1>");
	document.write("<h2><a href=\"http://ugpgeinou.wix.com/geinou-team\">芸能班</a></h2>");
	document.write("<h2><a href=\"http://ugpscenario.wix.com/reimeinofantasia\">シナリオ班</a></h2>");
	document.write("<h2><a href=\"http://mryuto.github.io/ugp-programmer-team/\">プログラマー班</a></h2>");
	document.write("<h2><a href=\"http://ugpillust.wix.com/illust-team\">イラスト班</a></h2>");
	document.write("<h2><a href=\"Music.html\">音楽班</a></h2>");
	document.write("<h2><a href=\"Edit.html\">編集・CG班</a></h2>");
	document.write("<h2><a href=\"Operation.html\">運営執行部</a></h2>");
	document.write("</div>");
	document.write("<div id=\"horizontal\">");
	document.write("<h1>・作品情報</h1>");
	document.write("<h2>ゲーム</h2>");
	document.write("<h3><a href=\"http://ugpplanningandprod.wix.com/ugpgamecreativeteam#!untitled/c1rgk\" target=\"_brank\">LightVSLight</a></h3>");
	document.write("<h3><a href=\"http://ugpplanningandprod.wix.com/ugpgamecreativeteam#!hitofuderaail/cjg9\" target=\"_brank\">ひと筆レール</a></h3>");
	document.write("<h3><a href=\"http://ugpplanningandprod.wix.com/ugpgamecreativeteam#!colorwave/c15av\" target=\"_brank\">ColorWave</a></h3>");
	document.write("<h3><a href=\"http://ugpplanningandprod.wix.com/ugpgamecreativeteam#!nezumiaction/cee5\" target=\"_brank\">ねずみ退治</a></h3>");
	document.write("<br>");
	document.write("<h2>ミュージック</h2>");
	document.write("<h3><a href=\"https://www.youtube.com/watch?v=Bf3jHrpEvyc\" target=\"_brank\">UGP公式テーマソング</a></h3>");
	document.write("<h3><a href=\"https://www.youtube.com/watch?v=QKWoRM5nCf8\" target=\"_brank\">みらくる☆恋のどりぃま</a></h3>");
	document.write("<h3><a href=\"https://www.youtube.com/watch?v=RCUeYmjYsRA\" target=\"_brank\">LISTEN</a></h3>");
	document.write("<h3><a href=\"https://www.youtube.com/watch?v=NOujuiaxNOk\" target=\"_brank\">『my white lover 』 music</a></h3>");
	document.write("</div>");
	document.write("<div id=\"horizontal\">");
	document.write("<br><br>");
	document.write("<h2>アニメーション</h2>");
	document.write("<h3><a href=\"http://ugp2014.wix.com/currynaruichizoku\" target=\"_brank\">カレーなる一族</a></h3>");
	document.write("<br>");
	document.write("<h2>ボイスドラマ</h2>");
	document.write("<h3><a href=\"http://kanasimitanatos.xxxxxxxx.jp/\" target=\"_brank\">EndlessWaltz 哀しみのタナトス</a></h3>");
	document.write("<h3><a href=\"http://escapefrom.yu-nagi.com/\" target=\"_brank\">Escape from the world</a></h3>");
	document.write("<h3><a href=\"http://nekoirobiyori.nekonikoban.org/\" target=\"_brank\">猫色日和</a></h3>");
	document.write("<h3><a href=\"http://endlesswaltzatena.web.fc2.com/\" target=\"_brank\">EndlessWaltz 逆襲のアテナ</a></h3>");
	document.write("<h3><a href=\"http://ugp2014.wix.com/sinken\" target=\"_brank\">心剣</a></h3>");
	document.write("</div>");
	document.write("<div id=\"horizontal\">");
	document.write("<br><br>");
	document.write("<h2>マガジン&ブックス</h2>");
	document.write("<h3><a href=\"#\">ComingSoon</a></h3>");
	document.write("<h2>グッズ</h2>");
	document.write("<h3><a href=\"#\">ComingSoon</a></h3>");
	document.write("<h2>ストア</h2>");
	document.write("<h3><a href=\"https://ugp.booth.pm/\" target=\"_brank\">BOOTH</a></h3>");
	document.write("<h2>その他個人作品</h2>");
	document.write("<h3><a href=\"#\">ComingSoon</a></h3>");
	document.write("</div>");
	document.write("</div>");
	document.write("</footer>");
	document.write("</div>");

}