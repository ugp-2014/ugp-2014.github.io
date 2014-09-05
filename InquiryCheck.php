﻿<?php
	header('Content-Type:text/plain;charset=UTF-8');
	var_dump($_POST);

	$name = htmlspecialchars( $_POST["name"], ENT_QUOTES "UTF-8");
	$mailaddress = htmlspecialchars( $_POST["mailaddress"], ENT_QUOTES "UTF-8"); 
	$title = htmlspecialchars( $_POST["title"], ENT_QUOTES "UTF-8" );
	$message = htmlspecialchars( $_POST["message"], ENT_QUOTES "UTF-8" );

?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="chrome=1">
	<meta http-equiv="Content-Type" content="text/html; charset=EUC-JP">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link href='https://fonts.googleapis.com/css?family=Architects+Daughter' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" type="text/css" href="stylesheets/stylesheet.css" media="screen">
    <link rel="stylesheet" type="text/css" href="stylesheets/pygment_trac.css" media="screen">
    <link rel="stylesheet" type="text/css" href="stylesheets/print.css" media="print">
    <link rel="stylesheet" href="stylesheets/styles.css">
    <link rel="stylesheet" href="stylesheets/form.css">
    
    <title>UGP</title>
  </head>

  <body>   
	<script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
   	<script src="javascripts/main.js"></script>
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <header>
      <div class="inner">
        <br><br><br><br>
      </div>
    </header>

    <div id='cssmenu'>
	<ul>
	   <li><a href='index.html'><span>ホーム</span></a></li>
	   <li class='has-sub'><a href='MembersList.html'><span>メンバー</span></a>
	   <ul>
	        <li><a href='Entertainment.html'><span>芸能班</span></a></li>
	        <li><a href='Scenario.html'><span>シナリオ班</span></a></li>
			<li><a href='Edit.html'><span>編集班</span></a></li>
			<li><a href='Programmer.html'><span>プログラマー班</span></a></li>
			<li><a href='Painter.html'><span>絵師班</span></a></li>
			<li><a href='Music.html'><span>音楽班</span></a></li>
	   </ul>
	   </li>
	   <li class='has-sub'><a href='Work.html'><span>作品</span></a>
	   <ul>
	        <li class='has-sub'><a href='Game.html'><span>ゲーム</span></a>
            <ul>                                       
	   			<li><a href='http://www.freem.ne.jp/win/game/5904'><span>なつゆめ</span></a>
	   			<li><a href='http://tesuka0713.wix.com/eresima#!home/ciaa'><span>エレベーター姉妹</span></a>
	   			<li><a href='http://ugpplanningandprod.wix.com/ugpgamecreativeteam#!untitled/c1rgk'><span>Light VS Light</span></a>
	   			<li><a href='http://ugpplanningandprod.wix.com/ugpgamecreativeteam#!hitofuderaail/cjg9'><span>ひと筆レール</span></a>  
	   			<li><a href='http://ugpplanningandprod.wix.com/ugpgamecreativeteam#!colorwave/c15av'><span>ColorWave</span></a>
	   			<li><a href='http://ugpplanningandprod.wix.com/ugpgamecreativeteam#!nezumiaction/cee5'><span>ねずみ退治</span></a>
            </ul>
			</li>
	        <li class='has-sub'><a href='VoiceDrama.html'><span>ボイスドラマ</span></a>
            <ul>          
	  			<li><a href='http://kanasimitanatos.xxxxxxxx.jp/'><span>EndlessWaltz～哀しみのタナトス～</span></a>  
	  			<li><a href='http://escapefrom.yu-nagi.com/'><span>Escape from the world</span></a>
	  			<li><a href='http://nekoirobiyori.nekonikoban.org/'><span>猫色日和</span></a>
	  			<li><a href='http://endlesswaltzatena.web.fc2.com/'><span>EndlessWaltz～逆襲のアテナ～</span></a>
	  			<li><a href='http://tatiiro.wix.com/blank'><span>白紙の中に</span></a>
			    <li><a href='http://ugp2014.wix.com/sinken'><span>心剣</span></a>
			</ul>
			</li>
			<li><a href='Illustration.html'><span>イラスト</span></a> </li>
			<li class='has-sub'><a href='Animation.html'><span>アニメーション</span></a></li>
			<li class='has-sub'><a href='Application.html'><span>アプリケーション</span></a></li>
			<li><a href='Other.html'><span>その他</span></a></li>
	   </ul>
	   </li>
	   <li><a href='Link.html'><span>リンク</span></a></li>	
	   <li class='active'><a href='Inquiry.html'><span>お問い合わせ</span></a></li>
	</ul>
	</div>
          
    <aside id="sidebar">
	
	</aside>
    <dir id="fade">
    <div id="content-wrapper">
      <div class="inner clearfix">
        <section id="main-content">
        <h1>確認画面</h1><br>  
		<form method ="post"  accept-charset="UTF-8" action ="InquirySend.php">
		<p>お名前 : <?php echo $name;?></p>
		<p>メールアドレス : <?php echo $mailaddress;?></p>
		<p>タイトル : <?php echo $title;?></p> 
		<p>メッセージ
		<?php echo $message;?></p>
        <br>
		<p><input type="button" onClick="history.back()" value="戻る">　　
		<input type="submit" value="送信する"></p>
        </form>
		<br><br><br><br>
		</section></dir>
            
    </div></div> 
	
	<dir id="fade_footer">
	<footer>
	<p class="pageTop"><a href="#"></a></p>
	</footer>	
    </dir>
	<!-- shinobi ct2 -->
	<script type="text/javascript" src="http://ct2.amigasa.jp/sc/1696197"></script>
	<noscript><img src="http://ct2.amigasa.jp/ll/1696197" border="0" alt="カウンター" /></noscript>
	<!-- /shinobi ct2 -->         
  </body>
  
</html>