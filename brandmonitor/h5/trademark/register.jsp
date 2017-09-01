

<!DOCTYPE HTML>
<html>
<head>
<!-- <meta http-equiv='X-UA-Compatible' content='IE=8'> -->
<meta content="webkit" name="renderer">
<meta content="IE=edge" http-equiv="X-UA-Compatible">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>注册用户</title>
<meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no">
<meta name="format-detection" content="telephone=no">
<link type="text/css" rel="stylesheet"  href="/kk_trademark/resources/h5/trademark/css/register.css">
<link type="text/css" rel="stylesheet"  href="/kk_trademark/resources/h5/trademark/css/common.css">
<link rel="stylesheet" type="text/css" href="/kk_trademark/resources/h5/trademark/css/style1.css" />
<script src="/kk_trademark/resources/h5/trademark/js/jquery-1.9.0.min.js"></script>
<script src="/kk_trademark/resources/h5/trademark/js/is_login.js" /></script>
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
</style>
<body>
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
	<header class="header clearfix" style="z-index: 9991;">
		<div class="left" style="position: absolute;">
			<a href="javascript:void(0);">
            <span style="color:#ff8416;;font-size: 30px">BrandMonitor</span>
            <!-- <img src="http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Flogo.png" width="100" alt="商标注册平台www.tm.cn" title="商标注册平台www.tm.cn"/> -->
            </a>
		</div>
		<div class="right">
			<ul class="menu">
				<li><a href="http://test.micro80.com/">首页</a></li>
				<li><a href="/kk_trademark/h5/trademark/trademark_regist.jsp">商标注册</a></li>
				<li><a href="/kk_trademark/h5/trademark/search.jsp">商标查询</a></li>
				<li><a href="/kk_trademark/h5/trademark/sort.jsp">商标类别</a></li>
				
				<li class="my_trademark"><a href="/trademark/h/i/trademark/my">我的商标</a></li>
			</ul>
		</div>
	</header>
	<div class="container">
		<!--<div class="crumb">
			<span>当前位置：</span>
			<a href="javascript:void(0)">首页</a>
			>
			<a href="javascript:void(0)">注册用户</a>
		</div>-->
		<div class="com_steps mt15 com_steps_3" style="display: inline-block;">
			<ul class="steps_list clearfix">
				<li class="cur">
					<span class="left">
						<em>1</em>
						填写注册资料
					</span>
					<span class="right"></span>
				</li>
				<li>
					<span class="left">
						<em>2</em>
						手机校验验证码
					</span>
					<span class="right"></span>
				</li>
				<li class="last">
					<span class="left">
						<em>3</em>
						注册成功
					</span>
				</li>
			</ul>
		</div>
		
		<div class="member_box mt15">
            <h3 class="member_tit_orange">新用户注册</h3>
            <!--<form id="form1">-->
            <!--<input type="hidden" name="ecas_csrf_name" value="f459c1447e31bed1b0a88836552df3d2" />-->
            <div class="registbox content">
             <p class="warning" style="display:none"></p>
                
                <p id="MobileBlank">
                    <label for="Mobile">手机号码</label>
                    <input type="text" class="registtext" id="Mobile" name="Mobile" value="" maxlength="11">
                    <span class="min_tip min_tip_optional ">请输入手机号码(*必填)</span>
                </p>
                <p>
                    <label for="Email">邮箱</label>
                    <input type="text" class="registtext" id="Email" name="Email" value="">
                    <span class="min_tip   min_tip_optional">请填写您的真实邮箱(选填)</span>
                </p>
                <input type="hidden" id="MobileType" name="MobileType" class="text" value="1">
                <p class="width_auto">
                    <label for="Password">设置密码</label>
                    <input type="password" class="registtext" id="Password1" name="Password" onkeyup="javascript:if(checkLegalPwd(this.value)) pwStrengthBeta1(this.value);">
                    <span class="min_tip min_tip_optional">
                        安全等级：                    </span>
                   <span id="qiangdu" class="pwdsale"></span><span id="warning_words" style="color:#000;margin-left:-35px;"></span>
                </p>
                <p>
                    <label for="RePassword">确定密码</label>
                    <input type="password" class="registtext" id="RePassword" name="RePassword">
                    <span class="min_tip  min_tip_optional  ">
                    请再输入一次您的设置密码 
                        </span>
                </p>
                <p class="moreinfor">
                    <span style="padding-left: 15px;">+ 我要完善更多详细信息</span>
                     <input type="hidden" id="MoreinforType" name="MoreinforType" class="text" value="0"/>
                </p>
                <div id="moreinfor" style="display: none;">
                	<p id="PhoneBlank">
	                    <label for="PhoneA">电话号码</label>
	                    <input type="text" class="registtext faxs" id="PhoneA" name="PhoneA" value="" maxlength="4">
	                    <label class="line" for="Phone">-</label>
	                    <input type="text" class="registtext faxl" id="Phone" name="Phone" value="" maxlength="8">
	                    <label class="line" for="PhoneExt">-</label>
	                    <input type="text" class="registtext faxs" id="PhoneExt" name="PhoneExt" value="" maxlength="6">
	                    <span class="min_tip   min_tip_optional  "> 请输入电话号码</span>
	                </p>
                    <p>
                        <label for="ChCompanyName">公司名称</label>
                        <input type="text" class="registtext" id="ChCompanyName" name="ChCompanyName" value="">
                        <span class="min_tip 
                          min_tip_optional ">请输入正确的企业名称或个人姓名</span>
                    </p>
                    <p>
                        <label for="ChFirstName">真实姓名</label>
                        <input type="text" class="registtext short" id="ChFirstName" name="ChFirstName" value="">
                        <label for="ChLastName" class="line">-</label>
                        <input type="text" class="registtext short" id="ChLastName" name="ChLastName" value="">
                        <span class="min_tip min_tip_optional">
                    请输入您的<strong class="red">姓-名</strong> 
                        </span>
                    </p>
                    <p>
                        <label for="FaxA">传真号码</label>
                        <input type="text" class="registtext faxs" id="FaxA" name="FaxA" value="" maxlength="4">
                        <label class="line" for="Fax">-</label>
                        <input type="text" class="registtext faxl" id="Fax" name="Fax" value="" maxlength="8">
                        <label class="line" for="FaxExt">-</label>
                        <input type="text" class="registtext faxs" id="FaxExt" name="FaxExt" value="" maxlength="6">
                        <span class="min_tip min_tip_optional  ">
                    请输入正确的传真号码 <strong class="red">区号-号码-分机号</strong> 
                        </span>
                    </p>

                    <p class="conturybox">
                        <label for="Country">省份城市</label>
                        <span id="ChCountryForm">
                            <select id="Country" name="Country"  class="input">
                                <option value="0">中国</option>
                            </select>
                        </span>
                        <span id="ChProvinceAndCity">
                            <span id="ChPrivinceForm">
                                <select id="ChProvince" name="ChProvince">
                                	<option data-code="" id="">--请选择--</option>
                                </select>
                            </span>
                            <span id="ChCityForm">
                                <select id="ChCity" name="ChCity">
                                    <option class="city_select" id="">--请选择--</option>
                                </select>
                            </span>
                        </span>
                    <span class="min_tip en_province_city min_tip_optional " style="padding-left:25px;"></span>
                    </p>
                    <p>
                        <label for="ChStreet">详细地址</label>
                        <input type="text" class="registtext ltext" id="ChStreet" name="ChStreet" value="">
                        <span class="min_tip   min_tip_optional ">请填写您的详细地址，方便我们与您联系</span>
                    </p>
                    <p>
                        <label for="PostCode">邮政编码</label>
                        <input type="text" class="registtext" id="PostCode" name="PostCode" value="">
                        <span class="min_tip   min_tip_optional ">请填写您所在地区的邮政编码 </span>
                    </p>
                    <!--<p>
                        <label for="EngCompanyName">企业名称（拼音/英文）</label>
                        <input type="text" class="registtext" id="EngCompanyName" name="EngCompanyName" value="">
                        <span class="min_tip min_tip_optional ">根据您的中文描述系统自动翻译，如果不正确请您自行修改                        
                        </span>
                    </p>
                    <p>
                        <label for="EngFirstName">姓名（拼音/英文）</label>
                        <input type="text" class="registtext short" id="EngFirstName" name="EngFirstName" value="">
                        <label for="EngLastName" class="line">-</label>
                        <input type="text" class="registtext short" id="EngLastName" name="EngLastName" value="">
                        <span class="min_tip  min_tip_optional ">根据您的中文描述系统自动翻译，如果不正确请您自行修改</span>
                    </p>
                    <p>
                        <label for="EngProvince">地区（拼音/英文）</label>
                        <input type="text" class="registtext mshort" id="EngProvince" name="EngProvince" value="">
                        <input type="text" style="margin:0 0 0 8px;" class="registtext mshort" id="EngCity" name="EngCity" value="">
                        <span class="min_tip en_province_area   min_tip_optional ">根据您的中文描述系统自动翻译，如果不正确请您自行修改</span>
                    </p>
                    <p>
                        <label for="EngStreet">详细地址（拼音/英文）</label>
                        <input type="text" class="registtext ltext" id="EngStreet" name="EngStreet" value="">
                        <span class="min_tip  min_tip_optional ">根据您的中文描述系统自动翻译，如果不正确请您自行修改</span>
                    </p>-->
                </div>
                <p>
                    <label for="Captcha">验证问答</label>
                    <input type="text" class="registtext faxl" id="Captcha" name="captcha" value="">
                    <span style="float:left;height:28px;display:inline-block;line-height:28px;padding-left:20px;min-width:120px!important;">
                        <img src="/kk_trademark/getCertPic" id="CaptchaImg"  /><a id="CaptchaRefresh"  style="cursor:pointer;color:#0c73b7;margin-left:5px;">换一张</a>
                    </span>
                    <span class="min_tip min_tip_optional ">请输入正确的验证码</span>
                </p>
                <p class="xieyi">
                    <input type="checkbox" id="isCheck" name="isCheck" value="1">
                    <label for="isCheck" class="line">我已阅读并同意 <a href="javascript:void(0);" >《快快商标服务协议》</a>
                    </label>
                    <span id="warning" class="min_tip"></span>
                </p>
                
                <div class="btn_bor"><input id="regist_btn" type="button" class="com_btn orange_s" value="注册"></div>
            </div>
            <!--</form>-->
        </div>
        
        <!--
        	作者：13512743100@qq.co
        	时间：2016-10-08
        	描述：注册成功跳转邮箱
        -->
        <!--邮箱验证-->
        <div id="email_success" style="display: none;">
    		<!--注册成功，激活邮件已发送，请到相应邮箱激活！如果您长时间未收到邮件可以登录后请求重新发送.-->
    		<div class="main">
	    		<div class="notePage">
				    <div class="successIco">
				        <p>注册成功，激活邮件已发送，请到相应邮箱激活！如果您长时间未收到邮件可以<a href="https://my.ename.cn/cas/sso">登录</a>后请求重新发送 .</p>
				        <div><a href="/kk_trademark/h5/trademark/index.jsp" class="errorBtn">返回首页</a>
				            <a href="" class="successBtn">登录邮箱</a>        </div>
				    </div>
				    <div class="noteBottom">
				        <ul>
				            <li>域名门户平台<a href="htt://www.ename.cn">www.eName.cn</a></li>
				            <li>域名交易平台<a href="htt://www.ename.com">www.eName.com</a></li>
				            <li>域名管理平台<a href="htt://www.ename.net">www.eName.net</a></li>
				        </ul>
				    </div>
				</div>
			</div>
        </div>
        <!--手机验证-->
        <div id="phone_success" style="display: none;margin-bottom: 250px">
       		<h3 class="member_tit_orange">手机验证</h3>
        	<div class="mian" style="text-align: center;margin-top: 50px;">
        		
        		<input id="code" type="text" value="" style="width: 300px;height: 30px;padding:2px 8px;">
        		<!--<spna class="code_msg" style="margin-left: 10px;"></spna>-->
        		<input type="button" class="code_msg" style="margin-left: 10px;background-color: orange;border: none;color: white; padding: 8px 8px;border-radius: 2px;" value="重新发送验证码" /> 
        		<div class="btn_sure"><button>确认</button></div>
        	</div>
        </div>
        <!--注册成功-->
        <div id="regist_success" style="display: none;margin-bottom: 250px;">
        	<div class="mian" style="text-align: center;margin-top: 50px;margin-bottom: 50px;">
        		<span class="s_tit" style="margin-left: 10px;font: '微软雅黑';font-size: 16px;">注册成功，</span>
        		<span class="s_block"></span>
        	</div>
        </div>
	</div>
	<iframe frameborder="0" border="0" width="100%"  src="footer.jsp"  style="position: absolute;"></iframe>
</body>
<script src="/kk_trademark/resources/h5/trademark/js/regist.js"></script>
<!--<script src="/kk_trademark/resources/h5/trademark/js/province_city.js"></script>-->
<script src="/kk_trademark/resources/h5/trademark/js/md5.js"></script>
<script src="/kk_trademark/resources/h5/trademark/js/email.js"></script>
<script type="text/javascript" src="/kk_trademark/resources/h5/trademark/js/js_lang_ch.js"></script>
<script>
	
	$(function(){
		is_login();
		$("#CaptchaImg,#CaptchaRefresh").click(function(){
			var time = new Date().getTime();
			$("#CaptchaImg").attr("src","/kk_trademark/getCertPic?"+time);
		});
		
		$.ajax({
			type:"get",
			url:"/district/selectProvince",
			dataType:'json',
			success:function(json){
				for(i=0;i<json.length;i++){
					$("#ChProvince").append(
						'<option class="province" data-code="'+json[i].code+'" id="'+json[i].id+'">'+json[i].showName+'</option>'
					);
				}
				
				$("#ChPrivinceForm select").change(function(){
					var code = $(this).find("option:checked").data("code");
					$("#ChCity option").remove();
					$(".city_select").hide();
					$.ajax({
						type:"post",
						url:"/district/selectCity",
						data:{"pcode":code},
						async:true,
						success:function(json){
							for(j=0;j<json.length;j++){
								$("#ChCity").append(
									'<option id="'+json[j].id+'">'+json[j].showName+'</option>'
								)
							}
						},
						error:function(XMLHttpRequest,textStatus){
							console.log(textStatus);
						}
					});
				})
			},
			error:function(XMLHttpRequest,textStatus){
				console.log(textStatus);
			}
		});
		
		//注册信息获取
		$("#regist_btn").on('click',function(event){
			if($("#Mobile").val()==''){
				$("#Mobile").next().html(jsLang.please_enter_right_mobile);
				$("#Mobile").next().removeClass("min_tip_success min_tip_error min_tip_optional").addClass('min_tip_error');
			}
			
			if($("#Password1").val()==''||$("#RePassword").val==''){
				$("#RePassword").next().html(jsLang.enter_pwd);
				$("#RePassword").next().removeClass("min_tip_success min_tip_error min_tip_optional").addClass('min_tip_error');
			}
			if($("#captcha").val()==''){
				$("#captcha").nextAll('min_tip').html(jsLang.entry_right_verify_code);
				$("#captcha").nextAll('min_tip').removeClass("min_tip_success min_tip_error min_tip_optional").addClass('min_tip_error');
			}
			if (!$("#isCheck").is(':checked')) {
				$("#warning").addClass("min_tip_error");
				$("#warning").html(jsLang.register_notice2);
				return false;
			} else {
				var email = $("#Email").val();
				var phone = $("#Mobile").val();
				var tel = $("#PhoneA").val()+$("#Phone").val()+$("#PhoneExt").val();
				var pwd = $("#Password1").val();
				var company = $("#ChCompanyName").val();
				var name = $("#ChFirstName").val()+$("#ChLastName").val();
				var fax = $("#FaxA").val()+$("#Fax").val()+$("#FaxExt").val();
//				var country = $("#Country").attr("id");
				var province = $("#ChProvince option:selected").attr("id");
				var city = $("#ChCity option:selected").attr("id");
				var ChStreet = $("#ChStreet").val();
				var PostCode = $("#PostCode").val();
				var EngCompanyName = $("#EngCompanyName").val();
				var EngFirstName = $("#EngFirstName").val()+$("#EngLastName").val();
				var EngProvince = $("#EngProvince").val();
				var EngStreet = $("#EngStreet").val();
				
				var sign_str = ChStreet+EngStreet+city+company+EngCompanyName
				+email+fax+name+EngFirstName+phone
				+PostCode+province+pwd+EngProvince+tel+"GOyV3qmT)CR5!Gee'zAj@7W";
				var sign = hex_md5(sign_str).toUpperCase();
				console.log(sign);
//				alert(email);alert(phone);alert(tel);alert(pwd);alert(company);alert(name);//6
//				alert(fax);alert(province);alert(city);alert(ChStreet);alert(PostCode);alert(EngCompanyName);//7
//				alert(EngFirstName);alert(EngProvince);alert(EngStreet);//4
				var code = $("#Captcha").val();
				var staffCode;
				//用户名检测（是否已注册）
//				$.ajax({
//					type:'post',
//					url:'/kk_trademark/user/isUserExist',
//					data:{'staffCode':phone},
//					beforeSend: function(request) {
//		                request.setRequestHeader("sign",sign);
//		            },
//		            success:function(json){
//		            	if(json.code!=1){
//		            		alert(json.message);
//		            	}
//		            },
//		            error:function(XMLHttpRequest,textStatus){
//		            	alert(XMLHttpRequest.status);
//		            	alert(textStatus);
//		            }
//				})
				//注册
				$.ajax({
					type:"post",
					url:"/kk_trademark/validateCode",//验证  验证码
					data:{"code":code},
					success:function(json){
						$.ajax({
							type:"post",
							url:"/kk_trademark/user/userRegister",
							data:{"email":email,"phone":phone,"tel":tel,"pwd":pwd,"company":company,
							"name":name,"fax":fax,"province":province,"city":city,"address":ChStreet,
							"postcode":PostCode,"companyPhoneticize":EngCompanyName,"namePhoneticize":EngFirstName,
							"regionPhoneticize":EngProvince,"addressPhoneticize":EngStreet},
//							beforeSend: function(request) {
//				                request.setRequestHeader("sign",sign);
//				            },
							success:function(json){
								//转入手机验证
								if(json.code==1){
//									if(phone!=''){
										$(".member_box").hide();
										$("#phone_success").show();
										$(".steps_list").find("li").removeClass("cur");
										$(".steps_list").find("li").eq(0).find(".right").css("background-position","0 -80px")
										$(".steps_list").find("li").eq(1).addClass("cur");
									    var countdown=60; 
										settime(countdown);
										function settime(val) { 
											if (val == 0) { 
												$(".code_msg").removeAttr("disabled");    
												$(".code_msg").val("重新发送验证码"); 
												val = 60;
												$(".code_msg").click(function(){
													settime(val);
													$.ajax({
														type:'post',
														url:'/kk_trademark/sendConfirmCode',
														data:{"staffCode":phone},
														success:function(json){
															
														},
														error:function(XMLHttpRequest){
//															alert("发送验证码错误！");
//															alert(XMLHttpRequest.status);
														}
													})
												})
											} else { 
												$(".code_msg").attr("disabled", "disabled"); 
												$(".code_msg").val("重新发送(" + val + ")"); 
												val--; 
												setTimeout(function() { 
													settime(val)
												},1000) 
											} 
										} 
										//验证码时间倒计时
										staffCode = phone;
										//发送手机验证码
										$.ajax({
											type:'post',
											url:'/kk_trademark/sendConfirmCode',
											data:{"staffCode":staffCode},
											success:function(json){
												
											},
											error:function(XMLHttpRequest){
//												alert("发送验证码错误！");
//												alert(XMLHttpRequest.status);
											}
										})
										//确认手机验证
										$(".btn_sure button").click(function(){
											var code = $("#code").val();
											$.ajax({
												type:'post',
												url:'/kk_trademark/validateConfirmCode',
												data:{"staffCode":staffCode,"code":code},
												success:function(json){
													$("#phone_success").hide();
													$(".s_tit").show();
													$(".steps_list").find("li").removeClass("cur");
													$(".steps_list").find("li").eq(0).find(".right").css("background-position","0 0");
													$(".steps_list").find("li").eq(1).find(".right").css("background-position","0 -80px");
													$(".steps_list").find("li").eq(2).addClass("cur");
													var time=3; 
													settime(time);
													function settime(val) { 
														if (val == 0) { 
															$(".s_block").removeAttr("disabled");  
//															sessionStorage.setItem("staffCode",staffCode);
//															sessionStorage.setItem("token",token);
															window.location.href = '/kk_trademark/h5/trademark/index.jsp';
														} else { 
															$("#regist_success").show();
															$(".s_block").attr("disabled", "disabled"); 
															$(".s_block").text(val + "秒后跳转"); 
															val--; 
															setTimeout(function() { 
																settime(val);
															},1000) 
														} 
													}  
												},
												error:function(XMLHttpRequest,textStatus){
//													console.log(textStatus);
													alert("手机验证错误");
//													alert(XMLHttpRequest.status);
												}
											})
										})
								}else{
//									alert("注册发生错误！");
									alert(json.message);
								}
								
							},
							error:function(XMLHttpRequest,textStatus,errorThrown){
//								alert(XMLHttpRequest.status);
//								console.log(textStatus);
							},
						});
					},
					error:function(XMLHttpRequest,textStatus,errorThrown){
//					    alert(XMLHttpRequest.status);
//						console.log(textStatus);
					}
				})
			}
		})	
	});
</script>
</html>