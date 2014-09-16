/*
 * sp_core.js 1.0.0
 * 
 * Released under the GPL Version 3 licenses.
 * Copyright (C) 2011 Symmetric Co.,Ltd.
 * http://www.symmetric.co.jp/
 */
// viewport設定
if(ip) {
	if(confVgaMode) {
		document.write('<meta name="viewport" content="width=480,user-scalable=no" />');
	} else {
		document.write('<meta name="viewport" content="width=240,user-scalable=no" />');
	}
} else if(ad) {
	if(confVgaMode) {
		document.write('<meta name="viewport" content="width=device-width,minimum-scale=1,maximum-scale=1,initial-scale=1,user-scalable=yes,target-densitydpi=device-dpi" />');
		// 向きが変わった時の調整
		$(window).bind('resize load', function(){$("html").css("zoom" , $(window).width()/480);});
	} else {
		document.write('<meta name="viewport" content="width=device-width,minimum-scale=2,maximum-scale=2,initial-scale=2,user-scalable=yes,target-densitydpi=device-dpi" />');
		// 向きが変わった時の調整
		$(window).bind('resize load', function(){$("html").css("zoom" , $(window).width()/240);});
	}
} else if(win) {
	if(confVgaMode) {
		document.write('<meta name="viewport" content="width=480,minimum-scale=0.666,maximum-scale=0.666,initial-scale=0.666,user-scalable=yes" />');
	} else {
		document.write('<meta name="viewport" content="width=320,user-scalable=no" />');
	}
}

$(document).ready(function(){
	// 絵文字置換&半角全角変換
	if(confGlyphConvert || confHankakuConvert) {
		var body = $("body");
		var str = body.html();
		if(confGlyphConvert) {
			str = convertGlyph(str, MPC_DOCOMO);
		}
		if(confHankakuConvert) {
			str = h2z(str);
		}
		body.html(str);
	}
	
	// class属性指定による変換
	var list = $("*");
	var sz = list.size();
	var i = 0;
	for(;i < sz; i++) {
		var obj = list.eq(i);
		
		var sty = obj.attr("style");
		if(confFontConvert && sty != undefined) {
			convertFont(obj, sty);
		}
		
		var clz = obj.attr("class");
		if(clz == undefined) {
			continue;
		}
		// 要素削除or置換
		if(clz.indexOf("sp_del") > -1) {
			obj.remove();
		} else if(clz.indexOf("sp_rep") > -1) {
			var key = clz.replace(/.*\s?sp_rep\s/, "");
			// @see sp_config.js
			var val = REPLACE_MAPPING[key];
			if(val != undefined) {
				obj.replaceWith(val);
			}
		}
		// マーキー
		if(confMarqueeConvert && clz.indexOf("sp_mq") > -1) {
			convertMarquee(obj, i);
		}
		// リスト化
		if(clz.indexOf("sp_list") > -1) {
			convertList(obj);
		}
		// style無効
		if(clz.indexOf("sp_style") > -1) {
			obj.attr("style", "");
		}
	}
	
	if(win && !confVgaMode) {
		winImageFunc();
	}
});


// 関数群
var fullKana  = new Array("ヴ","ガ","ギ","グ","ゲ","ゴ","ザ","ジ","ズ","ゼ","ゾ","ダ","ヂ","ヅ","デ","ド","バ","ビ","ブ","ベ","ボ","パ","ピ","プ","ペ","ポ","゛","。","「","」","、","・","ヲ","ァ","ィ","ゥ","ェ","ォ","ャ","ュ","ョ","ッ","ー","ア","イ","ウ","エ","オ","カ","キ","ク","ケ","コ","サ","シ","ス","セ","ソ","タ","チ","ツ","テ","ト","ナ","ニ","ヌ","ネ","ノ","ハ","ヒ","フ","ヘ","ホ","マ","ミ","ム","メ","モ","ヤ","ユ","ヨ","ラ","リ","ル","レ","ロ","ワ","ン","゜",'&yen;');
var halfKana  = new Array("ｳﾞ","ｶﾞ","ｷﾞ","ｸﾞ","ｹﾞ","ｺﾞ","ｻﾞ","ｼﾞ","ｽﾞ","ｾﾞ","ｿﾞ","ﾀﾞ","ﾁﾞ","ﾂﾞ","ﾃﾞ","ﾄﾞ","ﾊﾞ","ﾋﾞ","ﾌﾞ","ﾍﾞ","ﾎﾞ","ﾊﾟ","ﾋﾟ","ﾌﾟ","ﾍﾟ","ﾎﾟ","ﾞ","｡","｢","｣","､","･","ｦ","ｧ","ｨ","ｩ","ｪ","ｫ","ｬ","ｭ","ｮ","ｯ","ｰ","ｱ","ｲ","ｳ","ｴ","ｵ","ｶ","ｷ","ｸ","ｹ","ｺ","ｻ","ｼ","ｽ","ｾ","ｿ","ﾀ","ﾁ","ﾂ","ﾃ","ﾄ","ﾅ","ﾆ","ﾇ","ﾈ","ﾉ","ﾊ","ﾋ","ﾌ","ﾍ","ﾎ","ﾏ","ﾐ","ﾑ","ﾒ","ﾓ","ﾔ","ﾕ","ﾖ","ﾗ","ﾘ","ﾙ","ﾚ","ﾛ","ﾜ","ﾝ","ﾟ",'\\\\');

// 半角カナ to 全角カナ
function h2z(str) {
	for(i = 0; i < halfKana.length; i++){
		re = new RegExp(halfKana[i],"g");
		str=str.replace(re, fullKana[i]);
	}
	return str;
}
// 絵文字コード to 絵文字画像
function convertGlyph(str, carrier) {
	var mpc = MobilePictogramConverter.factory(carrier);
	mpc.setImagePath(baseHost + basePath + "/glyph/img");
	return mpc.convert(str);
}
// マーキーエミュレート処理
function convertMarquee(obj, idx) {
	var sty = obj.attr("style");
	var w = obj.width();
	if(sty == undefined) {
		obj.replaceWith('<div id="marquee_' + idx + '" style="white-space: nowrap;">' + obj.html() + '</div>');
	} else {
		obj.replaceWith('<div id="marquee_' + idx + '" style="' + sty + ';white-space: nowrap;">' + obj.html() + '</div>');
	}
	new Marquee("marquee_" + idx);
}
// リストで表示させるため、不要なノードを削除する
function convertList(obj) {
	var parent = obj.get(0);
	var list = parent.childNodes;
	var removeList = new Array();
	for(i = 0; i < list.length; i++) {
		var e = list[i];
		if(e.nodeType != 1) {
			removeList.push(e);
		} else if(e.nodeName != "A") {
			removeList.push(e);
		}
	}
	for(i = 0; i < removeList.length; i++) {
		parent.removeChild(removeList[i]);
	}
}

// style属性中の文字サイズをスマートフォン様に変更する
function convertFont(obj, sty) {
	var key = sty.replace(/.*font-size:\s*([-a-z ]+);?.*/, "$1");
	
	if(key == undefined || FONT_MAPPING[key] == undefined) {
		return;
	}
	// @see sp_config.js
	var val = FONT_MAPPING[key];
	sty = sty.replace(key, val);
	obj.attr("style", sty);
}

// WindowsPhone7用暫定コード
function winImageFunc(obj) {
	var logicalScreenWdith = 320;
	var par = logicalScreenWdith / 240;
	var a = 0;
	var list = $("img");
	for(i = 0; i < list.size(); i++) {
		var obj = list.eq(i);
		
		// 幅
		var w = obj.width();
		w = w * par;
		if(w > logicalScreenWdith) {
			w = logicalScreenWdith;
		}
		obj.width(Math.round(w));
		// 高さは無効にする。幅からのサンプリング比でブラウザが自動で調整する
		var elem = list.get(i);
		elem.removeAttribute("height");
	}
}
