var MPC_DOCOMO   = "DC";
var MPC_EZWEB    = "AU";
var MPC_SOFTBANK = "SB";

/**
* �G�����ϊ��N���X
* @author horikawa_t <horikawa.takahiro@gmail.com>
* @original_author   ryster <ryster@php-develop.org>
* @license  http://www.opensource.org/licenses/mit-license.php The MIT License
* @version  Release: 0.0.1
*/
//var MobilePictogramConverter = function() {};
var MobilePictogramConverter = 
{
	/**
	* �^�C�v�ɍ��킹�āA��p�̃N���X�I�u�W�F�N�g�𐶐�
	* @param string  str	 �ϊ��O������
	* @param string  carrier str�̊G�����L�����A (MPC_FROM_FOMA, MPC_FROM_EZWEB, MPC_FROM_SOFTBANK)
	* @return mixed
	*/
	factory : function (carrier)
	{
		var classname = eval('MPC_'+carrier);
		mpc = new classname;
		return mpc;
	}
};

