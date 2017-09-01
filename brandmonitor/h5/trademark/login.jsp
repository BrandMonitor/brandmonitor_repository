
<!DOCTYPE HTML>
<html>
<head>
<!-- <meta http-equiv='X-UA-Compatible' content='IE=8'> -->
<meta content="webkit" name="renderer">
<meta content="IE=edge" http-equiv="X-UA-Compatible">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>登录</title>
<meta name="keywords" content="商标注册,注册商标,0元注册商标,免费注册商标,免费商标注册,免费商标">
<meta name="description" content="BrandMonitor专注于商标注册，为您提供商标自行注册，商标代持注册，流程简单，通过率高，0元手续费。">
<link rel="stylesheet" type="text/css" href="/kk_trademark/resources/h5/trademark/css/style1.css" />
<script src="http://ajax.microsoft.com/ajax/jquery/jquery-2.1.1.min.js" type="text/javascript"></script>
<script src="/kk_trademark/resources/h5/trademark/js/md5.js"></script>
</head>
<style>
	/** for login @20140221**/
body {font-size: 12px;}
/** header **/
.navigation {height: 65px;}
#logo_ename {background: url() no-repeat;width: 120px;height: 65px;}
.navigation h3 {color:#666;font-family: "微软雅黑";font-size: 24px;height:65px;line-height: 65px;vertical-align: middle;}
#logo_ename ,.navigation em ,.navigation h3 {float: left;}
.navigation em {height: 55px;line-height: 55px;border-left: 1px solid #dbdbdb;margin: 7px 24px 0 24px;}
/** 锛廻eader **/
.login_right {margin: 30px 50px 0 58px;_margin:30px 25px 0 58px;float: right;color: #afafaf;}
.login_right a {margin: 0 10px;}
.box_mid {background:#fff;margin: 10px 42px 0 48px; border: 8px solid #e7e7e7;border-radius: 10px;display: inline-block;height: 322px;}
.box_mid_border {border: 1px solid #d7d7d7;display: inline-block;}
.act_img {background: url(http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2FYZYW_login.png) no-repeat;width: 550px;height: 320px;}
.login_box {width: 230px;padding:25px 50px 0 60px;}
.login_box dl{*margin-top: 15px;}
.login_mid ,.login_mid_desc {display: block;width: 230px;}
.login_mid {position: relative;}
.login_mid label ,.login_mid input {float: none;display:block;}
.login_mid label {font-family: "瀹嬩綋"; margin-bottom: 5px;}
.login_mid_text {width:210px;height: 16px;line-height: 16px;padding:8px;margin-bottom: 15px;}
.login_mid_dl {background: url(../images/dl_bg0215.jpg) repeat-x;width: 100%; height: 32px;line-height: 32px;border: none;border-radius: 3px;cursor: pointer;color: #fff;font-size: 14px;font-weight: 700;margin-top: 15px;margin-bottom: 15px;text-align: center;}
.login_id {background: url(../images/user.jpg) no-repeat 8px 8px;border: 1px #c2c2c2 solid;}
.login_id_onfocus {background: none;}
.login_pass {background: url(../images/lock.jpg) no-repeat 8px 8px;border: 1px #c2c2c2 solid;}
.login_pass_onfocus {background: none;}
.error {position: absolute;background: url(../images/errorbg.png) no-repeat;_background: url(../images/errorbg.jpg) no-repeat;height: 30px;line-height: 24px;width: 158px;padding-left: 35px;}
#safecode {height: 24px;line-height: 24px;vertical-align: middle;position: relative;*margin-bottom: -10px;*margin-top:10px;}
#safecode label ,#safecode input ,#safecode img ,#safecode a {float: left;}
#safecode input {width: 50px;height: 16px;line-height:16px;padding:2px 0 2px 5px;margin: 0 10px;border: 1px #c2c2c2 solid;outline: 0 none;}
#safecode img {border:0 none;line-height: 16px;height:20px;padding: 2px 0 2px 0;}
#safecode a {margin-left: 3px;*margin-left: 5px;}
.login_mid_desc dd {float: left;display: block;padding: 10px 15px 0 0;color: #afafaf;}
.login_mid_desc dd a {padding-right: 10px;}
/** 鍒嗗壊绾�**/
.box_mid_bot {background: url(../images/box_mid_bot.jpg) center no-repeat;height: 65px;margin: 15px auto;}
</style>
<body>

<div class="container">
	<!-- nav -->
	<div class="navigation mt20">
		<a href="/kk_trademark/h5/trademark/index.jsp"><div id="logo_ename">
		<span style="color:#ff8416;;font-size: 30px">BrandMonitor</span>
		<!-- <img src="http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Flogo.png" width="100" alt="商标注册平台www.tm.cn" title="商标注册平台www.tm.cn"/> -->
		</div></a>
		<em></em>
		<h3>用户登录</h3>
	</div>
	<div class="login_right">
		<!--<a href="javascript:void(0);" title="忘记密码？">忘记密码？</a>|
		<a href="/kk_trademark/h5/trademark/register.jsp" title="立即注册">立即注册</a>-->
	</div>
	<div class="clear"></div>
	<div class="box_mid">
		<div class="box_mid_border">
				<div class="act_img left"  style="cursor:pointer"></div>
				
		<div class="login_box right">
		<form id="login" method="post" action="https://my.ename.cn/cas/./login/prelogin">
			<div class="login_mid">
			<div class="error" style="display:none"></div>
				<label for="UserName">手机号登录</label>
				<input type="text" class="login_mid_text login_id"  name="loginName" id="UserName" onkeydown="KeyDown()" />
				<label for="Password">密码</label>
				<input type="password" name="loginPwd" id="Password"   class="login_mid_text login_pass" onkeydown="KeyDown()" />
					<div id="safecode" class="safecode" style="display:none">
				<label for="captcha">验证问答</label>
					  <input type="text" name="captcha" id="Captcha"></input>
					  <img src="" onmouseup="RefreshImage()" alt="验证问答"  id="CaptchaImg" style="display:none" />
					  <a id="CaptchaRefresh" onclick="RefreshImage()" style="cursor:pointer;display:none">换一张</a>
				</div>
				<input style="background-color: #12A0ea;" name="btn_submit" value="登录" class="login_mid_dl" onclick="login();" type="button"></input>
				<input type="hidden" id="key" name="key" value="bPDZaT">
					<input type="hidden" id="sid" name="sid" value="12">
					<input type="hidden" id="backurl" name="backurl" value="http://www.tm.cn/">
					<input type="hidden" id="domainname" name="domainname" value="www.tm.cn">
			</div>
			<dl class="login_mid_desc">
				<!--<dt>使用合作网站账号登录</dt>-->
				<dd><a href="/kk_trademark/h5/trademark/forget_pwd.jsp">忘记密码?</a>|</dd>
				<dd><a href="/kk_trademark/h5/trademark/register.jsp">立即注册</a></dd>
				
			</dl>
			</form>
		</div>
		</div>
	</div>
	<div class="box_mid_bot"></div>

</div>

<iframe frameborder="0" border="0" width="100%"  src="footer.jsp" ></iframe>
</body>
<script>
	//键盘事件
	function KeyDown()
	{
	  if (event.keyCode == 13)
	  {
	    event.returnValue=false;
	    event.cancel = true;
	    login();
	  }
	}
	
	function login(){
		var staffCode = document.getElementById("UserName").value;
		var pwd = document.getElementById("Password").value;
		var sign_str =pwd+staffCode+"GOyV3qmT)CR5!Gee'zAj@7W";
		var sign = hex_md5(sign_str);
	    $.ajax({
	    	type:"get",
	    	url:'/kk_trademark/user/login',
	    	data:{"staffCode":staffCode,"pwd":pwd},
	    	beforeSend: function(request) {
	            request.setRequestHeader("sign",sign);
	        },
	    	success:function(json){
	  			console.log(json.code+json.message);
				
	    		sessionStorage.setItem("staffCode",staffCode);
	    		if(json.code==1){
	    			var token = json.message;
	    			sessionStorage.setItem("token",token);
	    			$(".login_box").hide();
		    		$(".staffCode").text(staffCode);
		    		$("#logining").show();
		    		$("#UserName").val('');
		    		$("#Password").val('');
		    		window.location = 'http://test.micro80.com/';
	    		}
	    		if(json.code==1001){//用户未确认
	    			$("#index_content").hide();
	    			$(".error_msg").show();
	    			alert("您未验证手机号！");
	    		}
	    		if(json.code==1002){//被禁用
	    			alert("用户被禁用！");
	    		}
	    		if(json.code==-10){//用户名密码错误
	    			alert("用户名密码错误");
	    		}
	    		if(json.code == -31){
	    			alert("用户名不存在！");
	    		}
	    	},
	    	error:function(XMLHttprequest,typeRequest,errorThrown){
	    		alert(errorThrown);
//	    		alert(XMLHttprequest.status);
//	    		alert(typeRequest);
	    	}
	    })
	};
</script>
</html>
