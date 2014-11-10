/**
 * ssSlideShow
 * 
 * options - w: width, h: height, d: duration
 */
(function($){  
	$.fn.ssSlideShow = function (o) {
		var o = $.extend({w: 640, h:480, d:6000}, o);

		var e0 = $('<div style="width:100%; overflow:hidden;"></div>');
		var e1 = $('<div style="margin:0 auto; position:relative; user-select:none; -moz-user-select:none; -webkit-user-select:none;" unselectable="on"></div>');
		var e9 = $('<div style="overflow:hidden; position:absolute; top:0;"></div>');
		var e2 = $('<div style="overflow:hidden; position:absolute; top:0;"></div>');
		var e3 = $('<div style="background:#ffffff; position:absolute; top:0;"></div>');
		var e4 = $('<div style="background:#ffffff; position:absolute; top:0;"></div>');
		var e5 = $('<div style="position:absolute; cursor:pointer;"><span style="font-size:60px; color:#ffffff;">&raquo;</span></div>');
		var e6 = $('<div style="position:absolute; cursor:pointer;"><span style="font-size:60px; color:#ffffff;">&laquo;</span></div>');
		$(this).children().each(function(i){
			e2.append($('<div style="float:left; overflow:hidden;"></div>').append(this));
		});
		$(e2).children().last().prependTo(e2);
		$(e2).children().last().prependTo(e2);
		e9.append(e2)
		e1.append(e9).append(e3).append(e4).append(e5).append(e6);
		$(this).append(e1).wrap(e0);

		e0.height(o.h);
		e1.width(o.w).height(o.h);
		$(e2).children().width(o.w).height(o.h);
		e9.width(o.w * 3).height(o.h).css("left", o.w * (-1));
		e2.width(o.w * 5).height(o.h).css("left", o.w * (-1));
		e3.width(o.w).height(o.h).css("left", o.w * (-1));
		e4.width(o.w).height(o.h).css("left", o.w);
		e3.css('opacity', 0.5);
		e4.css('opacity', 0.5);
		e5.css("top", (o.h - e5.height()) / 2).css("left", o.w + 50);
		e6.css("top", (o.h - e6.height()) / 2).css("left", (e6.width() + 50) * (-1));

		function f1(){$(e2).children().filter(":not(:animated)").first().animate({"width": 0}, "slow", "swing", function(){$(e2).append(this);$(this).width(o.w);})}
		function f2(){$(e2).children().last().width(0).prependTo(e2).animate({"width": o.w}, "slow", "swing", function(){$(this).width(o.w);})}
		var t;
		function f3(){t = setInterval(f1, o.d);}
		function f4(){clearInterval(t);}

		$(e5).click(function(){f4();f1();});
		$(e6).click(function(){f4();f2();});
		$(e1).click(function(){f4();});

		f3();
	}
})(jQuery);
