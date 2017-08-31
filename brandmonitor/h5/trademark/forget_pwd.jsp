
<!DOCTYPE html>
<html lang="zh-cn" class="no-js">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>注册用户</title>
<meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no">
<meta name="format-detection" content="telephone=no">
<link type="text/css" rel="stylesheet"  href="/kk_trademark/resources/h5/trademark/css/register.css">
<link type="text/css" rel="stylesheet"  href="/kk_trademark/resources/h5/trademark/css/common.css">
<link rel="stylesheet" type="text/css" href="/kk_trademark/resources/h5/trademark/css/style1.css" />
<script src="/kk_trademark/resources/h5/trademark/js/jquery-1.9.0.min.js"></script>
</head>
<style>
	/*导航栏*/
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
.info_table_box {
    overflow: hidden;
}
</style>
<body>
	<div class="headtop">
		<div class="row">
			<section>
				<div class="left login_box clearfix" id="login_box topleft">
					<form class="clearfix" id="qlform">
						<label>账号：</label>
						<input name="loginName" id="UserName" class="com_input member" placeholder="手机/邮箱" value="" type="text">
						<label>密码：</label>
						<input name="loginPwd" id="password" class="com_input password" onkeydown="if(event.keyCode==13) jQuery('#quicklogin').click();" autocomplete="off" type="password">
						<input class="login_btn" style="margin:0 auto;height: 22px;" value="登录" id="quicklogin" type="button">
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
							<!--<div id="login_error" class="login_tip" style="">
								<span class="outsideb"></span><span class="insideb"></span>
								<span id="errorLoginMsg">请输入EnameID/邮箱</span>
							</div>-->
					</form>
				</div>
				<div class="left clearfix login_box" id="logining" style="color:#0f93d8;display: none;">您好！<span class="staffCode" style="margin: 0;"></span><span class="exit">退出</span></div>
				<span><a href="/kk_trademark/h5/trademark/search.jsp">商标查询</a></span>
				<span>
					<img style="cursor:auto;width: 20px;" src="http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Fconnect_phone.png">
					<span style="cursor:auto;margin:0 auto;">客服热线：0755-8535-1234</span>
				</span>
			</section>
		</div>
	</div>
	<header class="header clearfix" style="z-index: 9991;">
		<div class="left" style="position: absolute;">
			<a href="javascript:void(0);"><img src="http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Flogo.png" width="120" alt="商标注册平台www.tm.cn" title="商标注册平台www.tm.cn"/></a>
		</div>
		<div class="right">
			<ul class="menu">
				<li><a href="http://www.kksb.com">首页</a></li>
				<li><a href="/kk_trademark/h5/trademark/trademark_regist.jsp">商标注册</a></li>
				<li><a href="/kk_trademark/h5/trademark/search.jsp">商标查询</a></li>
				<li><a href="/kk_trademark/h5/trademark/sort.jsp">商标类别</a></li>
				
				<li class="my_trademark"><a href="/trademark/h/i/trademark/my">我的商标</a></li>
			</ul>
		</div>
	</header>
	
	<div class="container">
	    
	    <div class="mt10 clearfix">
	        <div class="com_steps com_steps_3">
				<ul class="steps_list clearfix">
			      <li class="cur"><span class="left"><em>1</em>账号验证</span><span class="right"></span></li>
					<li><span class="left"><em>2</em>重置密码</span><span class="right"></span></li>
					<li class="last"><span class="left"><em></em></span></li>
				</ul>
		    </div>
		    <div class="crumb">
		        <span>当前位置：</span>  <a href="https://www.ename.net/">首页</a> &gt; <span>找回密码</span>
		    </div>
			<div id="step1" class="info_table_box mt15">
		  		<div style="display:none">
					<input type="hidden" name="emanage_csrf_name" value="2c3668df96a2e863364e7e4bbcc50ab0" />
				</div>			
				<div class="left ybd_sec" style="margin-top: 20px;">
					<h3 class="member_tit_orange">手机号验证</h3>
					<table width="100%">
						<tbody>
							<tr>
								<td class="align_right">手机号码</td>
								<td><input name="username" id="username" type="text" value="" class="com_input w_160 enameid_input" autocomplete="off"><span id="username_msg" class="min_tip_error_nobg min_tip"></span></td>
							</tr>
							<tr>
								<td class="align_right">验证码</td>
								<td>
									<input type="text" id="Captcha" value="" name="Captcha" class="com_input w_80 ">
									<input type="button" id="get_code" class="com_btn orange_s" value="获取验证码" />
									<span class="Captcha_msg" class="min_tip_error_nobg min_tip"></span>
								</td>
							</tr>
							<tr>
								<td class="align_right"></td>
							</tr>
							<tr>
								<td colspan="2">
									<div class="" id="OperateProtectMobileCode_msg">					    								    </div>
								</td>
							</tr>
							<tr>
								<td><td>
									<input type="submit" id="code_verify" class="com_btn orange_s " value="下一步" />
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			
			<!--step2-->
			<div id="step2" class="info_table_box mt15" style="display: none;">
		  		<div style="display:none">
					<input type="hidden" name="emanage_csrf_name" value="2c3668df96a2e863364e7e4bbcc50ab0" />
				</div>			
				<div class="left ybd_sec" style="margin-top: 20px;">
					<h3 class="member_tit_orange">重置密码</h3>
					<table width="100%">
						<tbody>
							<tr>
								<td class="align_right">输入新密码</td>
								<td><input name="username" id="first_pwd" type="password" value="" class="com_input w_160 enameid_input" autocomplete="off"><span id="firstpwd_msg" class="min_tip_error_nobg min_tip"></span></td>
							</tr>
							<tr>
								<td class="align_right">确认密码</td>
								<td>
									<input type="password" id="second_pwd" value="" name="Captcha" class="com_input w_80 ">
									
									<span style="color:red;display:none" id="pwd_error">* 两次密码不一致</span>
								</td>
							</tr>
							<tr>
								<td class="align_right"></td>
							</tr>
							<tr>
								<td colspan="2">
									<div class="" id="OperateProtectMobileCode_msg"></div>
								</td>
							</tr>
							<tr>
								<td><td>
									<input type="submit" id="confirm" class="com_btn orange_s " value="确认修改" />
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
	
	<iframe frameborder="0" border="0" width="100%"  src="footer.jsp" ></iframe>
</body>
<script src="/kk_trademark/resources/h5/trademark/js/regist.js"></script>
<!--<script src="/kk_trademark/resources/h5/trademark/js/province_city.js"></script>-->
<script src="/kk_trademark/resources/h5/trademark/js/md5.js"></script>
<script src="/kk_trademark/resources/h5/trademark/js/email.js"></script>
<script type="text/javascript" src="/kk_trademark/resources/h5/trademark/js/js_lang_ch.js"></script>
<script>
	$(function(){
		$("#get_code").click(function(){
			var staffCode = $("#username").val();
			var conut = 60;
			settime(conut)
			function settime(val) { 
				if (val == 0) { 
					$("#get_code").removeAttr("disabled");    
					$("#get_code").val("重新发送"); 
					val = 60;
					$("#get_code").click(function(){
						settime(val);
						$.ajax({
							type:'post',
							url:'/kk_trademark/sendConfirmCode',
							data:{"staffCode":staffCode},
							success:function(json){
								
							},
							error:function(XMLHttpRequest){
//								alert("发送验证码错误！");
//								alert(XMLHttpRequest.status);
							}
						})
					})
				} else { 
					$("#get_code").attr("disabled", "disabled"); 
					$("#get_code").val("重新发送(" + val + ")"); 
					val--; 
					setTimeout(function() { 
						settime(val)
					},1000) 
				} 
			};
			$.ajax({
				type:'post',
				url:'/kk_trademark/sendConfirmCode',
				data:{"staffCode":staffCode},
				success:function(json){
					
				},
				error:function(XMLHttpRequest){
//					alert("发送验证码错误！");
//					alert(XMLHttpRequest.status);
				}
			})
		});
		
		//点击下一步验证码验证
		$("#code_verify").click(function(){
			var staffCode = $("#username").val();
			var code = $("#Captcha").val();
			$.ajax({
				type:'post',
				url:'/kk_trademark/validateConfirmCode',
				data:{"staffCode":staffCode,"code":code},
				success:function(json){
					$(".steps_list").find("li").removeClass("cur");
					$(".steps_list").find("li").eq(0).find(".right").css("background-position","0 -80px");
					$(".steps_list").find("li").eq(1).addClass("cur");
					$("#step1").hide();
					$("#step2").show();
					$("#confirm").click(function(){
						var first_pwd = $("#first_pwd").val();
						var second_pwd = $("#second_pwd").val();
						if(first_pwd!=second_pwd){$("#pwd_error").show();}
						else{
							$.ajax({
								type:"post",
								url:"/kk_trademark/user/forgetPassword",
								data:{"staffCode":staffCode,"pwd":first_pwd},
								async:true,
								success:function(json){
									if(json.code==1){
										$("#pwd_error").hide();
										alert("密码修改成功");
										window.location.href = "http://www.kksb.com";
									}else{
										alert(json.message);
									}
								},
								error:function(XMLHttpRequest,textStatus){
									console.log(XMLHttpRequest.status);
									console.log(textStatus);
								}
							});
						}
					})
				},
				error:function(XMLHttpRequest,textStatus){
					console.log(XMLHttpRequest.status);
					console.log(textStatus);
				},
			})
		})
	})
</script>
</html>