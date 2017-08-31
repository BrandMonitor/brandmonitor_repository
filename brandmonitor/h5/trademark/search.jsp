
<!DOCTYPE HTML>
<html>
<head>
<!-- <meta http-equiv='X-UA-Compatible' content='IE=8'> -->
<meta content="webkit" name="renderer">
<meta content="IE=edge" http-equiv="X-UA-Compatible">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>免费商标查询，商标在线查询-快快商标</title>
<meta name="keywords" content="商标查询,商标注册查询,已注册商标查询,查询商标,商标在线查询">
<meta name="description" content="快快商标专为申请人提供商标在线查询，可以按照近似查询，综合查询。还可以通过商品名称进行查询，简单，方便，即刻反馈结果。">
<link rel="stylesheet" type="text/css" href="/kk_trademark/resources/h5/trademark/css/style1.css" />
<script src="http://ajax.microsoft.com/ajax/jquery/jquery-2.1.1.min.js" type="text/javascript"></script>
<script type="text/javascript" src="/kk_trademark/resources/h5/trademark/js/is_login.js"></script>
<script src="/kk_trademark/resources/h5/trademark/js/md5.js"></script>
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

</div>
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
			<li><a href="http://www.kksb.com">首页</a></li>
			<li><a href="/kk_trademark/h5/trademark/trademark_regist.jsp">商标注册</a></li>
			<li class="cur"><a href="/kk_trademark/h5/trademark/search.jsp">商标查询</a></li>
			<li><a href="/kk_trademark/h5/trademark/sort.jsp">商标类别</a></li>
			<li><a href="/kk_trademark/h5/trademark/proposer.jsp">我的商标</a></li>
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
			<input type="text" value="输入图形要素中文" onkeydown="KeyDown()" class="com_input pop_search_input ser_input" id="name">
			<button type="button" name="btn_submit" class="pop_search_btn" onclick="getElement()">查 询</button>
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
	<div class="page_search ">
		<h2>商标查询</h2>
		<div class="search_main clearfix" style="margin: 70px auto;">
			<ul class="tab_list">
		    	<li class="cur"><a id="sy_query" data-val="1" href="javascript:void(0);">综合查询</a></li>
				<!--<li><a href="javascript:void(0);" data-val="2" id="similar_query">近似查询</a></li>-->
			</ul>
			<div class="ser_form">
				<form >
					<input type="hidden" value="1" name="type">
					<input type="text" name="value" value="输入商标名称" class="com_input ser_input" id="searchValue">
					<input type="hidden" id="searchType" name="searchType" value="1">
					<div id="trademark_type" class="ser_drop" tabindex="0" style="outline:0;">
						<span class="default" value="1">商标名称<span class="outsideb"></span></span>
						<ul style="display:none;" id="synthesize" class="ser_drop_list">
							<li value="1">商标名称</li>
							<li value="2">申请人</li>
							<li value="3">注册号</li>
						</ul>
					</div>
					<div id="lang_trademark" style="display: none;" class="ser_drop" tabindex="0" style="outline:0;">
						<span class="default" value="1">中文商标<span class="outsideb"></span></span>
						<ul style="display:none;" id="similar" class="ser_drop_list">
							<li value="1">中文商标</li>
							<li value="2">英文商标</li>
							<li value="3">拼音商标</li>
							<li value="4">数字商标</li>
							<li value="5">图形商标</li>
						</ul>
					</div>
					<input id="sort_id" style="display: none;" type="text" value="直接输入商品名称或分类号" name="sort" autocomplete="off" class="com_input ser_input" id="sort">
					<button type="button" class="btn_orange">查 询</button>
				</form>
			</div>
		</div>
		<img style="display:none;margin-top: 20px;margin-left: 50%;" id="loading" src="http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Floading.gif">
		<span class="searching_tip" style="display:none;margin-top: 20px;position: absolute;">&nbsp;查询中...</span>
	</div>

	<div class="com_table com_table_result">
		<table width="100%">
			<colgroup>
				<col>
				<col width="12%">
				<col width="15%">
				<col width="10%">
				<col width="20%">
				<col width="15%">
				<col width="15%">
			</colgroup>
			<thead style="display: none;">
				<tr>
					<th style="text-align: center;">商标图样</th>
					<th style="text-align: center;">商标名称</th>
					<th style="text-align: center;">商标类别</th>
					<th style="text-align: center;">注册号</th>
					<th style="text-align: center;">申请人</th>
					<th style="text-align: center;">商标状态</th>
					<th style="text-align: center;">操作</th>
				</tr>

			</thead>

			<tbody>

				<tr class="no_find" style="display:none;">

				    <td>未查询到结果，可到<a href="/kk_trademark/h5/trademark/trademark_regist.jsp">商标注册</a>进行注册</td>
				</tr>
				<img style="display:none;margin-top: 80px;margin-left: 35%;position: absolute;" id="loading_page" src="http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Floading.gif">
			</tbody>
		</table>
	</div>

	<div class="page_box clearfix" style="display:none">
		<div class="right page">
			<span>当前是第<span class="record_num page_index"></span>页&nbsp;
				<a href="javascript:void(0);" class="solspan pre_page">< 上一页</a>
				<!--<strong>1</strong>
				<span class="overflow" style="display:none">
					<a href="javascript:void(0);">...</a>
					<a class="page_sum"></a>
				</span>-->
				<a href="javascript:void(0);" class="next_page">下一页 ></a>
				<span>&nbsp;共<span class="record_num page_sum"></span>页</span>
				<!--<span>到第 <input type="text" id="topage" class="com_input" name="per_page" value="" onkeyup="" onkeydown=""></span>-->

				<!--<input onclick="" href="" type="button" class="page_btn_min" value="跳 转">-->
			</span>
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
			console.log('请输入商品名称或分类号');
			return false;
		}
		r = sort.replace(/[^0-9]/ig,"");
		if(r == '' || Number(r) > 45 || Number(r) < 1)
		{
			console.log('请输入正确的商品名称或分类号');
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
				console.log(msg);
				return false;
			}
			var re = new RegExp('^[\u4e00-\u9fa5A-Za-z0-9.\\s]{1,50}$');
			break;
		case "3":
			var msg = "请输入正确的申请人名称(1-50字符)";
			if(value == "输入申请人")
			{
				console.log(msg);
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
				console.log(msg);
				return false;
			}
			var re = new RegExp("^[\u4e00-\u9fa5\\s]{1,50}$");
			break;
		default:
			console.log('请选择正确的查询条件');
			return;
			break;
	}
	if(re != '')
	{
		if(!re.test(value))
		{
			console.log(msg);
			return false;
		}
	}
//	$(obj).parent().submit();
}

$('.ser_drop').click(function(){
	var hidden = $('.ser_drop_list').css("display");
	if(hidden=='none'||hidden==undefined)
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
	var judge = $(this).closest("ul").attr("id");
	var type = $(this).attr("value");
	var msg;
	console.log(judge);console.log(type);
	if(judge=='similar'){
		switch(type)
		{
			case '1':
				msg = '输入中文商标';
				break;
			case '2':
				msg = '输入英文商标';
				break;
			case '3':
				msg = '输入拼音商标';
				break;
			case '4':
				msg = '输入数字商标';
				break;
			case '5':
				msg = '输入图形商标';
				break;
		}
		value = $("#searchValue").val();
		if(value == '输入注册号' || value == '输入申请人' || value == '输入商标名称' || value == '输入中文商标' || value == '输入英文商标' || value == '输入拼音商标' || value == '输入数字商标' || value == '输入图形商标')
		{
			$("#searchValue").val(msg);
		}
		else
		{
			$("#searchValue").val(value);
		}
	}else{
		switch(type)
		{
			case '1':
				msg = '输入商标名称';
				break;
			case '2':
				msg = '输入申请人';
				break;
			case '3':
				msg = '输入注册号';
				break;
		}
		value = $("#searchValue").val();
		if(value == '输入注册号' || value == '输入申请人' || value == '输入商标名称' || value == '输入中文商标' || value == '输入英文商标' || value == '输入拼音商标' || value == '输入数字商标' || value == '输入图形商标')
		{
			$("#searchValue").val(msg);
		}
		else
		{
			$("#searchValue").val(value);
		}
	}
	$(".default").html($(this).html() + '<span class="outsideb"></span>');
	$(".default").attr('value', type);
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
		console.log('你还没有选择图形要素');
	}
	else
	{
		element = element.substring(0, element.length-1);
		$('#searchValue').val(element);
		elementHide();
	}
}
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
<script>
$(function(){

	//首页跳转查询
	var searchContent = sessionStorage.getItem("searchContent");
	if(searchContent==''||searchContent==null){
	}else{
		$("#searchValue").val(searchContent);
		$.ajax({
			type:'get',
			url:"/kk_trademark/query/tm/search",
			data:{"searchType":1,"searchTypeTwo":1,"searchContent":searchContent},
			success:function(json){
				var data = json.data;
				$(".page_sum").text(json.count);
				if(data.length==0||data.length==undefined){
					$(".page_box").hide();
					$(".no_find").show();
				}else{
					$(".page_box").hide();
					$(".com_table table thead").show();
					for(i=0;i<data.length;i++){
						$(".com_table table tbody").append(
							'<tr class="a">'
								+'<td><a style="cursor:text" href="javascript:void(0);"><img width="120" height="90" src="'+data[i].img+'" alt="'+searchContent+'"></a></td>'
								+'<td><a style="cursor: text" href="javascript:void(0);" class="brand_t" title="'+searchContent+'">'+searchContent+'</a></td>'
								+'<td>第'+data[i].classify+'类</td>'
								+'<td>'+data[i].registerNo+'</td>'
								+'<td>'+data[i].proposer+'</td>'
								+'<td>'+data[i].status+'</td>'
								+'<td class="c_gray" data-i="'+i+'"><a href="javascript:void(0);" target="_blank" title="'+searchContent+'">查看</a></td>'
							+'</tr>'
						)
					}
					$(".c_gray").click(function(){
						var i = $(this).data("i");
						window.open('/kk_trademark/h5/trademark/detail.jsp?searchType='+1+'&searchTypeTwo='+1+'&searchContent='+searchContent+'&i='+i);
					})
					sessionStorage.removeItem("searchContent");
					$(".page_box").show();
				}
			},
			error:function(XMLHttpRequest,textRequest){
				console.log(XMLHttpRequest.status);
				console.log(textRequest);
			}
		})
	}
	is_login();
	var query_state=0;//区分综合查询和近似查询
    $("#sy_query").click(function(){
   	    $(".search_main").css("width","600px");
    	$(".tab_list").find("li").eq(0).addClass("cur");
    	$(".tab_list").find("li").eq(1).removeClass("cur");
    	query_state=0;
    	$("#trademark_type").show();
    	$("#lang_trademark").hide();
    	$("#sort_id").hide();
    });
    $("#similar_query").click(function(){
    	$(".search_main").css("width","80%");
  		$(".tab_list").find("li").eq(1).addClass("cur");
    	$(".tab_list").find("li").eq(0).removeClass("cur");
    	query_state=1;
    	$("#trademark_type").hide();
    	$("#lang_trademark").show();
    	$("#sort_id").show();
    });
    var page=1,searchType,sort,value,sort_id;
    $(".page_box .next_page").click(function(){
    	page++;
    	if(query_state==0){
    		trademark_list1(page,searchType,sort,value);
    	}else{
    		trademark_list2(page,searchType,sort,value,sort_id);
    	}
    });
    $(".page_box .pre_page").click(function(){
    	page--;
    	if(page==0){
    		page=1;
    	}
    	console.log(query_state);
    	if(query_state==0){
    		trademark_list1(page,searchType,sort,value);
    	}else{
    		trademark_list2(page,searchType,sort,value,sort_id);
    	}
    })

    //键盘事件

    //综合查询
    function trademark_list1(page,searchType,sort,value){
    	$("#loading_page").show();
    	$(".searching_tip").text("查询中...");
    	$('.searching_tip').css('margin-left','0');
    	console.log(page+','+searchType+','+sort+','+value)
    	$(".com_table table tbody tr.a").remove();
    	value = encodeURI(value);
    	$.ajax({
			type:'get',
			url:"/kk_trademark/query/tm/search",
			data:{"page":page,"searchType":searchType,"searchTypeTwo":sort,"searchContent":value},
			timeout:10000,
			success:function(json){
				var data = json.data;
				//假分页
				var page_sum = json.count;
				if(page==1){
					$(".page_sum").text(json.count);
				}
				$(".page_index").text(page);
				if(page_sum>1){
					$(".pre_page").show();
					$(".next_page").show();
					$(".overflow").show();
				}else{
					$(".pre_page").hide();
					$(".next_page").hide();
				}
				if(data==null){
					$(".page_box").hide();
					$(".no_find").show();
				}else{
					$(".page_box").hide();
					$(".no_find").hide();
					for(i=0;i<data.length;i++){
						$(".com_table table tbody").append(
							'<tr class="a">'
								+'<td><a style="cursor:text" href="javascript:void(0);"><img width="120" height="90" src="'+data[i].img+'" alt="'+value+'"></a></td>'
								+'<td><a style="cursor:text" href="javascript:void(0);" class="brand_t" title="'+value+'">'+data[i].name+'</a></td>'
								+'<td>第'+data[i].classify+'类</td>'
								+'<td>'+data[i].registerNo+'</td>'
								+'<td>'+data[i].proposer+'</td>'
								+'<td>'+data[i].status+'</td>'
								+'<td class="c_gray" data-i="'+i+'"><a href="javascript:void(0);" target="_blank" title="'+value+'">查看</a></td>'
							+'</tr>'
						)
					}
					$(".c_gray").click(function(){
						var i = $(this).data("i");
//						alert(data[i].registerNo);
						window.open('/kk_trademark/h5/trademark/detail.jsp?searchType='+searchType+'&searchTypeTwo='+sort+'&searchContent='+value+'&i='+i);
					})
					$(".page_box").show();
				}
				$("#loading").hide();
				$("#loading_page").hide();
				$(".searching_tip").hide();
				$(".com_table table thead").show();
			},
			error:function(XMLHttpRequest,textStatus){ //请求完成后最终执行参数
		　　　　if(status=='timeout'){//超时,status还有success,error等值的情况
				$("#loading,.searching_tip").hide();
		 　　　　　 $(".no_find").show();
		　　　　}
			  setTimeout(
			  "$('#loading').hide();$('.searching_tip').show();$('.searching_tip').text('查询繁忙，请稍后重试。');$('.searching_tip').css('margin-left','30%');"
//			  "if(confirm('查询繁忙，请稍后重试。')){location.reload()}"
			  ,5000);
			  console.log(XMLHttpRequest.status);
			  console.log(textStatus);
		　　}
		})
    }
    //近似查询
    function trademark_list2(page,searchType,sort,value,sort_id){
    	console.log(page+','+searchType+','+sort+','+value+','+sort_id);
    	$(".com_table table tbody tr.a").remove();
    	$.ajax({
			type:'get',
			url:"/kk_trademark/query/tm/search",
			data:{"page":page,"searchType":searchType,"searchTypeTwo":sort,"searchContent":value,"productName":sort_id},
			success:function(json){
				var data = json.data;
				if(page==1){
					$(".page_sum").text(json.count);
				}

				if(data.length==0||data.length==undefined){
					$(".page_box").hide();
					$(".no_find").show();
				}else{
					$(".page_box").hide();
					for(i=0;i<data.length;i++){
						$(".com_table table tbody").append(
							'<tr>'
								+'<td><a target="_blank" href="javascript:void(0);"><img width="120" height="90" src="'+data[i].img+'" alt="'+value+'"></a></td>'
								+'<td><a target="_blank" href="javascript:void(0);" class="brand_t" title="'+value+'">'+value+'</a></td>'
								+'<td>第'+data[i].classify+'类</td>'
								+'<td>'+data[i].registerNo+'</td>'
								+'<td>'+data[i].proposer+'</td>'
								+'<td></td>'
								+'<td class="c_gray" data-i="'+i+'"><a href="javascript:void(0);" target="_blank" title="'+value+'">查看</a></td>'
							+'</tr>'
						)
					}
					$(".c_gray").click(function(){
						var i = $(this).data("i");
						window.open('/kk_trademark/h5/trademark/detail.jsp?searchType='+searchType+'&searchTypeTwo='+value+'&searchContent='+sort+'&i='+i+'&productName='+sort_id);
					})
					$(".page_box").show();
				}
				$("#loading").hide();
				$(".searching_tip").hide();
				$(".com_table table thead").show();
			},
			error:function(XMLHttpRequest,textStatus){
				console.log(XMLHttpRequest.status);
				console.log(textStatus);
			}
		})
    }
    $(".btn_orange").click(function(){
    	$(".com_table table tbody tr.a").remove();
    	$("#loading").show();//loading
    	$(".searching_tip").attr("display","inline").show();//查询中..提示
    	if(query_state==0){
    		searchType = $(".tab_list .cur a").data("val");
			value = $("#searchValue").val();
			sort = $("#searchType").val();
			trademark_list1(page,searchType,sort,value);
	    }else{
	   		searchType = $(".tab_list .cur a").data("val");
	   		value = $("#searchValue").val();
	   		sort = $("#searchType").val();
	   		sort_id = $("#sort_id").val();
	   		trademark_list2(page,searchType,sort,value,sort_id);
	    }

    })
})
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
</body>
</html>
