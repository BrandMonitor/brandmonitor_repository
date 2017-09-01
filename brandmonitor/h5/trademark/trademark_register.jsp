
<!DOCTYPE html>
<html lang="zh-cn" class="no-js">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>BrandMonitor</title>
<meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no">
<meta name="format-detection" content="telephone=no">
<link type="text/css" rel="stylesheet"  href="/kk_trademark/resources/h5/trademark/css/register.css">
<link type="text/css" rel="stylesheet"  href="/kk_trademark/resources/h5/trademark/css/style.css" />
<script src="http://ajax.microsoft.com/ajax/jquery/jquery-2.1.1.min.js"></script>
<!--%
String trademark = new String(request.getParameter("trademark").getBytes("iso8859-1"),"utf-8");
%-->
<style>
	.main{background-color: #f5f5f5;font-family: "微软雅黑";padding-bottom:30px;}
	.info{height:100%;background-color: white;width: 50%;margin: 0 auto;}
	.info p{margin: 10px auto;}
	.info div{padding-left: 20%;height: 100%;padding-top:30px;padding-bottom:20px;}
	.warning{color:#646464;font-size: 14px;width: 540px;margin:0 auto;text-align: justify}
	.warning ul li{font-size: 14px;width: 540px;margin:10px auto;}
	.warning1{background-color: #82af6f !important;}
	.warning2{background-color: #f89406 !important;}
	.warning3{background-color: #d15b47 !important;}
	.badge{display: inline-block;padding: 3px 5px;font-size: 12px;
	    font-weight: bold;line-height: 1;color: #fff;text-align: center;
	    white-space: nowrap;vertical-align: baseline;
	    background-color: #999;border-radius: 10px;
	}
	.tip{text-align: center;padding-bottom:20px;}
	.tip h1{font-weight:bold;margin:0 auto;width:550px;padding-top:30px;padding-bottom:5px;border-bottom:1px solid #82af6f;}
	.title{font-size: 18px;color:#3c3c3c;height: 48px;border-bottom: 1px solid #f0f1f1;line-height: 48px;font-size: 18px;font-weight: bold;padding-left: 15px;}
	.inter-title{color:#646464;font-size:14px;}
	.u-txo-angent {width: 170px;height: 32px;margin-right: 10px;line-height: 32px;text-align: right;vertical-align: top;}
	.txt{height: 32px;line-height: 32px;border-width: 0;
    border: solid 1px #e7e7e7;font-size: 14px;outline: 0;
    width: 180px;padding-left: 5px;font-family: "微软雅黑";}
    .alert1,.alert2,.alert3,.alert4{display:none;color: #ff6d00; margin-left: 5px;font-size: 12px;}
    .alert31,.alert41{display:none;color: #ff0000; margin-left: 5px;font-size: 12px;}
    .button{padding: 10px 20px;background-color: #7ecef4;color: white;}
    textarea{width: 400px;height: 200px;padding: 5px;
    vertical-align: top;font-size: 12px;}
    .textarea{width: 421px;height: 139px;border: 1px solid #e1e1e1;outline: none;}
    .success{padding:30px 20px;background-color:orange;color:white;font-size:26px;}
    #success{padding-bottom:20px;}
</style>
</head>
<body>
	
	<div class="trademark" style="display:none"><%=trademark%></div>
	<!--<div class="header" style="width: 60%">
		<img style="margin-left: 0;" src="http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Flogo.png" class="logo" alt="" />
	</div>-->
	<div class="headtop">
		<div class="row">
			<section>
				<span><a>登录 </a></span>|
				<span><a>注册</a></span>
				<span><a>商标查询</a></span>
				<span><a>帮助中心</a></span>
				<span>
					<img style="width: 20px;margin-right: 3px;margin-bottom: -4px;" src="http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Fconnect_phone.png">
					<a>全国客服热线：0755-8535-1234</a>
				</span>
			</section>
		</div>
	</div>
	<header style="display: flex;display: -webkit-flex;">
		<img class="logo" src="http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Flogo.png" />
		<nav>
			<ul class="leader">
				<li><a style="color:orange;border-bottom:1px solid orange;padding-bottom:5px;" href="#">首页</a></li>
				<li class="hover"><a href="#">商标注册</a></li>
				<li class="hover"><a href="#">商标查询</a></li>
				<li class="hover"><a href="#">商标类型</a></li>
				<li class="hover"><a href="#">商标案件</a></li>
				<li class="loginnow"><a href="#">立即登录</a></li>
			</ul>
		</nav>
	</header>
	<div class="main">
		<section class="tip">
			<h1 style="color:#82af6f;font-size: 30px;">商标注册</h1>
			<div class="warning">
				<ul>
					<li><span class="badge warning1">1</span>&nbsp;&nbsp;未经核准注册的商标，请谨慎使用，谨防侵权。</li>
					<li><span class="badge warning2">2</span>&nbsp;&nbsp;商标注册有风险，注册前请做风险排查及分析，提高注册成功率。</li>
					<li><span class="badge warning3">3</span>&nbsp;&nbsp;商标查询及审查过程存在不确定因素，查询结果不包含3-6个月未公开的数据。</li>
				</ul>
			</div>
		</section>
		
		<section class="info">
			<p style="text-align: left" class="title">商标注册</p>
			<div class="info_submit">
				<p>
					<span class="inter-title u-txo-angent">商标名称 :</span>
					<span>
						<input type="text" class="input1 txt"/>
						<span class="inter-title alert1 ">* 商标名不能为空</span>
					</span>
				</p>
				<p>
					<span class="inter-title u-txo-angent">您的姓名 :</span>
					<span>
						<input type="text" class="input2 txt" placeholder="请填入您的姓名或称呼"/>
						<span class="inter-title alert2">* 姓名不能为空</span>
					</span>
				</p>
				<p>
					<span class="inter-title u-txo-angent">您的手机 :</span>
					<span>
						<input type="text" class="input3 txt" placeholder="电话号码"/>
						<span class="inter-title alert3">* 手机号码不能为空</span>
						<span class="inter-title alert31 ">* 手机号码格式不正确</span>
					</span>
				</p>
				<p>
					<span class="inter-title u-txo-angent">您的邮箱 :</span>
					<span>
						<input type="text" class="input4 txt" placeholder="请填写您的邮箱"/>
						<span class="inter-title alert4">* 邮箱不能为空</span>
						<span class="inter-title alert41 ">* 邮箱格式不正确</span>
					</span>
				</p>
				<p>
					<span class="inter-title u-txo-angent">备注说明 :</span>
					<span>
						<textarea type="textarea" class="textarea input5 txt" placeholder="可以描述中文商标字体名称，英文商标可用中文描述"></textarea>
					</span>
				</p>
			</div>
			<p class="success" style="margin:80px auto;display: none">
				您已提交成功！我们的客服人员将会在24小时内与您联系。
			</p>
			
			<p style="text-align:center;padding-bottom:30px">
				<a class="button" style="color:white" href="javascript:void(0);">提交信息</a>
			</p>
			
		</section>
	</div>
	<footer>
		<div class="about">
			<section class="top">关于我们</section>
			<div>公司简介</div>
			<div>商标注册协议</div>
			<div>商标案件协议</div>
			<div>商标支付协议</div>
		</div>
		<div class="help">
			<section>新手帮助</section>
			<div>注册商标须知</div>
			<div>商标价格标准</div>
			<div>发票申请流程</div>
			<div>注册商标时限</div>
		</div>
		<div class="contact">
			<section><img style="width: 24px;margin-right: 3px;margin-bottom: -4px;" src="http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Fconnect_phone.png">0755-8535-1234</section>
			<div>
				<img src='' />
				<img src='' />
			</div>
			<div>
				<img src='' />
				<img src='' />
			</div>
		</div>
	</footer>
</body>
<script src="/kk_trademark/resources/h5/trademark/js/regist.js"></script>
<script type="text/javascript" src="/kk_trademark/resources/h5/trademark/js/js_lang_ch.js"></script>
<script>
	$(function(){
		$(".input1,.input2,.input3,.input4,.input5").val('');
		var trademark = $(".trademark").text();
		$(".input1").val(trademark);
		var i=0;
		$(".moreinfor").click(function(){
			if(i==0){
				$("#moreinfor").show();
				i=1;
			}
			else{
				$("#moreinfor").hide();
				i=0;
			}
		});
		$(".input1").blur(function(){
			if($(this).text()==''){
				$(".alert1").show();
			}
			if($(this).val().length>0){
				$(".alert1").hide();}
		})
		$(".input2").blur(function(){
			if($(this).text()==''){
				$(".alert2").show();
			}if($(this).val().length>0){$(".alert2").hide();}
		});$(".input3").blur(function(){
			if($(this).text()==''){
				$(".alert3").show();
			}if($(this).val().length>0){
				var re = /^1\d{10}$/;
			    if(re.test($(this).val())){
			    	$(".alert31").hide();
		        }else{
			     	$(".alert31").show();
			        $(".inpiut3").focus();
			    }
				$(".alert3").hide();}
		});$(".input4").blur(function(){
			if($(this).text()==''){
				$(".alert4").show();
			}if($(this).val().length>0){
				//验证邮箱
				
				var re =  /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
			    if(re.test($(this).val())){
			    	$(".alert41").hide();
		        }else{
			     	$(".alert41").show();
			        $(".inpiut4").focus();
		        }
			    $(".alert4").hide();}
		});
		$(".button").click(function(){
			trademark = $(".input1").val();
			var	name = $(".input2").val();
				phone = $(".input3").val();
				mail = $(".input4").val();
			$.ajax({
				type:'post',
				url:'/trademark/trademarkInfo/add',
				data:{"userName":name,"telephone":phone,"email":mail,"trademark":trademark},
				dataType:'json',
				
				success:function(){
					if(trademark==''){
						$(".alert1").show();
					}else if(name==''){
						$(".alert2").show();
					}else if(phone==''){
						$(".alert3").show();
					}else if(mail==''){
						$(".alert4").show();
					}
					if(trademark!=''&&name!=''&&phone!=''&&mail!=''){
						$(".input1,.input2,.input3,.input4,.input5").val('');
						$(".info_submit").hide();
						$(".button").hide();
						$(".success").show();
					}
					
				},
				
				error:function(XmlHttpRequest){
					alert(XMLHttpRequest);
				}
			})
		})
	});
</script>
</html>