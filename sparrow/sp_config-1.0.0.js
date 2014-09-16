/*
 * sp_config.js 1.0.0
 * 
 * Released under the GPL Version 3 licenses.
 * Copyright (C) 2011 Symmetric Co.,Ltd.
 * http://www.symmetric.co.jp/
 */var REPLACE_MAPPING = new Array();
REPLACE_MAPPING["msg1"] = '<br>各種設定変更はｺﾁﾗから';


// style属性のfont-sizeプロパティ値の変換マッピング
var FONT_MAPPING = new Array();
FONT_MAPPING["xx-small"] = "50%";
FONT_MAPPING["x-small"] = "70%";
FONT_MAPPING["small"] = "100%";
FONT_MAPPING["medium"] = "110%";
FONT_MAPPING["large"] = "120%";
FONT_MAPPING["x-large"] = "130%";
FONT_MAPPING["xx-large"] = "140%";

// ベースディレクトリ
var baseHost = "";
var basePath = "/sparrow";
// marquee変換有効
var confMarqueeConvert = true;
// スクロールページ内リンク有効
var confSmoothScroll = true;
// 絵文字変換有効
var confGlyphConvert = true;
// 半角全角変換
var confHankakuConvert = true;
// VGAかどうか
var confVgaMode = false;
// 文字サイズを変更するかどうか
var confFontConvert = true;
