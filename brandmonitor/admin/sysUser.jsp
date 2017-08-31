
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<title>用户列表</title>

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
		<style>
			
		</style>
	</head>

	<body>
		<div class="main-container" id="main-container" >
			<script type="text/javascript">
				try{ace.settings.check('main-container' , 'fixed')}catch(e){}
			</script>
			
			<div class="sidebar-shortcuts-large" id="sidebar-shortcuts-large" style="padding-left: 5px;padding-top: 5px;position: fixed;z-index: 999;width: 100%;background-color:#EFF3F8;border-bottom: 1px solid #dcdcdc;"> 
				<button class="add_edit btn btn-success ui-pg-div ui-pg-button ui-corner-all">
					<i class="icon-plus-sign"></i>
					<span class="pl5">新增</span>
				</button>

				<button class="btn_edit btn btn-info" disabled="true">
					<i class="icon-pencil"></i>
					<span class="pl5">编辑</span>
				</button>

				<button class="del_edit btn btn-warning" disabled="true">
					<i class="icon-exchange"></i>
					<span class="pl5">状态</span>
				</button>
			</div>
			
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

		<div class="edit" id="edit">
			<div class="sidebar-shortcuts-large" id="sidebar-shortcuts-large" style="padding-left: 5px;padding-top: 5px;"> 
				<button class="back_btn btn btn-success">
					<i class="icon-double-angle-left"></i>
					<span class="pl5">取消</span>
				</button>

				<button class="save_btn btn btn-info">
					<i class=""></i>
					<span class="pl5">保存</span>
				</button>
			</div>
			
			<div class="content">
				<div class="widget-header">
				  <span class="ui-jqdialog-title" style="float: left;">新增用户</span>	<a href="javascript:void(0)" class="ui-jqdialog-titlebar-close ui-corner-all" style="right: 0.3em;">
				 	 <span class="ui-icon ui-icon-closethick"></span>
				 	</a>
				</div>
				<form>
					<table id="TblGrid_grid-table" class="EditTable" cellspacing="0" cellpadding="0" border="0">
					  <tbody>
					    <tr id="FormError" style="display:none">
					      <td class="ui-state-error" colspan="2"></td>
					    </tr>
					    <tr style="display:none" class="tinfo">
					      <td class="topinfo" colspan="2"></td>
					    </tr>
					    <tr rowpos="1" class="FormData" id="id" style="display: none;">
					      <td class="CaptionTD">id<span class="necessary">*</span></td>
					      <td class="DataTD">&nbsp;<input disabled="true" type="text" id="id" name="id" role="textbox" class="FormElement ui-widget-content ui-corner-all">
					      <span class="red id">* id不能为空</span></td>
					    </tr>
					    <tr rowpos="2" class="FormData" id="staffCode">
					      <td class="CaptionTD">账号<span class="necessary">*</span></td>
					      <td class="DataTD">&nbsp;<input type="text" id="id" name="id" role="textbox" class="FormElement ui-widget-content ui-corner-all">
					      <span class="red account">* 账号不能为空</span></td>
					    </tr>
					    <tr rowpos="3" class="FormData" id="userName">
					      <td class="CaptionTD">用户名<span class="necessary">*</span></td>
					      <td class="DataTD">&nbsp;<input type="text" id="标题" name="标题" role="textbox" class="FormElement ui-widget-content ui-corner-all">
					      <span class="red user">* 用户名不能为空</span></td>
					    </tr>
					    <tr rowpos="4" class="FormData" id="tr_gender">
					      <td class="CaptionTD">性别<span class="necessary">*</span></td>
					      <td class="DataTD">&nbsp;
					      	<select role="select" id="gender" name="gender" size="1" class="FormElement ui-widget-content ui-corner-all">
					          <!--<option role="option">---请选择---</option>-->
					         	<option role="option">男</option>
					            <option role="option">女</option>
					        </select>
					      	<!--<input type="text" size="20" maxlength="30" id="简介" name="简介" role="textbox" class="FormElement ui-widget-content ui-corner-all">-->
					      <span class="red gender">* 性别不能为空</span></td>
					    </tr>
					    <tr rowpos="5" class="FormData" id="tr_department">
					      <td class="CaptionTD">部门<span class="necessary">*</span></td>
					      <td class="DataTD">&nbsp;
					        <select role="select" id="department" name="department" size="1" class="FormElement ui-widget-content ui-corner-all">
					          <!--<option role="option">---请选择---</option>-->
					        </select>
					        <span class="red department">* 部门不能为空</span>
					      </td>
					    </tr>
					    <tr rowpos="6" class="FormData" id="tr_position">
					      <td class="CaptionTD">职位<span class="necessary">*</span></td>
					      <td class="DataTD">&nbsp;
					        <select role="select" id="position" name="position" size="1" class="FormElement ui-widget-content ui-corner-all">
					          <option role="option"></option>
					        </select>
					        <span class="red position">* 职位不能为空</span>
					      </td>
					    </tr>
					     <!--<tr rowpos="5" class="FormData" id="position">
					      <td class="CaptionTD">职位</td>
					      <td class="DataTD">&nbsp;<input type="text" size="20" maxlength="30" id="简介" name="简介" role="textbox" class="FormElement ui-widget-content ui-corner-all">
					       <span class="red position">* 职位不能为空</span></td>
					    </tr>
					    <tr rowpos="6" class="FormData" id="department">
					      <td class="CaptionTD">部门</td>
					      <td class="DataTD">&nbsp;<input type="text" size="20" maxlength="30" id="简介" name="简介" role="textbox" class="FormElement ui-widget-content ui-corner-all">
					       <span class="red department">* 部门不能为空</span></td>
					    </tr>-->
					    <tr rowpos="7" class="FormData" id="tel">
					      <td class="CaptionTD">电话<span class="necessary">*</span></td>
					      <td class="DataTD">&nbsp;<input type="tel" size="20" maxlength="30" id="简介" name="简介" role="textbox" class="FormElement ui-widget-content ui-corner-all">
					       <span class="red tel">* 电话不能为空</span>
					       <span class="red tel_format">* 电话号码格式不正确</span>
					      </td>
					    </tr>
					     <tr rowpos="8" class="FormData" id="passwordNewOne">
					      <td class="CaptionTD">用户密码<span class="necessary">*</span></td>
					      <td class="DataTD">&nbsp;<input type="password" size="20" maxlength="30" id="简介" name="简介" role="textbox" class="FormElement ui-widget-content ui-corner-all">
					      <span class="red pwd">* 用户密码不能为空</span></td>
					    </tr>
					    <tr rowpos="9" class="FormData" id="qq">
					      <td class="CaptionTD">qq</td>
					      <td class="DataTD">&nbsp;<input type="text" size="20" maxlength="30" id="简介" name="简介" role="textbox" class="FormElement ui-widget-content ui-corner-all"></td>
					    </tr>
					    <tr rowpos="10" class="FormData" id="email">
					      <td class="CaptionTD">邮箱</td>
					      <td class="DataTD">&nbsp;<input type="text" size="20" maxlength="30" id="简介" name="简介" role="textbox" class="FormElement ui-widget-content ui-corner-all"></td>
					    </tr>
					    <tr rowpos="11" class="FormData" id="remark">
					      <td class="CaptionTD">备注</td>
					      <td class="DataTD">&nbsp;<input type="text" size="20" maxlength="30" id="简介" name="简介" role="textbox" class="FormElement ui-widget-content ui-corner-all"></td>
					    </tr>
					    <!--<tr rowpos="5" class="FormData" id="tr_点击次数">
					      <td class="CaptionTD">状态</td>
					      <td class="DataTD">&nbsp;
					        <select role="select" id="点击次数" name="点击次数" size="1" class="FormElement ui-widget-content ui-corner-all">
					          <option role="option" value="FE">FedEx</option>
					          <option role="option" value="IN">InTime</option>
					          <option role="option" value="TN">TNT</option>
					          <option role="option" value="AR">ARAMEX</option>
					        </select>
					      </td>
					    </tr>-->
					    <tr class="FormData" style="display:none">
					      <td class="CaptionTD"></td>
					      <td colspan="1" class="DataTD"><input class="FormElement" id="id_g" type="text" name="grid-table_id" value="_empty">
					      </td>
					    </tr>
					  </tbody>
					</table>
				</form>
			</div>
		</div>
		<!--loading动画-->
		<div class="loading">
			<div class="spinner">
			  <div class="rect1"></div>
			  <div class="rect2"></div>
			  <div class="rect3"></div>
			  <div class="rect4"></div>
			</div>
		</div>

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
				init();
				//初始化读取列表
				function init(){
					$.ajax({
						type:'post',
						url:"/hope/sys/user/list",
						data:{},
						dataType:'json',
						
						success:function(json){
							var listPageObject = json.listPageObject;
							
							var grid_data = [];
							for(i=0;i<listPageObject.length;i++){
								if(listPageObject[i].gender==1){
									gender = '男';
								}else
									gender='女';
								if(listPageObject[i].status==1){
									status = '可用';
								}else
									status='禁用';
								var t = {id:listPageObject[i].id,账号:listPageObject[i].staffCode,用户:listPageObject[i].userName,性别:gender,部门:listPageObject[i].department,职位:listPageObject[i].position,电话:listPageObject[i].tel,邮箱:listPageObject[i].email,密码:listPageObject[i].password,状态:status}
								
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
									colNames:['ID','账号','用户','性别','部门', '职位', '电话','邮箱','密码','状态'],
									colModel:[
										
										{name:'id',index:'id', width:15, sorttype:"int", editable: true},
										{name:'账号',index:'账号',width:20, editable:true, sorttype:"text",unformat: pickDate},
										{name:'用户',index:'用户',width:20, editable:true, sorttype:"text",unformat: pickDate},
										{name:'性别',index:'性别',width:20, editable:true, sorttype:"text",unformat: pickDate},
										{name:'部门',index:'部门', width:25, sorttype:"int", editable: true},
										{name:'职位',index:'职位', width:25,editable: true,sorttype:"text"},
										{name:'电话',index:'电话', width:25, sorttype:"int", editable: true},
										{name:'邮箱',index:'邮箱', width:25, sorttype:"int", editable: true},
										{name:'密码',index:'密码', width:30, sorttype:"int", editable: true},
										{name:'状态',index:'状态', width:25, sorttype:"int", editable: true},
	//									{name:'myac',index:'', width:100, fixed:true, sortable:false, resize:false,
	//										formatter:'actions', //对列进行格式化时设置的函数名或类型
	//										formatoptions:{ //对某些列进行格式化的设置
	//											keys:true,//当从服务器端返回的数据中没有id时，将此作为唯一rowid使用，默认只能有一个id属性
	//											
	//											delOptions:{recreateForm: true, beforeShowForm:beforeDeleteCallback},
	//											//editformbutton:true, editOptions:{recreateForm: true, beforeShowForm:beforeEditCallback}
	//										}
	//									},
									],
							
									viewrecords : true,//定义是否要显示总记录数
									rowNum:25,//每页显示数据条数
//									rowList:[10,20,30],//用于改变显示行数的下拉列表框的元素数组。即每页多少条数据
									pager : pager_selector,//定义翻页用的导航栏
									altRows: true,//设置表格 zebra-striped 值
									//toppager: true,
									
//									multiselect: true,//定义是否可以多选
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
							
									editurl: "/hope/sys/user/showlist",//nothing is saved//定义对form编辑时的url
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
								//enable datepicker(日期选择器)
								function pickDate( cellvalue, options, cell ) {
									setTimeout(function(){
										$(cell) .find('input[type=text]')
												.datepicker({format:'yyyy-mm-dd' , autoclose:true}); 
									}, 0);
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
								//选中记录
								$("#grid-table tr").click(function(){
									var state = $(this).find("td:last-child").text();
									if($(".ui-state-highlight")){
										$(".btn_edit,.del_edit").removeAttr("disabled");
									}else{
										$(".btn_edit,.del_edit").attr("disabled","true");
									}
									
									var fn
									if(state=='可用'){
										fn = '禁用';
									}else{fn = '启用'}
									$(".del_edit span").text(fn);
								});
								$(".loading").hide();
								
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
										
										var fn
										if(state=='可用'){
											fn = '禁用';
										}else{fn = '启用'}
										$(".del_edit span").text(fn);
									});
								});
							});
						},
						error:function(XMLHttpRequest){
							alert(XMLHttpRequest.state);
						}
					})
				}
			
			
			//新增按钮
			$(".add_edit").click(function(){
				$("#staffCode input").removeAttr("disabled");//新增时用户名和密码可填写
				$("#passwordNewOne input").removeAttr("disabled");
				//通过变量isEdit判断是新增还是编辑，0为编辑，1为新增，用于保存表单时判断id是否为空
				isEdit = 1;
				$("span.red").hide();//隐藏所有未填表单的提示
				formVerify();	//验证表单
				//清空编辑列表的值
				$("#id input").attr("value",'');
				$("#staffCode input").attr("value",'');
				$("#userName input").attr("value",'');
			    $("#tel input").attr("value",'');
				$("#email input").attr("value",'');
			   	$("#gender input").attr("value",'');
				$("#department").val('');
				$("#position").val('');
				$("#position option").remove();
				$("#passwordNewOne input").attr("value",'');
				
				$("#main-container").hide();
			});
			//编辑按钮
			$(".btn_edit").click(function(){
				//通过变量isEdit判断是新增还是编辑，0为编辑，1为新增，用于保存表单时判断id是否为空
				isEdit = 0;
				$("span.red").hide();//隐藏所有未填表单的提示
				formVerify(0);
				var checked = $("tbody tr").hasClass("ui-state-highlight");
				//部门、职位数据填充
				$.ajax({
					type:'post',
					url:'/hope/admin/department/selectAll',
					dataType:'json',
					
					success:function(json){
						for(i=0;i<json.length;i++){
							if(json[i].status==1){
								$("#tr_department select").append(
									'<option role="option" value="FE" data-id="'+json[i].id+'">'+json[i].departmentName+'</option>'
								);
								$("#tr_department select").val("1");
							}
						};
						  $("#tr_department select").change(function() {
						  	  $("#tr_position select option").remove();
				              var department_id = $(this).find("option:checked").data("id");
				              $.ajax({
									type:'post',
									url:'/hope/admin/position/selectPosition',
									data:{"id":department_id},
									dataType:'json',
									
									success:function(json){
										for(i=0;i<json.length;i++){
											$("#tr_position select").append(
												'<option role="option" value="FE">'+json[i].positionName+'</option>'
											);
											$("#tr_position select").val("1");
										};
									},
									error:function(XMLHttpRequest){
										alert(XMLHttpRequest.state);
									}
							  })
				          });
					},
					
					error:function(XMLHttpRequest){
						alert(XMLHttpRequest.state);
					}
				})
				if(checked){
					//获取记录的数据
					var id = $(".ui-state-highlight").find("td").eq(0).text();
					var staffCode = $(".ui-state-highlight").find("td").eq(1).text();
					$("#staffCode input").attr("disabled","true");
					var user = $(".ui-state-highlight").find("td").eq(2).text();
					var gender = $(".ui-state-highlight").find("td").eq(3).text();
					var department = $(".ui-state-highlight").find("td").eq(4).text();
					var pt = $(".ui-state-highlight").find("td").eq(5).text();
					var tel = $(".ui-state-highlight").find("td").eq(6).text();
					var email = $(".ui-state-highlight").find("td").eq(7).text();
					var pwd = $(".ui-state-highlight").find("td").eq(8).text();
					$("#passwordNewOne input").attr("disabled","true");
					
					//写入编辑列表
					$("#id input").attr("value",id);
					$("#staffCode input").attr("value",staffCode);
					$("#userName input").attr("value",user);
				    $("#tel input").attr("value",tel);
					$("#email input").attr("value",email);
//				   	$("#gender input").attr("value",gender);
				   	$("#gender option:selected").val(gender);
//					$("#department option:selected").val(department);
					$("#department option:selected").text(department);
//					$("#department").append("<option value='Value'>"+department+"</option>");
					$("#position option:selected").text(pt);
					$("#passwordNewOne input").attr("value",pwd);
					$("#main-container").hide();
				}
				if(gender=='男'){
					gender=0;
				}else{gender=1;}
				
				
			});
			//状态切换按钮
			$(".del_edit").click(function(){
				var nowState = $(this).find("span").text();
				var id = $(".ui-state-highlight").find("td").eq(0).text();
//				var checked = $("tbody tr").hasClass("ui-state-highlight");
				if(nowState=="禁用"){
					//获取记录的数据
					$.ajax({
						type:'post',
						url:'/hope/sys/user/activateordeluser',
						data:{"id":id,"del":1},
						dataType:'json',
						
						success:function(data){
							location.reload();
						},
						
						error:function(XMLHttpRequest){
						}
					});
				}else if(nowState=="启用"){
					$.ajax({
						type:'post',
						url:'/hope/sys/user/activateordeluser',
						data:{"id":id,"del":0},
						dataType:'json',
						
						success:function(data){
							location.reload();
						},
						
						error:function(XMLHttpRequest){
						}
					});
				}
			});
			
			//返回按钮
			$(".back_btn").click(function(){
				$("#main-container").show();
			});
			
			
			//设置参数区别此时是新增页面还是编辑页面，0为编辑，1为新增，用于保存表单时判断id是否为空
			//isNull,提交表单时isNull为1则不提交，表示有某一信息未填写
			var isEdit;
			var isNull;
			//编辑表单的信息验证
			function formVerify(){
				if(isEdit==0){
					$("#id input").blur(function(){
						var id = $("#id input").val();
						if(id==''){$("span.id").show();}
						else{$("span.id").hide();}
					});
				}else{}
				$("#staffCode input").blur(function(){
					var staffCode = $("#staffCode input").val();
					if(staffCode==''){$("span.account").show();}
					else{$("span.account").hide();}
				});
				$("#userName input").blur(function(){
					var userName = $("#userName input").val();
					if(userName==''){$("span.user").show();}
					else{$("span.user").hide();}
				});
				$("#tel input").blur(function(){
					var tel = $("#tel input").val();
					if(tel==''){
						$("span.tel").show();
					}if(tel.length>0){
						var re = /^1\d{10}$/;
					    if(re.test(tel)){
					    	$("span.tel_format").hide();
				        }else{
					     	$("span.tel_format").show();
//					        $("#tel input").focus();
					    }
						$("span.tel").hide();}
				});
				$("#gender input").blur(function(){
					var gender = $("#gender input").val();
					if(gender==''){$("span.gender").show();}
					else{$("span.gender").hide();}
				});
				$("#position").blur(function(){
					var pt = $("#position").val();
					if(pt==''){$("span.position").show();}
					else{$("span.position").hide();}
				});
				$("#department").blur(function(){
					var department = $("#department").val();
					if(department==''){$("span.department").show();}
					else{$("span.department").hide();}
				});
				$("#passwordNewOne input").blur(function(){
					var passwordNewOne = $("#passwordNewOne input").val();
					if(passwordNewOne==''){$("span.passwordNewOne").show();}
					else{$("span.passwordNewOne").hide();}
				});
//				if($("span.red").attr("display")!='none'){
//					return true;
//				}else{return false;}
			};
			//提交表单验证
			function submitVerify(id,staffCode,userName,tel,gender,department,pt,passwordNewOne){
				if(isEdit==0){//isEdit为0表示是编辑表单，需传入id值
					var id = $("#id input").val();
					if(id==''){$("span.id").show();}
					else{$("span.id").hide();}
				}else{}
				
				if(staffCode==''){$("span.account").show();}
				else{$("span.account").hide();}
				
				if(userName==''){$("span.user").show();}
				else{$("span.user").hide();}
				
				if(tel==''){
					$("span.tel").show();
				}if(tel.length>0){
					var re = /^1\d{10}$/;
				    if(re.test(tel)){
				    	$("span.tel_format").hide();
			        }else{
				     	$("span.tel_format").show();
//					        $("#tel input").focus();
				    }
					$("span.tel").hide();}
				
				if(gender==''){$("span.gender").show();}
				else{$("span.gender").hide();}
				
				if(pt==''){$("span.position").show();}
				else{$("span.position").hide();}
				
				if(department==''){$("span.department").show();}
				else{$("span.department").hide();}
				
				if(passwordNewOne==''){$("span.passwordNewOne").show();}
				else{$("span.passwordNewOne").hide();}
				
				if(isEdit!=0){
					if(staffCode!=''&&userName!=''&&tel!=''&&gender!=''&&pt!=''&&department!=''&&passwordNewOne!=''){
						isNull = 0;
					}else{isNull=1;}
				}else if(isEdit==0){
					if(id!=''&&staffCode!=''&&userName!=''&&tel!=''&&gender!=''&&pt!=''&&department!=''&&passwordNewOne!=''){
						isNull = 0;
					}else{isNull=1;}
				}
			};
			//保存按钮
			$(".save_btn").click(function(){
				var id = $("#id input").val();
				var staffCode = $("#staffCode input").val();
				var userName = $("#userName input").val();
				var qq = $("#qq input").val();
			    var tel = $("#tel input").val();
				var email = $("#email input").val();
			   	var gender = $("#gender input").val();
				var department = $("#tr_department select option:selected").text();
				var pt = $("#tr_position select option:selected").text();
				var passwordNewOne = $("#passwordNewOne input").val();
				submitVerify(id,staffCode,userName,tel,gender,department,pt,passwordNewOne);
				
				if(gender=='男'){
					gender=1;
				}else{gender=0;}
//				alert(id+','+staffCode+','+userName+','+qq+','+tel+','+email+','+gender+','+department+','+pt+','+passwordNewOne);
				$.ajax({
					type:'post',
					url:'/hope/sys/user/svaeorupdate',
					data:{"id":id,"staffCode":staffCode,"userName":userName,"tel":tel,"gender":gender,"department":department,"position":pt,"passwordNewOne":passwordNewOne},
					dataType:'json',
					
					success:function(data){
						if(isNull==1){
						}else if(isNull==0){
//							$(".loading").show();
							location.reload();
//							settimeout($(".loading").hide(),2000);
						}
					},
					error:function(XMLHttpRequest){
					}
				});
			});
		</script>
</body>
<script>
	$(function(){
		$(".main-container-inner").css("overflow","hidden").css("top","39px");
	})
</script>
</html>
