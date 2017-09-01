
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
					<input style="height: 17px;width: 82px;" name="loginName" id="UserName" class="com_input member" placeholder="手机/邮箱" value="" type="text">
					<label>密码：</label>
					<input style="height: 17px;width: 82px;" name="loginPwd" id="Password" class="com_input password" onkeydown="if(event.keyCode==13) jQuery('#quicklogin').click();" autocomplete="off" type="password">
					<input class="login_btn" style="margin:0 auto;" value="登录" onclick="login();" id="quicklogin" type="button">
						<a href="/kk_trademark/h5/trademark/register.jsp" class="c_blue">注册</a>
						<a href="/kk_trademark/h5/trademark/forget_pwd.jsp" class="c_blue">忘记密码</a>
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
			<span><a href="/kk_trademark/h5/trademark/search.jsp" class="c_blue">商标查询</a></span>
			<span>
				<img style="cursor:auto;width: 20px;" src="http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Fconnect_phone.png">
				<span style="cursor:auto;margin:0 auto;">客服热线：0755-86524997</span>
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

		<a href="javascript:void(0);">
		<span style="color:#ff8416;;font-size: 30px">BrandMonitor</span>
		<!-- <img src="http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Flogo.png" width="100" alt="商标注册平台www.tm.cn" title="商标注册平台www.tm.cn"/> -->
		</a>
	</div>
	<div class="right">
		<ul class="menu">
			<li><a href="http://test.micro80.com/">首页</a></li>
			<li class="cur"><a href="/kk_trademark/h5/trademark/trademark_regist.jsp">商标注册</a></li>
			<li><a href="/kk_trademark/h5/trademark/search.jsp">商标查询</a></li>
			<li><a href="/kk_trademark/h5/trademark/sort.jsp">商标类别</a></li>
			<li><a href="/kk_trademark/h5/trademark/proposer.jsp">我的商标</a></li>
		</ul>
	</div>
</header>
<!-- container -->
<div class="container" style="height: 500px;">
	<div class="bor">
		<div class="reg_tab clearfix">
			<a href="/kk_trademark/h5/trademark/trademark_regist.jsp" class="tab1 cur" >普通注册</a>
			<a href="/kk_trademark/h5/trademark/trademark_regist_proxy.jsp" class="tab2" >代持注册</a>
		</div>
		<div class="step">
			<ul class="clearfix">
				<li><span class="num">1</span><span class="txt">提交资料</span></li>
				<li><span class="num">2</span><span class="txt">审核资料</span></li>
				<li><span class="num">3</span><span class="txt">付款完成</span></li>
				<li class="cur"><span class="num">4</span><span class="txt">提交商标局</span></li>
			</ul>
		</div>
	
		<div class="form">
		    <h1 style="font-size: 24px;">已移交商标局进行审核</h1>
		    <!--<h1 style="font-size: 24px;">(可在"我的商标"中可以查看审核进度)</h1>-->
		</div>
	</div>
</div>
<!-- /foot -->
<style>
.whdo{ text-align:center; margin-top:15px;font-size:12px;}
 .copywh a{color:#777;}
 .copywh a:hover{color:#FF6E00;}
</style>
<iframe frameborder="0" border="0" width="100%"  src="footer.jsp" ></iframe>
<!-- /foot -->
</body>
<script>
	$(function(){
		is_login();
		
		var index = location.search.split("?")[1].split("=")[1];
		$.ajax({
			type:'get',
			url:'/kk_trademark/sys/order/getOrderInfo',
			data:{},
			beforeSend: function(request) {
                request.setRequestHeader("staffCode",staffCode);
                request.setRequestHeader("clientDigest",token);
            },
			success:function(json){
				var data = json.data;
				//每次进入填充钱清空表格
				$(".order_detail tbody").empty();
				//填充查看数据
				$(".order_detail tbody").append(
					'<tr>'
						+'<td><input type="checkbox" value="0" name="check"></td>'
						+'<td><img style="width: 80px;" src="'+data[i].styleBlack+'"></td>'
						+'<td>'+data[i].trademarkName+'</td>'
						+'<td>'+data[i].trademarkType+'</td>'
						+'<td>'+status+'</td>'
						+'<td>'+isPayment+'</td>'
						+'<td class="order_list"></td>'
					+'</tr>'
				);
				//append子订单商标ID
				for(j=0;j<data[i].orderRelate.length;j++){
					$(".order_detail tbody .order_list").append(
						'<span>'+data[i].orderRelate[j].trademarkCode+'，</span>'
					)
				}
			}
		})
	})
</script>
</html>