
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<title>子订单商标审核</title>

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
		</style>
	</head>

	<body>
		
		<div class="main-container" id="main-container" >
			<script type="text/javascript">
				try{ace.settings.check('main-container' , 'fixed')}catch(e){}
			</script>
			<div class="main-container-inner">
				<a class="menu-toggler" id="menu-toggler" href="#">
					<span class="menu-text"></span>
				</a>

				<div class="main-content" style="margin-left:0 ;">
					<div class="page-content">
						<div class="row">
							<div class="col-xs-12">
								<!-- PAGE CONTENT BEGINS -->

								<table id="grid-table" style="width:100%;"></table>

								<div id="grid-pager" style="position: fixed;bottom: 0px;"></div>

								<script type="text/javascript">
									var $path_base = "/";//this will be used in gritter alerts containing images
								</script>

								<!-- PAGE CONTENT ENDS -->
							</div><!-- /.col -->
						</div><!-- /.row -->
					</div><!-- /.page-content -->
					
				</div><!-- /.main-content -->

			</div><!-- /.main-container-inner -->
			
		</div><!-- /.main-container -->
		
		<div class="verify">
			<section>审核商标子订单
				<a class="close"></a>
			</section>
			<div style="margin-top:15px">待审核子订单ID：  
				<input type="text" class="proposer_id" value="" readonly="readonly"/>
			</div>
			<!--<div>待审核子订单：&nbsp; 
				<input type="text" class="proposer_name" value="" readonly="readonly"/>
			</div>-->
			<div>审核：&nbsp;&nbsp;&nbsp;&nbsp;
				<select>
					<option id="2">通过审核</option>
					<option id="3">不通过审核</option>
				</select>
			</div>
			<div>审核失败原因：
				<textarea placeholder="不通过的理由"></textarea>
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
			
				init();
	//初始化读取列表
	function init(){
		page = location.search.split("?")[1].split("&")[0].split("=")[1];
		id = location.search.split("?")[1].split("&")[1].split("=")[1];
//		alert("page="+page+','+"id="+id);
		var username = sessionStorage.getItem("admin_staffCode");
		var clientDigest = sessionStorage.getItem("admin_clientDigest");
//		alert(page);
		$.ajax({
			type:'get',
			url:"/kk_trademark/sys/order/getOrderInfo",
			data:{"page":page},
			dataType:'json',
			beforeSend: function(request) {
	            request.setRequestHeader("staffCode","aaa");
	            request.setRequestHeader("clientDigest","5UY0YER21840ORB3P52B");
	        },
			success:function(json){
				var data = json.data[id].orderRelate;
				var grid_data = [];
				for(i=0;i<data.length;i++){
					if(data[i].checkStatus==1){
						var status = '待审核';
					}else if(data[i].checkStatus==2){var status = '审核通过';}
					else if(data[i].checkStatus==3){var status = '审核失败';}
					
					var t = {子订单id:data[i].id,审核状态:status,审核原因:data[i].reason,审核原因图片形式:data[i].img,备注:data[i].remark,审核:'审核订单'}
					
					grid_data.push(t);
				};
				jQuery(function($) {
					var grid_selector = "#grid-table";
					var pager_selector = "#grid-pager";
				
					jQuery(grid_selector).jqGrid({
						data: grid_data,
						datatype: "local",
						height: "100%",
						colNames:['子订单id','审核状态','审核原因','审核原因（图片）','备注','审核'],
						colModel:[
							{name:'子订单id',index:'子订单id', width:15, sorttype:"int", editable: true},
							{name:'审核状态',index:'审核状态', width:15, sorttype:"int", editable: true},
							{name:'审核原因',index:'审核原因', width:15, sorttype:"int", editable: true},
							{name:'审核原因（图片）',index:'审核原因（图片）', width:15, sorttype:"int", editable: true},
							{name:'备注',index:'备注', width:15, sorttype:"int", editable: true},
							{name:'审核',index:'审核', width:15, sorttype:"int", editable: true},
						],
				
						viewrecords : true,//定义是否要显示总记录数
						rowNum:25,//每页显示数据条数
//									rowList:[10,20,30],//用于改变显示行数的下拉列表框的元素数组。即每页多少条数据
						pager : pager_selector,//定义翻页用的导航栏
						altRows: true,//设置表格 zebra-striped 值
						//toppager: true,
						
//						multiselect: true,//定义是否可以多选
						//multikey: "ctrlKey",
				        multiboxonly: true,//只有当multiselect = true.起作用，当multiboxonly 为ture时只有选择checkbox才会起作用
				
						loadComplete : function() {//当从服务器返回响应时执行，xhr：XMLHttpRequest 对象
							var table = this;
							setTimeout(function(){
								styleCheckbox(table);
								
								updateActionIcons(table);
								updatePagerIcons(table);
								enableTooltips(table);
							}, 0);
						},
//						loadComplete: function() {//动态填充select值    
//							$(list2).setColProp('deptName', { editoptions: { value: countries} });    
//						},
						editurl: "/hope/sys/user/showlist",//nothing is saved//定义对form编辑时的url
	//					caption: "jqGrid with inline editing",//表格名称
				
				
						autowidth: true//如果为ture时，则当表格在首次被创建时会根据父元素比例重新调整表格宽度。如果父元素宽度改变，为了使表格宽度能够自动调整则需要实现函数：setGridWidth
					});
					
					
					
					function aceSwitch( cellvalue, options, cell ) {
						setTimeout(function(){
							$(cell) .find('input[type=checkbox]')
									.wrap('<label class="inline" />')
								.addClass('ace ace-switch ace-switch-5')
								.after('<span class="lbl"></span>');
						}, 0);
					}
					//enable datepicker(日期选择器)
					function pickDate( cellvalue, options, cell ) {
						setTimeout(function(){
							$(cell) .find('input[type=text]')
									.datepicker({format:'yyyy-mm-dd' , autoclose:true}); 
						}, 0);
					}
					function styleCheckbox(table) {
					/**
						$(table).find('input:checkbox').addClass('ace')
						.wrap('<label />')
						.after('<span class="lbl align-top" />')
				
				
						$('.ui-jqgrid-labels th[id*="_cb"]:first-child')
						.find('input.cbox[type=checkbox]').addClass('ace')
						.wrap('<label />').after('<span class="lbl align-top" />');
					*/
					}
					function updateActionIcons(table) {
						/**
						var replacement = 
						{
							'ui-icon-pencil' : 'icon-pencil blue',
							'ui-icon-trash' : 'icon-trash red',
							'ui-icon-disk' : 'icon-ok green',
							'ui-icon-cancel' : 'icon-remove red'
						};
						$(table).find('.ui-pg-div span.ui-icon').each(function(){
							var icon = $(this);
							var $class = $.trim(icon.attr('class').replace('ui-icon', ''));
							if($class in replacement) icon.attr('class', 'ui-icon '+replacement[$class]);
						})
						*/
					}
					function style_edit_form(form) {
						//enable datepicker on "sdate" field and switches for "stock" field
						form.find('input[name=sdate]').datepicker({format:'yyyy-mm-dd' , autoclose:true})
							.end().find('input[name=stock]')
								  .addClass('ace ace-switch ace-switch-5').wrap('<label class="inline" />').after('<span class="lbl"></span>');
				
						//update buttons classes
						var buttons = form.next().find('.EditButton .fm-button');
						buttons.addClass('btn btn-sm').find('[class*="-icon"]').remove();//ui-icon, s-icon
						buttons.eq(0).addClass('btn-primary').prepend('<i class="icon-ok"></i>');
						buttons.eq(1).prepend('<i class="icon-remove"></i>')
						
						buttons = form.next().find('.navButton a');
						buttons.find('.ui-icon').remove();
						buttons.eq(0).append('<i class="icon-chevron-left"></i>');
						buttons.eq(1).append('<i class="icon-chevron-right"></i>');		
					}
				
					function style_delete_form(form) {
						var buttons = form.next().find('.EditButton .fm-button');
						buttons.addClass('btn btn-sm').find('[class*="-icon"]').remove();//ui-icon, s-icon
						buttons.eq(0).addClass('btn-danger').prepend('<i class="icon-trash"></i>');
						buttons.eq(1).prepend('<i class="icon-remove"></i>')
					}
					
					function style_search_filters(form) {
						form.find('.delete-rule').val('X');
						form.find('.add-rule').addClass('btn btn-xs btn-primary');
						form.find('.add-group').addClass('btn btn-xs btn-success');
						form.find('.delete-group').addClass('btn btn-xs btn-danger');
					}
					function style_search_form(form) {
						var dialog = form.closest('.ui-jqdialog');
						var buttons = dialog.find('.EditTable')
						buttons.find('.EditButton a[id*="_reset"]').addClass('btn btn-sm btn-info').find('.ui-icon').attr('class', 'icon-retweet');
						buttons.find('.EditButton a[id*="_query"]').addClass('btn btn-sm btn-inverse').find('.ui-icon').attr('class', 'icon-comment-alt');
						buttons.find('.EditButton a[id*="_search"]').addClass('btn btn-sm btn-purple').find('.ui-icon').attr('class', 'icon-search');
					}
					
					function beforeDeleteCallback(e) {
						var form = $(e[0]);
						if(form.data('styled')) return false;
						
						form.closest('.ui-jqdialog').find('.ui-jqdialog-titlebar').wrapInner('<div class="widget-header" />')
						style_delete_form(form);
						
						form.data('styled', true);
					}
					
					function beforeEditCallback(e) {
						var form = $(e[0]);
						form.closest('.ui-jqdialog').find('.ui-jqdialog-titlebar').wrapInner('<div class="widget-header" />')
						style_edit_form(form);
					}
					
					function updatePagerIcons(table) {
						var replacement = 
						{
							'ui-icon-seek-first' : 'icon-double-angle-left bigger-140',
							'ui-icon-seek-prev' : 'icon-angle-left bigger-140',
							'ui-icon-seek-next' : 'icon-angle-right bigger-140',
							'ui-icon-seek-end' : 'icon-double-angle-right bigger-140'
						};
						$('.ui-pg-table:not(.navtable) > tbody > tr > .ui-pg-button > .ui-icon').each(function(){
							var icon = $(this);
							var $class = $.trim(icon.attr('class').replace('ui-icon', ''));
							
							if($class in replacement) icon.attr('class', 'ui-icon '+replacement[$class]);
						})
					}
				
					function enableTooltips(table) {
						$('.navtable .ui-pg-button').tooltip({container:'body'});
						$(table).find('.ui-pg-div').tooltip({container:'body'});
					}
					$(".ui-jqgrid-bdiv").height($(window).height()-97).css("overflow-x","hidden");
					
					//选中记录
					$("#grid-table tr").click(function(){
						var state = $(this).find("td:last-child").text();
						if($(".ui-state-highlight")){
							$(".btn_edit,.del_edit").removeAttr("disabled");
						}else{
							$(".btn_edit,.del_edit").attr("disabled","true");
						}
					});
					//换页后不可编辑（未选择记录）
					$("#grid-pager_center table td").click(function(){
						$(".btn_edit,.del_edit").attr("disabled","true");
						//换页之后再判断一次是否选中记录
						$("#grid-table tr td").click(function(){
							var state = $(this).find("td:last-child").text();
							if($(".ui-state-highlight")){
								$(".btn_edit,.del_edit").removeAttr("disabled");
							}else{
								$(".btn_edit,.del_edit").attr("disabled","true");
							}
						});
					});
					//加载完表格后
					$("#grid-table tbody").find("tr").find("td:nth-child(6)").css("color","dodgerblue").css("cursor","pointer");
					//查看子订单
					$("#grid-table tbody").find("tr").find("td:nth-child(6)").click(function(){
						var proposer_id = $(this).closest("tr").find("td:nth-child(1)").text();
//						var proposer_name = $(this).closest("tr").find("td:nth-child(2)").text();
						$(".verify .proposer_id").val(proposer_id);
//						$(".verify .proposer_name").val(proposer_name);
						$(".verify").show();
					});
					$(".verify .close").click(function(){
						$(".verify").hide();
					});
					//提交审核
					$(".verify_sure").click(function(){
						var id = $(".verify .proposer_id").val();
						var status = $(".verify option:selected").attr("id");
						alert('id:'+id+","+'status:'+status);
						$.ajax({
							type:'post',
							url:'/kk_trademark/sys/order/check',
							data:{"id":id,"checkStatus":status},
							dataType:'json',
							beforeSend: function(request) {
					            request.setRequestHeader("staffCode","aaa");
					            request.setRequestHeader("clientDigest","5UY0YER21840ORB3P52B");
					        },
					        success:function(json){
					        	alert(json.code);
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
				});
			},
			error:function(XMLHttpRequest){
				alert(XMLHttpRequest.state);
			}
		})
	}
	
</script>
</body>
<script>
	$(function(){
		$(".main-container-inner").css("overflow","hidden").css("top","39px");
	})
</script>
</html>
