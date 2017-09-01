
<!DOCTYPE html>
<html lang="zh-cn" class="no-js">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>商标注册</title>
<meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no">
<meta name="format-detection" content="telephone=no">
<meta name="keywords" content="商标注册,注册商标,0元注册商标,免费注册商标,免费商标注册,免费商标">
<meta name="description" content="BrandMonitor专注于商标注册，为您提供商标自行注册，商标代持注册，流程简单，通过率高，0元手续费。">
<link rel="stylesheet" type="text/css" href="/kk_trademark/resources/h5/trademark/css/style1.css" />
<script src="/kk_trademark/resources/h5/trademark/js/jquery-3.1.1.min.js" type="text/javascript"></script>
<script type="text/javascript" src="/kk_trademark/resources/h5/trademark/js/is_login.js"></script>
<script src="/kk_trademark/resources/h5/trademark/js/md5.js"></script>
<script src="/kk_trademark/resources/h5/trademark/js/TMreg.js"></script>
<script src="http://malsup.github.io/jquery.form.js"></script>
</head>
<body><style>
#checka
{
		display:block;
		padding:10px 3px;
}
.newlook{display:inline-block;height:26px;line-height:26px;background:#fff;margin:10px 10px 0 0;border-radius:5px;padding:0 10px;color:#ff5900;font-size:16px;}
.hit{
	   float:right;
	   padding:0 0 0 10px;
	   color:black;
	   font-size:14px;
}
.headtop{background-color: rgb(245,245,245);font-family: "微软雅黑";color:rgb(51,51,51);font-size: 14px;}
.row{width: 70%;margin: 0 auto;padding: 8px 0px;}
.row section{right: 15px;padding: 5px auto;}
.row span{margin:0 10px;cursor: pointer;}
.row span a:hover{color:orange;}
nav{font-size: 15px;font-family: "微软雅黑";}
nav ul{float: right;color:black;display: inline-block;}
nav ul li{margin:0 25px;list-style: none;float: left;}
.hover a:hover{color:orange;}
nav a:link{color:rgb(51,51,51);}
.loginnow{padding: 12px 28px;border:1px solid #999999;border-radius: 5px;margin-top:-12px;}
/*.loginnow a:hover{color:rgb(51,51,51);}*/
.loginnow:hover{cursor:pointer;background-color: rgb(255, 255, 255);
box-shadow: rgb(204, 204, 204) 0px 0px 2px inset, rgb(204, 204, 204) 0px 0px 2px;}
.login_box .member, .login_box .password {
    width: 94px;
    height: 18px;
    border-color: #ababab #dadada #dadada #ababab;
    margin: 0px 8px 0 2px;
    padding: 2px 5px;
}.login_box {
    width: 500px;
}
.row section {
    right: 15px;
    padding: 5px auto;
}.login_box label, .login_box input, .login_box a, .login_box .ename_user {
    float: left;
    _display: inline;
}
</style>
<!-- 弹窗遮罩 -->
<div class="pop_box" style="display:none;z-index:10000;">
	<iframe src="about:blank"></iframe>
</div>
<!-- /弹窗遮罩 -->
<div class="headtop">
	<div class="row">
		<section>
			<div class="left login_box clearfix" id="login_box topleft">
				<form class="clearfix" id="qlform">
					<label>账号：</label>
					<input name="loginName" id="UserName" class="com_input member" placeholder="手机/邮箱" value="" type="text">
					<label>密码：</label>
					<input name="loginPwd" id="Password" class="com_input password" onkeydown="if(event.keyCode==13) jQuery('#quicklogin').click();" autocomplete="off" type="password">
					<input class="login_btn" style="margin:0 auto;height: 22px;" value="登录" onclick="login();" id="quicklogin" type="button">
						<a href="/kk_trademark/h5/trademark/register.jsp" class="c_blue">注册</a>
						<a href="" class="c_blue">忘记密码</a>
						<input id="prekey" name="key" value="y74Kfc" type="hidden">
						<input id="sid" name="sid" value="12" type="hidden">
						<input id="backurl" name="backurl" value="http://www.tm.cn/" type="hidden">
						<input id="domainname" name="domainname" value="www.tm.cn" type="hidden">
						<div style="display:none" class="login_tip captcha" id="HCaptchaDiv">
							<span class="outsideb"></span><span class="insideb"></span>
							<label>输入验证问答：</label>
							<input maxlength="6" class="com_input" name="captcha" id="HCaptcha" onkeydown="if(event.keyCode==13) jQuery('#quicklogin').click();" autocomplete="off" type="text">
							<img id="HCaptchaImg" src="" width="64" height="20">
							<a id="HCaptchaRefresh" href="javascript:cas.refreshCaptcha();">刷新</a>
						</div>
						<!--<div id="login_error" class="login_tip" style="">
							<span class="outsideb"></span><span class="insideb"></span>
							<span id="errorLoginMsg">请输入EnameID/邮箱</span>
						</div>-->
				</form>
			</div>
			<div class="left clearfix login_box" id="logining" style="color:#0f93d8;display: none;">您好！<span class="staffCode" style="margin: 0 10px;"></span><span class="exit" onclick="exit();"\n>退出</span></div>
			<span><a>商标查询</a></span>
			<span><a>帮助中心</a></span>
			<span>
				<img style="cursor:auto;width: 20px;" src="http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Fconnect_phone.png">
				<span style="cursor:auto;margin:0 auto;">客服热线：86524997</span>
			</span>
		</section>
	</div>
</div>

<!-- 其他申请人 -->
<div class="pop_main" style="display:none;z-index:10001;" id="mach">
	<div class="pop_hd clearfix">
		<a class="manage_link" href="/kk_trademark/h5/trademark/proposer.jsp" target="_blank">管理</a><a class="pop_close" id="col" href="javascript:void(0);" title="关闭">x</a><h3>其他申请人</h3>
	</div>
	<div class="pop_bd applicant_list clearfix" id="list"></div>
</div>
<!-- /其他申请人 -->

<!-- 其他商标 -->
<div class="pop_main" style="display:none;z-index:10001;" id="Tmmach">
	<div class="pop_hd clearfix">
		<a class="pop_close" id="tMcol" href="javascript:void(0);" title="关闭">x</a><h3>申请过的商标</h3>
	</div>
	<div class="pop_bd applicant_list clearfix" id="TmHistoryList"></div>
</div>
<!-- /其他商标 -->

<!-- header -->
<header class="header clearfix" style="z-index: 9991;">
	<div class="left">

		<a href="javascript:void(0);"><img src="http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Flogo.png" width="120" alt="商标注册平台www.tm.cn" title="商标注册平台www.tm.cn"/></a>
	</div>
	<div class="right">
		<ul class="menu">
			<li><a href="/kk_trademark/h5/trademark/index.jsp">首页</a></li>
			<li class="cur"><a href="/kk_trademark/h5/trademark/trademark_regist.jsp">商标注册</a></li>
			<li><a href="/kk_trademark/h5/trademark/search.jsp">商标查询</a></li>
			<li><a href="/kk_trademark/h5/trademark/sort.jsp">商标类别</a></li>
			<li><a href="/kk_trademark/h5/trademark/proposer.jsp">我的商标</a></li>
		</ul>
	</div>
</header>
<!-- container -->
<div class="container">
	<div class="bor">
		<div class="reg_tab clearfix">
			<a href="/kk_trademark/h5/trademark/trademark_regist.jsp" class="tab1 cur" >普通注册</a>
			<a href="/kk_trademark/h5/trademark/trademark_regist_proxy.jsp" class="tab2" >代持注册</a>
		</div>
		<div class="step">
			<ul class="clearfix">
				<li class="cur"><span class="num">1</span><span class="txt">提交资料</span></li>
				<li><span class="num">2</span><span class="txt">审核资料</span></li>
				<li><span class="num">3</span><span class="txt">确认并付款</span></li>
				<li><span class="num">4</span><span class="txt">提交商标局</span></li>
			</ul>
		</div>
	
		<div class="form">
			    <input type="hidden" name="IsProxy" value="-1"/>
				<div class="hor">
					<span class="label">申 请 人：</span>
									<a href="javascript:void(0);" class="add_applicant">添加申请人</a>
									<a href="/kk_trademark/h5/trademark/proposer.jsp" target="_blank">管理申请人</a><!-- 管理申请人到申请人列表页面 -->
					<!--<input type="text" name="ApName" value="申请人" id="ApNames" />-->
					<select style="display:none;" name="ApName" value="申请人" id="ApNames"></select>
					<!--<input type="text" name="AId" value="12" id="AId" />-->
				</div>
			
				<!--<script type="text/javascript" src='/kk_trademark/resources/h5/trademark/js/TMreg.js'></script>-->	
				<div class="hor">
					<span class="label">商标名称：</span>
					<input  type="text" placeholder='为了您的商标安全，请先登录' readonly value="" id="TmName" name="TmName" class="input form_input" />				
				   <span  id="TmNameWarn" ></span>
					<span class="explain_info"  style="width:270px;top:63px;left:640px;" id="TmNameShow">
						
					   <img src="" style="position:absolute;margin-top:-3px;">
				   <span id="TmNameTitle"></span><span class="outsideb"></span><span class="insideb"></span></span>
				</div>
				<div class="hor">
					<span class="label">图样类型：</span>
					<span id="checka">
					<input type="radio" class="tub1" name="Color" value="1" id="tmdp"> 黑白 &nbsp;
					<input type="radio" class="tub1" value="2" name="Color" id="tmd"> 着色
					<a href="javascript:void(0)" class="min_tip min_tip_doubt" >
						<span class="explain_info" style="width:500px;">以着色图样申请商标注册的，应分别上传着色图样及黑白图样，不指定颜色的，只上传黑白图样即可。<span class="outsideb"></span><span class="insideb"></span></span>
					</a>
					</span>
				</div>
				<div class="hor">
					<span class="label">商标图样(黑白)：</span>
					<form id='formFile1' name='formFile' method="post" action="/kk_trademark/file/uploadFile" target='frameFile' enctype="multipart/form-data" >
						<div class="position">
							<img  src="http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Fadd.jpg" width="38" height="38" alt="添加" style="margin-right:10px;"  id="secondImageText"  />
							<input type="file" name="mfile" id="secondImage"  class="add_file" hidefocus="hidefocus" title=" " />									
							<a href="javascript:void(0)" class="min_tip min_tip_doubt" >
								<span class="explain_info">像素介于“400*400-1500*1500”，通过扫描获得商标图样的，应按24位彩色、RGB格式、300dpi分辨率扫描，小于10M<span class="outsideb"></span><span class="insideb"></span></span>
							</a>
						</div>
					</form>
					<input type="hidden" name="TmPattern"  id="TmPattern_test" value=""  />
				</div>
				<div class="hor" style="display: none;" id="stylenoe">
					<span class="label">商标图样(着色)：</span>
					<form id='formFile2' name='formFile' method="post" action="/kk_trademark/file/uploadFile" target='frameFile' enctype="multipart/form-data" >
						<div class="position">
							<img  src="http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Fadd.jpg" width="38" height="38" alt="添加" style="margin-right:10px;"  id="threeImageText"  />
							<input type="file" name="mfile" id="threeImage" class="add_file" hidefocus="hidefocus" title=" " />									
							<a href="javascript:void(0)" class="min_tip min_tip_doubt" >
								<span class="explain_info">像素介于“400*400-1500*1500”，通过扫描获得商标图样的，应按24位彩色、RGB格式、300dpi分辨率扫描，jpg格式，小于10M<span class="outsideb"></span><span class="insideb"></span></span>
							</a>
						</div>
					</form>
					<input type="hidden" name="TmPatternTwo"  id="TmPatternTwo_test" value=""  />
				</div>
				<div class="hor">
					<span class="label">商标说明：</span>
					<textarea class="textarea" id="TmExplain" name="TmExplain" onfocus="noticeShows(this,'TmExplain','中文商标请描述字体名称，图形商标请描述设计要素，英文商标请描述中文含义')" onblur="noticeHideAndCheck(this,this.value,'TmExplain',1,250)"></textarea>
			      <span  id="TmExplainWarn"></span>
			    	<span class="explain_info"style="width:270px;top:302px;left:640px;" id="TmExplainShow"><span id="TmExplainTitle"></span><span class="outsideb"></span><span class="insideb"></span></span>
			    <!-- 	<span id="TmExplainWarn" style="display:none;" class="min_tip min_tip_optional"></span> -->
				</div>
				<div class="hor">
					<span class="label">委 托 书：</span>
					<form id='formFile3' name='formFile' method="post" action="/kk_trademark/file/uploadFile" target='frameFile' enctype="multipart/form-data" >
						<div class="position" style="z-index: 999;">		
							<a href="#" class="add"><img src="http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Fupload.jpg" width="67" height="30" alt="上 传"   /></a>								
							<input type="file" name="mfile" id="firstImage"  class="add_file" hidefocus="hidefocus" title=" "  />										
							<a href="/tm/download?AId=" id="dodo">委托书模板下载</a>
							<a href="javascript:void(0)" class="min_tip min_tip_doubt" >
						       	<span class="explain_info">委托书已经自动生成。请下载并打印后，企业盖章（个体工商户签字）后扫描彩色件并上传。Jpg格式，小于10M。<span class="outsideb"></span><span class="insideb"></span></span>						
							</a>
							<div class="pattern" style="display: none;" id="firsthide" style="">
								<img class="pattern_l"  id="firstImageText" src="" width="65" height="65" alt="委托书" />
								<a href="#"></a>
								<img style="display:none;" id="firstImageTexts" class="pattern_b" src="" width="550" height="700" alt="委托书"   />
							</div>
							<script type="text/javascript">
								$(function(){
									$(".pattern a").mouseover(function(event) {
										$(".pattern .pattern_b").show();
									}).mouseout(function(event) {
										$(".pattern .pattern_b").hide();
									});
								})
							</script>
						</div>	
					</form>
					<input type="hidden" name="ProxyImg" id="ProxyImg_test" value="" />
				</div>
				<div class="hor hor_search" >
					<span class="label">商品关键字搜索：</span>
					<div class="search"> 
						<div class="search_form clearfix">
							<input name="sortName" type="text" id="sortName" value="" title="" class="input" autocomplete="off" />
							<button type="button" class="search_btn" id="search" hidefocus="hidefocus">	</button>
						</div>
						<ul class="drop_list" id="listTotals" style="display:none;">
							<li><a href="javascript:void(0);" onmousedown="getValue('sortName','服装纺织','18,23,24,25,26,27,35');" >服装纺织</a></li>
							<li><a href="javascript:void(0);" onmousedown="getValue('sortName','食品饮料','29,30,31,32,33,40,39');">食品饮料</a></li>
							<li><a href="javascript:void(0);" onmousedown="getValue('sortName','餐饮酒店','29,30,31,32,33,35,40,43');">餐饮酒店</a></li>
							<li><a href="javascript:void(0);" onmousedown="getValue('sortName','化妆美容','03,05,10,21,30,44');">化妆美容</a></li>
							<li><a href="javascript:void(0);" onmousedown="getValue('sortName','医药设备','05,10,35,40,44');">医药设备</a></li>
							<li><a href="javascript:void(0);" onmousedown="getValue('sortName','日常用品','02,03,05,06,08,09,16,34,35,40');">日常用品</a></li>
							<li><a href="javascript:void(0);" onmousedown="getValue('sortName','家具用具','20,21,37,40');">家具用具</a></li>
							<li><a href="javascript:void(0);" onmousedown="getValue('sortName','IT互联网','09,16,35,38,41,42');">IT互联网</a></li>
							<li><a href="javascript:void(0);" onmousedown="getValue('sortName','化工能源','01,02,04,07,11,16,17,22,40,42');">化工能源</a></li>			
							<li><a href="javascript:void(0);" onmousedown="getValue('sortName','电子仪器','09,11');">电子仪器</a></li>		
							<li><a href="javascript:void(0);" onmousedown="getValue('sortName','机械制造','06,07,11,37');">机械制造</a></li>
							<li><a href="javascript:void(0);" onmousedown="getValue('sortName','建材五金','02,06,14,17,19,37,40,42');">建材五金</a></li>			
							<li><a href="javascript:void(0);" onmousedown="getValue('sortName','房产金融','36,37,42,40,41,42,45');">房产金融</a></li>				
						</ul>
					</div>
				</div>
				<div class="type_list">
					<ul class="clearfix">
						  <li class="optional"><a href="javascript:void(0);"   data-flag="0" id="01" title="化学原料" >01化学原料</a></li> 
					      <li class="optional"><a href="javascript:void(0);"   data-flag="0" id="02" title="颜料油漆" >02颜料油漆</a></li> 
					      <li class="optional"><a href="javascript:void(0);"   data-flag="0" id="03" title="化妆品" >03化妆品</a></li> 
					      <li class="optional"><a href="javascript:void(0);"   data-flag="0" id="04" title="燃料油脂" >04燃料油脂</a></li> 
					      <li class="optional"><a href="javascript:void(0);"   data-flag="0" id="05" title="医药" >05医药</a></li> 
					      <li class="optional"><a href="javascript:void(0);"   data-flag="0" id="06" title="五金金属" >06五金金属</a></li> 
					      <li class="optional"><a href="javascript:void(0);"   data-flag="0" id="07" title="机械设备" >07机械设备</a></li> 
					      <li class="optional"><a href="javascript:void(0);"   data-flag="0" id="08" title="手工器械" >08手工器械</a></li> 
					      <li class="optional"><a href="javascript:void(0);"   data-flag="0" id="09" title="电子电脑" >09电子电脑</a></li> 
					      <li class="optional"><a href="javascript:void(0);"   data-flag="0" id="10" title="医疗器械" >10医疗器械</a></li> 
					      <li class="optional"><a href="javascript:void(0);"   data-flag="0" id="11" title="家用电器" >11家用电器</a></li> 
					      <li class="optional"><a href="javascript:void(0);"   data-flag="0" id="12" title="运输工具" >12运输工具</a></li> 
					      <li class="optional"><a href="javascript:void(0);"   data-flag="0" id="13" title="军火烟火" >13军火烟火</a></li> 
					      <li class="optional"><a href="javascript:void(0);"   data-flag="0" id="14" title="珠宝钟表" >14珠宝钟表</a></li> 
					      <li class="optional"><a href="javascript:void(0);"   data-flag="0" id="15" title="乐器" >15乐器</a></li> 
					      <li class="optional"><a href="javascript:void(0);"   data-flag="0" id="16" title="办公文具" >16办公文具</a></li> 
					      <li class="optional"><a href="javascript:void(0);"   data-flag="0" id="17" title="橡胶制品" >17橡胶制品</a></li> 
					      <li class="optional"><a href="javascript:void(0);"   data-flag="0" id="18" title="皮革箱包" >18皮革箱包</a></li> 
					      <li class="optional"><a href="javascript:void(0);"   data-flag="0" id="19" title="建筑材料" >19建筑材料</a></li> 
					      <li class="optional"><a href="javascript:void(0);"   data-flag="0" id="20" title="家具" >20家具</a></li> 
					      <li class="optional"><a href="javascript:void(0);"   data-flag="0" id="21" title="厨房洁具" >21厨房洁具</a></li> 
					      <li class="optional"><a href="javascript:void(0);"   data-flag="0" id="22" title="绳网袋篷" >22绳网袋篷</a></li> 
					      <li class="optional"><a href="javascript:void(0);"   data-flag="0" id="23" title="纺织纱线" >23纺织纱线</a></li> 
					      <li class="optional"><a href="javascript:void(0);"   data-flag="0" id="24" title="布料床单" >24布料床单</a></li> 
					      <li class="optional"><a href="javascript:void(0);"   data-flag="0" id="25" title="服装鞋帽" >25服装鞋帽</a></li> 
					      <li class="optional"><a href="javascript:void(0);"   data-flag="0" id="26" title="花边配饰" >26花边配饰</a></li> 
					      <li class="optional"><a href="javascript:void(0);"   data-flag="0" id="27" title="地毯席垫" >27地毯席垫</a></li> 
					      <li class="optional"><a href="javascript:void(0);"   data-flag="0" id="28" title="体育玩具" >28体育玩具</a></li> 
					      <li class="optional"><a href="javascript:void(0);"   data-flag="0" id="29" title="食品" >29食品</a></li> 
					      <li class="optional"><a href="javascript:void(0);"   data-flag="0" id="30" title="小食配料" >30小食配料</a></li> 
					      <li class="optional"><a href="javascript:void(0);"   data-flag="0" id="31" title="水果花木" >31水果花木</a></li> 
					      <li class="optional"><a href="javascript:void(0);"   data-flag="0" id="32" title="啤酒饮料" >32啤酒饮料</a></li> 
					      <li class="optional"><a href="javascript:void(0);"   data-flag="0" id="33" title="酒" >33酒</a></li> 
					      <li class="optional"><a href="javascript:void(0);"   data-flag="0" id="34" title="烟草烟具" >34烟草烟具</a></li> 
					      <li class="optional"><a href="javascript:void(0);"   data-flag="0" id="35" title="广告贸易" >35广告贸易</a></li> 
					      <li class="optional"><a href="javascript:void(0);"   data-flag="0" id="36" title="金融物管" >36金融物管</a></li> 
					      <li class="optional"><a href="javascript:void(0);"   data-flag="0" id="37" title="建筑修理" >37建筑修理</a></li> 
					      <li class="optional"><a href="javascript:void(0);"   data-flag="0" id="38" title="通讯传媒" >38通讯传媒</a></li> 
					      <li class="optional"><a href="javascript:void(0);"   data-flag="0" id="39" title="运输旅行" >39运输旅行</a></li> 
					      <li class="optional"><a href="javascript:void(0);"   data-flag="0" id="40" title="材料加工" >40材料加工</a></li> 
					      <li class="optional"><a href="javascript:void(0);"   data-flag="0" id="41" title="教育娱乐" >41教育娱乐</a></li> 
					      <li class="optional"><a href="javascript:void(0);"   data-flag="0" id="42" title="技术服务" >42技术服务</a></li> 
					      <li class="optional"><a href="javascript:void(0);"   data-flag="0" id="43" title="餐饮酒店" >43餐饮酒店</a></li> 
					      <li class="optional"><a href="javascript:void(0);"   data-flag="0" id="44" title="医疗园艺" >44医疗园艺</a></li> 
					      <li class="optional"><a href="javascript:void(0);"   data-flag="0" id="45" title="法律" >45法律</a></li> 
						</ul>
					<p class="search_result mt20">共查询到<em class="c_orange">0</em>条近似商标 <span id="searchsorts" ></span></p>
					<span id="tmsot" style="padding: 5px"></span>
				</div>
		</div>
		<div class="choose clearfix">
			<div class="left choose_main">
				<div class="total top_total">费用总计：<em class="sum_price">¥0 元</em></div>
				<ul class="class_info">
				</ul>
				<div class="total bottom_total">
				<div class="clearfix">
				<span class="agreement"><input type="checkbox"  name=""  id="AgreeBox" value="已阅读并同意《商标普通注册协议》" >
				<label for="AgreeBox">已阅读并同意<a href="/about/ownreg" target="_blank">《商标普通注册协议》</a></label></span>	
				费用总计：<em class="sum_price">¥0 元</em>
				</div>
				       <button type="submit" class="btn_blue total_btn ml15">直接提交</button>
						<span id="SaveTwo"  class="btn_blue btn_white total_btn" style="cursor: pointer">保存暂不提交</span>
				</div>
			</div>
						<div class="right choose_list">
			<div class="choose_query" style="display: none;">
						<input type="text" class="input" id="searchTmName" placeholder="请输入商品/服务名称">
						<button type="button" class="ui-input" id="TmSearchName">查询</button>
			 </div>
			<div class="auto">
				<h2 class="list_tit"></h2>
				<div class="list_main">
					<dl class="list_sec">
					</dl>
				</div>
			</div>
			</div>
		</div>
		<input type='hidden' id='TmId' name='TmId' value=""/>
      <input type='hidden' id='EnameId' name='EnameId' value=""/>	
		<input type="hidden" id="TmSort" name="TmSort" value="" />
		<input type="hidden" id="TmSortInfo" name="TmSortInfo" value="" />
		<input type="hidden" id="IsSave" name="IsSave" value="1" />
		<span id="innum" style="displace:none;"></span>
		<dl class="info mt20">
			<dt>注册费用：<dt>
			<dd>按照商标类别进行收费，一类一标，600元可注册同一类别下的10个商品/服务项目，10个以上，每增加一个商品/服务项目，多加60元。</dd>
		</dl>
		<dl class="info mt20">
			<dt>注意事项：<dt>
			<dd>1、商标普通注册是指为大陆企业以本企业名义和大陆个体工商户注册的普通商标。 </dd>
			<dd>2、商标代持注册是指为暂无营业执照或个体工商执照的自然人，提供营业执照挂靠注册商标的服务。</dd>
	     	<dd>3、本系统目前暂不支持集体商标、证明商标、三维标志、颜色组合和声音商标的注册，不支持共同商标和优先权声明。</dd>
		</dl>
	</div>
</div>
<script type="text/javascript">
var TmId = '';
var IsProxy = '-1';
//var base=Number('600');
//var add =Number('60');
var oldNum=0;var oldNumset=0;//var parmser='';
var enameid=''; 
//上传图片

$(function(){
	//商品关键字搜索
	$(".search_btn").click(function(){
		var serveName = $("#sortName").val();
//		$(".type_list li").addClass("optional");
//		var u = encodeURIComponent('/kk_trademark/query/ti/selectAll?queryType=1&serveName'+serveName);
		if(serveName==''){
			$(".type_list li").addClass("optional");
		}else{
			$.ajax({
				type:"get",
	//			url:u,
				url:'/kk_trademark/query/ti/selectAll',
				data:{"queryType":1,"serveName":serveName},
				success:function(json){
					var data = json.data;
					$(".optional").prop("disabled",true);
					$(".optional").removeClass("optional");
					for(i=0;i<data.length;i++){
						$("a[id='"+data[i]+"']").closest("li").addClass("optional").prop("disabled",false);
					}
				},
				error:function(XMLhttprequest,textRequest){
					alert(XMLhttprequest.status);
					alert(textRequest);
				}
			});
		}
	})
	
	
})
</script>
<!-- /foot -->
<style>
.whdo{ text-align:center; margin-top:15px;font-size:12px;}
 .copywh a{color:#777;}
 .copywh a:hover{  color:#FF6E00;}
</style>
<footer class="footer">
	<div class="footer_center clearfix">
		<dl class="dl_l">
			<dt>关于我们</dt>
			<dd><a href="/about/us">公司简介</a></dd>
			<dd><a href="/about/ownreg">商标注册协议</a></dd>
			<dd><a href="/about/payag">商标支付协议 </a></dd>
			<dd><a href="/about/traderefusal">商标案件协议</a></dd>
		</dl>
		<dl class="dl_m">
			<dt>新手帮助</dt>
			<dd><a href="/faq/regtm">注册商标须知</a></dd>
			<dd><a href="/faq/howmuch">商标价格标准</a></dd>
			<dd><a href="/faq/howfp">发票申请流程</a></dd>
			<dd><a href="/faq/howlong">注册商标时限</a></dd>
		</dl>
		<dl class="dl_r">
			<dt>400-0044-400</dt>
		</dl>
	</div>
	<div class="whdo">
		<p class="copywh">
			<a href="http://www.miibeian.gov.cn" target="_blank" ></a>
			<a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=35020302000830" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;">
		 		<img src="http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Fbeian.png" style="float:left;"/></a><br>
			Copyright &copy; 
	</div>
</footer>
<!-- /foot -->
</body>
<script>
//商标费用计算

var A1={"num":0,"list":"","price":0,};A2={"num":0,"list":"","price":0,};
A3={"num":0,"list":"","price":0,};A4={"num":0,"list":"","price":0,};
A5={"num":0,"list":"","price":0,};A6={"num":0,"list":"","price":0,};
A7={"num":0,"list":"","price":0,};A8={"num":0,"list":"","price":0,};
A9={"num":0,"list":"","price":0,};A10={"num":0,"list":"","price":0,};
A11={"num":0,"list":"","price":0,};A12={"num":0,"list":"","price":0,};
A13={"num":0,"list":"","price":0,};A14={"num":0,"list":"","price":0,};
A15={"num":0,"list":"","price":0,};A16={"num":0,"list":"","price":0,};
A17={"num":0,"list":"","price":0,};A18={"num":0,"list":"","price":0,};
A19={"num":0,"list":"","price":0,};A20={"num":0,"list":"","price":0,};
A21={"num":0,"list":"","price":0,};A22={"num":0,"list":"","price":0,};
A23={"num":0,"list":"","price":0,};A24={"num":0,"list":"","price":0,};
A25={"num":0,"list":"","price":0,};A26={"num":0,"list":"","price":0,};
A27={"num":0,"list":"","price":0,};A28={"num":0,"list":"","price":0,};
A29={"num":0,"list":"","price":0,};A30={"num":0,"list":"","price":0,};
A31={"num":0,"list":"","price":0,};A32={"num":0,"list":"","price":0,};
A33={"num":0,"list":"","price":0,};A34={"num":0,"list":"","price":0,};
A35={"num":0,"list":"","price":0,};A36={"num":0,"list":"","price":0,};
A37={"num":0,"list":"","price":0,};A38={"num":0,"list":"","price":0,};
A39={"num":0,"list":"","price":0,};A40={"num":0,"list":"","price":0,};
A41={"num":0,"list":"","price":0,};A42={"num":0,"list":"","price":0,};
A43={"num":0,"list":"","price":0,};A44={"num":0,"list":"","price":0,};
A45= {"num":0,"list":"","price":0,};

var item =[A1,A2,A3,A4,A5,A6,A7,A8,A9,A10,A11,A12,A13,A14,A15,A16,A17,A18,A19,A20,A21,A22,A23,A2,A25,A26,A27,A28,A29,A30,A31,A32,A33,A34,A35,A36,A37,A38,A39,A40,A41,A42,A43,A44,A45];
for(i=0;i<45;i++){
	item[i].list = new Array;
}
function price(){
	var price = item[0].price+item[1].price+item[2].price+item[3].price+item[4].price+item[5].price+item[6].price
				+item[7].price+item[8].price+item[9].price+item[10].price+item[11].price+item[12].price
				+item[13].price+item[14].price+item[15].price+item[16].price+item[17].price+item[18].price
				+item[19].price+item[20].price+item[21].price+item[22].price+item[23].price+item[24].price
				+item[25].price+item[26].price+item[27].price+item[28].price+item[29].price+item[30].price
				+item[31].price+item[32].price+item[33].price+item[34].price+item[35].price+item[36].price
				+item[37].price+item[38].price+item[39].price+item[40].price+item[41].price+item[42].price
				+item[43].price+item[44].price;
	$(".sum_price").text("¥"+price);
}
$("#tmdp").click(function(){
	$("#stylenoe").hide();
	styleColour='';
})
$("#tmd").click(function(){
	$("#stylenoe").show();
})
var styleBlack,styleColour,entrust;//商标图标

$(function(){
	is_login();
	var staffCode = sessionStorage.getItem("staffCode");
	var token = sessionStorage.getItem("token");
	//判断登录填写商标名称
	if(is_login()){//已登录
		$("#TmName").removeAttr("readonly");
		$("#TmName").attr("placeholder","");
	}else{
		$("#TmName").attr("readonly");
		$("#TmName").attr("placeholder","为了您的商标安全，请先登录");
	}
	$(".type_list .optional").click(function(){
		if(!$(this).hasClass("selected")){
			$(".type_list li").removeClass("selected").addClass("optional");
			$(".list_sec").empty();
			var code = $(this).children("a").attr("id");
			var tit = $(this).text().substring(2);
			$(this).removeClass("optional").addClass("selected");
			$.ajax({
				type:'get',
				url:'/kk_trademark/query/ti/selectAll',
				data:{"queryType":0,"code":code},
				success:function(json){
					var data = json.data.data;
					$(".list_tit").text("第"+code+"类  "+tit);
					$(".list_tit").attr("id",code);
					for(i=1;i<data.length;i++){
						$(".list_sec").append(
							'<dt data-code="'+data[i].code+'">'
								+'<span class="icon"></span>'
								+'<a href="javascript:void(0);">'+data[i].code+' '+data[i].serveName+'</a>'
							+'</dt>'
						)
					}
					$(".list_sec dt").click(function(){
						var child_code = $(this).data("code");
					    var mythis = $(this);
					    if(!(mythis.next('dd')&&mythis.next('dd').css('display')=='block')){
							$.ajax({
								type:'get',
								url:'/kk_trademark/query/ti/selectAll',
								data:{"queryType":0,"code":child_code},
								success:function(json){
									var data = json.data.data;
									mythis.after(
										'<dd style="" id="'+child_code+'"><ul></ul></dd>'
									)
									for(j=1;j<data.length;j++){
										mythis.next("dd").children("ul").append(
											'<li>'
												+'<a href="javascript:void(0);" name="'+data[j].serveName.substring(5)+'" idm="'+data[j].code+'" data-tit="'+data[j].serveName+'">'+data[j].code+' '+data[j].serveName+'</a>'
											+'</li>'
										)
									}
									mythis.next("dd").children("ul").children("li").each(function(){
										var idm = $(this).children("a").attr("idm");
										if($(".class_info").find("a[id='"+idm+"']").length!=0){
											$(this).addClass("selected");
											$(this).parent("dd").prev("dt").addClass("cur");
										}
									})
									//选取类别商标计算费用
									$(".list_sec li").click(function(){
										if(!$(this).hasClass("selected")){
											var parent_id = $(".list_tit").attr("id");//大类的id（类别）
											item[parent_id-1].num++;
											
	//										alert(item[parent_id-1].num);
											if(item[parent_id-1].num<=10){
												item[parent_id-1].price=600;
											}
											if(item[parent_id-1].num>10){
												item[parent_id-1].price=600+60*(item[parent_id-1].num-10);
											}
											var type_title = $(".list_tit").text();
											var child_id = $(this).parent("ul").parent("dd").attr("id");
											var child_title = $(this).find("a").data("tit");
											var grandchild_id = $(this).find("a").attr("idm");
//											item[parent_id-1].list = new Array;
											item[parent_id-1].list.push(grandchild_id);
											console.log(item[parent_id-1]);
											
											//每次点击判断是否列表中已存在相同的大类
											//费用列表是否存在父li
											var is_existpid = $(".class_info").find("li[data-id='"+parent_id+"']").length;
											//费用列表是否存在子li
											var is_existcid = $(".info_a").find("div[data-childid='"+child_id+"']").length;							
											
											$(this).addClass("selected");
											price();
											if(is_existpid == 0){
												$(".class_info").append(
													'<li data-id="'+parent_id+'" class="optional">'
														+'<h3 class="clearfix">'
															+'<a href="javascript:void(0);" class="icon icon_delete"></a>'
															+'<span class="icon icon_drop"></span>'
															+'<span>'+type_title+'</span>'
															+'<span class="hit">(共<em id="ab23" style="color:red;">'+item[parent_id-1].num+'</em>项,10项以内<em style="color:red;">600</em>元</em>,10项以上每项加收<em style="color:red;">60</em>元)</span>'
														+'</h3>'
														+'<div class="info_a">'
															+'<div id="child_id'+child_id+'" data-childid='+child_id+'>'
																+'<span class="newlook" id="newlook2301">'+child_id+'</span>'
																+'<a href="javascript:void(0);"  id="'+grandchild_id+'">'
																	+'<input type="hidden" name="Tm[]" value="23,2301,230001vs纱,纱">'+child_title
																+'</a>'
															+'</div>'
														+'</div>'
													+'</li>'
												)
											}else if(is_existpid >0 && is_existcid == 0){//有父类，无子类
												$(".class_info").find("li[data-id='"+parent_id+"']").find("h3").find(".hit").empty().html(
													'(共<em id="ab23" style="color:red;">'+item[parent_id-1].num+'</em>项,10项以内<em style="color:red;">600</em>元</em>,10项以上每项加收<em style="color:red;">60</em>元)'
												)
												$(".class_info").find("li[data-id='"+parent_id+"']").find(".info_a").append(
													'<div id="child_id'+child_id+'" data-childid='+child_id+'>'
														+'<span class="newlook" id="newlook2301">'+child_id+'</span>'
														+'<a href="javascript:void(0);"  id="'+grandchild_id+'">'
															+'<input type="hidden" name="Tm[]" value="23,2301,230001vs纱,纱">'+child_title
														+'</a>'
													+'</div>'
												)
											}else if(is_existpid >0 && is_existcid > 0){//有父类有子类
												$(".class_info").find("li[data-id='"+parent_id+"']").find("h3").find(".hit").empty().html(
													'(共<em id="ab23" style="color:red;">'+item[parent_id-1].num+'</em>项,10项以内<em style="color:red;">600</em>元</em>,10项以上每项加收<em style="color:red;">60</em>元)'
												)
												$(".class_info").find("li[data-id='"+parent_id+"']").find(".info_a").find("div[data-childid='"+child_id+"']").append(
														'<a href="javascript:void(0);"  id="'+grandchild_id+'">'
															+'<input type="hidden" name="Tm[]" value="23,2301,230001vs纱,纱">'+child_title
														+'</a>'
												)
											}
											
											//费用列表删除列出项
											$(".info_a a").unbind('click').click(function(){
												//删除前label标记a所在父元素的位置
												var this_id = $(this).attr("id");
												var label = $(this).parent("div").data("childid");
												var pid = $(this).closest(".optional").data("id");
												item[pid-1].list.pop(this_id);
//												console.log(item[pid-1]);
												item[pid-1].num--;
												if(item[pid-1].num<=10){
													item[pid-1].price=600;
												}
												if(item[pid-1].num>10){
													item[pid-1].price=600+60*(item[pid-1].num-10);
												}
												$(this).remove();
												
												if($("div[data-childid='"+label+"']").find("a").length==0){
													var p_label = $("div[data-childid='"+label+"']").closest("li").data("id");
													$("div[data-childid='"+label+"']").parent(".info_a").empty();
													if($("li[data-id='"+p_label+"']").find(".info_a").find("div").length==0){
														$("li[data-id='"+p_label+"']").remove();
														$(".top_total em").text("¥0元");
													}
												}else{
													$("div[data-childid='"+label+"']").closest("li").find("h3").find(".hit").empty().html(
														'(共<em id="ab23" style="color:red;">'+item[pid-1].num+'</em>项,10项以内<em style="color:red;">600</em>元</em>,10项以上每项加收<em style="color:red;">60</em>元)'
													)
												}
												
												var id = $(this).attr("id");
												$(".list_main").find("a[idm='"+id+"']").parent("li").removeClass("selected");
												price();
											})
											//费用列表删除按钮
											$(".icon_delete").unbind('click').click(function(){
												var pid = $(this).closest(".optional").data("id");
//												alert(pid);
												item[pid-1].num=0;
												item[pid-1].price=0;
												item[pid-1].list= new Array;
												console.log(item[pid-1]);
												//删除前统计类别数目：大类和子类，删除remove后无法统计
												var p_num = $(".class_info").find("li").length;
												var c_num = $(".class_info").children(".info_a").find("div").length;
												var g_num = $(".class_info").find("a").length;
	//											var price = 
											
												var id = $(this).closest("li").data("id");
												$("h2[id='"+id+"']").next(".list_main").find(".selected").removeClass("selected");
												$(this).closest("li").remove();
												price();
											})
										}
									})
									
								},
								error:function(XMLHttpRequest,textRequest,errorThrown){
									alert(XMLHttpRequest.status);
									alert(textRequest);
									alert(errorThrown);
								}
							});
							if(mythis.next("dd").css('display')=='none'){
								mythis.removeClass("cur");
							}else{mythis.addClass("cur");}
						}else{
							mythis.next("dd").toggle();
							if(mythis.next("dd").css('display')=='none'){
								mythis.removeClass("cur");
							}else{mythis.addClass("cur");}
						}
					})
				},
				error:function(){
				}
			});
		}
	})
	var proposer;//获取申请人
	//选择声申请人
	$(".add_applicant").click(function(){
//		alert(staffCode);
		console.log(token);
		$.ajax({
			type:"get",
			url:"/kk_trademark/api/applicantManage/getApplicantInfo",
			data:{},
	    	beforeSend: function(request) {
                request.setRequestHeader("staffCode",staffCode);
                request.setRequestHeader("clientDigest",token);
            },
	    	success:function(json){
				var data = json.data;
				alert(data.length);
				if(data.length==0){
					alert("请先在“管理申请人”处添加申请人");
				}else{
					for(i=0;i<data.length;i++){
						$("#ApNames").append(
							'<option data-id="'+data[i].id+'">'+data[i].enterpriseName+'</option>'
						)
					}
				}
				$("#ApNames").show();
				
			},
			error:function(XMLHttpRequest,textStatus){
				alert(XMLHttpRequest.status);
				alert(textStatus);
			}
		});
		
	})
	//上传商标图样
	
	
//	if(enterpriseName!=''){
//		$("#ApNames").attr("type","text").val(enterpriseName).attr("readonly","readonly");
//		sessionStorage.setItem("enterpriseName","");
//	}
	//表单填写提示
	$("a").mouseover(function(){
		$(this).find(".explain_info").show();
	}).mouseout(function(){
		$(this).find(".explain_info").hide();
	})
	//黑白
	$("#secondImage").change(function(){
		$("#formFile1").ajaxSubmit({
	        type:'post',
	        url:'/kk_trademark/file/uploadFile',
	        success:function(data){
	        	type_img = data;
	        	console.log(type_img);
	        	$("#secondImageText").attr("src",data);
	        	styleBlack = data;
	        },
	        error:function(XMLHttpRequest,textStatus){
	        	alert(XMLHttpRequest.status);
	        	alert(textStatus);
	        }
	    });
	})
	//着色
	$("#threeImage").change(function(){
		$("#formFile2").ajaxSubmit({
	        type:'post',
	        url:'/kk_trademark/file/uploadFile',
	        success:function(data){
	        	type_img = data;
	        	$("#threeImageText").attr("src",data);
	        	console.log(type_img);
	        	styleColour = data;
	        },
	        error:function(XMLHttpRequest,textStatus){
	        	alert(XMLHttpRequest.status);
	        	alert(textStatus);
	        }
	    });
	})
	//委托书上传
	$("#firstImage").change(function(){
		$("#formFile3").ajaxSubmit({
	        type:'post',
	        url:'/kk_trademark/file/uploadFile',
	        success:function(data){
	        	type_img = data;
	        	$(".pattern").show();
	        	$("#firstImageText,#firstImageTexts").attr("src",data);
	        	console.log(type_img);
	        	entrust = data;
	        },
	        error:function(XMLHttpRequest,textStatus){
	        	alert(XMLHttpRequest.status);
	        	alert(textStatus);
	        }
	    });
	})
	//注册提交
	$("button[type='submit']").click(function(){
		proposer = $("#ApNames option:selected").data('id');
		alert(proposer);
		var trademarkName = $("#TmName").val();
		var trademarkType = $("input[type='radio']:checked").val();
		var treademarkCode = new Array;
		var sum_price = $(".sum_price").text().split("¥")[1];
		alert(sum_price);
		for(i=0;i<45;i++){
			if(item[i].list!=''){
				treademarkCode.push(item[i].list);
			}
		}
//		console.log(treademarkCode);
		var explains = $("#TmExplain").val();
		
		alert(staffCode);
//		alert(enterpriseName+','+trademarkName+','+trademarkType+','+styleBlack+','+styleColour+','+explains+','+entrust+','+sum_price+','+treademarkCode);
		$.ajax({
			type:'post',
			url:'/kk_trademark/api/order/add?type=1',
			data:{"type":1,"proposer":proposer,"trademarkName":trademarkName,"trademarkType":trademarkType,
			"styleBlack":styleBlack,"styleColour":styleColour,"explains":explains,"entrust":entrust,
			"contactPerson":"","phone":"","email":"","money":sum_price,"isForced":2,
			"payType":2,"treademarkCode":treademarkCode},
			beforeSend: function(request) {
		        request.setRequestHeader("staffCode",staffCode);
		        request.setRequestHeader("clientDigest",token);
		    },
		    success:function(json){
				alert("json.message："+json.message);
			},
			error:function(XMLhttprequest,textRequest){
				alert(XMLhttprequest.status);
				alert(textRequest);
			}
		})
	})
})

</script>
</html>