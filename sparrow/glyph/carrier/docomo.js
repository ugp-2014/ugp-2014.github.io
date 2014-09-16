/**
* FOMA絵文字変換ベースクラス
* @author horikawa_t <horikawa.takahiro@gmail.com>
* @original_author   ryster <ryster@php-develop.org>
* @license  http://www.opensource.org/licenses/mit-license.php The MIT License
*/

// ********* 2011.08.03 symmetric sjis support start ********* //
var SJIS_MAPPING = new Array();
SJIS_MAPPING["f89f"] ="e63e";
SJIS_MAPPING["f8a0"] ="e63f";
SJIS_MAPPING["f8a1"] ="e640";
SJIS_MAPPING["f8a2"] ="e641";
SJIS_MAPPING["f8a3"] ="e642";
SJIS_MAPPING["f8a4"] ="e643";
SJIS_MAPPING["f8a5"] ="e644";
SJIS_MAPPING["f8a6"] ="e645";
SJIS_MAPPING["f8a7"] ="e646";
SJIS_MAPPING["f8a8"] ="e647";
SJIS_MAPPING["f8a9"] ="e648";
SJIS_MAPPING["f8aa"] ="e649";
SJIS_MAPPING["f8ab"] ="e64a";
SJIS_MAPPING["f8ac"] ="e64b";
SJIS_MAPPING["f8ad"] ="e64c";
SJIS_MAPPING["f8ae"] ="e64d";
SJIS_MAPPING["f8af"] ="e64e";
SJIS_MAPPING["f8b0"] ="e64f";
SJIS_MAPPING["f8b1"] ="e650";
SJIS_MAPPING["f8b2"] ="e651";
SJIS_MAPPING["f8b3"] ="e652";
SJIS_MAPPING["f8b4"] ="e653";
SJIS_MAPPING["f8b5"] ="e654";
SJIS_MAPPING["f8b6"] ="e655";
SJIS_MAPPING["f8b7"] ="e656";
SJIS_MAPPING["f8b8"] ="e657";
SJIS_MAPPING["f8b9"] ="e658";
SJIS_MAPPING["f8ba"] ="e659";
SJIS_MAPPING["f8bb"] ="e65a";
SJIS_MAPPING["f8bc"] ="e65b";
SJIS_MAPPING["f8bd"] ="e65c";
SJIS_MAPPING["f8be"] ="e65d";
SJIS_MAPPING["f8bf"] ="e65e";
SJIS_MAPPING["f8c0"] ="e65f";
SJIS_MAPPING["f8c1"] ="e660";
SJIS_MAPPING["f8c2"] ="e661";
SJIS_MAPPING["f8c3"] ="e662";
SJIS_MAPPING["f8c4"] ="e663";
SJIS_MAPPING["f8c5"] ="e664";
SJIS_MAPPING["f8c6"] ="e665";
SJIS_MAPPING["f8c7"] ="e666";
SJIS_MAPPING["f8c8"] ="e667";
SJIS_MAPPING["f8c9"] ="e668";
SJIS_MAPPING["f8ca"] ="e669";
SJIS_MAPPING["f8cb"] ="e66a";
SJIS_MAPPING["f8cc"] ="e66b";
SJIS_MAPPING["f8cd"] ="e66c";
SJIS_MAPPING["f8ce"] ="e66d";
SJIS_MAPPING["f8cf"] ="e66e";
SJIS_MAPPING["f8d0"] ="e66f";
SJIS_MAPPING["f8d1"] ="e670";
SJIS_MAPPING["f8d2"] ="e671";
SJIS_MAPPING["f8d3"] ="e672";
SJIS_MAPPING["f8d4"] ="e673";
SJIS_MAPPING["f8d5"] ="e674";
SJIS_MAPPING["f8d6"] ="e675";
SJIS_MAPPING["f8d7"] ="e676";
SJIS_MAPPING["f8d8"] ="e677";
SJIS_MAPPING["f8d9"] ="e678";
SJIS_MAPPING["f8da"] ="e679";
SJIS_MAPPING["f8db"] ="e67a";
SJIS_MAPPING["f8dc"] ="e67b";
SJIS_MAPPING["f8dd"] ="e67c";
SJIS_MAPPING["f8de"] ="e67d";
SJIS_MAPPING["f8df"] ="e67e";
SJIS_MAPPING["f8e0"] ="e67f";
SJIS_MAPPING["f8e1"] ="e680";
SJIS_MAPPING["f8e2"] ="e681";
SJIS_MAPPING["f8e3"] ="e682";
SJIS_MAPPING["f8e4"] ="e683";
SJIS_MAPPING["f8e5"] ="e684";
SJIS_MAPPING["f8e6"] ="e685";
SJIS_MAPPING["f8e7"] ="e686";
SJIS_MAPPING["f8e8"] ="e687";
SJIS_MAPPING["f8e9"] ="e688";
SJIS_MAPPING["f8ea"] ="e689";
SJIS_MAPPING["f8eb"] ="e68a";
SJIS_MAPPING["f8ec"] ="e68b";
SJIS_MAPPING["f8ed"] ="e68c";
SJIS_MAPPING["f8ee"] ="e68d";
SJIS_MAPPING["f8ef"] ="e68e";
SJIS_MAPPING["f8f0"] ="e68f";
SJIS_MAPPING["f8f1"] ="e690";
SJIS_MAPPING["f8f2"] ="e691";
SJIS_MAPPING["f8f3"] ="e692";
SJIS_MAPPING["f8f4"] ="e693";
SJIS_MAPPING["f8f5"] ="e694";
SJIS_MAPPING["f8f6"] ="e695";
SJIS_MAPPING["f8f7"] ="e696";
SJIS_MAPPING["f8f8"] ="e697";
SJIS_MAPPING["f8f9"] ="e698";
SJIS_MAPPING["f8fa"] ="e699";
SJIS_MAPPING["f8fb"] ="e69a";
SJIS_MAPPING["f8fc"] ="e69b";
SJIS_MAPPING["f940"] ="e69c";
SJIS_MAPPING["f941"] ="e69d";
SJIS_MAPPING["f942"] ="e69e";
SJIS_MAPPING["f943"] ="e69f";
SJIS_MAPPING["f944"] ="e6a0";
SJIS_MAPPING["f945"] ="e6a1";
SJIS_MAPPING["f946"] ="e6a2";
SJIS_MAPPING["f947"] ="e6a3";
SJIS_MAPPING["f948"] ="e6a4";
SJIS_MAPPING["f949"] ="e6a5";
SJIS_MAPPING["f972"] ="e6ce";
SJIS_MAPPING["f973"] ="e6cf";
SJIS_MAPPING["f974"] ="e6d0";
SJIS_MAPPING["f975"] ="e6d1";
SJIS_MAPPING["f976"] ="e6d2";
SJIS_MAPPING["f977"] ="e6d3";
SJIS_MAPPING["f978"] ="e6d4";
SJIS_MAPPING["f979"] ="e6d5";
SJIS_MAPPING["f97a"] ="e6d6";
SJIS_MAPPING["f97b"] ="e6d7";
SJIS_MAPPING["f97c"] ="e6d8";
SJIS_MAPPING["f97d"] ="e6d9";
SJIS_MAPPING["f97e"] ="e6da";
SJIS_MAPPING["f980"] ="e6db";
SJIS_MAPPING["f981"] ="e6dc";
SJIS_MAPPING["f982"] ="e6dd";
SJIS_MAPPING["f983"] ="e6de";
SJIS_MAPPING["f984"] ="e6df";
SJIS_MAPPING["f985"] ="e6e0";
SJIS_MAPPING["f986"] ="e6e1";
SJIS_MAPPING["f987"] ="e6e2";
SJIS_MAPPING["f988"] ="e6e3";
SJIS_MAPPING["f989"] ="e6e4";
SJIS_MAPPING["f98a"] ="e6e5";
SJIS_MAPPING["f98b"] ="e6e6";
SJIS_MAPPING["f98c"] ="e6e7";
SJIS_MAPPING["f98d"] ="e6e8";
SJIS_MAPPING["f98e"] ="e6e9";
SJIS_MAPPING["f98f"] ="e6ea";
SJIS_MAPPING["f990"] ="e6eb";
SJIS_MAPPING["f9b0"] ="e70b";
SJIS_MAPPING["f991"] ="e6ec";
SJIS_MAPPING["f992"] ="e6ed";
SJIS_MAPPING["f993"] ="e6ee";
SJIS_MAPPING["f994"] ="e6ef";
SJIS_MAPPING["f995"] ="e6f0";
SJIS_MAPPING["f996"] ="e6f1";
SJIS_MAPPING["f997"] ="e6f2";
SJIS_MAPPING["f998"] ="e6f3";
SJIS_MAPPING["f999"] ="e6f4";
SJIS_MAPPING["f99a"] ="e6f5";
SJIS_MAPPING["f99b"] ="e6f6";
SJIS_MAPPING["f99c"] ="e6f7";
SJIS_MAPPING["f99d"] ="e6f8";
SJIS_MAPPING["f99e"] ="e6f9";
SJIS_MAPPING["f99f"] ="e6fa";
SJIS_MAPPING["f9a0"] ="e6fb";
SJIS_MAPPING["f9a1"] ="e6fc";
SJIS_MAPPING["f9a2"] ="e6fd";
SJIS_MAPPING["f9a3"] ="e6fe";
SJIS_MAPPING["f9a4"] ="e6ff";
SJIS_MAPPING["f9a5"] ="e700";
SJIS_MAPPING["f9a6"] ="e701";
SJIS_MAPPING["f9a7"] ="e702";
SJIS_MAPPING["f9a8"] ="e703";
SJIS_MAPPING["f9a9"] ="e704";
SJIS_MAPPING["f9aa"] ="e705";
SJIS_MAPPING["f9ab"] ="e706";
SJIS_MAPPING["f9ac"] ="e707";
SJIS_MAPPING["f9ad"] ="e708";
SJIS_MAPPING["f9ae"] ="e709";
SJIS_MAPPING["f9af"] ="e70a";
SJIS_MAPPING["f950"] ="e6ac";
SJIS_MAPPING["f951"] ="e6ad";
SJIS_MAPPING["f952"] ="e6ae";
SJIS_MAPPING["f955"] ="e6b1";
SJIS_MAPPING["f956"] ="e6b2";
SJIS_MAPPING["f957"] ="e6b3";
SJIS_MAPPING["f95b"] ="e6b7";
SJIS_MAPPING["f95c"] ="e6b8";
SJIS_MAPPING["f95d"] ="e6b9";
SJIS_MAPPING["f95e"] ="e6ba";
SJIS_MAPPING["f9b1"] ="e70c";
SJIS_MAPPING["f9b2"] ="e70d";
SJIS_MAPPING["f9b3"] ="e70e";
SJIS_MAPPING["f9b4"] ="e70f";
SJIS_MAPPING["f9b5"] ="e710";
SJIS_MAPPING["f9b6"] ="e711";
SJIS_MAPPING["f9b7"] ="e712";
SJIS_MAPPING["f9b8"] ="e713";
SJIS_MAPPING["f9b9"] ="e714";
SJIS_MAPPING["f9ba"] ="e715";
SJIS_MAPPING["f9bb"] ="e716";
SJIS_MAPPING["f9bc"] ="e717";
SJIS_MAPPING["f9bd"] ="e718";
SJIS_MAPPING["f9be"] ="e719";
SJIS_MAPPING["f9bf"] ="e71a";
SJIS_MAPPING["f9c0"] ="e71b";
SJIS_MAPPING["f9c1"] ="e71c";
SJIS_MAPPING["f9c2"] ="e71d";
SJIS_MAPPING["f9c3"] ="e71e";
SJIS_MAPPING["f9c4"] ="e71f";
SJIS_MAPPING["f9c5"] ="e720";
SJIS_MAPPING["f9c6"] ="e721";
SJIS_MAPPING["f9c7"] ="e722";
SJIS_MAPPING["f9c8"] ="e723";
SJIS_MAPPING["f9c9"] ="e724";
SJIS_MAPPING["f9ca"] ="e725";
SJIS_MAPPING["f9cb"] ="e726";
SJIS_MAPPING["f9cc"] ="e727";
SJIS_MAPPING["f9cd"] ="e728";
SJIS_MAPPING["f9ce"] ="e729";
SJIS_MAPPING["f9cf"] ="e72a";
SJIS_MAPPING["f9d0"] ="e72b";
SJIS_MAPPING["f9d1"] ="e72c";
SJIS_MAPPING["f9d2"] ="e72d";
SJIS_MAPPING["f9d3"] ="e72e";
SJIS_MAPPING["f9d4"] ="e72f";
SJIS_MAPPING["f9d5"] ="e730";
SJIS_MAPPING["f9d6"] ="e731";
SJIS_MAPPING["f9d7"] ="e732";
SJIS_MAPPING["f9d8"] ="e733";
SJIS_MAPPING["f9d9"] ="e734";
SJIS_MAPPING["f9da"] ="e735";
SJIS_MAPPING["f9db"] ="e736";
SJIS_MAPPING["f9dc"] ="e737";
SJIS_MAPPING["f9dd"] ="e738";
SJIS_MAPPING["f9de"] ="e739";
SJIS_MAPPING["f9df"] ="e73a";
SJIS_MAPPING["f9e0"] ="e73b";
SJIS_MAPPING["f9e1"] ="e73c";
SJIS_MAPPING["f9e2"] ="e73d";
SJIS_MAPPING["f9e3"] ="e73e";
SJIS_MAPPING["f9e4"] ="e73f";
SJIS_MAPPING["f9e5"] ="e740";
SJIS_MAPPING["f9e6"] ="e741";
SJIS_MAPPING["f9e7"] ="e742";
SJIS_MAPPING["f9e8"] ="e743";
SJIS_MAPPING["f9e9"] ="e744";
SJIS_MAPPING["f9ea"] ="e745";
SJIS_MAPPING["f9eb"] ="e746";
SJIS_MAPPING["f9ec"] ="e747";
SJIS_MAPPING["f9ed"] ="e748";
SJIS_MAPPING["f9ee"] ="e749";
SJIS_MAPPING["f9ef"] ="e74a";
SJIS_MAPPING["f9f0"] ="e74b";
SJIS_MAPPING["f9f1"] ="e74c";
SJIS_MAPPING["f9f2"] ="e74d";
SJIS_MAPPING["f9f3"] ="e74e";
SJIS_MAPPING["f9f4"] ="e74f";
SJIS_MAPPING["f9f5"] ="e750";
SJIS_MAPPING["f9f6"] ="e751";
SJIS_MAPPING["f9f7"] ="e752";
SJIS_MAPPING["f9f8"] ="e753";
SJIS_MAPPING["f9f9"] ="e754";
SJIS_MAPPING["f9fa"] ="e755";
SJIS_MAPPING["f9fb"] ="e756";
SJIS_MAPPING["f9fc"] ="e757";
// ********* 2011.08.03 symmetric sjis support end   ********* //

var MPC_DC = function(){};
MPC_DC.prototype =
{
	/**
	* i-mode絵文字画像格納パス
	* @var string
	*/
	i_img_path : "img/i/",

	/**
	* 文字列からi-mode絵文字を検出し、指定されたフォーマットに変換
	* 基本・拡張・隠し絵文字一部対応
	* @return string
	*/
	convert : function(str)
	{
		//Firefoxから数値参照が直接渡ってこないので、とりあえずコメントアウト
		//var re1 = /\&\#x([a-f0-9]{4});/ig;
		//var re2 = /\&\#([0-9]{5});/ig;
		//var _this = this;
		//Unicodeの16進数値文字参照をimgタグ形式に変換
		//str  = str.replace(re1, function(whole, s1){ var udec = parseInt(s1,16); return _this.isPictogramDec(udec) ? _this.i_options_encode(udec) : s1 ; });
		//SJISの10進数値文字参照をimgタグ形式に変換
		//str  = str.replace(re2, function(whole, s1){ var udec = sdec2udec(s1); return _this.isPictogramDec(udec) ? _this.i_options_encode(udec) : s1 ; });
		
		//バイナリをimgタグ形式に変換
		var hexstrings = unpack(str);
		var r = "";
		for(var i=0; i<hexstrings.length; i++) {
			var hex = hexstrings[i];
			// ********* 2011.08.03 symmetric sjis support start ********* //
			if(SJIS_MAPPING[hex] != undefined) {
				hex = SJIS_MAPPING[hex];
			}
			// ********* 2011.08.03 symmetric sjis support end   ********* //
			// 絵文字変換処理
			if (this.isPictogram(hex)) {
				var dec = parseInt(hex, 16);
				r += this.i_options_encode(dec);
			} else {
				r += String.fromCharCode(parseInt(hex,16));
			}
		}
		return r;
	},

	/**
	* 与えられたUnicode16進数文字列がi-mode絵文字かどうか、チェック
	*/
	isPictogram : function(ch)
	{
		ch = parseInt(ch, 16);
		return this.isPictogramDec(ch);
	},
	
	/**
	* 与えられたUnicode10進数がi-mode絵文字かどうか、チェック
	*/
	isPictogramDec : function(ch)
	{
		var result;
		if(ch >= 256){
			//dump("isPictogram("+ch+")");
			var char1 = parseInt(ch/256);
			var char2 = ch%256;
			if ((char1 == 0xE6) && (char2 >= 0x3E) || (char1 == 0xE7) && (char2 <= 0x57)) {
				result = true;
			} else {
				result = false;
			}
			//dump("=>"+result+"\n");
		}else{
			result = false;
		}
		return result;
	},

	/**
	* 絵文字画像格納ディレクトリの一括設定
	* 
	* @param string path
	*/
	setImagePath : function(path)
	{
		path.replace(RegExp('/*$'),'');
		this.i_img_path = path+'/i/';
	},

	/**
	* i-mode絵文字（10進数）をimgタグ形式へ変換
	* @param  integer dec
	* @return string
	*/
	i_options_encode : function(dec)
	{
		var buf = '<img src="'+this.i_img_path.replace(/[/]*$/g, "")+'/'+dec+'.gif" alt="" border="0" width="12" height="12" />';
		return buf;
	}
};

function unpack(str){
	var last = str.length;
	var ret = Array(last);
	for (var i = 0; i < last; i++) {
		ret[i] = str.charCodeAt(i).toString(16);
	}
	return ret;
}

//Firefoxから数値参照が直接渡ってこないので、とりあえずコメントアウト
/*
function sdec2udec(i){
	i=parseInt(i);
	var hex;
	var a = "0"+i.toString(16);
	if(i>=256){
		var char1 = a.slice(-4,-2);
		var char2 = a.slice(-2);
		hex = "%"+char1+"%"+char2;
	}else{
		var char1 = a.slice(-2);
		hex = "%"+char1;
	}
	var unicode = EscapeUnicode(UnescapeSJIS(hex));
	if(unicode.match(/^\%u[0-9A-F]{4}$/) || unicode.match(/^\%[0-9A-F]{2}$/)){
		dump("return"+parseInt(unicode.substring(2,6),16)+"\n");
		return parseInt(unicode.substring(2,6),16);
	}else{
		return undefined;
	}
}
*/
