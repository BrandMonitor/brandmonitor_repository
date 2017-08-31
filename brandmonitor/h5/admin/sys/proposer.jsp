
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<title>商标审核</title>

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
			body{background-color: white;overflow-x: hidden;}
			.content table tr{margin-top: 20px;}
			.content table{height: 120px;}
			.verify{display:none;background-color:#EFF4F7;height:300px;top:50px;left:25%;position: absolute;z-index: 999;width: 600px;box-shadow: 1px 1px 1px #cacaca;}
			.verify div{margin-top:10px;margin-left: 20px;width: 70%;}
			.verify input{padding:2px 5px;font-size:12px;height: 20px;}
			.verify textarea{margin-top:10px;margin-left: 14px;width: 70%;height:60px;padding:8px 10px;font-size:12px}
			.verify select{margin-top:10px;margin-left: 14px;width: 30%;}
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
			tbody a{color:dodgerblue;text-decoration: none;cursor: pointer;}
			
		</style>
	</head>

	<body>
		<div class="bs-example1" >
			<table class="table table-bordered" style="margin-bottom:60px;">
			  <thead>
				<tr>
				  <th>id</th>
				  <th>申请人</th>
				  <th>创建时间</th>
				  <th>审核状态</th>
				  <th>审核</th>
				</tr>
			  </thead>
			  <tbody>
				
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
			<div style="margin-top:15px">待审核申请人ID：  
				<input type="text" class="proposer_id" value="" readonly="readonly"/>
			</div>
			<div>待审核申请人：&nbsp; 
				<input type="text" class="proposer_name" value="" readonly="readonly"/>
			</div>
			<div>审核：&nbsp;&nbsp;&nbsp;&nbsp;
				<select>
					<option id="2">通过审核</option>
					<option id="3">不通过审核</option>
				</select>
			</div>
			<div>审核失败原因：
				<textarea class="reason" placeholder="不通过的理由"></textarea>
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
		
		<script type="text/javascript">
			
			var page=1,count;
			init(page);
			//初始化读取列表
			function init(page){
				var username = sessionStorage.getItem("admin_staffCode");
				var clientDigest = sessionStorage.getItem("admin_clientDigest");
				$(".bs-example1 tbody").empty();
				$.ajax({
					type:'get',
					url:'/kk_trademark/sys/applicantManage/getApplicantInfo',
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
							if(data[i].status==1){var status = '待审核';}
				            if(data[i].status==2){var status = '审核通过';}
							if(data[i].status==3){var status = '审核失败';}
							$(".bs-example1 tbody").append(
								'<tr>'
								  +'<td>'+data[i].id+'</td>'
								  +'<td>'+data[i].enterpriseName+'</td>'
								  +'<td>'+time+'</td>'
								  +'<td>'+status+'</td>'
								  +'<td><a>审核操作</a></td>'
								+'</tr>'
							)
						}
						$(".bs-example1 nav").show();//分页放后加载
						
						//申请人审核
						$("tbody").find("tr").find("td:nth-child(5)").click(function(){
							var proposer_id = $(this).closest("tr").find("td:nth-child(1)").text();
							
							var proposer_name = $(this).closest("tr").find("td:nth-child(2)").text();
							
							$(".verify .proposer_id").val(proposer_id);
							$(".verify .proposer_name").val(proposer_name);
							$(".verify").show();
						});
						$(".verify .close").click(function(){
							$(".verify").hide();
						});
						//提交审核
						$(".verify_sure").click(function(){
							var id = $(".verify .proposer_id").val();
							var status = $(".verify option:selected").attr("id");
							var reason = $(".verify .reason").text();
			//						alert('id:'+id+","+'status:'+status);
							$.ajax({
								type:'post',
								url:'/kk_trademark/sys/applicantManage/check',
								data:{"id":id,"status":status,"reason":reason},
								dataType:'json',
								beforeSend: function(request) {
						            request.setRequestHeader("staffCode",username);
						            request.setRequestHeader("clientDigest",clientDigest);
						        },
						        success:function(json){
//						        	alert(json.code);
						        	if(json.code==1){
						        		alert("确认审核");
						        		location.reload();
						        	}else{
						        		alert(json.message);
						        	}
						        },
						        error:function(XMLHttpRequest,textStatus){
						        	alert(json.message);
						        	alert(XMLHttpRequest.status);
						        	alert(textStatus);
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

</html>
