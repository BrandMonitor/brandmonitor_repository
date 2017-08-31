
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<title>修改密码</title>
		<meta name="keywords" content="" />
		<meta name="description" content="" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<!-- basic styles -->
		<link href="/kk_trademark/resources/admin/assets/css/bootstrap.min.css" rel="stylesheet" />
		<!--<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" />-->
		<link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet">
		<!--[if IE 7]>
		  <link rel="stylesheet" href="/kk_trademark/resources/admin/assets/css/font-awesome-ie7.min.css" />
		<![endif]-->

		<!-- page specific plugin styles -->


		<!-- ace styles -->

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
	<!--修改密码-->
	<div id="pwd_set"> 
		<form>
			<table id="" class="EditTable" cellspacing="0" cellpadding="0" border="0">
			  <tbody>
			    <tr id="">
			      <td class="ui-state-error" colspan="2"></td>
			    </tr>
			    <!--<tr id="">
			      <td colspan="2" style="background-color: #438EB9;margin-top:-1px;color: white;font-size: 18px;text-align: left;padding-left:20px">修改密码
			    	  
			      </td>
			      
			    </tr>-->
			    <tr rowpos="1" class="FormData" id="pwd_id" >
			      <td class="CaptionTD">id<span class="red1 necessary">*</span></td>
			      <td class="DataTD">&nbsp;<input disabled="true" type="text" id="id" name="id" role="textbox" class="FormElement ui-widget-content ui-corner-all">
			      
			    </tr>
			    <tr rowpos="3" class="FormData" id="pwd_userName">
			      <td class="CaptionTD">用户名<span class="red1 necessary">*</span></td>
			      <td class="DataTD">&nbsp;<input type="text" id="标题" name="标题" role="textbox" class="FormElement ui-widget-content ui-corner-all">
			      <span class="red user">* 用户名不能为空</span></td>
			    </tr>
			    <tr rowpos="7" class="FormData" id="pwd_tel">
			      <td class="CaptionTD">电话<span class="red1 necessary">*</span></td>
			      <td class="DataTD">&nbsp;<input type="tel" size="20" maxlength="30" id="简介" name="简介" role="textbox" class="FormElement ui-widget-content ui-corner-all">
			       <span class="red tel">* 电话不能为空</span>
			       <span class="red tel_format">* 电话号码格式不正确</span>
			      </td>
			    </tr>
			    <tr rowpos="7" class="FormData" id="old_pwd">
			      <td class="CaptionTD">旧密码<span class="red1 necessary">*</span></td>
			      <td class="DataTD">&nbsp;<input type="password" size="20" maxlength="30" id="简介" name="简介" role="textbox" class="FormElement ui-widget-content ui-corner-all">
			       <span class="red old_pwd">* 请输入旧密码</span>
			       <span class="red message"></span>
			      </td>
			    </tr>
			    <tr rowpos="7" class="FormData" id="new_pwd">
			      <td class="CaptionTD">新密码<span class="red1 necessary">*</span></td>
			      <td class="DataTD">&nbsp;<input type="password" size="20" maxlength="30" id="简介" name="简介" role="textbox" class="FormElement ui-widget-content ui-corner-all">
			       <span class="red new_pwd">* 请输入新密码</span>
			      </td>
			    </tr>
			    <tr rowpos="7" class="FormData" id="affirm_pwd">
			      <td class="CaptionTD">确认新密码<span class="red1 necessary">*</span></td>
			      <td class="DataTD">&nbsp;<input type="password" size="20" maxlength="30" id="简介" name="简介" role="textbox" class="FormElement ui-widget-content ui-corner-all">
			       <span class="red affirm_pwd">* 请输入确认密码</span>
			       <span class="red same_pwd">* 两次输入的密码不同</span>
			      </td>
			    </tr>
			     <tr class="FormData">
			      <td class="CaptionTD"></td>
			      <td colspan="1" class="DataTD" style="display: inline-block;width: 80%;text-align: left;padding-top: 20px;">
			      	<input class="pwd_affirm" id="id_g" type="button" name="grid-table_id" value="确认">
			      </td>
			    </tr>
			    
			  </tbody>
			</table>
		</form>
	</div>
	<div class="success">
		<span>密码修改成功！</span>
	</div>
</body>
<script>
	$(function(){
		
//		$("#pwd_id input").attr("value",id);
//		$("#pwd_userName input").attr("value",user_name);
//		$("#pwd_tel input").attr("value",tel);
		
		var page_state;
		function submitVerify(id,userName,tel,old_pwd,new_pwd,affirm_pwd){
			if(userName==''){$("span.user").show();page_state=1;}
			else{$("span.user").hide();}
			
			if(tel==''){
				$("span.tel").show();page_state=1;
			}if(tel.length>0){
				var re = /^1\d{10}$/;
			    if(re.test(tel)){
			    	$("span.tel_format").hide();
		        }else{
			     	$("span.tel_format").show();page_state=1;
			    }
				$("span.tel").hide();}
			
			if(old_pwd==''){$("span.old_pwd").show();page_state=1;}
			else if(old_pwd==pwd){$("span.error_pwd").show();page_state=1;}
			else{$("span.old_pwd").hide();$("span.error_pwd").hide();}
			
			if(new_pwd==''){$("span.new_pwd").show();page_state=1;}
			else{$("span.new_pwd").hide();}
			
			if(affirm_pwd==''){$("span.affirm_pwd").show();page_state=1;}
			else if(affirm_pwd!=new_pwd){$("span.same_pwd").show();page_state=1;}
			else{$("span.affirm_pwd").hide();$("span.same_pwd").hide();}
			
			var v1 = $("span.user").css("display");  var v2 = $("span.old_pwd").css("display");
			var v3 = $("span.tel_format").css("display");var v4 = $("span.tel").css("display");
			var v5 = $("span.new_pwd").css("display");var v6 = $("span.affirm_pwd").css("display");
			var v7 = $("span.same_pwd").css("display");
			if(v1=='none'&&v2=='none'&&v3=='none'&&v4=='none'&&v5=='none'&&v6=='none'&&v7=='none'){
				page_state=0;
			}else{page_state=1;}
		};
		$(".pwd_affirm").click(function(){
			var id = $("#pwd_id input").val();
			var userName = $("#pwd_userName input").val();
			var tel = $("#pwd_tel input").val();
			var old_pwd = $("#old_pwd input").val();
			var new_pwd = $("#new_pwd input").val();
			var affirm_pwd = $("#affirm_pwd input").val();
			submitVerify(id,userName,tel,old_pwd,new_pwd,affirm_pwd);
	    	$.ajax({
		    	type:'post',
		    	url:'/hope/sys/user/self/resetpassword',
		    	data:{"id":id,"userName":userName,"tel":tel,"passwordOriginal":old_pwd,"passwordNewOne":new_pwd,"passwordNewTwo":affirm_pwd},
		    	dataType:'json',
		    	
		    	success:function(json){
		    		if(json.success){
		    			if(page_state==1){
		    			}else if(page_state==0){
		    				$("#pwd_set").hide();
		    				$(".success").show();
			    		}
		    		}else{$(".message").show();$(".message").text("*"+json.message);}
		    		
		    	},
		    	
		    	error:function(XMLHttpRequest){
		    		alert(XMLHttpRequest.status);
		    	}
		    })
	    });
	})
</script>
</html>