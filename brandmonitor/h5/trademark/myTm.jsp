
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
<div class="container" style="margin-bottom: 300px;">
	<div class="com_tab mt20">
		<div class="com_tab_box">
			<ul>
				<li id="nav_mytm" class="cur"><a href="javascript:void(0);">我的商标</a></li>
				<!--<li id="nav_mytrade"><a href="/kk_trademark/h5/trademark/proposer.jsp">我的案件</a></li>-->		
				<li id="nav_aplist"><a href="/kk_trademark/h5/trademark/proposer.jsp">申请人管理</a></li>
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
	    if(staffCode==''||staffCode==null)//未登陆
	    {
	    	window.location = '/kk_trademark/h5/trademark/login.jsp'
	    }
	    // alert(staffCode+','+)
	    $("#loading").show();
	    $.ajax({
	    	type:'get',
	    	url:'/kk_trademark/api/order/getOrderInfo',
	    	data:{},
	    	beforeSend: function(request) {
                request.setRequestHeader("staffCode",staffCode);
                request.setRequestHeader("clientDigest",token);
            },
            success:function(json){
            	var data = json.data;
            	if(data.length==0){
            		$(".none_tm").show();
            	}else{
	            	for(i=0;i<data.length;i++){
	            		var text_btn;
	            		//是否审核
	            		if(data[i].checkStatus==1){var status='待审核'};
	            		if(data[i].checkStatus==2){var status='审核通过'};
	            		if(data[i].checkStatus==3){var status='审核失败'};
	            		//是否付款
	            		if(data[i].isPayment){var isPayment = '已付款'}
	            		if(!data[i].isPayment){var isPayment = '未付款'}
	
	            		if(data[i].checkStatus==1||data[i].checkStatus==3){
	            			text_btn = '查看';
	            		}
	            		if(data[i].checkStatus==2 && !data[i].isPayment){
	            			text_btn = '确认付款';
	            		}
	            		if(data[i].checkStatus==2 && data[i].isPayment){
	            			text_btn = '查看';
	            		}
	            		$("#tbodyid").append(
		            		'<tr>'
								+'<td><img style="width: 80px;height:80px;" src="'+data[i].styleBlack+'" /></td>'
								+'<td>'+data[i].trademarkName+'</td>'
								+'<td>'+data[i].trademarkType+'</td>'
	//							+'<td>'+data[i].remarks+'</td>'
								+'<td>'+status+'</td>'
								+'<td>'+isPayment+'</td>'
								+'<td class="checkOrPay" data-i="'+i+'" data-isPay="'+data[i].isPayment+'" data-txt="'+data[i].trademarkName+'" data-price="'+data[i].money+'" data-id="'+data[i].id+'">查看</td>'
							+'</tr>'
		            	)
						 $("#loading").hide();
	            	}
	            }
            	//点击操作列的功能
            	var money,id;
            		$(".checkOrPay").css("color","dodgerblue").css("cursor","pointer").click(function(){
            			var txt = $(this).data("txt");
            			money = $(this).data("price");
            			id = $(this).data("id");
            			var i = $(this).data("i");
            			var isPay = $(this).data("ispay");
//            			 alert(txt+','+money+','+i+','+isPay);
        				$.ajax({
        					type:'get',
        					url:'/kk_trademark/api/order/getOrderInfo',
        					data:{},
        					beforeSend: function(request) {
				                request.setRequestHeader("staffCode",staffCode);
				                request.setRequestHeader("clientDigest",token);
				            },
        					success:function(json){
        						var data = json.data[i].orderRelate;
        						$(".order_detail .order_name").text(txt);
        						$(".order_detail .order_price").text(money);
        						$(".order_detail .order_name").data("id",$(this).data("id"));
        						//每次进入填充钱清空表格
        						$(".order_detail tbody").empty();
        						var checkStatus;
        						//填充查看数据
        						for(j=0;j<data.length;j++){
        							var createTime = new Date(data[j].createTime);
									var year=createTime.getFullYear();     
						            var month=createTime.getMonth()+1;     
						            var date=createTime.getDate();
						            var time = year+"-"+month+"-"+date;
        							//是否审核
				            		if(data[j].checkStatus==1){var status='待审核';checkStatus=1};
				            		if(data[j].checkStatus==2){var status='审核通过';checkStatus=2};
				            		if(data[j].checkStatus==3){var status='审核失败';checkStatus=3};
				            		
        							$(".order_detail tbody").append(
	        							'<tr>'
											+'<td>'+data[j].id+'</td>'
											+'<td>'+data[j].trademarkName+'</td>'
											+'<td>'+status+'</td>'
											+'<td>'+time+'</td>'
										+'</tr>'
	        						);
	        						
        						}
        						$(".order_detail tbody").append(
									'<form method="post" action="/alipay/buildOrderPay"><input style="display:none" name="id" class="order_id"><input name="money" style="display:none" class="order_money"><button type="submit" style="border: none;padding:5px 8px;position: absolute;left: 45%;margin-top:20px;background-color: #ff8416;color:white;border-radius: 5px" >确认付款</button></form>'
        						);
        						$(".order_detail").show();
        						
		            			$(".order_id").val(id);
		            			$(".order_money").val(money);
        						//关闭查看窗口
        						$(".close").click(function(){
        							$(".order_detail").hide();
        						});
        						
								//是否已支付或者审核
								console.log(checkStatus);
								if(checkStatus==1||checkStatus==3){//待审核或者审核失败
									console.log(111);
        							$(".order_detail button").hide();
        						}else{
        							if(!isPay){
	        							$(".order_detail button").show();//显示支付按钮
	        						}else{$(".order_detail button").hide();}
        						}
        						
        						
        						//确认付款
//		            			$(".order_detail button").click(function(){
//		            				var money = $(".order_detail .order_price").text();
//		            				var id = $(".order_detail .order_name").data("id");
//		            				$.ajax({
//		            					type:'post',
//		            					url:'/alipay/buildOrderPay',
//		            					data:{'money':money,"id":id},
//		            					beforeSend: function(request) {
//								            request.setRequestHeader("staffCode",staffCode);
//								            request.setRequestHeader("clientDigest",token);
//								        },
//								        success:function(json){
//								        	
//								        },
//								        error:function(XMLHttpRequest,textStatus){
//								        	console.log(XMLHttpRequest.status);
//								        	console.log(textStatus);
//								        }
//
//		            				})
//		            			})
        					}
        				})

            		})
            	
            }
	    })
	})
	</script>	

	<div class="my_brand" style="margin:20px 0">
		
		<table width="100%" class="com_table">
			<colgroup>
				<col width="15%">
				<col width="10%">
				<col width="15%">
				<col width="15%">
				<col width="15%">
				<col width="15%">
				<col width="15%">	
			</colgroup>
			<thead>
				<tr>
					<th style="text-align: center;">商标图样</th>
					<th style="text-align: center;">商标名称</th>
					<th style="text-align: center;">商标类别</th>
					<th style="text-align: center;">商标状态</th>
					<th style="text-align: center;">是否支付</th>
					<th style="text-align: center;">子订单</th>
				</tr>
			</thead>
			
			<tbody id="tbodyid">
				<tr class="none_tm" style="display:none"><td colspan="8">暂无商标</td></tr>	
				
			</tbody>
			
		</table>
		<img style="display:none;margin-top: 20px;margin-left: 50%;" id="loading" src="http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Floading.gif">
	</div>

	<!-- 查看订单信息 悬浮层-->
	<div class="order_detail" style="display:none;position: absolute;z-index: 9999;top:10px;padding-left:15%;padding-top: 150px;background-color: rgba(0,0,0,0.4);left: 0;padding-bottom: 350px;right: 0px;">
		<div class="close" style="position: absolute;right: 218px;top:128px"></div>
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
					<th style="text-align: center;">子订单id</th>
					<th style="text-align: center;">子商标</th>
					<th style="text-align: center;">审核状态</th>
					<th style="text-align: center;">创建时间</th>
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
<iframe frameborder="0" border="0" width="100%"  src="footer.jsp" ></iframe>
<!-- /foot -->

</body>
</html>