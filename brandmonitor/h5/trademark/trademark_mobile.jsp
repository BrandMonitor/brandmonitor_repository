<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/jsp/header/jspheader.jsp"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="cache-control" content="max-age=0" />
<meta http-equiv="cache-control" content="no-cache" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
<title>快快商标</title>
<%
String trademark = new String(request.getParameter("trademark").getBytes("iso8859-1"),"utf-8");
%>
<style type="text/css">
    
    html, body {
        margin: 0;
        width: 100%;
        height: 100%;
        font-family: arial;
        text-align: center;
        font-family: "微软雅黑";
    }
    
    * { margin:0;padding: 0;}
    .warning{color:#646464;font-size: 14px;margin:0 auto;text-align: justify;padding: 0 15px;}
    ul{list-style: none;}
	.warning ul li{text-align:justify;line-height:22px;font-size: 14px;margin:10px auto;}
	.warning1{background-color: #82af6f !important;}
	.warning2{background-color: #f89406 !important;}
	.warning3{background-color: #d15b47 !important;}
	.badge{display: inline-block;padding: 3px 5px;font-size: 12px;
	    font-weight: bold;line-height: 1;color: #fff;text-align: center;
	    white-space: nowrap;vertical-align: baseline;
	    background-color: #999;border-radius: 10px;
	}
	.tip{text-align: center;padding-bottom:20px;}
	.tip h1{font-weight:bold;margin:0 auto;width:200px;padding-bottom:5px;border-bottom:1px solid #82af6f;}
	.title{font-size: 18px;color:#3c3c3c;height: 48px;border-bottom: 1px solid #f0f1f1;line-height: 48px;font-size: 18px;font-weight: bold;padding-left: 15px;}
	.inter-title{color:#646464;font-size:14px;}
	.u-txo-angent {width: 170px;height: 32px;margin-right: 10px;line-height: 32px;text-align: right;vertical-align: top;}
	.txt{height: 32px;line-height: 32px;border-width: 0;
    border: solid 1px #e7e7e7;font-size: 14px;outline: 0;
    width: 61%;padding-left: 5px;font-family: "微软雅黑";}
    .alert1,.alert2,.alert3,.alert4,.alert31,.alert41{display:none;color: #ff6d00; margin-left: 5px;font-size: 12px;}
    .button{padding: 10px 20px;background-color: #7ecef4;color: white;border-radius: 5px;}
    textarea{width: 60%;height: 200px;padding: 5px;
    vertical-align: top;font-size: 12px;}
    .textarea{width: 60%;height: 139px;border: 1px solid #e1e1e1;outline: none;}
    .success{padding:30px 20px;background-color:orange;color:white;font-size:26px;}
    #success{padding-bottom:20px;}
    p{margin: 10px 0;}
    a{text-decoration: none;}
</style>

</head>
<body>
	<div class="trademark" style="display:none"><%=trademark%></div>
    <div>
    	<section class="tip">
			<h1 style="color:#82af6f;font-size: 30px;margin: 20px auto;">商标注册</h1>
			<div class="warning">
				<ul>
					<li><span class="badge warning1">1</span>&nbsp;&nbsp;未经核准注册的商标，请谨慎使用，谨防侵权。</li>
					<li><span class="badge warning2">2</span>&nbsp;&nbsp;商标注册有风险，注册前请做风险排查及分析，提高注册成功率。</li>
					<li><span class="badge warning3">3</span>&nbsp;&nbsp;商标查询及审查过程存在不确定因素，查询结果不包含3-6个月未公开的数据。</li>
				</ul>
			</div>
			
			<section class="info">
			<p style="text-align: left" class="title">商标注册</p>
			<div class="info_submit">
				<p>
					<span class="inter-title u-txo-angent">商标名称 :</span>
					<span>
						<input type="text" class="input1 txt"/>
						<p class="inter-title alert1 ">* 商标名不能为空</p>
					</span>
				</p>
				<p>
					<span class="inter-title u-txo-angent">您的姓名 :</span>
					<span>
						<input type="text" class="input2 txt" placeholder="请填入您的姓名或称呼"/>
						<p class="inter-title alert2">* 姓名不能为空</p>
					</span>
				</p>
				<p>
					<span class="inter-title u-txo-angent">您的手机 :</span>
					<span>
						<input type="text" class="input3 txt" placeholder="电话号码"/>
						<p class="inter-title alert3">* 手机号码不能为空</p>
						<p class="inter-title alert31 ">* 手机号码格式不正确</p>
					</span>
				</p>
				<p>
					<span class="inter-title u-txo-angent">您的邮箱 :</span>
					<span>
						<input type="text" class="input4 txt" placeholder="请填写您的邮箱"/>
						<p class="inter-title alert4">* 邮箱不能为空</p>
						<p class="inter-title alert41 ">* 邮箱格式不正确</p>
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
			<!--<p style="text-align:center;padding-bottom:30px;margin-top:30px;">-->
				<a class="button back" style="display: none;color:white" href="/trademark/h/i/trademark/index_mobile">返回首页</a>
			<!--</p>-->
			
			<p style="text-align:center;padding-bottom:30px;margin-top:30px;">
				<a class="button" style="color:white" href="javascript:void(0);">提交信息</a>
			</p>
			
		</section>
		</section>
    </div>
    <script src="http://cdn.bootcss.com/zepto/1.0rc1/zepto.min.js"></script>
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
						$(".back").show();
					}
					
				},
				
				error:function(XmlHttpRequest){
					alert(XMLHttpRequest);
				}
			})
		})
	});
</script>
</body>
</html>