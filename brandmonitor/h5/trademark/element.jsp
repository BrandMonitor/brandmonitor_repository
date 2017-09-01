
<!DOCTYPE HTML>
<html>
<head>
<!-- <meta http-equiv='X-UA-Compatible' content='IE=8'> -->
<meta content="webkit" name="renderer">
<meta content="IE=edge" http-equiv="X-UA-Compatible">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>商标分类查询，商标图形要素查询-BrandMonitor</title>
<meta name="keywords" content="商标分类查询,商标图形要素查询,商标查询,查询商标">
<meta name="description" content="BrandMonitor为您提供商标分类查询，可通过商标分类查询和图形要素查询，省时，省心，快速反馈准确结果。">
<link rel="stylesheet" type="text/css" href="/kk_trademark/resources/h5/trademark/css/style1.css" />
<script src="http://ajax.microsoft.com/ajax/jquery/jquery-2.1.1.min.js" type="text/javascript"></script>
<script type="text/javascript" src="/kk_trademark/resources/h5/trademark/js/is_login.js"></script>
<script src="/kk_trademark/resources/h5/trademark/js/md5.js"></script>
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
				<span style="cursor:auto;margin:0 auto;">客服热线：0755-8535-1234</span>
			</span>
		</section>
	</div>
</div>
<!-- /nav -->
<!-- header -->
<header class="header clearfix" style="z-index: 9991;">
	<div class="left">
		<!--<a href="/"><img src="/images/pic/logo.jpg" height="43" width="125" alt="BrandMonitor" /></a>
		<span class="min_logo">    
			<img src="/images/pic/min_logo.jpg" height="27" width="81" alt="商标注册平台www.tm.cn" />
		</span>-->   

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
			<li class="cur"><a href="/kk_trademark/h5/trademark/sort.jsp">商标类别</a></li>
			
			<li><a href="/kk_trademark/h5/trademark/proposer.jsp">我的商标</a></li>
		</ul>
	</div>
</header>
<!-- /header -->
<!-- container -->
<div class="container bor" style="height:500px">
	<div class="search_main clearfix w_550">
		<h3 class="ser_tit">《2016版类似商品和服务区分表》</h3>
		<ul class="tab_list clearfix" style="padding-left: 30%;">
			<li><a href="/kk_trademark/h5/trademark/sort.jsp">商标分类查询</a></li>
			<li class="cur"><a href="javascript:void(0);">图形要素查询</a></li>
		<!--</ul>
		<div class="ser_form">
			<form >
				<input type="text" value="输入图形要素中文" class="com_input ser_input" name="name" id="name"/>
				<button type="button" class="btn_orange" onclick="doSub(this)">查 询</button>
			</form>
		</div>-->
	</div>
	<div class="sbfl_box">
		<div class="sbfl_tip" style="display: none;">
			您搜索的
			<span class="c_red"></span>结果如下:
		</div>
		<img style="margin-top: 20px;margin-left: 50%;" id="loading" src="http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Floading.gif">
		<ul class="result_list_ul" style="display: none;">
		</ul>
	</div>
</div>
<script>
init();
$(function(){
	is_login();
})
	
function init(){
	$.ajax({
		type:"post",
		url:"/kk_trademark/query/ti/selectgraphic",
		timeout:8000,
		success:function(json){
			var data = json.data;
			for(i=0;i<data.length;i++){
				$(".result_list_ul").append(
					'<li class="first_level">'
						+'<a href="javascript:void(0)" class="trigger blod hide">'+data[i].code+data[i].serveName+'</a>'
						+'<ul class="first_level_ul" id="'+i+'"></ul>'
					+'</li>'
				)
				var graphics = data[i].graphics;
				for(j=0;j<graphics.length;j++){
					
					$("#"+i).append(
						'<li class="second_level">'
							+'<a href="javascript:void(0)" class="trigger blod hide">'+graphics[j].code+graphics[j].serveName+'</a>'
							+'<ul class="second_level_ul" id="child'+i+j+'"></ul>'//加上i标识，每一级里边都有j从0开始循环，会重复
						+'</li>'
					)
					var child_graphics = graphics[j].graphics;
					for(k=0;k<child_graphics.length;k++){
						$("#child"+i+j).append(
							'<li data="'+child_graphics[k].code+'">'+child_graphics[k].code+child_graphics[k].serveName+'</li>'
						)
					}
				}
			}
			//展开判断	
			$(".trigger").click(function(){
				if($(this).attr("class").indexOf("hide") > 0){
					$(this).next().addClass("block").siblings().removeClass("block");
					$(this).addClass("show").removeClass("hide");
				}else{
					$(this).next().removeClass("block");
					$(this).addClass("hide").removeClass("show");
				}
			});
			
			//加载完执行
			$("#loading").hide();
			$(".container").css("height","auto");
			$(".result_list_ul").show();
		},
		error:function(XMLHttpRequest,status){
			if(status=='timeout'){
				alert("网络超时！请稍后重试");
			}
		}
	});
}	

function doSub(obj)
{
	value = $('#name').val();
	value = value == '输入图形要素中文' ? '' : value;
	re = new RegExp("^[\u4e00-\u9fa5A-Za-z0-9.\\s]{0,50}$");
	if(!re.test(value))
	{
		alert('请输入正确的图形要素中文(0-50字符)');
		return false;
	}
//	$(obj).parent().submit();
	$(".sbfl_tip").show();
	$(".sbfl_tip .c_red").text(value);
	$(".result_list_ul").empty();
	if(value==''){$(".sbfl_tip").hide();init();}
	else{
		$.ajax({
			type:"post",
			url:"/kk_trademark/query/ti/selectgraphic",
			data:{"serveName":value},
			success:function(json){
				var data = json.data;
				for(i=0;i<data.length;i++){
					$(".result_list_ul").append(
						'<li class="first_level">'
							+'<a href="javascript:void(0)" class="trigger blod hide">'+data[i].code+data[i].serveName+'</a>'
							+'<ul class="first_level_ul" id="'+i+'"></ul>'
						+'</li>'
					)
					var graphics = data[i].graphics;
					for(j=0;j<graphics.length;j++){
						
						$("#"+i).append(
							'<li class="second_level">'
								+'<a href="javascript:void(0)" class="trigger blod hide">'+graphics[j].code+graphics[j].serveName+'</a>'
								+'<ul class="second_level_ul" id="child'+i+j+'"></ul>'//加上i标识，每一级里边都有j从0开始循环，会重复
							+'</li>'
						)
						var child_graphics = graphics[j].graphics;
						for(k=0;k<child_graphics.length;k++){
							$("#child"+i+j).append(
								'<li data="'+child_graphics[k].code+'">'+child_graphics[k].code+child_graphics[k].serveName+'</li>'
							)
						}
					}
				}
				//展开判断	
				$(".trigger").click(function(){
					if($(this).attr("class").indexOf("hide") > 0){
						$(this).next().addClass("block").siblings().removeClass("block");
						$(this).addClass("show").removeClass("hide");
					}else{
						$(this).next().removeClass("block");
						$(this).addClass("hide").removeClass("show");
					}
				});
			},
			error:function(XMLHttpRequest,textStatus){
				alert(XMLHttpRequest.status);
				alert(textStatus);
			}
		});
	}
}
$('.ser_input').bind({
	focus:function(){
		defaultV = this.defaultValue;
		if (this.value == defaultV && defaultV == '输入图形要素中文'){ 
			this.value = ""; 
		} 
	}, 
	blur:function(){ 
		if (this.value == ""){
			this.value = '输入图形要素中文'; 
		} 
	} 
});
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

<!--<script>
$(document).ready(function(){
    $("#coss").hover(function(){
    $(".wx_drop").show();
    },function(){
    	$(".wx_drop").hide();
    });
});
</script>-->

</body>
</html>