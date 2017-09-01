
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
        background-color: #f1f1f1;overflow-x: hidden;}
    * { margin:0;padding: 0;}
    .query_header {width: 100%;position: fixed;top: 0;left: 0;}
    .header-top .back { display: block; width: 60px; font-size: 16px;color: #fe5700;
    	position: absolute; top: 16px;left: 10px;}
   	.have_query {padding-top: 100px;}
   	.header-top .back .icon {display: block;float: left;
    height: 18px; width: 10px;padding-right: 5px;
    background: url(http://m.tm.cn/h5/images/back.png) no-repeat;
    background-size: 10px 18px;
}
.name{-webkit-line-clamp: 1;}
   	.have_menu {padding-bottom: 60px;}
   	.search { padding: 10px;border-bottom: 1px solid #e4e4e4;
    background: #fff;text-align: center;}
    .query_search_text {width: 90%;height: 30px;padding: 0 2%;
    margin: 0 auto;line-height: 30px;font-size: 14px;
    border: 0;border-radius: 5px;background: #f5f5f5;}
    .index_title { padding: 15px 0 15px 0;font-size: 16px;text-align: center;font-weight: 600;}
    .header-top {background-color: #f9f9f9;border-bottom: 1px solid #c3c3c3;position: relative;}
    .trademark_list .trademark { padding: 15px 12px;display: inline-block;width: 100%;}
    .clearfix { zoom: 1;}
    .trademark .trademark_img {float: left;width: 70px;height: 70px;
    line-height: 70px;border: 1px solid #ddd;border-radius: 10px;
    overflow: hidden;}
    .trademark .trademark_info {float: left;padding-left: 10px;text-align: left;}
    img {-ms-interpolation-mode: bicubic;
    vertical-align: middle;border: 0 none;
    width: 100%;height: auto;}
    li, p, a, input, img, button, textarea {
    -webkit-tap-highlight-color: rgba(255,0,0,0);}
    .trademark .trademark_info p { font-size: 13px;color: #202020;padding: 4px 0;}
    .trademark .trademark_info span {color: #5e5e5e;}
    ul, li {list-style: none;margin: 0;padding: 0;}
    .no_find{padding:20px 0;color:#666666;}
    .trademark_list li {background: #fff;margin-bottom: 10px;display: inline-block; width: 100%;}
</style>
</head>

<body>
	<div class="query_header">
		<div class="header-top">
		   <a href="http://test.micro80.com/" class="back"><span class="icon"></span></a>
		   <h1 class="index_title">商标查询</h1>
		</div>
		
		<div class="search">
	        <!--<form action="/kk_trademark/query/tm/search" method="get" id="formUser" name="searchContent" accept-charset="utf-8">-->
	          <input class="query_search_text" type="text" placeholder="请输入要查询的商标名称" name="value" id="name" value="1">
	          <input id="searchType" name="searchType" type="hidden" value="2">
	        <!--</form>-->
        </div>
	</div>
	<div class="have_menu have_query">
		<ul class="trademark_list">
			<li class="no_find" style="display: none;">未查询到相关内容</li>
			<li class="no_more" style="display: none;">已经全部加载完毕</li>
	    </ul>
	</div>
	<script src="https://cdn.static.runoob.com/libs/jquery/2.1.1/jquery.min.js"></script>
	<script src="http://cdn.bootcss.com/zepto/1.0rc1/zepto.min.js"></script>
</body>
<script>
	$(function(){
		//初始化搜索
		var u = location.search.substring(1);
		var content = u.split("=")[1];
		console.log(content);
		init(content);
		function init(content){
			$.ajax({
				type:'get',
				url:"/kk_trademark/query/tm/search",
				data:{"searchType":1,"searchTypeTwo":1,"page":page,"pageSize":10,"searchContent":content},
				success:function(json){
					var data = json.data;
					console.log(data)
					$(".page_sum").text(json.count);
					if(data.length==0||data.length==undefined){
						$(".com_table .no_find").show();
					}else{
						$(".com_table .no_find").show();
						for(i=0;i<data.length;i++){
							$("ul").append(
								'<li data-i="'+i+'">'
									+'<div class="trademark clearfix" onclick="tzlink(5003309)">'
								      +'<div class="trademark_img">'
								        +'<img src="'+data[i].img+'" alt="">'
								      +'</div>'
								      +'<div class="trademark_info">'
								        +'<p>商标名称：<span class="name">'+data[i].name+'</span></p>'
								        +'<p>商标类别：<span>第'+data[i].classify+'类</span></p>'
								        +'<p>商标状态：<span class="orange">'+data[i].type+'</span></p>'
								      +'</div>'
								    +'</div>'
								+'</li>'
							)
						}
					}
					$("li").click(function(){
						var i = $(this).data("i");
						window.location.href='/kk_trademark/h5/trademark/detail_m.jsp?searchContent='+searchContent+"&page="+page+'&i='+i;
					})
				},
				error:function(XMLHttpRequest,textRequest){
					alert(XMLHttpRequest.status);
					alert(textRequest);
				}
			})
		}
		
		var searchContent;
		$(".query_search_text").on('keypress',function(e) {  
            var keycode = e.keyCode;  
            searchContent = $(this).val();  
            if(keycode=='13') {  
                e.preventDefault();    
                //请求搜索接口  
                $.ajax({
					type:'get',
					url:"/kk_trademark/query/tm/search",
					data:{"searchType":1,"searchTypeTwo":1,"page":page,"pageSize":10,"searchContent":searchContent},
					success:function(json){
						var data = json.data;
						console.log(data)
						$(".page_sum").text(json.count);
						if(data.length==0||data.length==undefined){
							$(".com_table .no_find").show();
						}else{
							$(".com_table .no_find").show();
							for(i=0;i<data.length;i++){
								$("ul").append(
									'<li data-i="'+i+'">'
										+'<div class="trademark clearfix" onclick="tzlink(5003309)">'
									      +'<div class="trademark_img">'
									        +'<img src="'+data[i].img+'" alt="">'
									      +'</div>'
									      +'<div class="trademark_info">'
									        +'<p>商标名称：<span class="name">'+data[i].name+'</span></p>'
									        +'<p>商标类别：<span>第'+data[i].classify+'类</span></p>'
									        +'<p>商标状态：<span class="orange">'+data[i].type+'</span></p>'
									      +'</div>'
									    +'</div>'
									+'</li>'
								)
							}
						}
						$("li").click(function(){
							var i = $(this).data("i");
							window.location.href='/kk_trademark/h5/trademark/detail_m.jsp?searchContent='+searchContent+"&page="+page+'&i='+i;
						})
					},
					error:function(XMLHttpRequest,textRequest){
						alert(XMLHttpRequest.status);
						alert(textRequest);
					}
				})
            }  
        }); 
		
		 //滚动到页面底部时，自动加载更多  
    var page = 1;
    $(window).scroll(function(){                
        var scrollh = $(document).height()-250;  
        var scrollTop=Math.max(document.documentElement.scrollTop||document.body.scrollTop);  
        if((scrollTop + $(window).height()) >= scrollh){   
			page++;
			$.ajax({
				type:'get',
				url:'/kk_trademark/query/tm/search',
				data:{"searchType":1,"searchTypeTwo":1,"page":page,"pageSize":10,"searchContent":searchContent},
				dataType:'json',
				success:function(json){
					var data = json.data;
					$(".page_sum").text(json.count);
					if(data.length==0||data.length==undefined){
						$(".com_table .no_more").show();
					}else{
						$(".com_table .no_more").show();
						for(i=0;i<data.length;i++){
							$("ul").append(
								'<li>'
									+'<div class="trademark clearfix" onclick="tzlink(5003309)">'
								      +'<div class="trademark_img">'
								        +'<img src="'+data[i].img+'" alt="">'
								      +'</div>'
								      +'<div class="trademark_info">'
								        +'<p>商标名称：<span class="name">'+data[i].name+'</span></p>'
								        +'<p>商标类别：<span>第'+data[i].classify+'类</span></p>'
								        +'<p>商标状态：<span class="orange">'+data[i].type+'</span></p>'
								      +'</div>'
								    +'</div>'
								+'</li>'
							)
						}
					}
				},
				error:function(XMLHttpReques,textStatus){
					console.log(XMLHttpReques.status);
					console.log(textStatus);
				}
			})
        }  
    });  
	})
</script>
</html>