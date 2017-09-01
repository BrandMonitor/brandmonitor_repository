
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
<script>
	var staffCode = sessionStorage.getItem("staffCode");
	var token = sessionStorage.getItem("token");
    if(staffCode==''||staffCode==null)//未登陆
    {
    	window.location = '/kk_trademark/h5/trademark/login.jsp';
    };
</script>
</head>
<body><div class="headtop">
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
			
			<li class="my_trademark"><a href="javascript:void(0);">我的商标</a></li>
		</ul>
	</div>
</header>
<!-- /header -->
<!-- container -->
<div class="container" style="margin-bottom: 250px;">
	<div class="com_tab mt20">
		<div class="com_tab_box">
			<ul>
				<li id="nav_mytm"><a href="/kk_trademark/h5/trademark/myTm.jsp">我的商标</a></li>
				<!--<li id="nav_mytrade"><a href="/kk_trademark/h5/trademark/proposer.jsp">我的案件</a></li>-->		
				<li id="nav_aplist" class="cur"><a href="javascript:void(0);">申请人管理</a></li>
				<!--<li id="nav_mycretifi" style="position:relative;">
				   <a href="javascript:void(0);">证书管理</a>
				</li>	-->
				<!--<li id="nav_invimf"><a href="javascript:void(0);">发票管理</a></li>-->
			</ul>
		</div>			
	</div>
	
	<script>
	$(document).ready(function(){
		is_login();
		var staffCode = sessionStorage.getItem("staffCode");
		var token = sessionStorage.getItem("token");
	    console.log(token);
	    //获取申请人信息
//	    alert(staffCode);
	    if(staffCode!=null){
	    	$.ajax({
		    	type:'get',
		    	url:'/kk_trademark/api/applicantManage/getApplicantInfo',
		    	data:{},
		    	beforeSend: function(request) {
	                request.setRequestHeader("staffCode",staffCode);
	                request.setRequestHeader("clientDigest",token);
	            },
		    	success:function(json){
					var data = json.data;
					if(data.length==0){
						$(".com_table tbody").append(
							"<tr><td colspan='5' nowrap>暂无数据</td></tr>"
						)
					}
					else{
						for(i=0;i<data.length;i++){
							if(data[i].status==1){
								var status = '待审核';
							}else if(data[i].status==2){var status = '审核通过';}
							else if(data[i].status==3){var status = '审核失败';}
							$(".com_table tbody").append(
								'<tr>'
									+'<td colspan='+1+' nowrap>'+data[i].templateName+'</td>'
									+'<td colspan='+1+' nowrap>'+data[i].enterpriseName+'</td>'
									+'<td colspan='+1+' nowrap>'+data[i].type+'</td>'
									+'<td colspan='+1+' nowrap>'+status+'</td>'
									+'<td colspan='+1+' nowrap></td>'
								+'</tr>'
							)
						}
					}
				},
				error:function(XMLhttprequest,textRequest){
//					alert(XMLhttprequest.status);
					console.log(textRequest);
				}
		    })
	    }
	    
	})
	</script>	<div class="applicant_box mt20">
		<form action='' method='post' id="myApForm">
			<table class="com_table" width="100%" id="list">
				<colgroup>
					<col width="30%">
					<col width="30%">
					<col width="15%">
					<col width="10%">
					<col width="15%">
				</colgroup>
				<thead>
					<tr>
						<th class="coco" style="text-align: center;"><span style="margin-left:16px;">模板名称</span></th>
						<th class="coco" style="text-align: center;">申请人</th>
						<th style="text-align: center;">类型</th>
						<th style="text-align: center;">状态</th>
						<th style="text-align: center;">操作</th>
					</tr>
				</thead>
				<tbody> 
					<!--<tr><td colspan='5' nowrap>暂无数据</td></tr>-->
					
				</tbody>
         			</table>
		</form>
		<div class="page_box clearfix">
			<div class="left">
				<input class="page_btn" type="button" value="添加申请人"  name="button" onclick="javascript:location.href='/kk_trademark/h5/trademark/addaplt.jsp?type=1';"/>
			</div>
			<div class="right page">
			</div>
		</div>
	</div>
</div>
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
</html>