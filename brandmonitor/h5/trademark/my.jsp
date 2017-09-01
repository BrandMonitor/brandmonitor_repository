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
<title>免费商标注册，流程简单，通过率高-BrandMonitor</title>
<meta name="keywords" content="商标注册,注册商标,0元注册商标,免费注册商标,免费商标注册,免费商标">
<meta name="description" content="BrandMonitor专注于商标注册，为您提供商标自行注册，商标代持注册，流程简单，通过率高，0元手续费。">
<link rel="stylesheet" type="text/css" href="/kk_trademark/resources/h5/trademark/css/style1.css" />
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
<body><nav class="nav">
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
		cas.setHeadLogoutHtml(1126718, 0, 0, '/logout');//登录态
	cas.setHeadLinksHtml();
    });
</script>
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
			<li><a href="/">首页</a></li>
			<li><a href="/tm/reg">商标注册</a></li>
			<li><a href="/search">商标查询</a></li>
			<li><a href="/search/sort">商标类别</a></li>
			
			<li class="my_trademark"><a href="/tm/mytm">我的商标</a></li>
		</ul>
	</div>
</header>
<!-- /header -->
<style>
.page .selected{padding:2px 8px;border:1px solid #d8d8d8;background:#1d9fe9;color:#fff;display:inline-block;vertical-align:middle;}
.Wdate{border:1px solid #c7c7c7;height:23px;line-height:18px;}
.orange_box .com_input{width:100px;}
</style>
<script type="text/javascript" src="/js/DataPick/WdatePicker.js?v=1540611"></script>	
<script type="text/javascript">
	$(document).ready(function(){
		$("#checkAll").click(function(){
			if(this.checked)
				{
						$("#tbodyid input:checkbox").each(function(){
							this.checked = true;
						});
					}
					else
					{
					$("#tbodyid input:checkbox").each(function(){
							this.checked = false;
					});
			}
	  });
	});	
</script>

<script type="text/javascript">
 function checkTms(){ 
	checkedboxobj = $('#tbodyid').find("input[type='checkbox']:checked");
	if(checkedboxobj.length > 0)
	{
		var id = ''
		$(checkedboxobj).each(function(){
			if(id == '')
			{
				id = Number($(this).val());
			}
			else
			{
				id = id + ',' + Number($(this).val())
			}
		});
		window.location.href="/tm/exportTm?id=" + id;
	}
	else
	{
		alert("请选择商标");
	}
 }
 function payTms(){ 
		checkedboxobj = $('#tbodyid').find("input[type='checkbox']:checked");
		if(checkedboxobj.length > 0)
		{
			var id = ''
			$(checkedboxobj).each(function(){
				if(id == '')
				{
					id = Number($(this).val());
				}
				else
				{
					id = id + ',' + Number($(this).val())
				}
			});
			window.open("/tm/payMoney?TmId=" + id);
		}
		else
		{
			alert("请选择商标");
		}
	 }
 
</script>

<!-- 商标业务 -->
<script type="text/javascript">
function checkbranb(){

	var vl = $("#tmbus").val();
	if(vl == ''){
		alert("请选择商标业务");return false;
	}
	
	checkedboxobj = $('#tbodyid').find("input[type='checkbox']:checked");
	
	if(checkedboxobj.length > 0)
	{
		var type = $("#tmbus").val();
		var id = ''
		$(checkedboxobj).each(function(){
			if(id == '')
			{
				id = Number($(this).val());
			}
			else
			{
				id = id + ',' + Number($(this).val())
			}
			window.location.href="/trade/lotuptrade?id=" + id + "&& type=" + type;
		}); 
	}
	else
	{
		alert("请选择商标");
		$("#tmbus").html('<option value="" selected="ture">--选择商标业务--</option><option value="1">驳回复审</option><option value="4">异议答辩</option>');
// 		return false;
	}
 }
</script>

<script type="text/javascript">
function del(id)
{
	if(confirm("确认删除？")){
   $.ajax({
		 type: "POST",
       url: "/tm/del",
       data:{TmId:id},
       datatype:"json", /*接受数据格式*/
    success:function(son){
    	 var son = eval("(" + son + ")");
        if(son.status==200 )
       {
        	 alert("删除成功");
        	window.location.href ="/tm/mytm";
        }else{
            if(son.msg=='nodel')
         {
					alert("已付款商标无法删除");return false;
         }
        	 alert("删除失败");
            }
    	},
    error: function(son){
       alert("删除失败");
       }         
	   }); 
	}else{
		return;
		}
}
</script>
<!-- container -->
<div class="container">
	<div class="com_tab mt20">
		<div class="com_tab_box">
			<ul>
				<li id="nav_mytm" class="cur"><a href="/trademark/h/i/trademark/my">我的商标</a></li>
				<li id="nav_mytrade"><a href="/trademark/h/i/trademark/mycase">我的案件</a></li>		
				<li id="nav_aplist"><a href="/trademark/h/i/trademark/proposer_manage">申请人管理</a></li>
				<li id="nav_mycretifi" style="position:relative;">
				   <a href="/trademark/h/i/trademark/certificate_manage">证书管理</a>
				</li>	
				<li id="nav_invimf"><a href="/trademark/h/i/trademark/bill_manage">发票管理</a></li>
			</ul>
		</div>			
	</div>
	
	<script>
	$(document).ready(function(){
	     var url=window.location.pathname;
	    if(url=='/tm/mytm')
	    {
	    	  $("#nav_mytm").addClass('cur');
	    }
	    if(url=='/trade/mytrade')
	    {
	    	  $("#nav_mytrade").addClass('cur');
	    }
	    if(url=='/ap/aplist')
	    {
	    	  $("#nav_aplist").addClass('cur');
	    }
	    if(url=='/cretifi/mycretifi')
	    {
	    	  $("#nav_mycretifi").addClass('cur');
	    }
	    if(url=='/invoice/invimf')
	    {
	    	  $("#nav_invimf").addClass('cur');
	    }
	    
	})
	</script>	<div class="orange_box">
		<form action="" method="get" name="search">
			<div style="position: relative; padding: 10px 35px;">
			<div style="margin-bottom: 20px;">
				<span style="display:inline-block; width: 230px;">
    				<span>商标名称：</span>
    				<span><input type="text" class="com_input" value="" name='Tmname'></span>
				</span>

				<span style="display:inline-block; width: 220px; margin-left: 60px;">
					<span>商标类别：</span>
					<select name="Tmsort">
					   <option value="">全部</option>
					   <option value="01"   >01化学原料</option><option value="02"   >02颜料油漆</option><option value="03"   >03化妆品</option><option value="04"   >04燃料油脂</option><option value="05"   >05医药</option><option value="06"   >06五金金属</option><option value="07"   >07机械设备</option><option value="08"   >08手工器械</option><option value="09"   >09电子电脑</option><option value="10"   >10医疗器械</option><option value="11"   >11家用电器</option><option value="12"   >12运输工具</option><option value="13"   >13军火烟火</option><option value="14"   >14珠宝钟表</option><option value="15"   >15乐器</option><option value="16"   >16办公文具</option><option value="17"   >17橡胶制品</option><option value="18"   >18皮革箱包</option><option value="19"   >19建筑材料</option><option value="20"   >20家具</option><option value="21"   >21厨房洁具</option><option value="22"   >22绳网袋篷</option><option value="23"   >23纺织纱线</option><option value="24"   >24布料床单</option><option value="25"   >25服装鞋帽</option><option value="26"   >26花边配饰</option><option value="27"   >27地毯席垫</option><option value="28"   >28体育玩具</option><option value="29"   >29食品</option><option value="30"   >30小食配料</option><option value="31"   >31水果花木</option><option value="32"   >32啤酒饮料</option><option value="33"   >33酒</option><option value="34"   >34烟草烟具</option><option value="35"   >35广告贸易</option><option value="36"   >36金融物管</option><option value="37"   >37建筑修理</option><option value="38"   >38通讯传媒</option><option value="39"   >39运输旅行</option><option value="40"   >40材料加工</option><option value="41"   >41教育娱乐</option><option value="42"   >42技术服务</option><option value="43"   >43餐饮酒店</option><option value="44"   >44医疗园艺</option><option value="45"   >45法律</option>					</select>
				</span>

				<span style="margin-left: 80px;">申请人：</span>
				<span>
					<select style="width: 180px;border:1px solid #ddd;" name="ApName" id="ApName">
					   <option value="">全部</option>
											</select>
				</span>
				<script>
				$(document).ready(function(){
     				$("#ApName").mouseleave(function(){
         			$("#group").focus();
      				});
				});
				</script>
			</div>

			<div>
				<span style="display:inline-block; width: 220px;">
					<span>商标状态：</span>
					<span>
                  <select  id="group" name="Tmstatus">
							<option value="">全部</option>
								<option value="1"   >已申报</option><option value="10"   >已发补正通知书</option><option value="2"   >已发受理通知</option><option value="11"   >申请不予受理</option><option value="3"   >已驳回</option><option value="4"   >驳回复审中</option><option value="5"   >初审公告</option><option value="6"   >已注册</option><option value="7"   >被异议中</option><option value="8"   >变更已受理</option><option value="9"   >已无效</option><option value="12"   >异议中</option><option value="13"   >已变更</option><option value="14"   >变更失败</option><option value="15"   >不予注册</option><option value="16"   >已部分驳回</option><option value="17"   >被撤三中</option><option value="18"   >转让已受理</option><option value="19"   >已转让</option><option value="20"   >转让失败</option><option value="21"   >被撤销</option><option value="22"   >宣告无效中</option><option value="23"   >宣告无效答辩中</option><option value="24"   >被宣告无效</option><option value="25"   >不予注册复审中</option><option value="26"   >撤三答辩中</option><option value="27"   >撤三中</option>							</select>
                </span>
              </span>
        
              <span style="margin-left: 70px;">申请日期：</span>
              <span>
                <input class="Wdate"  size="12" type="text" onFocus="WdatePicker({isShowClear:true,readOnly:true})" name="createtimestarts" value="" /> -
                <input class="Wdate"  size="12" type="text" onFocus="WdatePicker({isShowClear:true,readOnly:true})" name="createtimeends" value=""/>
              </span>
        
            </div>
           
            <span style="position: absolute;right: 20px;top: 35px;">
                <button type="submit" id="find"  class="orange_btn">搜 索</button>
            </span>
        </div>
		</form>
	</div>
	<div class="my_brand">
		<table width="100%" class="com_table">
			<colgroup>
				<col width="5%">
				<col width="10%">
				<col width="15%">
				<col width="15%">
				<col width="12%">
				<col width="15%">
				<col width="15%">
				<col width="15%">	
			</colgroup>
			<thead>
				<tr>
					<th><input type="checkbox" value="1"  id="checkAll" name='checkAll' /></th>
					<th>商标图样</th>
					<th>商标名称</th>
					<th>商标类别</th>
					<th>状态</th>
					<th>商标状态</th>
					<th>申请日期</th>
					<th>操作</th>
				</tr>
			</thead>
			<tbody id="tbodyid">
				<tr><td colspan="8">暂无商标</td></tr>	
			</tbody>
		</table>
	</div>
	<div class="page_box clearfix">
			 <div class="left">
				<input class="page_btn" type="button" value="Excel导出"  name="submit1" onclick="checkTms()"/>
					<input class="page_btn" type="button" value="批量付款"  name="submit2" onclick="payTms()"/>
				<select onchange="checkbranb();" id="tmbus" >
					<option value="">--选择商标业务--</option>
					<option value="1">驳回复审</option>
					<option value="4">异议答辩</option>
<!-- 					<option value="5">不予注册复审</option> -->
				</select>
			</div>
		<div class="right page">
			   </div>

   </div>
</div>
<!-- /container -->
<script src='/js/page.js?v=1540611'></script>
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
			<a href="http://www.miibeian.gov.cn" target="_blank" > </a><a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=35020302000830" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;">
		 		<img src="http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Fbeian.png" style="float:left;"/></a><br>
			Copyright &copy;
	</div>
</footer>
<!-- /foot -->
<!--<script src="/js/common.js?v=1540611" type="text/javascript"></script>-->
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