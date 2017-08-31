
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<title>商标订单</title>

		<meta name="keywords" content="Bootstrap模版,Bootstrap模版下载,Bootstrap教程,Bootstrap中文" />
		<meta name="description" content="站长素材提供Bootstrap模版,Bootstrap教程,Bootstrap中文翻译等相关Bootstrap插件下载" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link href="/kk_trademark/resources/admin/assets/css/bootstrap.min.css" rel="stylesheet" />
		<link rel="stylesheet" href="/kk_trademark/resources/admin/assets/css/font-awesome.min.css" />

		<link rel="stylesheet" href="/kk_trademark/resources/admin/assets/css/jquery-ui-1.10.3.full.min.css" />
		<link rel="stylesheet" href="/kk_trademark/resources/admin/assets/css/datepicker.css" />
		<link rel="stylesheet" href="/kk_trademark/resources/admin/assets/css/ui.jqgrid.css" />

		<link rel="stylesheet" href="/kk_trademark/resources/admin/assets/css/ace.min.css" />
		<link rel="stylesheet" href="/kk_trademark/resources/admin/assets/css/ace-rtl.min.css" />
		<link rel="stylesheet" href="/kk_trademark/resources/admin/assets/css/ace-skins.min.css" />

		<script src="/kk_trademark/resources/admin/assets/js/ace-extra.min.js"></script>
		
		<style>
			body{background-color: white;}
			.content table tr{margin-top: 20px;}
			.content table{height: 120px;}
			.verify{display:none;background-color:#EFF4F7;height:650px;top:0px;left:25%;position: absolute;z-index: 999;width: 600px;box-shadow: 1px 1px 1px #cacaca;}
			.verify div{margin-top:10px;margin-left: 20px;width: 70%;}
			.verify input{padding:2px 5px;font-size:12px;height: 20px;}
			.verify textarea{margin-top:10px;margin-left: 14px;width: 70%;height:60px;padding:8px 10px;font-size:12px}
			.verify select{margin-top:10px;margin-left: 14px;width: 30%;}
			.verify table{border:1px solid #cacaca;margin-top:10px}
			.verify table thead{background-color: #cccccc;}
			.verify table tr,.verify table td{border:1px solid #cacaca;padding: 2px 2px;}
			.verify_sure{margin-left: 45%;border:none;margin-top:15px;padding: 6px 12px;border-radius: 2px;background-color:#428BCA;color:white;font-family: "微软雅黑";}
			.verify section{background-color: #dfdfdf;padding: 5px 10px;}	
			.verify .close{border: 0;
			    background: transparent;
			    opacity: .4;
			    color: #d15b47;
			    padding: 0;
			    top: 30%;
			    right: 8px!important;
			    text-align: center;}
			.verify .close:before{content: "\f00d";
			    display: inline;
			    font-family: FontAwesome;
			    font-size: 16px;}
			.add_file {
			    position: absolute;
			    margin-top: -35px;
			    left: 10px;
			    width: 67px;
			    height: 30px;
			    opacity: 0;
			    filter: alpha(opacity=0);
			    cursor: pointer;
			}
			tbody a{color:dodgerblue;text-decoration: none;cursor: pointer;}
		</style>
	</head>

	<body>
		<div class="bs-example1" >
			<table class="table table-bordered" style="margin-bottom:60px;">
			  <thead>
				<tr>
				  <th>id</th>
				  <th>订单商标</th>
				  <th>申请人</th>
				  <th>商标说明</th>
				  <th>注册时间</th>
				  <th>委托书</th>
				  <th>费用</th>
				  <th>是否付款</th>
				  <th>注册方式</th>
				  <th>审核状态</th>
				  <th>审核子订单</th>
				</tr>
			  </thead>
			  <tbody>
				<img style="margin-top:50px" class="loading" src='http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Floading.gif'>
			  </tbody>
			</table>
			
			<footer style="position: fixed;width: 100%;background-color:#EEEEEE;bottom: 0px;height: 50px;">
				<nav style="left: 35%;margin-top: -10px;">
				  <ul class="pager">
				  	<span style="margin-right:30px">第<span class="now_page"></span>页</span>
				  	<li class="index_page"><a href="javascript:void(0);">首页</a></li>
				    <li class="prev_page"><a href="javascript:void(0);">上一页</a></li>
				          
				    <li class="next_page"><a href="javascript:void(0);">下一页</a></li>
				    <li class="last_page"><a href="javascript:void(0);">末页</a></li>
				    <span style="margin-left:30px">共<span class="totalpage"></span>页，总<span class="count"></span>条数据</span>
				 </ul>
				</nav>
			</footer>
		</div>
		
		<div class="verify">
			<section>审核申请人
				<a class="close"></a>
			</section>
			<div style="margin-top:15px">订单ID：  &nbsp;&nbsp;&nbsp;&nbsp;
				<input type="text" class="proposer_id" value="" readonly="readonly"/>
			</div>
			<table class="table_child_list">
				<thead>
					<tr>
						<td>子订单id</td>
						<td>审核状态</td>
						<td>审核原因</td>
					</tr>
				</thead>
				<tbody class="tr">
					
				</tbody>
			</table>
			<img style="margin-top:30px;margin-left:40%" id="loading" src='http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Floading.gif'>
			<div>审核：&nbsp;&nbsp;&nbsp;&nbsp;
				<select>
					<option id="2">通过审核</option>
					<option id="3">不通过审核</option>
				</select>
			</div>
			<div>审核失败原因：
				<textarea class="reason" placeholder="不通过的理由"></textarea>
			</div>
			<div>审核失败原因（图片）：
				<form id='formFile2' name='formFile' method="post" action="/kk_trademark/file/uploadFile" target='frameFile' enctype="multipart/form-data" >
					<img src="http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Fadd.jpg" width="38" height="38" alt="添加" style="margin-right:10px;" id="secondImageText">
					<input type="file" name="mfile" id="threeImage" class="add_file" hidefocus="hidefocus" title=" " />
				</form>
				<input type="hidden" name="TmPatternTwo"  id="TmPatternTwo_test" value=""  />
			</div>
			<button class="verify_sure">确 认</button>
		</div>

		<script type="text/javascript">
			window.jQuery || document.write("<script src='/kk_trademark/resources/admin/assets/js/jquery-2.0.3.min.js'>"+"<"+"/script>");
			
		</script>

		<script type="text/javascript">
			if("ontouchend" in document) document.write("<script src='/kk_trademark/resources/admin/assets/js/jquery.mobile.custom.min.js'>"+"<"+"/script>");
		</script>
		<script src="/kk_trademark/resources/admin/assets/js/bootstrap.min.js"></script>
		<script src="/kk_trademark/resources/admin/assets/js/typeahead-bs2.min.js"></script>

		<script src="/kk_trademark/resources/admin/assets/js/date-time/bootstrap-datepicker.min.js"></script>
		<script src="/kk_trademark/resources/admin/assets/js/jqGrid/jquery.jqGrid.min.js"></script>
		<script src="/kk_trademark/resources/admin/assets/js/jqGrid/i18n/grid.locale-en.js"></script>

		<script src="/kk_trademark/resources/admin/assets/js/ace-elements.min.js"></script>
		<script src="/kk_trademark/resources/admin/assets/js/ace.min.js"></script>
		<script src="http://malsup.github.io/jquery.form.js"></script>
		<script type="text/javascript">
			var page=1,count;
			init(page);
			//初始化读取列表
			function init(page){
				$(".loading").show();
				var username = sessionStorage.getItem("admin_staffCode");
				var clientDigest = sessionStorage.getItem("admin_clientDigest");
				$(".bs-example1 tbody").empty();
				$.ajax({
					type:'get',
					url:'/kk_trademark/sys/order/getOrderInfo',
					data:{"page":page,"pageSize":15},
					beforeSend: function(request) {
			            request.setRequestHeader("staffCode",username);
			            request.setRequestHeader("clientDigest",clientDigest);
			        },
					success:function(json){
						var data = json.data;
						count = json.count;
						var totalpage = Math.ceil(count/15);
						if(totalpage==0){
							totalpage=1;
						}
						$(".totalpage").text(totalpage);
						$(".count").text(count);
						$(".now_page").text(page);
						
						for(i=0;i<data.length;i++){
							var createTime = new Date(data[i].createTime);
							var year=createTime.getFullYear();     
				            var month=createTime.getMonth()+1;     
				            var date=createTime.getDate();
				            var time = year+"-"+month+"-"+date;
				            if(data[i].checkStatus==1){
								var status = '待审核';
							}else if(data[i].checkStatus==2){var status = '审核通过';}
							else if(data[i].checkStatus==3){var status = '审核失败';}
							if(data[i].isPayment){var isPayment = '已付款'}
							else{
								var isPayment = '未付款'
							}
							if(data[i].payType==1){var payType = '加急'}
							else if(data[i].payType==2){var payType = '普通'}
							$(".bs-example1 tbody").append(
								'<tr>'
								  +'<td>'+data[i].id+'</td>'
								  +'<td>'+data[i].trademarkName+'</td>'
								  +'<td>'+data[i].proposer+'</td>'
								  +'<td>'+data[i].explains+'</td>'
								  +'<td>'+time+'</td>'
								  +'<td>'+data[i].entrust+'</td>'
								  +'<td>'+data[i].money+'</td>'
								  +'<td>'+isPayment+'</td>'
								  +'<td>'+payType+'</td>'
								  +'<td>'+status+'</td>'
								  +'<td><a>查看</a></td>'
								+'</tr>'
							)
						}
						$(".bs-example1 nav").show();//分页放后加载
						$(".loading").hide();
						//查看子订单
						$("tbody").find("tr").find("td:nth-child(11)").click(function(){
							$(".proposer_id").val('');
							$(".verify tbody").empty();
							$("#secondImageText").attr("src","http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Fadd.jpg");
							
							var id = $(this).closest("tr").find("td:nth-child(1)").text();
							var index_id = $(this).closest("tr").index();
							var page_num = $("#grid-pager_center tr").find("td[dir='ltr']").find("input").val();
	//						alert("id="+id+','+"page="+page);
							var status = $(this).closest("tr").find("td:nth-child(10)").text();
							$(".proposer_id").val(id);
							$.ajax({
								type:'get',
								url:'/kk_trademark/sys/order/getOrderInfo',
								data:{"page":page_num},
								beforeSend: function(request) {
						            request.setRequestHeader("staffCode",username);
						            request.setRequestHeader("clientDigest",clientDigest);
						        },
								success:function(json){
									var data = json.data[index_id].orderRelate;
									paytype = json.data[index_id].payType;
									for(i=0;i<data.length;i++){
//										console.log(data[i].checkStatus);
//										if(data[i].checkStatus==1){
//											var status = '待审核';
//										}else if(data[i].checkStatus==2){var status = '审核通过';}
//										else if(data[i].checkStatus==3){var status = '审核失败';}
										$(".table_child_list tbody").append(
											'<tr>'
												+'<td>'+data[i].id+'</td>'
												+'<td>'+status+'</td>'
												+'<td>'+data[i].reason+'</td>'
											+'</tr>'
										)
									}
									$("#loading").hide();
								}
							});
							//上传图片
							
							$("#threeImage").change(function(){
								$("#formFile2").ajaxSubmit({
							        type:'post',
							        url:'/kk_trademark/file/uploadFile',
							        success:function(data){
							        	type_img = data;
							        	$("#TmPatternTwo_test").show();
							        	$("#secondImageText").attr("src",data);
							        	console.log(type_img);
							        },
							        error:function(XMLHttpRequest,textStatus){
	//						        	alert(XMLHttpRequest.status);
	//						        	alert(textStatus);
							        }
							    });
							})
							$(".verify").show();
						});
						var type_img,paytype;
						$(".verify .close").click(function(){
							$(".verify").hide();
						});
						//提交审核
						$(".verify_sure").click(function(){
							var id = $(".verify .proposer_id").val();
							var status = $(".verify option:selected").attr("id");
							var reason = $(".verify .reason").text();
	//						alert('id:'+id+","+'status:'+status+','+"reason"+reason);
	//                      alert(paytype);alert(id);alert(status);alert(reason);
							$.ajax({
								type:'post',
								url:'/kk_trademark/sys/order/check',
								data:{"id":id,"checkStatus":status,"img":type_img,"reason":reason,"payType":paytype},
								dataType:'json',
								beforeSend: function(request) {
						            request.setRequestHeader("staffCode",username);
						            request.setRequestHeader("clientDigest",clientDigest);
						        },
						        success:function(json){
						        	if(json.code==1){
						        		alert("确认审核");
						        		location.reload();
						        	}else{
						        		alert(json.message);
						        	}
						        },
						        error:function(XMLHttpRequest,textStatus){
						        	console.log(json.message);
						        	console.log(XMLHttpRequest.status);
						        	console.log(textStatus);
						        }
							})
						})
					}
				})
			}
			$(".index_page").unbind("click").click(function(){
				page=1;
				init(page);
			});
			$(".last_page").unbind("click").click(function(){
				page=Math.ceil(count/15);
				init(page);
			});
			$(".prev_page").unbind("click").click(function(){
				page--;
				if(page==0){
					page=1;
					alert("已经是第一页");
				}else{
					init(page);
				}
			});
			$(".next_page").unbind("click").click(function(){
				page++;
				if(page>Math.ceil(count/15)){
					page=Math.ceil(count/15);
					alert("已经是最后一页");
				}else{
					init(page);
				}
				
			})
		</script>
</body>
<script>
	// $(function(){
	// 	$(".main-container-inner").css("overflow","hidden").css("top","39px");
	// })
</script>
</html>
