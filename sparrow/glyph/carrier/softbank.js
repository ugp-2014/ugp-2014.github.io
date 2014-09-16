/**
* SoftBank絵文字変換ベースクラス
* @author horikawa_t <horikawa.takahiro@gmail.com>
* @original_author   ryster <ryster@php-develop.org>
* @license  http://www.opensource.org/licenses/mit-license.php The MIT License
*/
var MPC_SB = function(){};
MPC_SB.prototype =
{
	/**
	* SoftBank絵文字画像格納パス
	* @var string
	*/
	s_img_path : "img/s/",

	/**
	* 文字列からSoftBank絵文字を検出し、指定されたフォーマットに変換
	* @return string
	*/
	convert : function(str)
	{
		var re1 = /[\x1B][\x24](([\x47][\x21-\x7A]+)|([\x45][\x21-\x7A]+)|([\x46][\x21-\x7A]+)|([\x4F][\x21-\x6D]+)|([\x50][\x21-\x6C]+)|([\x51][\x21-\x5E]+))[\x0F]?/g;
		
		//Webコード: エスケープシーケンス開始(\x1B\x24) + コード + エスケープ終わり(\x0F)をimgタグ形式に変換
		var _this = this;
		var f = function(whole, s1){
			var hexstrings = unpack(s1);
			var emoji = "";
			for(var i=1; i<hexstrings.length; i++){
				var dec = parseInt(""+hexstrings[0]+hexstrings[i], 16);
				emoji += _this.s_options_encode(dec);
			}
			return emoji;
		}
		str = str.replace(re1, f);
		
		//Firefoxから数値参照が直接渡ってこないので、とりあえずコメントアウト
		//var re2 = /&#x([a-f0-9]{4});/ig;
		//var re3 = /&#([0-9]{5});/ig;
		//var _this = this;
		//Unicodeの16進数値文字参照をimgタグ形式に変換
		//str = str.replace(re2, function(whole, s1){ return _this.s_options_encode(_this.u2web(parseInt(s1,16))) });
		//Unicodeの10進数値文字参照をimgタグ形式に変換
		//var _this = this;
		//str = str.replace(re3, function(whole, s1){ return _this.s_options_encode(_this.u2web(s1)) });

		return str;
	},
	
	//Firefoxから数値参照が直接渡ってこないので、とりあえずコメントアウト
	/**
	 * Unicode値(10進)を指示子の最後の文字+SJISコードの10進数値に変換する
	 */
	/*
	u2web : function(u)
	{
		var s = 0;
		if(u >= 0xE001 && u <= 0xE05A){
			s = u-0x98E0;
		}else if(u >= 0xE101 && u <= 0xE15A || u >= 0xE201 && u <= 0xE25A){
			s = u-0x9BE0;
		}else if(u >= 0xE301 && u <= 0xE35A || u >= 0xE401 && u <= 0xE45A || u >= 0xE501 && u <= 0xE55A){
			s = u-0x8DE0;
		}else{
			dump("###Unknown Pictogram:"+u+"\n");
			s = u;
		}
		return s;
	},
	*/

	/**
	* 絵文字画像格納ディレクトリの一括設定
	* 
	* @param string path
	*/
	setImagePath : function(path)
	{
		path.replace(RegExp('/*$'),'');
		this.s_img_path = path+'/s/';
	},

	/**
	* SoftBank絵文字（10進数）をimgタグ形式へ変換
	* @param  integer dec
	* @return string
	*/
	s_options_encode : function(dec)
	{
		var width = (dec >= 20828 && dec <= 20830) ? 18 : 15;
		var buf = '<img src="'+this.s_img_path.replace(/[/]*$/g, "")+'/'+dec+'.gif" alt="" border="0" width="'+width+'" height="15" />';
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
