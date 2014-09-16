/**
* EZweb�G�����ϊ��x�[�X�N���X
* @author horikawa_t <horikawa.takahiro@gmail.com>
* @original_author   ryster <ryster@php-develop.org>
* @license  http://www.opensource.org/licenses/mit-license.php The MIT License
*/
var MPC_AU = function(){};
MPC_AU.prototype =
{
	/**
	* EZweb�G�����摜�i�[�p�X
	* @var string
	*/
	e_img_path : "img/e/",

	/**
	* �����񂩂�EZweb�G���������o���A�w�肳�ꂽ�t�H�[�}�b�g�ɕϊ�
	* ��{�E�g���E�B���G�����Ή�
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
	* �G�����摜�i�[�f�B���N�g���̈ꊇ�ݒ�
	* 
	* @param string path
	*/
	setImagePath : function(path)
	{
		path.replace(RegExp('/*$'),'');
		this.e_img_path = path+'/e/';
	},

	/**
	* EZweb�G�����iicon�ԍ��j���w�肳�ꂽimg�^�O�`���֕ϊ�
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