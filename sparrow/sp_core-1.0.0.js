/*
 * sp_core.js 1.0.0
 * 
 * Released under the GPL Version 3 licenses.
 * Copyright (C) 2011 Symmetric Co.,Ltd.
 * http://www.symmetric.co.jp/
 */
// viewport�ݒ�
if(ip) {
	if(confVgaMode) {
		document.write('<meta name="viewport" content="width=480,user-scalable=no" />');
	} else {
		document.write('<meta name="viewport" content="width=240,user-scalable=no" />');
	}
} else if(ad) {
	if(confVgaMode) {
		document.write('<meta name="viewport" content="width=device-width,minimum-scale=1,maximum-scale=1,initial-scale=1,user-scalable=yes,target-densitydpi=device-dpi" />');
		// �������ς�������̒���
		$(window).bind('resize load', function(){$("html").css("zoom" , $(window).width()/480);});
	} else {
		document.write('<meta name="viewport" content="width=device-width,minimum-scale=2,maximum-scale=2,initial-scale=2,user-scalable=yes,target-densitydpi=device-dpi" />');
		// �������ς�������̒���
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
	// �G�����u��&���p�S�p�ϊ�
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
	
	// class�����w��ɂ��ϊ�
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
		// �v�f�폜or�u��
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
		// �}�[�L�[
		if(confMarqueeConvert && clz.indexOf("sp_mq") > -1) {
			convertMarquee(obj, i);
		}
		// ���X�g��
		if(clz.indexOf("sp_list") > -1) {
			convertList(obj);
		}
		// style����
		if(clz.indexOf("sp_style") > -1) {
			obj.attr("style", "");
		}
	}
	
	if(win && !confVgaMode) {
		winImageFunc();
	}
});


// �֐��Q
var fullKana  = new Array("��","�K","�M","�O","�Q","�S","�U","�W","�Y","�[","�]","�_","�a","�d","�f","�h","�o","�r","�u","�x","�{","�p","�s","�v","�y","�|","�J","�B","�u","�v","�A","�E","��","�@","�B","�D","�F","�H","��","��","��","�b","�[","�A","�C","�E","�G","�I","�J","�L","�N","�P","�R","�T","�V","�X","�Z","�\","�^","�`","�c","�e","�g","�i","�j","�k","�l","�m","�n","�q","�t","�w","�z","�}","�~","��","��","��","��","��","��","��","��","��","��","��","��","��","�K",'&yen;');
var halfKana  = new Array("��","��","��","��","��","��","��","��","��","��","��","��","��","��","��","��","��","��","��","��","��","��","��","��","��","��","�","�","�","�","�","�","�","�","�","�","�","�","�","�","�","�","�","�","�","�","�","�","�","�","�","�","�","�","�","�","�","�","�","�","�","�","�","�","�","�","�","�","�","�","�","�","�","�","�","�","�","�","�","�","�","�","�","�","�","�","�","�","�",'\\\\');

// ���p�J�i to �S�p�J�i
function h2z(str) {
	for(i = 0; i < halfKana.length; i++){
		re = new RegExp(halfKana[i],"g");
		str=str.replace(re, fullKana[i]);
	}
	return str;
}
// �G�����R�[�h to �G�����摜
function convertGlyph(str, carrier) {
	var mpc = MobilePictogramConverter.factory(carrier);
	mpc.setImagePath(baseHost + basePath + "/glyph/img");
	return mpc.convert(str);
}
// �}�[�L�[�G�~�����[�g����
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
// ���X�g�ŕ\�������邽�߁A�s�v�ȃm�[�h���폜����
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

// style�������̕����T�C�Y���X�}�[�g�t�H���l�ɕύX����
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

// WindowsPhone7�p�b��R�[�h
function winImageFunc(obj) {
	var logicalScreenWdith = 320;
	var par = logicalScreenWdith / 240;
	var a = 0;
	var list = $("img");
	for(i = 0; i < list.size(); i++) {
		var obj = list.eq(i);
		
		// ��
		var w = obj.width();
		w = w * par;
		if(w > logicalScreenWdith) {
			w = logicalScreenWdith;
		}
		obj.width(Math.round(w));
		// �����͖����ɂ���B������̃T���v�����O��Ńu���E�U�������Œ�������
		var elem = list.get(i);
		elem.removeAttribute("height");
	}
}
