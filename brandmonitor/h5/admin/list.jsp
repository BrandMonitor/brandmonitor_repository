
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<title>jquery网格插件 - Bootstrap后台管理系统模版Ace下载</title>

		<meta name="keywords" content="Bootstrap模版,Bootstrap模版下载,Bootstrap教程,Bootstrap中文" />
		<meta name="description" content="站长素材提供Bootstrap模版,Bootstrap教程,Bootstrap中文翻译等相关Bootstrap插件下载" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />

		<!-- basic styles -->

		<link href="${pageContext.request.contextPath}/resources/admin/assets/css/bootstrap.min.css" rel="stylesheet" />
		<link rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" />

		<!--[if IE 7]>
		  <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/admin/assets/css/font-awesome-ie7.min.css" />
		<![endif]-->

		<!-- page specific plugin styles -->

		<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/admin/assets/css/jquery-ui-1.10.3.full.min.css" />
		<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/admin/assets/css/datepicker.css" />
		<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/admin/assets/css/ui.jqgrid.css" />

		<!-- ace styles -->

		<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/admin/assets/css/ace.min.css" />
		<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/admin/assets/css/ace-rtl.min.css" />
		<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/admin/assets/css/ace-skins.min.css" />

		<!--[if lte IE 8]>
		  <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/admin/assets/css/ace-ie.min.css" />
		<![endif]-->

		<!-- inline styles related to this page -->

		<!-- ace settings handler -->

		<script src="${pageContext.request.contextPath}/resources/admin/assets/js/ace-extra.min.js"></script>

		<!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->

		<!--[if lt IE 9]>
		<script src="${pageContext.request.contextPath}/resources/admin/assets/js/html5shiv.js"></script>
		<script src="${pageContext.request.contextPath}/resources/admin/assets/js/respond.min.js"></script>
		<![endif]-->
	</head>

	<body>
		<div class="main-container" id="main-container">
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

			<!--<a href="#" id="btn-scroll-up" class="btn-scroll-up btn btn-sm btn-inverse">
				<i class="icon-double-angle-up icon-only bigger-110"></i>
			</a>-->
		</div><!-- /.main-container -->

		<!-- basic scripts -->


		<!--[if !IE]> -->

		<script type="text/javascript">
			window.jQuery || document.write("<script src='${pageContext.request.contextPath}/resources/admin/assets/js/jquery-2.0.3.min.js'>"+"<"+"/script>");
		</script>

		<!-- <![endif]-->

		<!--[if IE]>
<script type="text/javascript">
 window.jQuery || document.write("<script src='${pageContext.request.contextPath}/resources/admin/assets/js/jquery-1.10.2.min.js'>"+"<"+"/script>");
</script>
<![endif]-->

		<script type="text/javascript">
			if("ontouchend" in document) document.write("<script src='${pageContext.request.contextPath}/resources/admin/assets/js/jquery.mobile.custom.min.js'>"+"<"+"/script>");
		</script>
		<script src="${pageContext.request.contextPath}/resources/admin/assets/js/bootstrap.min.js"></script>
		<script src="${pageContext.request.contextPath}/resources/admin/assets/js/typeahead-bs2.min.js"></script>

		<!-- page specific plugin scripts -->

		<script src="${pageContext.request.contextPath}/resources/admin/assets/js/date-time/bootstrap-datepicker.min.js"></script>
		<script src="${pageContext.request.contextPath}/resources/admin/assets/js/jqGrid/jquery.jqGrid.min.js"></script>
		<script src="${pageContext.request.contextPath}/resources/admin/assets/js/jqGrid/i18n/grid.locale-en.js"></script>

		<!-- ace scripts -->

		<script src="${pageContext.request.contextPath}/resources/admin/assets/js/ace-elements.min.js"></script>
		<script src="${pageContext.request.contextPath}/resources/admin/assets/js/ace.min.js"></script>

		<!-- inline scripts related to this page -->

		<script type="text/javascript">
//			var grid_data
//			[ 
//				{id:"1",图片:"Desktop Computer",标题:"note",简介:"Yes",点赞:"FedEx", 点击次数:"2007-12-03",回复次数:"a"},
//				{id:"2",图片:"Laptop",标题:"Long text ",简介:"Yes",点赞:"InTime",点击次数:"2007-12-03",回复次数:"a"},
//				{id:"3",图片:"LCD Monitor",标题:"note3",简介:"Yes",点赞:"TNT",点击次数:"2007-12-03",回复次数:"a"},
//				{id:"4",图片:"Speakers",标题:"note",简介:"No",点赞:"ARAMEX",点击次数:"2007-12-03",回复次数:"a"},
//				{id:"5",图片:"Laser Printer",标题:"note2",简介:"Yes",点赞:"FedEx",点击次数:"2007-12-03",回复次数:"a"},
//				{id:"6",图片:"Play Station",标题:"note3",简介:"No", 点赞:"FedEx",点击次数:"2007-12-03",回复次数:"a"},
//				{id:"7",图片:"Mobile Telephone",标题:"note",简介:"Yes",点赞:"ARAMEX",点击次数:"2007-12-03",回复次数:"a"},
//				{id:"8",图片:"Server",标题:"note2",简介:"Yes",点赞:"TNT",点击次数:"2007-12-03",回复次数:"a"},
//				{id:"9",图片:"Matrix Printer",标题:"note3",简介:"No", 点赞:"FedEx",点击次数:"2007-12-03",回复次数:"a"},
//				{id:"10",图片:"Desktop Computer",标题:"note",简介:"Yes",点赞:"FedEx", 点击次数:"2007-12-03",回复次数:"a"},
//				{id:"11",图片:"Laptop",标题:"Long text ",简介:"Yes",点赞:"InTime",点击次数:"2007-12-03",回复次数:"a"},
//				{id:"12",图片:"LCD Monitor",标题:"note3",简介:"Yes",点赞:"TNT",点击次数:"2007-12-03",回复次数:"a"},
//				{id:"13",图片:"Speakers",标题:"note",简介:"No",点赞:"ARAMEX",点击次数:"2007-12-03",回复次数:"a"},
//				{id:"14",图片:"Laser Printer",标题:"note2",简介:"Yes",点赞:"FedEx",点击次数:"2007-12-03",回复次数:"a"},
//				{id:"15",图片:"Play Station",标题:"note3",简介:"No", 点赞:"FedEx",点击次数:"2007-12-03",回复次数:"a"},
//				{id:"16",图片:"Mobile Telephone",标题:"note",简介:"Yes",点赞:"ARAMEX",点击次数:"2007-12-03",回复次数:"a"},
//				{id:"17",图片:"Server",标题:"note2",简介:"Yes",点赞:"TNT",点击次数:"2007-12-03",回复次数:"a"},
//				{id:"18",图片:"Matrix Printer",标题:"note3",简介:"No", 点赞:"FedEx",点击次数:"2007-12-03",回复次数:"a"},
//				{id:"19",图片:"Matrix Printer",标题:"note3",简介:"No", 点赞:"FedEx",点击次数:"2007-12-03",回复次数:"a"},
//				{id:"20",图片:"Desktop Computer",标题:"note",简介:"Yes",点赞:"FedEx", 点击次数:"2007-12-03",回复次数:"a"},
//				{id:"21",图片:"Laptop",标题:"Long text ",简介:"Yes",点赞:"InTime",点击次数:"2007-12-03",回复次数:"a"},
//				{id:"22",图片:"LCD Monitor",标题:"note3",简介:"Yes",点赞:"TNT",点击次数:"2007-12-03",回复次数:"a"},
//				{id:"23",图片:"Speakers",标题:"note",简介:"No",点赞:"ARAMEX",点击次数:"2007-12-03",回复次数:"a"}
//			];	
//			var grid_data = 
//			[ 
//				{id:"19",标题:"Speakers",简介:"note",点赞:"No",点击次数:"ARAMEX",回复次数:"2007-12-03"},
//				{id:"20",标题:"Speakers",简介:"note",点赞:"No",点击次数:"ARAMEX",回复次数:"2007-12-03"},
//				{id:"21",标题:"Speakers",简介:"note",点赞:"No",点击次数:"ARAMEX",回复次数:"2007-12-03"},
//				{id:"22",标题:"Speakers",简介:"note",点赞:"No",点击次数:"ARAMEX",回复次数:"2007-12-03"},
//				{id:"23",标题:"Speakers",简介:"note",点赞:"No",点击次数:"ARAMEX",回复次数:"2007-12-03"}
//			];	
			$(function(){
				$.ajax({
					type:'post',
					url:"http://www.yulin520.com/news/n/list",
					data:{},
					dataType:'json',
					
					success:function(json){
						var data = json.data;
						var grid_data = [];
						
						for(i=0;i<data.length;i++){
							var t = {id:data[i].id,标题:data[i].title,简介:data[i].introduction,点赞:data[i].star,点击次数:data[i].click,回复次数:data[i].replyTimes}
							
							grid_data.push(t);
						};
							
						jQuery(function($) {
							var grid_selector = "#grid-table";
							var pager_selector = "#grid-pager";
						
							jQuery(grid_selector).jqGrid({
								//direction: "rtl",
								
								data: grid_data,
								datatype: "local",
								height: "100%",
								colNames:['ID','标题','简介', '点赞', '点击次数','回复次数','状态',' '],
								colModel:[
									
									{name:'id',index:'id', width:20, sorttype:"int", editable: true},
									{name:'标题',index:'标题',width:70, editable:true, sorttype:"text",unformat: pickDate},
									{name:'简介',index:'简介', width:140,editable: true,sorttype:"text",editoptions:{size:"20",maxlength:"30"}},
									{name:'点赞',index:'点赞', width:15, sorttype:"int", editable: true},
									{name:'点击次数',index:'点击次数', width:15, sorttype:"int", editable: true},
									{name:'回复次数',index:'回复次数', width:15, sorttype:"int", editable: true},
									{name:'状态',index:'状态', width:15, sorttype:"int", editable: true},
//									{name:'点赞',index:'stock', width:30, editable: true,edittype:"checkbox",editoptions: {value:"Yes:No"},unformat: aceSwitch},
//									{name:'点击次数',index:'ship', width:30, editable: true,edittype:"select",editoptions:{value:"FE:FedEx;IN:InTime;TN:TNT;AR:ARAMEX"}},
//									{name:'回复次数',index:'note', width:30, sortable:false,editable: true,edittype:"textarea", editoptions:{rows:"2",cols:"10"}} ''
									{name:'myac',index:'', width:100, fixed:true, sortable:false, resize:false,
										formatter:'actions', 
										formatoptions:{ 
											keys:true,
											
											delOptions:{recreateForm: true, beforeShowForm:beforeDeleteCallback},
											//editformbutton:true, editOptions:{recreateForm: true, beforeShowForm:beforeEditCallback}
										}
									},
								],
						
								viewrecords : true,//定义是否要显示总记录数
								rowNum:20,//添加左侧行号
								rowList:[10,20,30],//用于改变显示行数的下拉列表框的元素数组。即每页多少条数据
								pager : pager_selector,//定义翻页用的导航栏
								altRows: true,//设置表格 zebra-striped 值
								//toppager: true,
								
								multiselect: true,//定义是否可以多选
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
						
								editurl: $path_base+"/dummy.html",//nothing is saved//定义对form编辑时的url
			//					caption: "jqGrid with inline editing",//表格名称
						
						
								autowidth: true//如果为ture时，则当表格在首次被创建时会根据父元素比例重新调整表格宽度。如果父元素宽度改变，为了使表格宽度能够自动调整则需要实现函数：setGridWidth
							});
						
							//enable search/filter toolbar
							//jQuery(grid_selector).jqGrid('filterToolbar',{defaultSearch:true,stringResult:true})
						
							//switch element when editing inline
							function aceSwitch( cellvalue, options, cell ) {
								setTimeout(function(){
									$(cell) .find('input[type=checkbox]')
											.wrap('<label class="inline" />')
										.addClass('ace ace-switch ace-switch-5')
										.after('<span class="lbl"></span>');
								}, 0);
							}
							//enable datepicker
							function pickDate( cellvalue, options, cell ) {
								setTimeout(function(){
									$(cell) .find('input[type=text]')
											.datepicker({format:'yyyy-mm-dd' , autoclose:true}); 
								}, 0);
							}
						
							//navButtons
							jQuery(grid_selector).jqGrid('navGrid',pager_selector,
								{ 	//navbar options
									edit: true,
									editicon : 'icon-pencil blue',
									add: true,
									addicon : 'icon-plus-sign purple',
									del: true,
									delicon : 'icon-trash red',
									search: true,
									searchicon : 'icon-search orange',
									refresh: true,
									refreshicon : 'icon-refresh green',
									view: true,
									viewicon : 'icon-zoom-in grey',
								},
								{
									//edit record form
									//closeAfterEdit: true,
									recreateForm: true,
									beforeShowForm : function(e) {
										var form = $(e[0]);
										form.closest('.ui-jqdialog').find('.ui-jqdialog-titlebar').wrapInner('<div class="widget-header" />')
										style_edit_form(form);
									}
								},
								{
									//new record form
									closeAfterAdd: true,
									recreateForm: true,
									viewPagerButtons: false,
									beforeShowForm : function(e) {
										var form = $(e[0]);
										form.closest('.ui-jqdialog').find('.ui-jqdialog-titlebar').wrapInner('<div class="widget-header" />')
										style_edit_form(form);
									}
								},
								{
									//delete record form
									recreateForm: true,
									beforeShowForm : function(e) {
										var form = $(e[0]);
										if(form.data('styled')) return false;
										
										form.closest('.ui-jqdialog').find('.ui-jqdialog-titlebar').wrapInner('<div class="widget-header" />')
										style_delete_form(form);
										
										form.data('styled', true);
									},
									onClick : function(e) {
										alert(1);
									}
								},
								{
									//search form
									recreateForm: true,
									afterShowSearch: function(e){
										var form = $(e[0]);
										form.closest('.ui-jqdialog').find('.ui-jqdialog-title').wrap('<div class="widget-header" />')
										style_search_form(form);
									},
									afterRedraw: function(){
										style_search_filters($(this));
									}
									,
									multipleSearch: true,
									/**
									multipleGroup:true,
									showQuery: true
									*/
								},
								{
									//view record form
									recreateForm: true,
									beforeShowForm: function(e){
										var form = $(e[0]);
										form.closest('.ui-jqdialog').find('.ui-jqdialog-title').wrap('<div class="widget-header" />')
									}
								}
							)
						
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
						
						
						
							//it causes some flicker when reloading or navigating grid
							//it may be possible to have some custom formatter to do this as the grid is being created to prevent this
							//or go back to default browser checkbox styles for the grid
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
							
						
							//unlike navButtons icons, action icons in rows seem to be hard-coded
							//you can change them like this in here if you want
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
							
							//replace icons with FontAwesome icons like above
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
							
//							$(".ui-jqgrid-labels").css("position","fixed").css("top","0px");
							$(".ui-jqgrid-bdiv").height($(window).height()-97).css("overflow-x","hidden");
						});
					},
					error:function(XMLHttpRequest){
						alert(XMLHttpRequest.state);
					}
				})
			})
			
			
				//var selr = jQuery(grid_selector).jqGrid('getGridParam','selrow');
			
			
			
		</script>
<!--<script type="text/javascript">
var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3Fe9e1d61340ff3d9495a8cca04ebdb49d' type='text/javascript'%3E%3C/script%3E"));
</script>-->
</body>
<script>
	$(function(){
		$(".main-container-inner").css("overflow","hidden");
	})
</script>
</html>
