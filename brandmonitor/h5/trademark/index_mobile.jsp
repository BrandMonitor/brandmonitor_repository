
<!DOCTYPE html>
<html class=" js-no-overflow-scrolling">
<head>
<meta charset="utf-8">
<meta http-equiv="cache-control" content="max-age=0" />
<meta http-equiv="cache-control" content="no-cache" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
<title>BrandMonitor</title>
<style>
	html, body {
        margin: 0;
        width: 100%;
        height: 100%;
        font-family: arial;
        text-align: center;
        font-family: "微软雅黑";
        background-color: #f1f1f1;
   }
    * { margin:0;padding: 0;}
    .logo img{width: 160px;margin: 0 auto;padding-top:16%;}
    
    /*搜索框*/
   .search{margin-top:-30px;position: relative;z-index: 999;}
   .inp_srh{-webkit-appearance:none; /*去除系统默认的样式*/box-shadow: none;width:60%;
   	padding: 15px 10px;border:1px solid #cacaca;border-right:none;border-top-left-radius: 5px;
   	border-bottom-left-radius: 5px;
	-webkit-border-top-left-radius: 5px;-webkit-border-bottom-left-radius: 5px;
	-webkit-border-top-right-radius: 0px;-webkit-border-bottom-right-radius: 0px;}
	.btn_srh{-webkit-appearance:none; /*去除系统默认的样式*/padding: 15px 10px;border:1px solid orange;margin-left: -5px;
		background-color:orange;color: white;border-top-right-radius: 5px;border-bottom-right-radius: 5px;
		-webkit-border-top-right-radius: 5px;-webkit-border-bottom-right-radius: 5px;
		-webkit-border-top-left-radius: 0px;-webkit-border-bottom-left-radius: 0px;}
	/*服务*/
    .service{height: 100%;margin: 50px auto;/*margin-bottom:50px;*/position: relative;}
	.service img{float: left;width:20px;}
	.service section{display: inline-block;}
	.item1_top,.item1_mid,.item1_bottom{display: inline-block;width: 80%;text-align: justify;
	}
	.item1_mid,.item1_bottom{margin-top:0px;}
	.item1_top div,.item1_mid div,.item1_bottom div{margin-left:10px;float: left;}
	.btitle{color:#999999;font-size:12px;font-weight: bold;padding: 2% 0;}
	.stitle{color:#666666;font-size: 13px;}
	/*搜索框下方图标按钮*/
	.menu{font-size:12px;color:#666666;font-family: "微软雅黑";margin: 13px auto;}
	.menu div{width: 80%;display:inline-block;}
	.menu span{float: left;width: 25%;}
	.menu img{width:30px;}
	/*footer*/
	footer{/*position:absolute;*/font-family: "微软雅黑";font-size: 12px;margin: 0 auto;
	color:#999999;/*bottom: 10px;*/}
	/*item2*/
	.item2{background-color: white;}
	.item2 img{width:100%;position: relative;/*z-index: 10;*/margin-top:-45px;}
	.block{display: none;}
	/*item3*/
	h2{font-size: 20px;font-weight: bold;padding: 20px 0 15px 0;}
	.item3_left img{width: 20%;}
	.item3_top,.item3_mid,.item3_bottom{width:90%;border-radius: 5px;padding: 15px 0;
		margin: 15px auto;
		box-shadow: 0 1px 4px 0 rgba(0,0,0,0.2),0 1px 4px 0 rgba(0,0,0,0.19);
		background-color: white;text-align: center;}
	.item3 p,.item4 p{font-size: 12px;color:#999999;padding: 3px 0;}
	.item3 input,.item4 input{-webkit-appearance:none; /*去除系统默认的样式*/margin-top:6px;
	padding:5px 10px;background-color: orange;color: white;border: none;border-radius: 3px;
	font-weight: bold;}
	.money{color:#F7434c;font-size:16px;font-weight: bold;}
	.money span{font-size:12px;}
	.hot{    left: -4px;display:block;
    position: relative;clear: both;
    margin-top: -28px;border-top-left-radius: 1em;}
    /*item4*/
   .item4 img{width: 100%;}
   /*item5*/
   /*qa问题*/
   .q_a{width: 90%;margin:0 auto}
    .list1,.list2,.list3,.list4,.list5,.list6{    background-color: white;
    padding: 5px 20px 5px 20px;text-align: left;
    border-radius: 5px;margin-bottom: 8px;
    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.2),0 1px 4px 0 rgba(0,0,0,0.19);}
    .head_q{color:orange;font-size:16px;font-weight: bold;}
    .text_a{font-size: 12px;}
    .item3 h3{color:#666666}
    .displsy_none{display: none;}
</style>
</head>

<body>
	<div class="main">
		<div class="logo">
        	<img src="http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Ftrademark_logo.png" />
        </div>
        <!--搜索框-->
        <div class="search">
        	<input class="inp_srh" type="text" placeholder="请输入商标查询是否可注册" />
        	<input class="btn_srh" type="submit" name="submit" value="查 询">
        </div>
        <!--搜索框下方menu-->
        <div class="menu">
        	<div>
	        	<span class="block1">
	        		<p>
	        			<img class="block1_first" src="http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Fprocess.png" />
	        			<img class="block1_second displsy_none" src="http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Fprocess1.png" />
	        		</p>
	        		<p>注册流程</p>
	        	</span>
	        	<span  class="block2">
	        		<p>
	        			<img class="block2_first" src="http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Fsolve.png" />
	        			<img class="block2_second displsy_none" src="http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Fsolve1.png" />
	        		</p>
	        		<p>解决方案</p>
	        	</span>
	        	<span  class="block3">
	        		<p>
	        			<img class="block3_first" src="http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Fprepare_icon.png" />
	        			<img class="block3_second displsy_none" src="http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Fprepare1.png" />
	        		</p>
	        		<p>准备事项</p>
	        	</span>
	        	<span  class="block4">
	        		<p>
	        			<img class="block4_first" src="http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Fqa.png" />
	        			<img class="block4_second displsy_none" src="http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Fqa1.png" />
	        		</p>
	        		<p>常见问题</p>
	        	</span>
	        </div>
        </div>
        <!--item2-->
        <section id="process" class="block section1">
			<div class="item2">
				<h2 style="padding: 20px 0;position: relative;z-index: 99;">注册流程</h2>
		        <img style="margin-left:-5px;" src="http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Fprocess_mobile.png" />
		    </div>
		</section>
		
		<!--item3-->
		<section id="" class="block section2">
			<div class="item3">
				<h2 style="color:black;padding: 10px 0 0 0;">多种解决方案</h2>
	            <!--<h4 style="color:white">担保商标注册</h4>-->
	            <div class="item3_top" style="margin-top:8px">
	            	<div class="item3_left">
	            		<!--<img style="width: 50px" class="hot" src="http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Fhot_label.png" />-->
	            		<!--<img src="http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Fguarantee.png" />-->
	            		<h3>担保商标注册</h3>
	            	</div>
	            	<div class="item3_right">
	            		<p>注册不成功退全款（含官费）</p>
	            		<p>材料确认后，3个工作日可用TM</p>
	            		<div class="money">￥1480<span>&nbsp;元</span></div>
	            		<input type="button" value="立即购买" />
	            	</div>
	            </div>
	            <!--<h4 style="margin-top:15%;color:white">加急商标注册和普通商标注册</h4>-->
	            <div class="item3_mid" style="margin-top:8px">
	            	<h3>加急商标注册</h3>
	            	<p>材料确认后，3个工作日可用TM</p>
	            	<div class="money">￥960<span>&nbsp;元</span></div>
	            	<input type="button" value="立即购买" />
	            </div>
	            
	            <div class="item3_bottom" style="margin-top:8px">
	            	<h3>普通商标注册</h3>
	            	<p>3~4个月左右下放受理通知书</p>
	            	<div class="money">￥800<span>&nbsp;元</span></div>
	            	<input type="button" value="立即购买" />
	            </div>
			</div>
		</section>
		
		<!--item4-->
		<section id="" class="block section3">
			<div class="item4">
				<h2 style="padding: 20px 0 0 0;position: relative;z-index: 99;background-color:white;">准备事项</h2>
        		<img src="http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Fprepare.png" />
			</div>
		</section>
		
		<!--item5-->
		<section id="" class="block section4">
			<div class="item5">
				<h2>常见问题</h2>
	        	<div class="q_a">
	        		<div class="list1">
	        			<p class="text_a"><span class="head_q">Q:</span>&nbsp;我提交的商标能注册下来吗？</p>
	        			<p class="text_a"><span class="head_q">A:</span>&nbsp;注册商标存在一定的风险，主要风险为商标局有3-6个月的盲查期，我们会尽力帮您规避风险。</p>
	        		</div>
	        		<div class="list2">
	        			<p class="text_a"><span class="head_q">Q:</span>&nbsp;商标的有效期限是多久？</p>
	        			<p class="text_a"><span class="head_q">A:</span>&nbsp;商标自核准注册之日起可以使用10年，10年中无任何费用，到期前一年需要续展。</p>
	        		</div>
	        		<div class="list3">
	        			<p class="text_a"><span class="head_q">Q:</span>&nbsp;我应该申请哪些类别？</p>
	        			<p class="text_a"><span class="head_q">A:</span>&nbsp;您可以在商标分类页面中查看：<em style="color:#1c93cf">商标类别，</em>信息仅供参考，如有疑问，可以联系我们客服。</p>
	        		</div>
	        		<div class="list4">
	        			<p class="text_a"><span class="head_q">Q:</span>&nbsp;着色商标和黑白商标什么区别？</p>
	        			<p class="text_a"><span class="head_q">A:</span>&nbsp;着色商标，注册成功后就只能使用申请时的着色，不得更换颜色。黑白商标，您可任意着色使用。</p>
	        		</div>
	        		<div class="list5">
	        			<p class="text_a"><span class="head_q">Q:</span>&nbsp;营业执照地址与邮寄地址的区别？</p>
	        			<p class="text_a"><span class="head_q">A:</span>&nbsp;商标注册提交地址以营业执照为准，但商标局下发的材料会邮寄到代理处，我们收到材料后会及时与您联系并跟您确认邮寄地址。</p>
	        		</div>
	        		<div class="list6">
	        			<p class="text_a"><span class="head_q">Q:</span>&nbsp;TM和R的区别？</p>
	        			<p class="text_a"><span class="head_q">A:</span>&nbsp;“TM”指已收到商标局下发的受理通知书，但还未取得商标证的商标；而“R”是指已经注册成功并取得商标证书的商标。</p>
	        		</div>
	        	</div>
			</div>
		</section>
        <!--footer-->
        <footer>
			<!--<div style="bottom:10px;position: absolute;z-index: 99;margin-bottom:-190px">-->
			<div>
				<div class="service">
			        <div class="item1_top">
			    		<section>
			        		<img src="http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Ficon1.png" />
			        		<div>
			        			<!--<p class="btitle">一对一金牌服务</p>-->
			        			<p class="stitle">一对一专业服务，金牌团队全程跟进</p>
			        		</div>
			        	</section>
			    	</div>
			    	<div class="item1_mid">
			    		<section>
			        		<img src="http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Ficon2.png" />
			        		<div>
			            		<!--<p class="btitle">业务过程全透明</p>-->
			            		<p class="stitle">全程公开透明，进度实时跟踪</p>
			            	</div>
			            </section>
			    	</div>
			    	<div class="item1_bottom">
			    		<section>
			        		<img src="http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Ficon3.png" />
			        		<div>
			            		<!--<p class="btitle">低资费高服务</p>-->
			            		<p class="stitle">低资费高服务,价格合理，超高性价比</p>
			            	</div>
			            </section>
			    	</div>
			    </div>
				
	        	<div class="footer" style="position:absolute;bottom: 10px;width: 100%;">
	        		<span>
						<img style="width: 15px;margin-right: 3px;margin-bottom: -4px;" src="http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Fconnect_phone.png">
						<a>客服热线：0755-86524997</a>
					</span>
					<!-- <div class="record">粤ICP备16068193号</div> -->
	        	</div>
	        </div>
		</footer>
	</div>
	
	<script src="http://cdn.bootcss.com/zepto/1.0rc1/zepto.min.js"></script>
	<script>
		$(function(){
			$(".inp_srh").on('keypress',function(e) {  
	            var keycode = e.keyCode;  
	            if(keycode=='13') {  
               		e.preventDefault();
               		var trademark = $(".inp_srh").val();
		   			window.location.href = '/kk_trademark/h5/trademark/search_m.jsp?content='+trademark;
                }
           })
			$(".btn_srh").click(function(){
		   	    var trademark = $(".inp_srh").val();
		   		window.location.href = '/kk_trademark/h5/trademark/search_m.jsp?content='+trademark;
		   })
			
			function shutall(){
				$(".section1,.section2,.section3,.section4").hide();
			}
			function all_gray(){
				$(".block1_first,.block2_first,.block3_first,.block4_first").show();
				$(".block1_second,.block2_second,.block3_second,.block4_second").hide();
				$(".menu p").css("color","#666666");
			}
			$(".block1").click(function(){
				if($(".section1").css('display')!='none'){
					$(".section1").hide();
					$(".block1_first").show();
					$(".block1_second").hide();
					$(".block1 p").css("color","#666666");
				}else if($(".section1").css('display')=='none'){
					shutall();
					all_gray();
					$(".block1_first").hide();
					$(".block1_second").show();
					$(".block1 p").css("color","#F5A623");
					$(".section1").show();
					
				}
				if($("section").css('display')!='none'){
					$(".footer").css("position","relative");
				}else{
					$(".footer").css("position","absolute");
				}
			});
			$(".block2").click(function(){
				if($("section")){
					$(".footer").css("position","relative");
				}
				if($(".section2").css('display')!='none'){
					$(".section2").hide();
					$(".footer").css("position","absolute");
					$(".block2_first").show();
					$(".block2_second").hide();
					$(".block2 p").css("color","#666666");
					$(".footer").css("position","absolute");
				}else if($(".section2").css('display')=='none'){
					shutall();
					all_gray();
					$(".block2_first").hide();
					$(".block2_second").show();
					$(".block2 p").css("color","#F5A623");
					$(".section2").toggle();
				}
				
			})
			$(".block3").click(function(){
				if($("section")){
					$(".footer").css("position","relative");
				}
				if($(".section3").css('display')!='none'){
					$(".section3").hide();
					$(".footer").css("position","absolute");
					$(".block3_first").show();
					$(".block3_second").hide();
					$(".block3 p").css("color","#666666");
					$(".footer").css("position","absolute");
				}else if($(".section3").css('display')=='none'){
					shutall();
					all_gray();
					$(".block3_first").hide();
					$(".block3_second").show();
					$(".block3 p").css("color","#F5A623");
					$(".section3").toggle();
				}
				
			})
			$(".block4").click(function(){
				if($("section")){
					$(".footer").css("position","relative");
				}
				if($(".section4").css('display')!='none'){
					$(".section4").hide();
					$(".footer").css("position","absolute");
					$(".block4_first").show();
					$(".block4_second").hide();
					$(".block4 p").css("color","#666666");
					$(".footer").css("position","absolute");
				}else if($(".section4").css('display')=='none'){
					shutall();
					all_gray();
					$(".block4_first").hide();
					$(".block4_second").show();
					$(".block4 p").css("color","#F5A623");
					$(".section4").toggle();
				}
				
			})
		})
	</script>
</body>
</html>