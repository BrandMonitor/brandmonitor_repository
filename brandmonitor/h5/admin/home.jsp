<!DOCTYPE html>
<html lang="en">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<title>我的社区</title>
		
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		
		<link href="/kk_trademark/resources/admin/assets/css/bootstrap.min.css" rel="stylesheet" />
		
		<link href="/kk_trademark/resources/admin/assets/css/font-awesome.min.css" rel="stylesheet">
		
		<link rel="stylesheet" href="/kk_trademark/resources/admin/assets/css/ace.min.css" />
		<link rel="stylesheet" href="/kk_trademark/resources/admin/assets/css/ace-rtl.min.css" />
		<link rel="stylesheet" href="/kk_trademark/resources/admin/assets/css/ace-skins.min.css" />
		<style>
			html{overflow: hidden;}
			
		</style>
		<script src="/kk_trademark/resources/admin/assets/js/ace-extra.min.js"></script>

	</head>

	<body>
		<div class="navbar navbar-default" id="navbar">
			<div class="navbar-container" id="navbar-container">
				<div class="navbar-header pull-left">
					<a href="#" class="navbar-brand">
						<small>
							<i class="icon-leaf"></i>
							后台管理系统
						</small>
					</a><!-- /.brand -->
				</div><!-- /.navbar-header -->

				<div class="navbar-header pull-right" role="navigation">
					<ul class="nav ace-nav">
						<li class="light-blue" style="margin-right: 20px;font-weight: bold;">
							<span>你好，</span><span id="username"></span>
							<!--<div class="btn btn-app btn-xs btn-warning ace-settings-btn" id="ace-settings-btn">-->
								<i style="margin-left: 10px;" class="set icon-cog bigger-150"></i>
								<div id="setting">
									<ul>
										<li class="userinfo_set">个人设置</li>
										<li class="pwd_set">修改密码</li>
										<a href="/kk_trademark/login.jsp" style="color:block;text-decoration: none;"><li>退出</li></a>
									</ul>
								</div>
							<!--</div>-->
						</li>
					</ul><!-- /.ace-nav -->
				</div><!-- /.navbar-header -->
			</div><!-- /.container -->
		</div>

		<div class="main-container" id="main-container">
			

			<div class="main-container-inner">
				<a class="menu-toggler" id="menu-toggler" href="#">
					<span class="menu-text"></span>
				</a>

				<div class="sidebar" id="sidebar">
					
					
					<!--菜单位置-->
					<ul class="nav nav-list" style="margin-top:5px">
						
					</ul><!-- /.nav-list -->

					<div class="sidebar-collapse" id="sidebar-collapse">
						<i class="icon-double-angle-left" data-icon1="icon-double-angle-left" data-icon2="icon-double-angle-right"></i>
					</div>

					
				</div>

				<div class="main-content">
					<div class="breadcrumbs" id="breadcrumbs">
						
					
						<ul class="breadcrumb">
							<li>
								<!--<i class="icon-home home-icon"></i>-->
								<img class="first_title" style="width: 18px;margin-top:-3px;" src="">
								<span class="first_title" href="#" id="first_title"></span>
							</li>
							<li class="active second_title" id="second_title"></li>
						</ul><!-- .breadcrumb -->
					</div>
					
					<div style="text-align: left;padding-left: 10px;" class="sidebar-shortcuts" id="sidebar-shortcuts">
					

					</div><!-- #sidebar-shortcuts -->

					<div class="page-content">
						
						<iframe id="iframe" src="" width="100%"  frameborder="0">
						
						</iframe>
					</div><!-- /.page-content -->
				</div><!-- /.main-content -->

				
			</div><!-- /.main-container-inner -->

		</div><!-- /.main-container -->

		
		<!--<script type="text/javascript">
			window.jQuery || document.write("<script src='/resources/admin/assets/js/jquery-2.0.3.min.js'>"+"<"+"script>");
		</script>-->

		<script src="/kk_trademark/resources/admin/assets/js/jquery-2.0.3.min.js"></script>
		<script src="/kk_trademark/resources/admin/assets/js/jquery.mobile.custom.min.js"></script>
		<!--<script type="text/javascript">
			if("ontouchend" in document) document.write("<script src='/kk_trademark/resources/admin/assets/js/jquery.mobile.custom.min.js'>"+"<"+"script>");
		</script>-->
		<script src="/kk_trademark/resources/admin/assets/js/bootstrap.min.js"></script>
		<script src="/kk_trademark/resources/admin/assets/js/typeahead-bs2.min.js"></script>


		<script src="/kk_trademark/resources/admin/assets/js/jquery-ui-1.10.3.custom.min.js"></script>
		<script src="/kk_trademark/resources/admin/assets/js/jquery.ui.touch-punch.min.js"></script>
		<script src="/kk_trademark/resources/admin/assets/js/jquery.slimscroll.min.js"></script>
		<script src="/kk_trademark/resources/admin/assets/js/jquery.easy-pie-chart.min.js"></script>
		<script src="/kk_trademark/resources/admin/assets/js/jquery.sparkline.min.js"></script>
		<script src="/kk_trademark/resources/admin/assets/js/flot/jquery.flot.min.js"></script>
		<script src="/kk_trademark/resources/admin/assets/js/flot/jquery.flot.pie.min.js"></script>
		<script src="/kk_trademark/resources/admin/assets/js/flot/jquery.flot.resize.min.js"></script>

		<!-- ace scripts -->

		<script src="/kk_trademark/resources/admin/assets/js/ace-elements.min.js"></script>
		<!--<script src="/kk_trademark/resources/admin/assets/js/ace.min.js"></script>-->

		<!-- inline scripts related to this page -->

		<script type="text/javascript">
			jQuery(function($) { 
				$('.easy-pie-chart.percentage').each(function(){
					var $box = $(this).closest('.infobox');
					var barColor = $(this).data('color') || (!$box.hasClass('infobox-dark') ? $box.css('color') : 'rgba(255,255,255,0.95)');
					var trackColor = barColor == 'rgba(255,255,255,0.95)' ? 'rgba(255,255,255,0.25)' : '#E2E2E2';
					var size = parseInt($(this).data('size')) || 50;
					$(this).easyPieChart({
						barColor: barColor,
						trackColor: trackColor,
						scaleColor: false,
						lineCap: 'butt',
						lineWidth: parseInt(size/10),
						animate: /msie\s*(8|7|6)/.test(navigator.userAgent.toLowerCase()) ? false : 1000,
						size: size
					});
				})
			
				$('.sparkline').each(function(){
					var $box = $(this).closest('.infobox');
					var barColor = !$box.hasClass('infobox-dark') ? $box.css('color') : '#FFF';
					$(this).sparkline('html', {tagValuesAttribute:'data-values', type: 'bar', barColor: barColor , chartRangeMin:$(this).data('min') || 0} );
				});
			
			
			
			
			  var placeholder = $('#piechart-placeholder').css({'width':'90%' , 'min-height':'150px'});
			  var data = [
				{ label: "social networks",  data: 38.7, color: "#68BC31"},
				{ label: "search engines",  data: 24.5, color: "#2091CF"},
				{ label: "ad campaigns",  data: 8.2, color: "#AF4E96"},
				{ label: "direct traffic",  data: 18.6, color: "#DA5430"},
				{ label: "other",  data: 10, color: "#FEE074"}  
			  ]
			   function drawPieChart(placeholder, data, position) {
			 	  $.plot(placeholder, data, {
					series: {
						pie: {
							show: true,
							tilt:0.8,
							highlight: {
								opacity: 0.25
							},
							stroke: {
								color: '#fff',
								width: 2
							},
							startAngle: 2
						}
					},
					legend: {
						show: true,
						position: position || "ne", 
						labelBoxBorderColor: null,
						margin:[-30,15]
					}
					,
					grid: {
						hoverable: true,
						clickable: true
					}
				 })
			 }
			 drawPieChart(placeholder, data);
			
			 placeholder.data('chart', data);
			 placeholder.data('draw', drawPieChart);
			
			
			
			  var $tooltip = $("<div class='tooltip top in'><div class='tooltip-inner'></div></div>").hide().appendTo('body');
			  var previousPoint = null;
			
			  placeholder.on('plothover', function (event, pos, item) {
				if(item) {
					if (previousPoint != item.seriesIndex) {
						previousPoint = item.seriesIndex;
						var tip = item.series['label'] + " : " + item.series['percent']+'%';
						$tooltip.show().children(0).text(tip);
					}
					$tooltip.css({top:pos.pageY + 10, left:pos.pageX + 10});
				} else {
					$tooltip.hide();
					previousPoint = null;
				}
				
			 });
			
				var d1 = [];
				for (var i = 0; i < Math.PI * 2; i += 0.5) {
					d1.push([i, Math.sin(i)]);
				}
			
				var d2 = [];
				for (var i = 0; i < Math.PI * 2; i += 0.5) {
					d2.push([i, Math.cos(i)]);
				}
			
				var d3 = [];
				for (var i = 0; i < Math.PI * 2; i += 0.2) {
					d3.push([i, Math.tan(i)]);
				}
				
			
				var sales_charts = $('#sales-charts').css({'width':'100%' , 'height':'220px'});
				$.plot("#sales-charts", [
					{ label: "Domains", data: d1 },
					{ label: "Hosting", data: d2 },
					{ label: "Services", data: d3 }
				], {
					hoverable: true,
					shadowSize: 0,
					series: {
						lines: { show: true },
						points: { show: true }
					},
					xaxis: {
						tickLength: 0
					},
					yaxis: {
						ticks: 10,
						min: -2,
						max: 2,
						tickDecimals: 3
					},
					grid: {
						backgroundColor: { colors: [ "#fff", "#fff" ] },
						borderWidth: 1,
						borderColor:'#555'
					}
				});
			
			
				$('#recent-box [data-rel="tooltip"]').tooltip({placement: tooltip_placement});
				function tooltip_placement(context, source) {
					var $source = $(source);
					var $parent = $source.closest('.tab-content')
					var off1 = $parent.offset();
					var w1 = $parent.width();
			
					var off2 = $source.offset();
					var w2 = $source.width();
			
					if( parseInt(off2.left) < parseInt(off1.left) + parseInt(w1 / 2) ) return 'right';
					return 'left';
				}
			
			
				$('.dialogs,.comments').slimScroll({
					height: '300px'
			    });
				
				
				var agent = navigator.userAgent.toLowerCase();
				if("ontouchstart" in document && /applewebkit/.test(agent) && /android/.test(agent))
				  $('#tasks').on('touchstart', function(e){
					var li = $(e.target).closest('#tasks li');
					if(li.length == 0)return;
					var label = li.find('label.inline').get(0);
					if(label == e.target || $.contains(label, e.target)) e.stopImmediatePropagation() ;
				});
			
				$('#tasks').sortable({
					opacity:0.8,
					revert:true,
					forceHelperSize:true,
					placeholder: 'draggable-placeholder',
					forcePlaceholderSize:true,
					tolerance:'pointer',
					stop: function( event, ui ) {//just for Chrome!!!! so that dropdowns on items don't appear below other items after being moved
						$(ui.item).css('z-index', 'auto');
					}
					}
				);
				$('#tasks').disableSelection();
				$('#tasks input:checkbox').removeAttr('checked').on('click', function(){
					if(this.checked) $(this).closest('li').addClass('selected');
					else $(this).closest('li').removeClass('selected');
				});
				
				
			})
		</script>
<!--<script type="text/javascript">
var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3Fe9e1d61340ff3d9495a8cca04ebdb49d' type='text/javascript'%3E%3C/script%3E"));
</script>-->
<script src="/kk_trademark/resources/admin/assets/js/jquery-2.0.3.min.js"></script>
<script>
	//用户的信息	
//	var clientDigest = sessionStorage.getItem("token");
	var username = sessionStorage.getItem("admin_staffCode");
	var clientDigest = sessionStorage.getItem("admin_clientDigest");
	$("#username").text(username);
	$(function(){
//		$("#username").text(userName);
		
		$("iframe").height($(window).height()-87);
		//设置菜单鼠标移入的显示隐藏
		var isShow = false;
		$(".set").mouseover(function(){
			$("#setting").show();
		});
		$("#setting").mouseover(function(){
			isShow = true;
			$(this).show();
		});
		$("#setting").mouseout(function(){
			if(isShow){
				$(this).hide();
				isShow = false;
			}
		})
		//iframe的高度适应窗口
		$(".page-content").height($(window).height());
		
		$.ajax({  
	        type:"get",  
	        url:'/kk_trademark/sys/home/index',  
//	        data:{"page":1,"start":1,"limit":25},  
	        dataType:"JSON", 
	        beforeSend: function(request) {
	            request.setRequestHeader("staffCode",username);
	            request.setRequestHeader("clientDigest",clientDigest);
	        },
	        success:function(json) { 
	        	var json = json.data;
	        	for(i=0;i<json.length;i++){
//					if(!json[i].children){
						var children = json[i].children;
						var children_lth = json[i].children.length;
		        		if(children_lth==0||children_lth==undefined){
			        		$(".nav-list").append(
				        		'<li class="first_stage">'
									+'<a href="javascript:void(0);">'
										+'<img class="img" style="width: 18px;margin-top:-3px;margin-right: 8px;" src="/'+json[i].icon+'">'
		//									+'<i class="icon-dashboard"></i>'
										+'<span class="menu-text">'+json[i].title+'</span>'
									+'</a>'
								+'</li>'
				        	);
			        	}else if(children_lth!=0){
			        		$(".nav-list").append(
			        			'<li class="first_stage">'
				        			+'<a href="javascript:void(0);" class="dropdown-toggle">'
										+'<img class="img" style="width: 18px;margin-top:-3px;margin-right: 8px;" src="/'+json[i].icon+'">'
										+'<span class="menu-text">'+json[i].title+'</span>'
		
										+'<b class="arrow icon-angle-down"></b>'
									+'</a>'
		
									+'<ul class="submenu" id="child'+i+'">'
									+'</ul>'
								+'</li>'
			        		)
			        		for(j=0;j<children_lth;j++){
			        			var grandchildren = children[j].children;
			        			var grandchildren_lth = children[j].children.length;
			        			if(grandchildren_lth==0){
		        					$("#child"+i).append(
				        				'<li data-i="'+i+'" data-j="'+j+'">'
											+'<a href="javascript:void(0);" data-url="'+children[j].url+'">'
												+'<i class="icon-double-angle-right"></i>'+children[j].title
											+'</a>' 
										+'</li>'
				        			)
		        				}else if(grandchildren_lth!=0){
		        					$("#child"+i).append(
				        				'<li>'
											+'<a href="javascript:void(0);" data-url="'+children[j].url+'">'
												+'<i class="icon-double-angle-right"></i>'+children[j].title
												
												+'<b class="arrow icon-angle-down"></b>'
											+'</a>' 
											
											+'<ul class="submenu" id="grandchild'+j+'">'
											+'</ul>'
										+'</li>'
				        			)
		        					
		        					for(k=0;k<grandchildren_lth;k++){
			        					$("#grandchild"+i).append(
					        				'<li>'
												+'<a href="javascript:void(0);" data-url="'+children[j].url+'">'
													+'<i class="icon-double-angle-right"></i>'+grandchildren[k].title
												+'</a>' 
											+'</li>'
					        			)
			        				}
		        				}
			        		}
			        	}
//			        }
	        	};
	        	$(".nav-list li:nth-child(1) .submenu").show();
	        	$(".nav-list li:nth-child(1) li:nth-child(1)").addClass("active");
	        	
	        	//iframe初始化
	        	var iframe = document.getElementById("iframe");
	        	iframe.src = json[0].children[0].url;
	        	
	        	//展开/隐藏子菜单
	        	$(".dropdown-toggle").click(function(){
	        		var display = $(this).next(".submenu").css("display");
	        		$(".submenu").hide();
	        		if(display=='none'){
	        			$(".submenu .active").parent(".submenu").parent(".first_stage").removeClass("active");
	        			$(this).next(".submenu").show();
	        		}else if(display=='block'){
	        			$(this).next(".submenu").hide();
	        			$(".submenu .active").parent(".submenu").parent(".first_stage").addClass("active");
	        		}
	        		//当前选中菜单指针定位（展开父级和收回时指针定位）
//	        		var active = $(".submenu .active").parent(".submenu").css("display");
//	        		if(active='none'){
//						$(".submenu .active").parent(".submenu").parent(".first_stage").addClass("active");
//					}else{$(".submenu .active").parent(".submenu").parent(".first_stage").removeClass("active");}
			    })
	        	
	        	//子菜单指针定位和右侧显示当前打开的菜单
	        	$(".submenu li").click(function(){
	        		$(".submenu li").removeClass("active");
	        		$(this).addClass("active");
	        		var icon_src = $(this).parent(".submenu").siblings(".dropdown-toggle").find("img").attr("src");
	        		var first_title = $(this).parent(".submenu").siblings(".dropdown-toggle").text();
	        		
	        		var second_title = $(this).text();
	        		$("ul.breadcrumb .first_title").text(first_title);
	        		$("ul.breadcrumb .second_title").text(second_title);
	        		$("ul.breadcrumb img.first_title").attr("src",icon_src);
	        	});
	        	
	        	//左侧菜单导航的收缩
	        	$(".sidebar-collapse i").click(function(){
		        	var judge = $(".sidebar").hasClass("menu-min");
		        	if(!judge){
		        		$(".sidebar").addClass("menu-min");
					    $(".icon-double-angle-left").addClass("icon-double-angle-right");
		        	}else if(judge){
		        		$(".sidebar").removeClass("menu-min");
				    	$(".icon-double-angle-left").removeClass("icon-double-angle-right");
		        	}
				});
				
				$("#first_title").text($(".nav-list li:nth-child(1) a span").text());
				$("#second_title").text($(".nav-list li:nth-child(1) ul.submenu li:nth-child(1)").text());
				$("img.first_title").attr("src",$(".nav-list li:nth-child(1) img").attr("src"));
				
				//子菜单指针定位和右侧显示当前打开的菜单
	        	$(".submenu li").click(function(){
	        		$(".submenu li").removeClass("active");
	        		$(this).addClass("active");
	        		var icon_src = $(this).parent(".submenu").siblings(".dropdown-toggle").find("img").attr("src");
	        		var first_title = $(this).parent(".submenu").siblings(".dropdown-toggle").text();
	        		
	        		var second_title = $(this).text();
	        		$("ul.breadcrumb .first_title").text(first_title);
	        		$("ul.breadcrumb .second_title").text(second_title);
	        		$("ul.breadcrumb img.first_title").attr("src",icon_src);
	        	});
				//菜单切换
				$(".submenu a").click(function(){
					var page_url = $(this).data("url");
					iframe.src = page_url;
				});
				
				
	        },
	        error:function(XMLHttpRequest,textStatus){
	        	alert(XMLHttpRequest.status);
	        	alert(textStatus)
	        }
	    }); 
	    
	    //用户个人设置
	    $(".userinfo_set").click(function(){
	    	iframe.src = "/sys/user/sysUserUpdate";
	    	$("li.active").removeClass("active");
	    	$(".first_title").text("个人设置");
	    	$(".second_title").text("修改信息");
	    });

	   
	    //用户密码修改
	    $(".pwd_set").click(function(){
	    	iframe.src = "/sys/user/sysUserPwd";
	    	$("li.active").removeClass("active");
	    	$(".first_title").text("个人设置");
	    	$(".second_title").text("修改密码");
	    });

	})
	</script>
	</body>
</html>

