
<!DOCTYPE HTML>
<html>
<head>
<!-- <meta http-equiv='X-UA-Compatible' content='IE=8'> -->
<meta content="webkit" name="renderer">
<meta content="IE=edge" http-equiv="X-UA-Compatible">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>我的商标</title>
<meta name="keywords" content="商标分类查询,商标图形要素查询,商标查询,查询商标">
<meta name="description" content="BrandMonitor为您提供商标分类查询，可通过商标分类查询和图形要素查询，省时，省心，快速反馈准确结果。">
<link rel="stylesheet" type="text/css" href="/kk_trademark/resources/h5/trademark/css/style1.css" />
<script src="http://ajax.microsoft.com/ajax/jquery/jquery-2.1.1.min.js" type="text/javascript"></script>
<script type="text/javascript" src="/kk_trademark/resources/h5/trademark/js/is_login.js"></script>
<script src="/kk_trademark/resources/h5/trademark/js/md5.js"></script>
<link href="/kk_trademark/resources/admin/assets/css/font-awesome.min.css" rel="stylesheet">

<style>
	.close:before{content:"\f00d";display: inline;
    font-family: FontAwesome;
    font-size: 28px;color:white;}
</style>
</head>
<body><nav class="nav">
	<div class="topnav clearfix">
		<div class="left login_box clearfix" id="topleft"></div>
		<div class="right link_box" id="topright"></div>
	</div>
	<div class="headtop">
		<div class="row">
			<section>
				<div class="left login_box clearfix" id="login_box topleft">
					<form class="clearfix" id="qlform">
						<label>账号：</label>
						<input name="loginName" id="UserName" class="com_input member" placeholder="手机/邮箱" value="" type="text">
						<label>密码：</label>
						<input name="loginPwd" id="Password" class="com_input password" onkeydown="if(event.keyCode==13) jQuery('#quicklogin').click();" autocomplete="off" type="password">
						<input class="login_btn" style="margin:0 auto;height: 22px;margin-top: 3px;" value="登录" onclick="login();" id="quicklogin" type="button">
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
					</form>
				</div>
				<div class="left clearfix login_box" id="logining" style="color:#0f93d8;display: none;">您好！<span class="staffCode" style="margin: 0 10px;"></span><span class="exit" onclick="exit();">退出</span></div>
				<span><a href="/kk_trademark/h5/trademark/search.jsp">商标查询</a></span>
				<span>
					<img style="cursor:auto;width: 20px;" src="http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Fconnect_phone.png">
					<span style="cursor:auto;margin:0 auto;">客服热线：0755-86524997</span>
				</span>
			</section>
		</div>
	</div>
</nav>
<!-- /nav -->
<!-- header -->
<header class="header clearfix" style="z-index: 9991;">
	<div class="left">
		<a href="/">
		<span style="color:#ff8416;;font-size: 30px">BrandMonitor</span>
		<!-- <img src="http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Flogo.png" width="100" alt="商标注册平台www.tm.cn" title="商标注册平台www.tm.cn"/> -->
		</a>
	</div>
	<div class="right">
		<ul class="menu">
			<li><a href="/">首页</a></li>
			<li><a href="/kk_trademark/h5/trademark/trademark_regist.jsp">商标注册</a></li>
			<li><a href="/kk_trademark/h5/trademark/search.jsp">商标查询</a></li>
			<li><a href="/kk_trademark/h5/trademark/sort.jsp">商标类别</a></li>
			
			<li class="my_trademark"><a href="javascript:void(0);">我的商标</a></li>
		</ul>
	</div>
</header>
<!-- /header -->
<!-- container -->
<div class="container">
	<div class="com_tab mt20">
		<div class="com_tab_box">
			<ul>
				<li id="nav_mytm"><a href="javascript:void(0);">我的商标</a></li>
				<li id="nav_mytrade"><a href="/kk_trademark/h5/trademark/proposer.jsp">我的案件</a></li>		
				<li id="nav_aplist"><a href="/kk_trademark/h5/trademark/addaplt.jsp?type=1">申请人管理</a></li>
				<li id="nav_mycretifi" style="position:relative;" class="cur">
				   <a href="/kk_trademark/h5/trademark/certificate.jsp">证书管理</a>
				</li>	
				<li id="nav_invimf"><a href="javascript:void(0);">发票管理</a></li>
			</ul>  
		</div>			
	</div>
	
	<script>
	$(document).ready(function(){
		is_login();
		var staffCode = sessionStorage.getItem("staffCode");
		var token = sessionStorage.getItem("token");
	    if(staffCode==''||staffCode==null)//未登陆
	    {
	    	window.location = '/kk_trademark/h5/trademark/login.jsp'
	    }
	    
	})
	</script>	

	<div class="my_brand" style="margin:20px 0">
		
		<table width="100%" class="com_table">
			<colgroup>
				<col width="5%">
				<col width="10%">
				<col width="15%">
				<col width="15%">
				<col width="15%">
				<col width="15%">
				<col width="15%">	
			</colgroup>
			<thead>
				<tr>
					<th><input type="checkbox" value="1" id="checkAll" name="checkAll"></th>
					<th>商标图样</th>
					<th>商标名称</th>
					<th>商标类别</th>
					<th>商标状态</th>
					<th>是否支付</th>
					<th>子订单</th>
				</tr>
			</thead>
			
			<tbody id="tbodyid">
				<tr class="none_tm" style="display:none"><td colspan="8">暂无商标</td></tr>	
				
			</tbody>

		</table>
	</div>

	<!-- 查看订单信息 悬浮层-->
	<div class="order_detail" style="display:none;position: absolute;z-index: 9999;top:10px;padding-left:15%;padding-top: 150px;background-color: rgba(0,0,0,0.4);left: 0;padding-bottom: 350px;right: 0px;">
		<div class="close" style="position: absolute;right: 20px;top:50px"></div>
		<div style="background-color: #ececec;width: 80%;padding: 8px 0px">
			&nbsp;&nbsp;商标订单：<span class="order_name" data-id=""></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;共：<span class="order_price" margin-left:30px></span>&nbsp;元
		</div>
		<table width="80%" class="com_table">
			<colgroup>
				<col width="10%">
				<col width="15%">
				<col width="15%">
				<col width="15%">
			</colgroup>
			<thead>
				<tr>
					<th>子订单id</th>
					<th>子商标</th>
					<th>审核状态</th>
					<th>创建时间</th>
				</tr>
			</thead>
			<tbody style="background: white;">
				
			</tbody>
			
		</table>
	</div>
</div>
<!-- /container -->
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
			<a href="http://www.miibeian.gov.cn" target="_blank" > </a>
			<a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=35020302000830" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;">
		 		<img src="http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Fbeian.png" style="float:left;"/></a><br>
			Copyright &copy; 
	</div>
</footer>
<!-- /foot -->

</body>
</html>