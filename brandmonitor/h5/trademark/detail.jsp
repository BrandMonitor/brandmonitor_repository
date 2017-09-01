
<!DOCTYPE html>
<html lang="zh-cn" class="no-js">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>商标查询</title>
<meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no">
<meta name="format-detection" content="telephone=no">
<meta name="keywords" content="商标注册,注册商标,0元注册商标,免费注册商标,免费商标注册,免费商标">
<meta name="description" content="BrandMonitor专注于商标注册，为您提供商标自行注册，商标代持注册，流程简单，通过率高，0元手续费。">
<link rel="stylesheet" type="text/css" href="/kk_trademark/resources/h5/trademark/css/style1.css" />
<script src="http://ajax.microsoft.com/ajax/jquery/jquery-2.1.1.min.js" type="text/javascript"></script>
<script type="text/javascript" src="/kk_trademark/resources/h5/trademark/js/is_login.js"></script>
</head>
<body>
	<style>
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
						<input name="loginName" id="UserName" class="com_input member" placeholder="手机/邮箱" value="" type="text">
						<label>密码：</label>
						<input name="loginPwd" id="Password" class="com_input password" onkeydown="if(event.keyCode==13) jQuery('#quicklogin').click();" autocomplete="off" type="password">
						<input class="login_btn" style="margin:0 auto;height: 22px;" value="登录" onclick="login();" id="quicklogin" type="button">
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
				<div class="left clearfix login_box" id="logining" style="color:#0f93d8;display: none;">您好！<span class="staffCode" style="margin: 0;"></span><span class="exit" onclick="exit();">退出</span></div>
				<span><a href="/kk_trademark/h5/trademark/search.jsp">商标查询</a></span>
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
		<a class="manage_link" href="/ap/aplist" target="_blank">管理</a><a class="pop_close" id="col" href="javascript:void(0);" title="关闭">x</a><h3>其他申请人</h3>
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

		<a href="/">
		<span style="color:#ff8416;;font-size: 30px">BrandMonitor</span>
		<!-- <img src="http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Flogo.png" width="100" alt="商标注册平台www.tm.cn" title="商标注册平台www.tm.cn"/> -->
		</a>
	</div>
	<div class="right">
		<ul class="menu">
			<li><a href="http://test.micro80.com/">首页</a></li>
			<li><a href="/kk_trademark/h5/trademark/trademark_regist.jsp">商标注册</a></li>
			<li class="cur"><a href="/kk_trademark/h5/trademark/search.jsp">商标查询</a></li>
			<li><a href="/kk_trademark/h5/trademark/sort.jsp">商标类别</a></li>
			
			<li><a href="/kk_trademark/h5/trademark/proposer.jsp">我的商标</a></li>
		</ul>
	</div>
</header>
<!-- container -->
<!-- container -->
<div class="container">
	<div class="com_tab">
		<div class="com_tab_box">
			<ul>
				<li class="cur"><a href="javascript:void(0)">商标信息</a></li>									
			</ul>
		</div>			
	</div>
	<div class="info_table_box info_box" id="tminfo">
		<div class="zxzc_tit"><h3 class="member_tit_orange"></h3></div>
		<div class="sort_sec clearfix">
			<div class="w_515 sort_sec_table">
				<table width="100%">
					<colgroup>
						<col width="150">
						<col>
					</colgroup>
					<tbody>
						<tr>
							<td>注册号：</td>
							<td class="c_blue" class="registerNo"></td>
						</tr>
						<tr>
							<td>国际分类：</td>
							<td class="c_blue" class="classify"></td>
						</tr>
						<tr>
							<td>申请日期：</td>
							<td class="c_blue" class="applicationDate"></td>
						</tr>
						<tr class="no_bor">
							<td>注册日期：</td>
							<td class="c_blue" class="registerDate"></td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="carte_box">
				<img class="TmPhotoImg" src="" width="350" height="158" alt="">
			</div>
		</div>
		<div class="sort_sec sort_sec_table">
			<table width="100%">
				<colgroup>
					<col width="150">
					<col>
				</colgroup>
				<tbody>
					<tr>
						<td>申请人名称（中）：</td>
						<td class="c_blue" class="proposer"></td>
					</tr>
					<tr  class="no_bor">
						<td>申请人地址（中）：</td>
						<td class="c_blue" class="proposerAddress"></td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="sort_sec sort_sec_table">
			<table width="100%">
				<colgroup>
					<col width="150">
					<col width="400">
					<col width="150">
					<col>
				</colgroup>
				<tbody>
					<tr>
						<td>初审公告期号：</td>
						<td class="c_blue" class="praeiudiciumNoticeNo"></td>
						<td>初审公告日期：</td>
						<td class="c_blue" class="praeiudiciumNoticeDate"></td>
					</tr>
					<tr>
						<td>注册公告期号：</td>
						<td class="c_blue" class="registerNoticeNo"></td>
						<td>注册公告日期：</td>
						<td class="c_blue" class="registerNoticeDate"></td>
					</tr>
					<tr>
						<td>专用权期限：</td>
						<td class="c_blue" colspan="3" class="exclusiveDeadline"></td>
					</tr>
					<tr>
						<td>商标类型：</td>
						<td class="c_blue" class="type"></td>
						<td>是否共有商标：</td>
						<td class="c_blue" class="isPublicTrademark"></td>
					</tr>
					<tr class="no_bor">
						<td>备注：</td>
						<td class="c_blue" colspan="3" class="remarks"></td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="sort_sec sort_sec_table">
			<table width="100%">
				<colgroup>
					<col width="150">
					<col>
				</colgroup>
				<tbody>
					<tr class="no_bor">
						<td>代理人名称：</td>
						<td class="c_blue" class="surrogatedName"></td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="sort_sec sort_sec_table">
			<table width="100%">
				<colgroup>
					<col width="150">
					<col width="400">
					<col width="150">
					<col>
				</colgroup>
				<tbody>
					<tr class="no_bor">
						<td>商品/服务：</td>
						<td class="c_blue">
							<div class="service"></div>
						</td>
						<td>类似群组：</td>
						<td class="c_blue" class="similarGroup"></td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="sort_sec sort_sec_table">
			<table width="100%">
				<colgroup>
					<col width="150">
					<col width="400">
					<col>
				</colgroup>
				<tbody>
					<tr class="no_bor">
						<td>商标流程：</td>
						<td class="c_blue" class="trademarkProcess">
						</td>
					<td class="c_blue">
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="sort_sec sort_sec_table" id="butt">
			<div style="text-align:center;">
				<font style="color:gray;">以上信息仅供参考</font>
			</div>
			<div class="sort_sec_btn" style="margin: 10px 0 0 0;">
				<button type="button" class="btn_blue"  id="report">报错（信息不准确）</button>
				<button type="button" class="btn_blue"  id="printTm">打 印</button>
			</div>
		</div>
	</div>
</div>
<!-- /foot -->
<style>
.whdo{ text-align:center; margin-top:15px;font-size:12px;}
 .copywh a{color:#777;}
 .copywh a:hover{  color:#FF6E00;}
</style>
<iframe frameborder="0" border="0" width="100%"  src="footer.jsp" ></iframe>
<!-- /foot -->
<script>
	$(function(){
		is_login();
		var u = location.search.substring(1);
		var u_length = u.split("&").length;
		var searchType = u.split("&")[0].split("=")[1];
		var searchTypeTwo =  u.split("&")[1].split("=")[1];
		var searchContent =  u.split("&")[2].split("=")[1];
		var i =  u.split("&")[3].split("=")[1];
		if(u_length==4){
			var productName = '';
		}else{var productName = u.split("&")[4].split("=")[1] }
//		alert(searchContent);
		
//		alert(searchType+','+searchTypeTwo+','+searchContent+','+i);
		$.ajax({
			type:'get',
			url:'/kk_trademark/query/tm/search',
			data:{"searchType":searchType,"searchTypeTwo":searchTypeTwo,"searchContent":searchContent,"productName":productName},
			success:function(json){
				var data = json.data;
				$(".member_tit_orange").text(data[i].name);
				$(".TmPhotoImg").attr("src",data[i].img);
				$(".TmPhotoImg").attr("alt",searchContent);
				$(".w_515 tbody").find("tr").eq(0).find(".c_blue").text(data[i].registerNo);
				$(".w_515 tbody").find("tr").eq(1).find(".c_blue").text(data[i].classify);
				$(".w_515 tbody").find("tr").eq(2).find(".c_blue").text(data[i].applicationDate);
				$(".w_515 tbody").find("tr").eq(3).find(".c_blue").text(data[i].registerDate);
//				$(".classify").text(data[i].classify);
//				$(".applicationDate").text(data[i].applicationDate);
//				$(".registerDate").text(data[i].registerDate);
				$(".sort_sec_table").eq(1).find("tbody").find("tr").eq(0).find(".c_blue").text(data[i].proposer);
				$(".sort_sec_table").eq(1).find("tbody").find("tr").eq(1).find(".c_blue").text(data[i].proposerAddress);
//				$(".proposer").text(data[i].proposer);
//				$(".proposerAddress").text(data[i].proposerAddress);
				$(".sort_sec_table").eq(2).find("tbody").find("tr").eq(0).find(".c_blue").eq(0).text(data[i].praeiudiciumNoticeNo);
				$(".sort_sec_table").eq(2).find("tbody").find("tr").eq(0).find(".c_blue").eq(1).text(data[i].praeiudiciumNoticeDate);
				$(".sort_sec_table").eq(2).find("tbody").find("tr").eq(1).find(".c_blue").eq(0).text(data[i].registerNoticeNo);
				$(".sort_sec_table").eq(2).find("tbody").find("tr").eq(1).find(".c_blue").eq(1).text(data[i].registerNoticeDate);
				$(".sort_sec_table").eq(2).find("tbody").find("tr").eq(2).find(".c_blue").text(data[i].exclusiveDeadline);
				$(".sort_sec_table").eq(2).find("tbody").find("tr").eq(3).find(".c_blue").eq(0).text(data[i].type+"商标");
				$(".sort_sec_table").eq(2).find("tbody").find("tr").eq(3).find(".c_blue").eq(1).text(data[i].isPublicTrademark);
				$(".sort_sec_table").eq(2).find("tbody").find("tr").eq(4).find(".c_blue").text(data[i].remarks);
//				$(".praeiudiciumNoticeNo").text(data[i].praeiudiciumNoticeNo);
//				$(".praeiudiciumNoticeDate").text(data[i].praeiudiciumNoticeDate);
//				$(".registerNoticeNo").text(data[i].registerNoticeNo);
//				$(".registerNoticeDate").text(data[i].registerNoticeDate);
//				$(".exclusiveDeadline").text(data[i].exclusiveDeadline);
//				$(".type").text(data[i].type);
//				$(".isPublicTrademark").text(data[i].isPublicTrademark);
//				$(".remarks").text(data[i].remarks);
				$(".sort_sec_table").eq(3).find("tbody").find("tr").find(".c_blue").text(data[i].surrogatedName);
//				$(".surrogatedName").text(data[i].surrogatedName);
				$(".sort_sec_table").eq(4).find("tbody").find("tr").find(".c_blue").eq(0).text(data[i].service);
				$(".sort_sec_table").eq(4).find("tbody").find("tr").find(".c_blue").eq(1).text(data[i].similarGroup);
//				$(".service").text(data[i].service);
//				$(".similarGroup").text(data[i].similarGroup);

				//商标流程
				$(".sort_sec_table").eq(5).find("tbody").find("tr").find(".c_blue").eq(0).text(data[i].trademarkProcess);
//				$(".trademarkProcess").text(data[i].trademarkProcess);
			},
			error:function(XMLHttpRequest,textStatus){
				alert(XMLHttpRequest.status);
				alert(textStatus);
			}
		})
	})
</script>
</body>
</html>