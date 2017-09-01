
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

<script src="http://ajax.microsoft.com/ajax/jquery/jquery-2.1.1.min.js" type="text/javascript"></script>
<script type="text/javascript" src="/kk_trademark/resources/h5/trademark/js/is_login.js"></script>
<link rel="stylesheet" type="text/css" href="/kk_trademark/resources/h5/trademark/css/style1.css" />
<script src="/kk_trademark/resources/h5/trademark/js/md5.js"></script>
<script src="http://malsup.github.io/jquery.form.js"></script>
<style type="text/css">
/* select box */
.reg{
    cursor:pointer;background-color:#ffffff;position:relative;float:left;margin:0 10px 0 0;display:inline-block;
    border-radius:4px;
    -moz-border-radius:4px;
    -webkit-border-radius:4px;
    height: 40px;width: 100px;
}
.reg_active{
    border:solid 1px #3b88c4;
    border-radius:4px 4px 0 0;
    -moz-border-radius:4px 4px 0 0;
    -webkit-border-radius:4px 4px 0 0;
}
.reg *{color:#666666;/*font:normal 12px Song;*/cursor:pointer;background-color:#fff;}
.reg .opts{border:1px solid #3B88C4;cursor:pointer;display:none;height:auto;left:0;max-height:104px;overflow-x:hidden;overflow-y:auto;position:absolute;top:0;width:102px;z-index:99;}
.reg > .selected{
    padding:0 15px 0 5px;overflow:hidden;position:absolute;cursor:pointer;left:0;
    
    border-radius:4px;
    -moz-border-radius:4px;
    -webkit-border-radius:4px;
}
.reg .opts a{width:auth;height:24px;line-height:24px;padding:0 5px;cursor:default;outline:none;white-space:nowrap;text-decoration:none;display:block;cursor:pointer;}
.reg .opts a.selected{background:#ffffe1;}
.reg .opts a.none{background:#fff;}
.reg .opts a:hover{background:#ffffe1;cursor:pointer;}
.reg .reg_icon{width:4px;height:4px;overflow:hidden;position:absolute;cursor:pointer;right:4px;}
.reg .arrow{top:18px;right:10px;border-color:#989898 transparent transparent transparent;border-style:solid dashed dashed dashed;}
.reg_active .arrow{background-position:-27px -4px;  }

/* checkbox box */
.cb{width:13px;height:13px;display:inline-block;*display:inline;zoom:1;background-position:0 0;cursor:pointer;}
.cb_active{background-position:0 -13px;}

/* radio box */
.rb{width:13px;height:13px;margin:0 auto;padding:0;display:inline-block;*display:inline;zoom:1;vertical-align:middle;background-position:-13px 0;cursor:pointer;}
.rb_active{background-position:-13px -13px;}
.reg .icon{top:16px;right:10px;border-color:#989898 transparent transparent transparent;border-style:solid dashed dashed dashed;}
.reg .clearfix{z-index: 2;}

/* 上传图片显示样式 */
.imgupcs{margin:20px 0 0 10px;position:relative;}
.imgupcs a{position:absolute;top:0;left:0;display:block;width:65px;height:65px;background:url(../images/enlarge.png) no-repeat;filter: Alpha(opacity=40);opacity:0.4;}
.imgupcs_b{position:absolute;top:-655px;left:85px;border:10px solid #dedede;z-index:998;}

/* 上传图片显示样式first */
.fstimgupcs{margin:20px 0 0 10px;position:relative;}
.fstimgupcs a{position:absolute;top:0;left:0;display:block;width:65px;height:65px;background:url(../images/enlarge.png) no-repeat;filter: Alpha(opacity=40);opacity:0.4;}
.fstimgupcs_b{position:absolute;top:-655px;left:85px;border:10px solid #dedede;z-index:998;}

/* 上传图片显示样式second */
.scdimgupcs{margin:20px 0 0 10px;position:relative;}
.scdimgupcs a{position:absolute;top:0;left:0;display:block;width:65px;height:65px;background:url(../images/enlarge.png) no-repeat;filter: Alpha(opacity=40);opacity:0.4;}
.scdimgupcs_b{position:absolute;top:-655px;left:85px;border:10px solid #dedede;z-index:998;}
</style>
</head>
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
				<span style="cursor:auto;margin:0 auto;">客服热线：0755-8535-1234</span>
			</span>
		</section>
	</div>
</div>
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
			<li><a href="http://test.micro80.com/">首页</a></li>
			<li><a href="/kk_trademark/h5/trademark/trademark_regist.jsp">商标注册</a></li>
			<li><a href="/kk_trademark/h5/trademark/search.jsp">商标查询</a></li>
			<li><a href="/kk_trademark/h5/trademark/sort.jsp">商标类别</a></li>
			
			<li class="my_trademark"><a href="/kk_trademark/h5/trademark/proposer.jsp">我的商标</a></li>
		</ul>
	</div>
</header>
<!-- /header -->
<!-- container -->
<div class="container" style="margin-top:20px; margin-bottom:30px;">
	<div class="com_tab">
		<div class="com_tab_box">
			<ul>
				<li><a href="/kk_trademark/h5/trademark/myTm.jsp">我的商标</a></li>
				<!--<li><a href="javascript:void(0);">我的案件</a></li>-->
				<li><a href="/kk_trademark/h5/trademark/proposer.jsp">申请人管理</a></li>
				<li class="cur"><a href="/kk_trademark/h5/trademark/addaplt.jsp">添加申请人</a></li>
				<!--<li><a href="javascript:void(0);">证书管理</a></li>-->
				<!--<li><a href="javascript:void(0);">发票管理</a></li>-->
			</ul>
		</div>			
	</div>
	<!--企业申请人-->
	<div id="type1" class="bor_applicant" style="display:none;border:1px solid #e5e5e5;margin:auto;overflow:hidden;">
		<div class="reg_tab clearfix">
			<a href="/kk_trademark/h5/trademark/addaplt.jsp?type=1" class="tab1 cur" onfocus="this.blur()">企业</a>
			<a href="/kk_trademark/h5/trademark/addaplt.jsp?type=2" class="tab2" onfocus="this.blur()">个体工商户</a>
		</div>
			
		<div class="form form_applicant">
				<div class="hor">
					<span class="label">模板名称:</span>
				   <input id="MoName" name="MoName" type="text" class="input form_input" onfocus="noticeShow(this,'MoName','模板名称只作为区分多个申请人使用,不作为申报数据。')" onblur="noticeHideAndCheck(this,this.value,'MoName',0,200)" />
			 	   <span id="MoNameWarn"></span>
			 	   <span class="explain_info" style="width:295px;top:5px;left:638px;" id="MoNameShow"><span id="MoNameTitle"></span><span class="outsideb"></span><span class="insideb"></span></span>
			    </div>

				<div class="hor">
    				<span class="label">申请企业名称:</span> 
    				<input id="AName" name="AName" type="text" class="input form_input" onfocus="noticeShow(this,'AName','请填写企业营业执照上的名称')" onblur="asdf(this,this.value,'AName',0,200);"/>
					<span id="ANameWarn"></span>
					<span class="explain_info" style="width:200px;top:71px;left:638px;" id="ANameShow"><span id="ANameTitle"></span><span class="outsideb"></span><span class="insideb"></span></span>
    			</div>
				
				<div class="hor">
    				<span class="label">身份证号码:</span> 
    				<input id="idCard" name="idCard" type="text" class="input form_input" onfocus="noticeShow(this,'AName','请填写企业营业执照上的名称')" onblur="asdf(this,this.value,'AName',0,200);"/>
					<span id="idCardWarn"></span>
					<span class="explain_info" style="width:200px;top:71px;left:638px;" id="ANameShow"><span id="ANameTitle"></span><span class="outsideb"></span><span class="insideb"></span></span>
    			</div>
    			
    			<div class="hor">
    				<span class="label">营业执照行政区划:</span>
    				<div id="test1" class="regions clearfix" >
    					<div class="reg clearfix" id="ChPrivinceForm" name="province" type="selectbox">
    						<select id="ChProvince" name="ChProvince" class="selected" style="width: 100%;height: 100%; line-height: 30px;">
    							<option data-code="" id="">--请选择--</option>
    						</select>
    					<div style="display: none; width: 104px;" class="opts"></div>
    					
    						</div>
    	
    						<div class="reg clearfix" id="ChCityForm" name="city" type="selectbox">
    							<select id="ChCity" name="ChCity" class="selected" style="width:100%;height: 100%; line-height: 30px;">
	    							<option class="city_select"  data-code="" id="">--请选择--</option>
	    						</select>
    						<div style="display: none; width: 61px;" class="opts">
    						</div>
    						</div>
    	
    						<div class="reg clearfix" id="ChAreaForm" name="area" type="selectbox">
    							<select id="ChArea" class="selected" style="width:100%;height: 100%; line-height: 30px;">
	    							<option class="area_select" data-code="" id="">--请选择--</option>
	    						</select>
    						<div style="display: none; width: 61px;" class="opts">
    						<a href="javascript:void(0);" val="-1">请选择</a></div>
    						</div>
    					</div>
    				</div>

    				<div class="hor">
    					<span class="label">营业执照地址:</span>
    					<input id="IDAddress" name="IDAddress" type="text" class="input form_input" onfocus="noticeShow(this,'IDAddress','请严格依照营业执照地址填写(须加冠省份)')" onblur="noticeHideAndCheck(this,this.value,'IDAddress',0,200)" />
    					<span id="IDAddressWarn"></span>
    					<span class="explain_info" style="width:270px;top:206px;left:638px;" id="IDAddressShow"><span id="IDAddressTitle"></span><span class="outsideb"></span><span class="insideb"></span></span>
    					<input name="Aptitude" id="Aptitude" value="1" type="hidden">
    				</div>

    				<div class="hor">
    					<span class="label">邮政编码:</span>
    					<input id="PostCode" name="PostCode" type="text" class="input form_input" onblur="noticeHideAndCheck(this,this.value,'PostCode',0,200)" />
    					<span id="PostCodeWarn"></span>
    				</div>

    				<div class="hor">
    					<span class="label">联 系 人:</span>
    					<input id="Contacts" name="Contacts" type="text" class="input form_input" onblur="noticeHideAndCheck(this,this.value,'Contacts',0,200)" />
    					<span id="ContactsWarn"></span>
    				</div>

					<div class="hor">
						<span class="label">联系电话:</span>
						<input type="text" name="Phone" id="Phone" placeholder="请填写真实手机号码，方便接收办理进度"  class="input form_input" onblur="noticeHideAndCheck(this,this.value,'Phone',0,200)" />
					 	<span id="PhoneWarn"></span>
					</div>

					<div class="hor">
						<span class="label">联系邮箱:</span>
						<input id="Email" name="Email" type="text" class="input form_input" onblur="noticeHideAndCheck(this,this.value,'Email',0,200)" />
						<span id="EmailWarn"></span>
					</div>

					<div class="hor">
						<span class="label">邮寄地址:</span>
						<input id="MailingAddress" name="MailingAddress" type="text" class="input form_input" onblur="noticeHideAndCheck(this,this.value,'MailingAddress',0,200)" />
					 <span id="MailingAddressWarn"></span>
					</div>

					<div class="hor">
						<span class="label">营业执照副本复印盖公章:</span>
							<div class="position">
								<form id='formFile1' name='formFile' method="post" action="/kk_trademark/file/uploadFile" target='frameFile' enctype="multipart/form-data" >
									<a href="#" class="add"><img src="http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Fupload.jpg" width="67" height="30" alt="上 传"   /></a>
									<input type="file" class="add_file" name="mfile" id="firstImage"  hidefocus="hidefocus"/>
							 		<span class="min_tip min_tip_optional">复印件盖章后上传彩色扫描件，jpg格式、小于10M</span>
		
							 		<div class="imgupcs" style="display:none;" id="firsthide">
										<img class="pattern_l"  id="firstImageText" src="http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Floading.gif" width="65" height="65" alt="图例" />
										<a href="#"></a>
										<img style="display:none;" id="firstImageTexts" class="imgupcs_b" src="" width="550" height="700" alt="图例" />
										<img style="display:none;" id="firstImageTexts" class="pattern_b" src="" width="550" height="700" alt="图例" />
									</div>
		
									<script type="text/javascript">
										$(function(){
											$(".imgupcs a").mouseover(function(event){
												$(".imgupcs .imgupcs_b").show();
											}).mouseout(function(event) {
												$(".imgupcs .imgupcs_b").hide();
											});
										})
									</script>
								</form>
							</div>
						
						<input type="hidden" id="BusinessImg_test" name="BusinessImg_test" />
					</div>
					
					<div class="bor_btn">
						<button type="button" class="company_apply btn_blue total_btn" onClick="return validation(1)">保 存</button>
					</div>
		</div>
	</div>
	
	<!--个体工商户申请-->
	<div id="type2" class="bor_applicant" style="display:none;border:1px solid #e5e5e5;margin:auto;overflow:hidden;">
		<div class="reg_tab clearfix">
			<a href="/kk_trademark/h5/trademark/addaplt.jsp?type=1" class="tab1" onfocus="this.blur()">企业</a>
			<a href="/kk_trademark/h5/trademark/addaplt.jsp?type=2" class="tab2 cur" onfocus="this.blur()">个体工商户</a>
		</div>
			
		<div class="form form_applicant">
			
				<div class="hor">
					<span class="label">模板名称:</span>
				   <input id="MoName" name="MoName" type="text" class="input form_input" onblur="noticeHideAndCheck(this,this.value,'MoName2',0,200)" />
			 	   <span id="MoName2Warn"></span>
			 	   <span class="explain_info" style="width:295px;top:5px;left:638px;" id="MoNameShow"><span id="MoNameTitle"></span><span class="outsideb"></span><span class="insideb"></span></span>
			   </div>

				<div class="hor">
    				<span class="label">申请人名称:</span> 
    				<input id="AName" name="AName" type="text" class="input form_input" onfocus="noticeShow(this,'AName','请填写身份证上的名称')" onblur="asdf(this,this.value,'AName2',0,200);"/>
					<span id="AName2Warn"></span>
					<span class="explain_info" style="width:200px;top:71px;left:638px;" id="ANameShow"><span id="ANameTitle"></span><span class="outsideb"></span><span class="insideb"></span></span>
    			</div>

    			<div class="hor">
					<span class="label">身份证号：</span>
					<input type="text" name="IDNumber" id="IDNumber" class="input form_input" onfocus="noticeShow(this,'IDNumber','请填写正确的身份证号')" onblur="noticeHideAndCheck(this,this.value,'IDNumber2',0,200)" />
					 <span id="IDNumber2Warn"></span>
					 <span class="explain_info" style="width:190px;top:136px;left:638px;" id="IDNumberShow"><span id="IDNumberTitle"></span><span class="outsideb"></span><span class="insideb"></span></span>
				</div>
				
    			<div class="hor">
    				<span class="label">申请人行政区划:</span>
    				<div id="test1" class="regions clearfix" >
    					<div class="reg clearfix" id="PrivinceForm" name="province" type="selectbox">
    						<select id="Province" name="ChProvince" class="selected" style="width: 100%;height: 100%; line-height: 30px;">
    							<option data-code="" id="">--请选择--</option>
    						</select>
    					<div style="display: none; width: 104px;" class="opts"></div>
    					
    						</div>
    	
    						<div class="reg clearfix" id="CityForm" name="city" type="selectbox">
    							<select id="City" name="ChCity" class="selected" style="width:100%;height: 100%; line-height: 30px;">
	    							<option class="City_select"  data-code="" id="">--请选择--</option>
	    						</select>
    						<div style="display: none; width: 61px;" class="opts">
    						</div>
    						</div>
    	
    						<div class="reg clearfix" id="ChAreaForm" name="area" type="selectbox">
    							<select id="Area" class="selected" style="width:100%;height: 100%; line-height: 30px;">
	    							<option class="Area_select" data-code="" id="">--请选择--</option>
	    						</select>
    						<div style="display: none; width: 61px;" class="opts">
    						<a href="javascript:void(0);" val="-1">请选择</a></div>
    						</div>
    					</div>
    				</div>

    				<div class="hor">
    					<span class="label">身份证地址:</span>
    					<input id="IDAddress" name="IDAddress" type="text" class="input form_input" onfocus="noticeShow(this,'IDAddress','请严格依照身份证上地址填写')" onblur="noticeHideAndCheck(this,this.value,'IDAddress2',0,200)" />
    					<span id="IDAddress2Warn"></span>
    					<span class="explain_info" style="width:190px;top:273px;left:638px;" id="IDAddressShow"><span id="IDAddressTitle"></span><span class="outsideb"></span><span class="insideb"></span></span>
    					<input name="Aptitude" id="Aptitude" value="-1" type="hidden">
    				</div>

    				<div class="hor">
    					<span class="label">邮政编码:</span>
    					<input id="PostCode" name="PostCode" type="text" class="input form_input" onblur="noticeHideAndCheck(this,this.value,'PostCode2',0,200)" />
    					<span id="PostCode2Warn"></span>
    				</div>

    				<div class="hor">
    					<span class="label">联 系 人:</span>
    					<input id="Contacts" name="Contacts" type="text" class="input form_input" onblur="noticeHideAndCheck(this,this.value,'Contacts2',0,200)" />
    					<span id="Contacts2Warn"></span>
    				</div>

					<div class="hor">
						<span class="label">联系电话:</span>
						<input type="text" name="Phone" id="Phone" placeholder="请填写真实手机号码，方便接收办理进度"  class="input form_input" onblur="noticeHideAndCheck(this,this.value,'Phone',0,200)" />
					 	<span id="PhoneWarn"></span>
					</div>

					<div class="hor">
						<span class="label">联系邮箱:</span>
						<input id="Email" name="Email" type="text" class="input form_input" onblur="noticeHideAndCheck(this,this.value,'Email2',0,200)" />
						<span id="Email2Warn"></span>
					</div>

					<div class="hor">
						<span class="label">邮寄地址:</span>
						<input id="MailingAddress" name="MailingAddress" type="text" class="input form_input" onblur="noticeHideAndCheck(this,this.value,'MailingAddress2',0,200)" />
					 <span id="MailingAddress2Warn"></span>
					</div>

					<div class="hor">
						<span class="label">身份证正面复印签字：</span>
						<div class="position">
							<form id='formFile2' name='formFile' method="post" action="/kk_trademark/file/uploadFile" target='frameFile' enctype="multipart/form-data" >
							<a href="#" class="add"><img src="http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Fupload.jpg" width="67" height="30" alt="上 传"   /></a>
							<input type="file" class="add_file add_filefront" name="mfile" id="firstImage"  hidefocus="hidefocus"/>
					 		<span id="IDCardImg_testWarn" style="display:nonel;" class="min_tip min_tip_optional">正面签字后上传扫描件，小于10M</span>
						 	<div class="fstimgupcs_front" style="display:none;" id="firsthide">
								<img style="margin-top: 20px;" class="pattern_front"  id="firstImageText" src="" width="65" height="65" alt="图例" />
								
								<a href="#"></a>
								<!--<img style="display:none;" id="firstImageTexts" class="fstimgupcs_front" src="" width="550" height="700" alt="图例" />-->
							</div>
							</form>
						</div>
						<input type="hidden" name="IDCardImg_test" id="IDCardImg_test1"/>
					</div>
					
					<div class="hor">
						<span class="label">身份证反面复印签字：</span>
						<div class="position">
							<form id='formFile3' name='formFile' method="post" action="/kk_trademark/file/uploadFile" target='frameFile' enctype="multipart/form-data" >
							<a href="#" class="add"><img src="http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Fupload.jpg" width="67" height="30" alt="上 传"   /></a>
							<input type="file" class="add_file add_filereverse" name="mfile" id="firstImage"  hidefocus="hidefocus"/>
					 		<span id="IDCardImg_testWarn" style="display:nonel;" class="min_tip min_tip_optional">反面签字后上传扫描件，小于10M</span>
						 	<div class="fstimgupcs_reverse" style="display:none;" id="firsthide">
								<img style="margin-top: 20px;" class="pattern_reverse"  id="firstImageText" src="http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Floading.gif" width="65" height="65" alt="图例" />
								
								<a href="#"></a>
								<!--<img style="display:none;" id="firstImageTexts" class="fstimgupcs_reverse" src="" width="550" height="700" alt="图例" />-->
							</div>
							</form>
						</div>
						<input type="hidden" name="IDCardImg_test" id="IDCardImg_test1"/>
					</div>
					
					<div class="hor">
    					<span class="label">个体户执照复印签字：</span>
    					<div class="position">
    						<form id='formFile4' name='formFile' method="post" action="/kk_trademark/file/uploadFile" target='frameFile' enctype="multipart/form-data" >
    						<a href="#" class="add"><img src="http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Fupload.jpg" width="67" height="30" alt="上 传" /></a>
    						<input type="file" class="add_file add_file_business" name="mfile" id="secondImage"  hidefocus="hidefocus"/>
    						<span id="PersonImg_testWarn" style="display:nonel;" class="min_tip min_tip_optional">复印件签字后上传扫描件，小于10M</span>
    
    						<div class="scdimgupcs_business" style="display:none;" id="secondhide">
    							<img style="margin-top: 20px;" class="pattern_business"  id="secondImageText" src="http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Floading.gif" width="65" height="65" alt="图例" />
    							<a href="#"></a>
    							<!--<img style="display:none;" id="secondImageTexts" class="scdimgupcs_business" src="" width="550" height="700" alt="图例" />-->
    						</div>
    						</form>
    					 </div>
    					<input type="hidden" name="PersonImg_test" id="PersonImg_test" />
    				</div>
					
					<div class="bor_btn">
						<button type="button" class="person_apply btn_blue total_btn" >保 存</button>
					</div>
		</div>
	</div>
</div>
<script type="text/javascript" src='/kk_trademark/resources/h5/trademark/js/ajaxfileupload.js'></script>
<script type="text/javascript" src='/kk_trademark/resources/h5/trademark/js/fileinput.js'></script>
<script type="text/javascript" src='/kk_trademark/resources/h5/trademark/js/fileinput_locale_zh.js'></script>
<!--<script type="text/javascript" src='/kk_trademark/resources/h5/trademark/js/apreg.js'></script>-->
<script type="text/javascript" src='/kk_trademark/resources/h5/trademark/js/from_ck.js'></script>
<script>
var province = '',city = '',area = '';
</script>
<!-- /container -->
<!-- /foot -->
<style>
.whdo{ text-align:center; margin-top:15px;font-size:12px;}
 .copywh a{color:#777;}
 .copywh a:hover{  color:#FF6E00;}
</style>
<iframe frameborder="0" border="0" width="100%"  src="footer.jsp" ></iframe>
<!-- /foot -->

</body>
<script>
	$(function(){
		is_login();
		var u = window.location.search
		var type = u.split("=")[1];
		if(type==1){
			$("#type2").hide();
			$("#type1").show();
		}else{
			$("#type1").hide();
			$("#type2").show();
		}
		
		//省市
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
									'<option id="'+json[j].id+'" data-code="'+json[j].code+'">'+json[j].showName+'</option>'
								)
							}
//							$("#ChCityForm select").change(function(){
								var pcode = $("#ChCity").find("option:checked").data("code");
								$("#ChArea option").remove();
								$(".area_select").hide();
								$.ajax({
									type:"post",
									url:"/district/selectArea",
									data:{"pcode":pcode},
									async:true,
									success:function(json){
										for(k=0;k<json.length;k++){
											$("#ChArea").append(
												'<option id="'+json[k].id+'">'+json[k].showName+'</option>'
											)
										}
									},
									error:function(XMLHttpRequest,textStatus){
										console.log(textStatus);
									}
								});
//							})
						},
						error:function(XMLHttpRequest,textStatus){
							console.log(textStatus);
						}
					});
				})
				$("#ChCityForm select").change(function(){
					var pcode = $("#ChCity").find("option:checked").data("code");
					$("#ChArea option").remove();
					$(".area_select").hide();
					$.ajax({
						type:"post",
						url:"/district/selectArea",
						data:{"pcode":pcode},
						async:true,
						success:function(json){
							for(k=0;k<json.length;k++){
								$("#ChArea").append(
									'<option id="'+json[k].id+'">'+json[k].showName+'</option>'
								)
							}
						},
						error:function(XMLHttpRequest,textStatus){
							console.log(textStatus);
						}
					});
				});
			},
			error:function(XMLHttpRequest,textStatus){
				console.log(textStatus);
			}
		});
		//个体工商户省市
		$.ajax({
			type:"get",
			url:"/district/selectProvince",
			dataType:'json',
			success:function(json){
				for(i=0;i<json.length;i++){
					$("#Province").append(
						'<option class="province" data-code="'+json[i].code+'" id="'+json[i].id+'">'+json[i].showName+'</option>'
					);
				}
				
				$("#PrivinceForm select").change(function(){
					var code = $(this).find("option:checked").data("code");
					$("#City option").remove();
					$(".City_select").hide();
					$.ajax({
						type:"post",
						url:"/district/selectCity",
						data:{"pcode":code},
						async:true,
						success:function(json){
							for(j=0;j<json.length;j++){
								$("#City").append(
									'<option id="'+json[j].id+'" data-code="'+json[j].code+'">'+json[j].showName+'</option>'
								)
							}
//							$("#ChCityForm select").change(function(){
								var pcode = $("#City").find("option:checked").data("code");
								$("#Area option").remove();
								$(".Area_select").hide();
								$.ajax({
									type:"post",
									url:"/district/selectArea",
									data:{"pcode":pcode},
									async:true,
									success:function(json){
										for(k=0;k<json.length;k++){
											$("#Area").append(
												'<option id="'+json[k].id+'">'+json[k].showName+'</option>'
											)
										}
									},
									error:function(XMLHttpRequest,textStatus){
										alert(textStatus);
									}
								});
//							})
						},
						error:function(XMLHttpRequest,textStatus){
							console.log(textStatus);
						}
					});
				})
				$("#CityForm select").change(function(){
					var pcode = $("#City").find("option:checked").data("code");
					$("#Area option").remove();
					$(".Area_select").hide();
					$.ajax({
						type:"post",
						url:"/district/selectArea",
						data:{"pcode":pcode},
						async:true,
						success:function(json){
							for(k=0;k<json.length;k++){
								$("#Area").append(
									'<option id="'+json[k].id+'">'+json[k].showName+'</option>'
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
		var type1_img,type2_img1,type2_img2,type2_img3;
		//添加企业申请  上传图片
		$("#type1 .add_file").change(function(){
			$("#type1 .imgupcs").show();
			$("#type1 .pattern_l,#type1 .imgupcs_b,#type1 pattern_b").attr("src","http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Floading.gif");
			$("#formFile1").ajaxSubmit({
		        type:'post',
		        url:'/kk_trademark/file/uploadFile',
		        success:function(data){
		        	type1_img = data;
		        	console.log(type1_img);
		        	$("#type1 .pattern_l,#type1 .imgupcs_b,#type1 pattern_b").attr("src",data);
		        },
		        error:function(XMLHttpRequest,textStatus){
		        	console.log(XMLHttpRequest.status);
		        	console.log(textStatus);
		        }
		    });
		})
		//添加个体工商户  
		//身份证正面 上传图片
		$("#type2 .add_filefront").change(function(){
			$(".fstimgupcs_front").show();
			$("#type2 .pattern_front").attr("src","http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Floading.gif");
			$("#formFile2").ajaxSubmit({
		        type:'post',
		        url:'/kk_trademark/file/uploadFile',
		        success:function(data){
		        	type2_img = data;
		        	console.log(type2_img);
		        	$("#type2 .pattern_front").attr("src",data);
		        	
		        },
		        error:function(XMLHttpRequest,textStatus,errorThrown){
		        	console.log(XMLHttpRequest.status);
//		        	alert(textStatus);
		        	console.log(errorThrown);
		        }
		   });
		})
		//身份证反面
		$("#type2 .add_filereverse").change(function(){
			$(".fstimgupcs_reverse").show();
			$("#type2 .pattern_reverse").attr("src","http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Floading.gif");
			$("#formFile3").ajaxSubmit({
		        type:'post',
		        url:'/kk_trademark/file/uploadFile',
		        success:function(data){
		        	type3_img = data;
		        	console.log(type3_img);
		        	$("#type2 .pattern_reverse").attr("src",data);
		        	$(".fstimgupcs_reverse").show();
		        	
		        },
		        error:function(XMLHttpRequest,textStatus){
		        	console.log(XMLHttpRequest.status);
		        	console.log(textStatus);
		        }
		   });
		})
		//个体户执照
		$("#type2 .add_file_business").change(function(){
			$(".scdimgupcs_business").show();
			$("#type2 .pattern_business").attr("src","http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Floading.gif");
			$("#formFile4").ajaxSubmit({
		        type:'post',
		        url:'/kk_trademark/file/uploadFile',
		        success:function(data){
		        	type4_img = data;
		        	console.log(type4_img);
		        	$("#type2 .pattern_business").attr("src",data);
		        	$(".scdimgupcs_business").show();
		        },
		        error:function(XMLHttpRequest,textStatus){
		        	console.log(XMLHttpRequest.status);
		        	console.log(textStatus);
		        }
		   });
		})
		
		//添加申请人（企业）
		$("#type1 .company_apply").click(function(){
			var templateName = $("#type1 #MoName").val();
			var enterpriseName = $("#type1 #AName").val();
			var province = $("#type1 #ChProvince option:selected").attr("id");
			var city = $("#type1 #ChCity option:selected").attr("id");
			var district = $("#type1 #ChArea option:selected").attr("id");
			var idCard = $("#type1 #idCard").val();
			var address = $("#type1 #IDAddress").val();
			var postcode = $("#type1 #PostCode").val();
			var contactPerson = $("#type1 #Contacts").val();
			var phone = $("#type1 #Phone").val();
			var email = $("#type1 #Email").val();
			var mailingAddress = $("#type1 #MailingAddress").val();
			var businessLicenseUrl = $("#type1 #businessLicenseUrl").val();
			var staffCode = sessionStorage.getItem("staffCode");
			var token = sessionStorage.getItem("token");
			
			console.log(templateName+','+enterpriseName+','+province+','+city
				+','+district+','+idCard+','+address+','+postcode+','+contactPerson
			+','+phone+','+email+','+mailingAddress+','+staffCode+','+token+','+type1_img);
			$.ajax({
				type:'post',
				url:'/kk_trademark/api/applicantManage/add',
				data:{'type':1,'templateName':templateName,'enterpriseName':enterpriseName,
				'idCard':idCard,'province':province,'city':city,'district':district,
				'postcode':postcode,'address':address,'contactPerson':contactPerson,'phone':phone,'email':email,
				'mailingAddress':mailingAddress,'businessLicenseUrl':type1_img},
				beforeSend: function(request) {
	                request.setRequestHeader("staffCode",staffCode);
	                request.setRequestHeader("clientDigest",token);
	            },
				success:function(json){
//					alert("code:"+json.code+"json.message："+json.message);
					sessionStorage.setItem("enterpriseName",enterpriseName);
					alert("添加成功");
					window.location.href='/kk_trademark/h5/trademark/trademark_regist.jsp';
				},
				error:function(XMLhttprequest,textRequest){
					alert(XMLhttprequest.status);
					alert(textRequest);
				}
			})
		})
		//添加申请人（个体工商户）
		$("#type2 .person_apply").click(function(){
			var templateName = $("#type2 #MoName").val();
			var enterpriseName = $("#type2 #AName").val();
			var province = $("#type2 #Province option:selected").attr("id");
			var city = $("#type2 #City option:selected").attr("id");
			var district = $("#type2 #Area option:selected").attr("id");
			var idCard = $("#type2 #IDNumber").val();
			var address = $("#type2 #IDAddress").val();
			var postcode = $("#type2 #PostCode").val();
			var contactPerson = $("#type2 #Contacts").val();
			var phone = $("#type2 #Phone").val();
			var email = $("#type2 #Email").val();
			var mailingAddress = $("#type2 #MailingAddress").val();
			var businessLicenseUrl = $("#type1 #businessLicenseUrl").val();
			var idCardFrontUrl  = $("#type2 #idCardUrlFront").val();
			var idCardReverseUrl  = $("#type2 #idCardUrlReverse").val();
			var staffCode = sessionStorage.getItem("staffCode");
			var token = sessionStorage.getItem("token");
			console.log(templateName+','+enterpriseName+','+province+','+city
				+','+district+','+idCard+','+address+','+postcode+','+contactPerson
			+','+phone+','+email+','+mailingAddress+','+staffCode+','+token+','+type2_img
			+','+type3_img+','+type4_img);
			$.ajax({
				type:'post',
				url:'/kk_trademark/api/applicantManage/add',
				data:{'type':1,'templateName':templateName,'enterpriseName':enterpriseName,
				'idCard':idCard,'province':province,'city':city,'district':district,
				'postcode':postcode,"address":address,'contactPerson':contactPerson,'phone':phone,'email':email,
				'mailingAddress':mailingAddress,'businessLicenseUrl':type4_img,
				'idCardFrontUrl':type2_img,"idCardReverseUrl":type3_img},
				beforeSend: function(request) {
	                request.setRequestHeader("staffCode",staffCode);
	                request.setRequestHeader("clientDigest",token);
	            },
				success:function(json){
					sessionStorage.setItem("enterpriseName",enterpriseName);
					if(json.code==1){
						alert("添加成功");
						window.location.href='/kk_trademark/h5/trademark/trademark_regist.jsp';
					}
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