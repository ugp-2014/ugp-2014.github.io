/*
 * sparrow.js 1.0.0
 * 
 * Released under the GPL Version 3 licenses.
 * Copyright (C) 2011 Symmetric Co.,Ltd.
 * http://www.symmetric.co.jp/
 */
var ua = navigator.userAgent;
var ip = ua.indexOf('iPhone') > -1;
if(ip == false) {
	ip = ua.indexOf('iPad') > -1;
}
var ad = ua.indexOf('Android') > -1;
var win = ua.indexOf('Windows Phone OS') > -1;

if(ip || ad || win) {
	// スクリプト配置ホスト
	if(typeof baseHost == "undefined") {
		var baseHost = "";
	}
	// スクリプト配置基準パス
	if(typeof basePath == "undefined") {
		var basePath = "/sparrow";
	}
	// marquee変換有効
	if(typeof confMarqueeConvert == "undefined") {
		var confMarqueeConvert = true;
	}
	// ページ内リンクスクロール有効
	if(typeof confSmoothScroll == "undefined") {
		var confSmoothScroll = true;
	}
	// 絵文字変換有効
	if(typeof confGlyphConvert == "undefined") {
		var confGlyphConvert = true;
	}
	// 半角全角変換
	if(typeof confHankakuConvert == "undefined") {
		var confHankakuConvert = true;
	}
	// VGAかどうか
	if(typeof confVgaMode == "undefined") {
		var confVgaMode = false;
	}
	// 文字サイズを変更するかどうか
	if(typeof confFontConvert == "undefined") {
		var confFontConvert = false;
	}
	if(typeof FONT_MAPPING == "undefined") {
		var FONT_MAPPING = new Array();
		FONT_MAPPING["xx-small"] = "50%";
		FONT_MAPPING["x-small"] = "70%";
		FONT_MAPPING["small"] = "100%";
		FONT_MAPPING["medium"] = "110%";
		FONT_MAPPING["large"] = "120%";
		FONT_MAPPING["x-large"] = "130%";
		FONT_MAPPING["xx-large"] = "140%";
	}

	var url = baseHost + basePath;
	// jquery
	document.write('<script src="' + url + '/jquery-1.6.4.min.js"></script>');
	// scroll
	if(confMarqueeConvert) {
		document.write('<script type="text/javascript" src="' + url + '/marquee.js"></script>');
	}
	if(confSmoothScroll) {
		document.write('<script type="text/javascript" src="' + url + '/smoothScroll.js"></script>');
	}
	// glyph
	if(confGlyphConvert) {
		document.write('<script type="text/javascript" src="' + url + '/glyph/mpc.js"></script>');
		document.write('<script type="text/javascript" src="' + url + '/glyph/carrier/docomo.js"></script>');
	}
	
	// sparrow main
	document.write('<script type="text/javascript" src="' + url + '/sp_core-1.0.0.js"></script>');
	// smart phone css
	document.write('<link rel ="stylesheet" href ="' + url + '/sparrow-1.0.0.css" type="text/css" />');
}
