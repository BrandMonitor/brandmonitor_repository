
<!DOCTYPE html>
<html class=" js-no-overflow-scrolling">
<head>
<meta charset="utf-8">
<meta http-equiv="cache-control" content="max-age=0" />
<meta http-equiv="cache-control" content="no-cache" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
<title>BrandMonitor</title>
<style>
	html, body {margin: 0;width: 100%;
        height: 100%;font-family: arial;
        text-align: center; font-family: "微软雅黑";
        background-color: #f1f1f1;}
    * {margin: 0;outline: 0;padding: 0;
    font-family: "PingHei";font-size: 14px;}
    .header-top {background-color: #f9f9f9;
    border-bottom: 1px solid #c3c3c3;
    position: relative;}
.header {text-align: center;margin-bottom: 10px;}
.details_table {background: #fff;margin-bottom: 10px;text-align: left;}
.details_table td:nth-child(1) {
    width: 100px;color: #333;}
.details_table td {border-bottom: 1px solid #f5f5f5;
    padding: 10px;color: #5e5e5e;}
th, td, caption {vertical-align: middle;}
table {border-collapse: collapse;
    border-spacing: 0;width: 100%;}
.trademark_flow {
    background: #fff;}
table {border-collapse: collapse;
    border-spacing: 0;width: 100%;}
.operation {
    padding: 10px 10px 10px;
    text-align: center;}
.header-top .back {display: block;width: 60px;
    font-size: 16px;color: #fe5700;
    position: absolute;top: 16px;left: 10px;}
li, p, a, input, img, button, textarea {
    -webkit-tap-highlight-color: rgba(255,0,0,0);
}
.header-top .back .icon {display: block;
    float: left;height: 18px;
    width: 10px;padding-right: 5px;
    background: url(http://m.tm.cn/h5/images/back.png) no-repeat;
    background-size: 10px 18px;}
.index_title {padding: 15px 0 15px 0;
    font-size: 16px;text-align: center;
    font-weight: 600;}
img {
    -ms-interpolation-mode: bicubic;
    vertical-align: middle;
    border: 0 none; width: 100%;
    height: auto;}
.trademark_flow caption {
    background: #fff;font-weight: bold;
    text-align: left; padding: 10px 0 10px 10px;}
.trademark_flow td:nth-child(1) {padding-left: 30px;}
.trademark_flow td {text-align: left;padding: 10px 5px;font-size: 12px;color: #5e5e5e;}
.orange {color: #ff5700;font-size: inherit;}
.trademark_flow .orange td {color: #ff5700;}
a{text-decoration: none;}
.btn {display: inline-block;
    padding: 10px 2%; background-color: #fff;
    border: 1px solid #50b7f4;
    border-radius: 4px;color: #50b7f4;margin: 0 1%;}
</style>
</head>

<body>
	<div>
		<div class="header-top">
			<a href="/kk_trademark/h5/trademark/search_m.jsp" class="back"><span class="icon"></span></a><!-- javascript:history.go(-1); -->
	      <h1 class="index_title">查看商标</h1>
		</div>
		<div class="header">
	      <img src="" alt="">
	   </div>
	    
	   <table class="details_table">
	      <tbody>
	        <tr>
	          <td>注册号</td>
	          <td class="zch"></td>
	        </tr>
	        <tr>
	          <td>国际分类</td>
	          <td class="classify"></td>
	        </tr>
	        <tr>
	          <td>申请日期</td>
	          <td class="sqTime"></td>
	        </tr>
	        <tr>
	          <td>注册时间</td>
	          <td class="zcTime"></td>
	        </tr>
	      </tbody>
	   </table>
	
	   <table class="details_table">
	      <tbody>
	        <tr>
	          <td>申请人名称(中)</td>
	          <td class="proposeName"></td>
	        </tr>
	        <tr>
	          <td>申请人地址(中)</td>
	          <td class="proposeAdress"></td>
	        </tr>
	      </tbody>
	    </table>
	    
	    <table class="details_table">
	      <tbody>
	        <tr>
	          <td>初审公告号</td>
	          <td class="csgh"></td>
	        </tr>
	        <tr>
	          <td>注册公告号</td>
	          <td class="zcgh"></td>
	        </tr>
	        <tr>
	          <td>初审公告日期</td>
	          <td class='csghTime'></td>
	        </tr>
	        <tr>
	          <td>注册公告日期</td>
	          <td class="zcghTime"></td>
	        </tr>
	        <tr>
	          <td>专用权期限</td>
	          <td class="deline"></td>
	        </tr>
	        <tr>
	          <td>商标类型</td>
	          <td class="type"></td>
	        </tr>
	        <tr>
	          <td>是否共有商标</td>
	          <td class='is_common'></td>
	        </tr>
	        <tr>
	          <td>备注</td>
	          <td class="remark"></td>
	        </tr>
	      </tbody>
	    </table>
	    <table class="details_table">
	      <tbody>
	        <tr>
	          <td>代理人名称</td>
	          <td class="daliName"></td>
	        </tr>
	      </tbody>
	    </table>
	    <table class="details_table">
	      <tbody>
	        <tr>
	          <td>商品/服务</td>
	          <td class="service"></td>
	        </tr>
	        <tr>
	          <td>类似群组</td>
	          <td class="commonArr"></td>
	        </tr>
	      </tbody>
	    </table>
	    <table class="trademark_flow">
	      <caption>商标流程</caption>
	      <tbody>
	      			        <tr class=" ">
	          <td>商标注册申请中</td>
	          <td></td>
	        </tr>
	                <tr class=" ">
	          <td>注册申请初步审定</td>
	          <td></td>
	        </tr>
	                <tr class="orange">
	          <td>商标已注册</td>
	          <td></td>
	        </tr>
	        		      </tbody>
		</table>
		
		<div class="operation">
	      <a href="javascript:void(0);" class="btn" style="width: 50%;" id="report">报错(信息不准确)</a>
	   </div>
	</div>
	<script src="http://cdn.bootcss.com/zepto/1.0rc1/zepto.min.js"></script>
</body>
<script>
	$(function(){
		var u = location.search.substring(1);
		var u_length = u.split("&").length;
		var searchContent = u.split("&")[0].split("=")[1];
		var page =  u.split("&")[1].split("=")[1];
		var i =  u.split("&")[2].split("=")[1];
		console.log(searchContent+'-'+page+'-'+i);
//		if(u_length==4){
//			var productName = '';
//		}else{var productName = u.split("&")[4].split("=")[1] }
		
		$.ajax({
			type:'get',
			url:'/kk_trademark/query/tm/search',
			data:{"searchType":1,"searchTypeTwo":1,"searchContent":searchContent,"page":page,"pageSize":10},
			dataType:'json',
			success:function(json){
				var data = json.data;
				var sqt=new Date(data[i].createTime);
				var sqTime = sqt.getFullYear()+'-'+(sqt.getMonth()+1)+'-'+sqt.getDay();
//				var zct=new Date(data[i].createTime);
//				var sqTime = zct.getFullYear()+'-'+(zct.getMonth()+1)+'-'+zct.getDay();
				$(".header img").attr("src",data[i].img);
				$(".zch").text(data[i].id);
				$(".classify").text(data[i].classify);
				$("sqTime").text(sqTime);
				$(".zcTime").text('');
				$(".proposeName").text(data[i].proposer);
				$(".proposeAdress").text(data[i].proposerAddress);
				$(".csgh").text('');
				$(".zcgh").text('');
				$(".csghTime").text('');
				$(".zcghTime").text('');
				$(".deline").text('');
				$(".type").text(data[i].type);
				$(".is_common").text(data[i].isPublicTrademark);
				$(".remark").text(data[i].remarks);
				$(".daliName").text(data[i].surrogatedName);
				$(".service").text('');
				$(".commonArr").text(data[i].similarGroup);
				//商标流程
//				$(".sort_sec_table").eq(5).find("tbody").find("tr").find(".c_blue").eq(0).text(data[i].trademarkProcess);
			},
			error:function(XMLHttpRequest,textStatus){
				alert(XMLHttpRequest.status);
				alert(textStatus);
			}
		})
	})
</script>
</html>