<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/jsp/header/jspheader.jsp"%>
<!DOCTYPE HTML>
<html>
<head>
<!-- <meta http-equiv='X-UA-Compatible' content='IE=8'> -->
<meta content="webkit" name="renderer">
<meta content="IE=edge" http-equiv="X-UA-Compatible">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>免费商标查询，商标在线查询-BrandMonitor</title>
<meta name="keywords" content="商标查询,商标注册查询,已注册商标查询,查询商标,商标在线查询">
<meta name="description" content="BrandMonitor专为申请人提供商标在线查询，可以按照近似查询，综合查询。还可以通过商品名称进行查询，简单，方便，即刻反馈结果。">
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/resources/h5/trademark/css/style1.css" />
<script src="http://ajax.microsoft.com/ajax/jquery/jquery-2.1.1.min.js" type="text/javascript"></script>
<!--<script src="/js/html5.js?v=1540611" type="text/javascript"></script>
<script type="text/javascript" src="/js/cas.js?v=1540611"></script>-->
<!--[if IE 6]>
<script type="text/javascript" src="js/DD_belatedPNG.js" ></script>
<script type="text/javascript">
DD_belatedPNG.fix('.pngfix');
</script>
<![endif]-->
</head>
<body><div style="display: none">
<div class="pop_box open" style="display:none;z-index: 10000;">
	<iframe src="about:blank"></iframe>
</div>
<div class="course open" style="z-index: 10001;">
	<div class="course_1 open">
		<a class="continue" href="javascript:void(0);">继续</a>
		<a class="close" href="javascript:void(0);">关闭</a>
		<a class="close_course" href="javascript:void(0);">我已经懂了</a>
		<img src="images/pic/1.png" height="323" width="718" alt="">
	</div>
	<div class="course_2">
		<a class="continue" href="javascript:void(0);">继续</a>
		<a class="close" href="javascript:void(0);">关闭</a>
		<img src="images/pic/2.png" height="466" width="646" alt="">
	</div>
	<div class="course_3">
		<a class="continue" href="javascript:void(0);">继续</a>
		<a class="close" href="javascript:void(0);">关闭</a>
		<img src="images/pic/3.png" height="422" width="564" alt="">
	</div>
	<div class="course_4">
		<a class="continue" href="javascript:void(0);">继续</a>
		<a class="close" href="javascript:void(0);">关闭</a>
		<img src="images/pic/4.png" height="2021" width="1004">
	</div>
	<div class="course_5">
		<a class="continue" href="javascript:void(0);">继续</a>
		<a class="close" href="javascript:void(0);">关闭</a>
		<img src="images/pic/5.png" height="440" width="604">
	</div>
	<div class="course_6">
		<a class="continue" href="javascript:void(0);">继续</a>
		<a class="close"  href="javascript:void(0);">关闭</a>
		<img src="images/pic/6.png" height="444" width="755">
	</div>
	<div class="course_7">
		<a class="continue" href="javascript:void(0);">继续</a>
		<a class="close" href="javascript:void(0);">关闭</a>
		<img src="images/pic/7.png" height="1996" width="1004">
	</div>
	<div class="course_8">
		<a class="continue" href="javascript:void(0);">继续</a>
		<a class="close" href="javascript:void(0);">关闭</a>
		<img src="images/pic/8.png" height="531" width="743">
	</div>
	<div class="course_9">
		<a class="continue" href="javascript:void(0);">继续</a>
		<a class="close" href="javascript:void(0);">关闭</a>
		<img src="images/pic/9.png" height="761" width="1049">
	</div>
	<div class="course_10">
		<a class="continue" href="javascript:void(0);">继续</a>
		<a class="close" href="javascript:void(0);">关闭</a>
		<img src="images/pic/10.png" height="761" width="1050">
	</div>
	<div class="course_11">
		<a class="continue" href="javascript:void(0);">继续</a>
		<a class="close" href="javascript:void(0);">关闭</a>
		<img src="images/pic/11.png" height="420" width="743">
	</div>
	<div class="course_12">
		<a class="continue" href="javascript:void(0);">继续</a>
		<a class="close" href="javascript:void(0);">关闭</a>
		<img src="images/pic/12.png" height="1975" width="1004">
	</div>
	<div class="course_13">
		<a class="continue" href="javascript:void(0);">继续</a>
		<a class="close" href="javascript:void(0);">关闭</a>
		<a class="close_course" href="javascript:void(0);">我已经懂了</a>
		<img src="images/pic/13.png" height="348" width="459">
	</div>
</div>
</div>
<nav class="nav">
	<div class="topnav clearfix">
		<div class="left login_box clearfix" id="topleft"></div>
		<div class="right link_box" id="topright"></div>
	</div>
</nav>
<script type="text/javascript">
var _serId = 12;
</script>
<script type="text/javascript">
jQuery(document).ready(function(){
	    cas.setHeadLoginFormHtml('/login');
    cas.setHeadLinksHtml();
    cas.getPrelogin();
    cas.loginFormSubmit();
    });
</script>
<!-- /nav -->
<!-- header -->
<header class="header clearfix" style="z-index: 9991;">
	<div class="left">
		<!--<a href="/"><img src="/images/pic/logo.jpg" height="43" width="125" alt="易名中国" /></a>
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
			<li><a href="/kk_trademark/h5/trademark/register.jsp">商标注册</a></li>
			<li><a href="/kk_trademark/h5/trademark/search.jsp">商标查询</a></li>
			<li><a href="/kk_trademark/h5/trademark/sort.jsp">商标类别</a></li>
			
			
			<li class="my_trademark"><a href="/kk_trademark/h5/trademark/myTm.jsp">我的商标</a></li>
		</ul>
	</div>
</header>
<!-- /header -->
<style type="text/css">
.none_data{height:147px;}
.autoList{border:1px solid #999;position:absolute;overflow:hidden;}
.autoList p{line-height:25px;cursor:default;padding:0 4px;}
.autoList li{line-height:25px;cursor:default;padding:0 4px;background-color:#fff;}
.autoList .cur{background:#F5F5F5;}
</style>
<script>
$(document).ready(function(){
    var num=1;
	$("[class^='course_']").on('click','.continue', function(){
		if(num<$("[class^='course_']").length){
			num++;
		}else{
			num=1;
		}
		$(".course_"+num).addClass('open').siblings().removeClass('open');
	});
	$(".close,.close_course").on('click',function() {
		$(".pop_box").removeClass('open');
		$(".course").removeClass('open');
		num=1;
	});
});
</script>

<!-- 弹窗遮罩 -->
<div class="pop_box" style="display: none;z-index: 10000;">
	<iframe src="about:blank"></iframe>
</div>
<!-- /弹窗遮罩 -->
<!-- 图形选择 -->
<div class="pop_main_max"  style="display: none;z-index: 10001;">
	<div class="pop_bd">
		<div class="pop_search">
			<a class="pop_close" href="javascript:void(0)" title="关闭">x</a>
			<input type="text" value="输入图形要素中文" class="com_input pop_search_input ser_input" id="name">
			<button type="button" class="pop_search_btn" onclick="getElement()">查 询</button>
		</div>
		<div class="w_940">
			<ul class="result_list_ul"></ul>
		</div>
	</div>
	<div class="pop_fd">
		<button type="button" class="btn_orange" onclick="checkElement()">提交</button>
	</div>
</div>
<!-- /图形选择 -->
<!-- container -->
<div class="container bor">
			<div class="page_search   approximate_ser" >
		<h2>商标查询</h2>
		<div class="search_main clearfix">
			<ul class="tab_list">
				<li class="cur"><a href="/trademark/h/i/trademark/search">综合查询</a></li>
				<li class="cur"><a href="javascript:void(0);">近似查询</a></li>
			</ul>
			<div class="ser_form">
				<form method="get" action="">
					<input type="hidden" value="2" name="type">
					<input type="text" name="value" value="输入商标名称" class="com_input ser_input" id="searchValue">
					<input type="hidden" id="searchType" name="searchType" value="8">
					<div class="ser_drop w_62" tabindex="0" style="outline:0;">
						<span class="default">中文商标<span class="outsideb"></span></span>
						<ul style="display:none;" class="ser_drop_list">
							<li value="8">中文商标</li>
							<li value="7">英文商标</li>
							<li value="6">拼音商标</li>
							<li value="5">数字商标</li>
							<li value="4">图形商标</li>
						</ul>
					</div>
					<input type="text" value="直接输入商品名称或分类号" name="sort" autocomplete='off' class="com_input ser_input" id="sort">
					<button type="button" class="btn_orange" onclick="searchSub(this)">查 询</button>
				</form>
			</div>
			<a href="/search/sort" target="_blank" class="result_ser_link" style="right: 148px;">详细商标分类 / 图形要素</a>
		</div>
	</div>
		</div>
<script>
function searchSub(obj)
{
	var searchType = $("#searchType").val();
	var value = $("#searchValue").val();
	var sort = $("#sort").val();
	if(sort)
	{
		if(sort == '直接输入商品名称或分类号')
		{
			alert('请输入商品名称或分类号');
			return false;
		}
		r = sort.replace(/[^0-9]/ig,"");
		if(r == '' || Number(r) > 45 || Number(r) < 1)
		{
			alert('请输入正确的商品名称或分类号');
			return false;
		}
	}
	var re = '';
	switch(searchType)
	{
		case "1":
			var msg = "请输入正确的注册号";
			var re = new RegExp("^[\\d]{7,8}$");
			break;
		case "2":
			var msg = "请输入正确的商标名称(1-50字符)";
			if(value == "输入商标名称")
			{
				alert(msg);
				return false;
			}
			var re = new RegExp('^[\u4e00-\u9fa5A-Za-z0-9.\\s]{1,50}$');
			break;
		case "3":
			var msg = "请输入正确的申请人名称(1-50字符)";
			if(value == "输入申请人")
			{
				alert(msg);
				return false;
			}
			var re = new RegExp('^[\u4e00-\u9fa5A-Za-z0-9.\\s]{1,50}$');
			break;
		case "4":
			var re = new RegExp("^[0-9A-Z.,]{1,50}$");
			var msg = "请输入正确的图形要素(1-50字符)";
			break;
		case "5":
			var re = new RegExp("^[\\d]{1,50}$");
			var msg = "请输入正确的数字(1-50字符)";
			break;
		case "6":
			var re = new RegExp("^[a-zA-Z\\s]{1,50}$");
			var msg = "请输入正确的拼音(1-50字符)";
			break;
		case "7":
			var re = new RegExp("^[a-zA-Z\\s]{1,50}$");
			var msg = "请输入正确的英文字母(1-50字符)";
			break;
		case "8":
			var msg = "请填写正确的中文商标(1-50字符)";
			if(value == "输入商标名称")
			{
				alert(msg);
				return false;
			}
			var re = new RegExp("^[\u4e00-\u9fa5\\s]{1,50}$");
			break;
		default:
			alert('请选择正确的查询条件');
			return;
			break;
	}
	if(re != '')
	{
		if(!re.test(value))
		{
			alert(msg);
			return false;
		}
	}
	$(obj).parent().submit();
}

$('.ser_drop').click(function(){
	hidden = $('.ser_drop_list').is(":hidden");
	if(hidden)
	{
		$('.ser_drop_list').show();
	}
	else
	{
		$('.ser_drop_list').hide();
	}
});

$('.ser_drop').bind({
	blur:function(){
		$('.ser_drop_list').hide();
	} 
});

$(".pop_close").click(function(){
	elementHide();
});

$(".ser_drop_list li").bind({
	mouseout:function(){
		$(this).css("background-color", "");
		$(this).css("color", "");
	},
	mouseover:function(){
		$(this).css("background-color", "#238ffe");
		$(this).css("color", "#fff");
	}
});

$(".ser_drop_list li").click(function(){
	type = $(this).attr('value');
	var msg = '输入商标名称';
	switch(type)
	{
		case 1:
			msg = '输入注册号';
			break;
		case 3:
			msg = '输入申请人';
			break;
		case 4:
			msg = '输入图形要素编码';
			elementShow();
			break;
	}
	value = $("#searchValue").val();
	if(value == '输入商标名称' || value == '输入注册号' || value == '输入申请人' || value == '输入图形要素编码')
	{
		$("#searchValue").val(msg);
	}
	else
	{
		$("#searchValue").val(value);
	}
	$(".default").html($(this).html() + '<span class="outsideb"></span>');
	$("#searchType").attr('value', type);
});

$('.ser_input').bind({
	focus:function(){
		defaultV = this.value;
		if (this.value == defaultV && (defaultV == '输入商标名称' || defaultV == '直接输入商品名称或分类号' || defaultV == '输入图形要素编码' || defaultV == '输入图形要素中文' || defaultV == '输入申请人' || defaultV == '输入注册号')){ 
			this.value = ""; 
		} 
	}, 
	blur:function(){ 
		if (this.value == ""){
			defaultV = '输入商标名称';
			switch($('#searchType').val())
			{
				case "4":
					defaultV = '输入图形要素编码';
					break;
				case "1":
					defaultV = '输入注册号';
					break;
				case "3":
					defaultV = '输入申请人';
					break;
			}
			if($(this).attr('id') == 'sort')
			{
				defaultV = '直接输入商品名称或分类号';
			}
			if($(this).attr('id') == 'name')
			{
				defaultV = '输入图形要素中文';
			}
			$(this).val(defaultV);
			$(this).attr("value", defaultV);
		} 
	} 
});

function elementHide()
{
	$(".pop_box,.pop_main_max").hide();
}

function elementShow(type)
{
	if($(".result_list_ul").html() == '')
	{
		getElement();
	}
	$(".pop_box,.pop_main_max").show();
}

function getElement()
{
	name = $('#name').val();
	name = name == '输入图形要素中文' ? '' : name;
	$.ajax({
        type: "GET",
        url:"/search/element",
        data: {
        	name: name
        },
        success:function(msg){
        	msg = eval('(' + msg + ')');
        	data = msg.data;
        	if(data.html == '')
        	{
            	data.html = '<span style="padding-left:350px;">未查询到结果，请更换关键词试试！</span>';
        	}
        	$(".result_list_ul").html(data.html);

        	$(".trigger").click(function(){
        		if($(this).attr("class").indexOf("hide") > 0)
        		{
        			$(this).next().addClass("block").siblings().removeClass("block");
        			$(this).addClass("show").removeClass("hide");
        		}
        		else
        		{
        			$(this).next().removeClass("block");
        			$(this).addClass("hide").removeClass("show");
        		}
        	});
        }
	});
}

function selectElement(obj)
{
	cl = $(obj).find('li').attr('class');
	if(cl == 'c_red')
	{
		$(obj).find('li').attr('class', '');
	}
	else
	{
		$(obj).find('li').attr('class', 'c_red');
	}
}

function checkElement()
{
	var element = '';
	$('li.c_red').each(function(){
		element += $(this).attr('data') + ',';
	})
	if(element == '')
	{
		alert('你还没有选择图形要素');
	}
	else
	{
		element = element.substring(0, element.length-1);
		$('#searchValue').val(element);
		elementHide();
	}	
}
</script>
<script src='/js/trademark.js?v=1540611'></script>
<script src='/js/autolist.js?v=1540611'></script>
<script src='/js/page.js?v=1540611'></script>
<!-- /container -->
<!-- /foot -->
<style>
.whdo{ text-align:center; margin-top:15px;font-size:12px;}
 .copywh a{color:#777;}
 .copywh a:hover{  color:#FF6E00;}
</style>
<footer class="footer">
	<div class="footer_center clearfix">
		<dl class="dl_l">
			<dt>关于我们</dt>
			<dd><a href="/about/us">公司简介</a></dd>
			<dd><a href="/about/ownreg">商标注册协议</a></dd>
			<dd><a href="/about/payag">商标支付协议 </a></dd>
			<dd><a href="/about/traderefusal">商标案件协议</a></dd>
		</dl>
		<dl class="dl_m">
			<dt>新手帮助</dt>
			<dd><a href="/faq/regtm">注册商标须知</a></dd>
			<dd><a href="/faq/howmuch">商标价格标准</a></dd>
			<dd><a href="/faq/howfp">发票申请流程</a></dd>
			<dd><a href="/faq/howlong">注册商标时限</a></dd>
		</dl>
		<dl class="dl_r">
			<dt>400-0044-400</dt>
		</dl>
	</div>
	<div class="whdo">
		<p class="copywh">
			<a href="http://www.miibeian.gov.cn" target="_blank" > </a>
			<a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=35020302000830" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;">
		 		<img src="http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Fbeian.png" style="float:left;"/></a><br>
			Copyright &copy; 
	</div>
</footer>
<!-- /foot -->
<script src="/js/common.js?v=1540611" type="text/javascript"></script>
<script>
$(document).ready(function(){
    $("#coss").hover(function(){
    $(".wx_drop").show();
    },function(){
    	$(".wx_drop").hide();
    });
});
</script>
<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?ca471dd7af56343704d81cef8f88299d";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script>
<div style="display: none">
<script src="http://s11.cnzz.com/z_stat.php?id=1256201221&web_id=1256201221"  language="JavaScript"></script>
</div>
</body>
</html>