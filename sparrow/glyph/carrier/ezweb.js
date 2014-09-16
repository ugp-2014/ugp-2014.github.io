/**
* EZweb絵文字変換ベースクラス
* @author horikawa_t <horikawa.takahiro@gmail.com>
* @original_author   ryster <ryster@php-develop.org>
* @license  http://www.opensource.org/licenses/mit-license.php The MIT License
*/
var MPC_AU = function(){};
MPC_AU.prototype =
{
	/**
	* EZweb絵文字画像格納パス
	* @var string
	*/
	e_img_path : "img/e/",

	/**
	* 文字列からEZweb絵文字を検出し、指定されたフォーマットに変換
	* 基本・拡張・隠し絵文字対応
	* @return string
	*/
	convert : function(str)
	{
		var re1 = /<img\s+(icon|localsrc)="?([0-9]+)"?\s*>/ig;
		
		var _this = this;
		var f = function(whole, s1, s2){
			return _this.e_options_encode(s2);
		}
		str = str.replace(re1, f);
		return str;
	},

	/**
	* 絵文字画像格納ディレクトリの一括設定
	* 
	* @param string path
	*/
	setImagePath : function(path)
	{
		path.replace(RegExp('/*$'),'');
		this.e_img_path = path+'/e/';
	},

	/**
	* EZweb絵文字（icon番号）を指定されたimgタグ形式へ変換
	* @param  integer iconno
	* @return string
	*/
	e_options_encode : function(iconno)
	{
		iconno = parseInt(iconno);
		var width = (iconno == 174) ? 7 : ((iconno == 175) ? 4 : 15);
		var buf = '<img src="'+this.e_img_path.replace(/[/]*$/g, "")+'/'+iconno+'.gif" alt="" border="0" width="'+width+'" height="15" />';
		return buf;
	}
};