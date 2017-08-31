
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<title>个人设置</title>
		<meta name="keywords" content="" />
		<meta name="description" content="" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<!-- basic styles -->
		<link href="/kk_trademark/resources/admin/assets/css/bootstrap.min.css" rel="stylesheet" />
		<!--<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" />-->
		<link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet">

		<link rel="stylesheet" href="/kk_trademark/resources/admin/assets/css/ace.min.css" />
		<link rel="stylesheet" href="/kk_trademark/resources/admin/assets/css/ace-rtl.min.css" />
		<link rel="stylesheet" href="/kk_trademark/resources/admin/assets/css/ace-skins.min.css" />
		<style>
			html{overflow: hidden;}
			body{background-color: white;}
			.success{margin-top: 30px;margin-left:30px;color:orange;font-size: 18px;display:none;font:"微软雅黑"}
			#userinfo_set table,#pwd_set table{
				    background-color: white;
				    height: 100%;
				    width: 100%;
			}
		</style>
		<!--[if lte IE 8]>
		  <link rel="stylesheet" href="/kk_trademark/resources/admin/assets/css/ace-ie.min.css" />
		<![endif]-->

		<!-- inline styles related to this page -->

		<!-- ace settings handler -->

		<script src="/kk_trademark/resources/admin/assets/js/ace-extra.min.js"></script>
		<script src='/kk_trademark/resources/admin/assets/js/jquery-2.0.3.min.js'></script>
		<!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->

		<!--[if lt IE 9]>
		<script src="/kk_trademark/resources/admin/assets/js/html5shiv.js"></script>
		<script src="/kk_trademark/resources/admin/assets/js/respond.min.js"></script>
		<![endif]-->
</head>
<body> 
	<div id="userinfo_set">
		<form>
			<table id="TblGrid_grid-table" class="EditTable" cellspacing="0" cellpadding="0" border="0">
			  <tbody>
			    <tr id="FormError">
			      <td class="ui-state-error" colspan="2"></td>
			    </tr>
			    
			    <tr rowpos="1" class="FormData" id="id" >
			      <td class="CaptionTD">id<span class="red1 necessary">*</span></td>
			      <td class="DataTD">&nbsp;<input disabled="true" type="text" name="id" role="textbox" class="FormElement ui-widget-content ui-corner-all">
			      <span class="red id">* id不能为空</span></td>
			    </tr>
			    <tr rowpos="3" class="FormData" id="userName">
			      <td class="CaptionTD">用户名<span class="red1 necessary">*</span></td>
			      <td class="DataTD">&nbsp;<input type="text" id="username" name="标题" role="textbox" class="FormElement ui-widget-content ui-corner-all">
			      <span class="red user">* 用户名不能为空</span></td>
			    </tr>
			   
				    <tr rowpos="9" class="FormData" id="qq">
				      <td class="CaptionTD">qq</td>
				      <td class="DataTD">&nbsp;<input type="text" size="20" maxlength="30" name="简介" role="textbox" class="FormElement ui-widget-content ui-corner-all"></td>
				    </tr>
				    <tr rowpos="10" class="FormData" id="email">
				      <td class="CaptionTD">邮箱</td>
				      <td class="DataTD">&nbsp;<input type="text" size="20" maxlength="30" name="简介" role="textbox" class="FormElement ui-widget-content ui-corner-all"></td>
				    </tr>
				    <tr rowpos="11" class="FormData" id="remark">
				      <td class="CaptionTD">备注</td>
				      <td class="DataTD">&nbsp;<input type="text" size="20" maxlength="30" name="简介" role="textbox" class="FormElement ui-widget-content ui-corner-all"></td>
				    </tr>
				    <tr class="FormData">
				      <td class="CaptionTD"></td>
				      <td colspan="1" class="DataTD" style="display: inline-block;width: 80%;text-align: left;padding-top: 20px;">
				      	<input class="affirm" id="id_g" type="button" name="grid-table_id" value="确认">
				      </td>
				    </tr>
				  </tbody>
				</table>
			</form>
		</div>
		<div class="success">
			<span>信息修改成功！</span>
		</div>
</body>
<script type="text/javascript">
if("ontouchend" in document) document.write("<script src='/kk_trademark/resources/admin/assets/js/jquery.mobile.custom.min.js'>"+"<"+"/script>");
</script>
<script src="/kk_trademark/resources/admin/assets/js/bootstrap.min.js"></script>
<script src="/kk_trademark/resources/admin/assets/js/typeahead-bs2.min.js"></script>

<!-- page specific plugin scripts -->

<script src="/kk_trademark/resources/admin/assets/js/date-time/bootstrap-datepicker.min.js"></script>
<script src="/kk_trademark/resources/admin/assets/js/jqGrid/jquery.jqGrid.min.js"></script>
<script src="/kk_trademark/resources/admin/assets/js/jqGrid/i18n/grid.locale-en.js"></script>

<!-- ace scripts -->

<script src="/kk_trademark/resources/admin/assets/js/ace-elements.min.js"></script>
<script src="/kk_trademark/resources/admin/assets/js/ace.min.js"></script>
<script>
	

	$(function(){
		var username = sessionStorage.getItem("admin_staffCode");
		var clientDigest = sessionStorage.getItem("admin_clientDigest");
//		var id,username,qq,email,remark;
		//数据填充
		$.ajax({
			type:'get',
			url:'/kk_trademark/sys/getAdminUser',
			data:{'staffCode':username},
			dataType:'json',
			beforeSend: function(request) {
	            request.setRequestHeader("staffCode",username);
	            request.setRequestHeader("clientDigest",clientDigest);
	        },
			success:function(json){
				if(json.code==1){
					var data = json.data;
					$("#id input").val(data[0].id);
					$("#userName input").val(data[0].userName);//修改昵称
					$("#qq input").val(data[0].qq);
					$("#email input").val(data[0].email);
					$("#remark input").val(data[0].remark);
				}else{
					alert(json.message);
				}
			},
			
			error:function(XMLHttpRequest){
				alert(XMLHttpRequest.state);
			}
		});
		var page_state;//参数page_state用于判断表单中是否有未填信息，用于提交表单修改
//		function submitVerify(id,userName,tel){
//			if(userName==''){$("span.user").show();page_state=1;}
//			else{$("span.user").hide();}
//			
////			if(tel==''){
////				$("span.tel").show();
////				page_state=1;
////			}if(tel.length>0){
////				var re = /^1\d{10}$/;
////			    if(re.test(tel)){
////			    	$("span.tel_format").hide();
////		        }else{
////			     	$("span.tel_format").show();
////			     	page_state=1;
////			    }
////				$("span.tel").hide();}
//			
////			if(pt==''){$("span.position").show();page_state=1;}
////			else{$("span.position").hide();}
//			
//			var v1 = $("span.user").css("display");
//			var v3 = $("span.tel_format").css("display");var v4 = $("span.tel").css("display");
//			if(v1=='none'&&v3=='none'&&v4=='none'){
//				page_state=0;
//			}else{page_state=1;}
//		};
		$(".affirm").click(function(){
			var id = $("#id input").val();
			var userName = $("#userName input").val();
			var qq = $("#qq input").val();
		    var tel = $("#tel input").val();
			var email = $("#email input").val();
//			submitVerify(id,userName,tel);
	    	$.ajax({
		    	type:'post',
		    	url:'/kk_trademark/sys/user/modify',
		    	data:{"userName":userName,"qq":qq,"email":email},
		    	beforeSend: function(request) {
		            request.setRequestHeader("staffCode",username);
		            request.setRequestHeader("clientDigest",clientDigest);
		        },
		    	success:function(){
//		    		if(page_state==1){
//		    		}else if(page_state==0){
		    			$("#userinfo_set").hide();
		    			$(".success").show();
//		    		}
		    	},
		    	
		    	error:function(XMLHttpRequest){
		    		alert(XMLHttpRequest.status);
		    	}
		    })
	    });
	})
	
	
</script>
</html>