
function is_login(){
	var is_login = sessionStorage.getItem("staffCode");
	
	if(is_login==''||is_login==null){
		$(".login_box").show();
    	$(".staffCode").text();
    	$("#logining").hide();
    	return false;
	}else{//已经登录
		$(".login_box").hide();
		$(".staffCode").text("快快"+is_login.substr(is_login.length-4));
		$("#logining").show();
		$("#UserName").val('');
		$("#Password").val('');
		return true;
	}
}

//退出登录
function exit(){
	sessionStorage.setItem("staffCode","");
	sessionStorage.setItem("token","");
	location.reload();
}
//$(".exit").click(function(){
//  	$(".login_box").show();
//  	$(".staffCode").text();
//  	$("#logining").hide();
//	
//})

//登录
//$(".login_btn").click(function(){
function login(){
//	var staffCode = $("#UserName").val();
	var staffCode = document.getElementById("UserName").value;
//	var pwd = $("#Password").val();
	var pwd = document.getElementById("Password").value;
	var sign_str =pwd+staffCode+"GOyV3qmT)CR5!Gee'zAj@7W";
	var sign = hex_md5(sign_str);
	console.log(sign);
//	alert(sign);
//	console.log(sign.toUpperCase());
    $.ajax({
    	type:"get",
    	url:'/kk_trademark/user/login',
    	data:{"staffCode":staffCode,"pwd":pwd},
    	beforeSend: function(request) {
            request.setRequestHeader("sign",sign);
        },
    	success:function(json){
    		if(json.code==1){
    			var token = json.message;
    			sessionStorage.setItem("staffCode",staffCode);
    			sessionStorage.setItem("token",token);
    			$(".login_box").hide();
	    		$(".staffCode").text("快快"+staffCode.substr(staffCode.length-4));
	    		$("#logining").show();
	    		$("#UserName").val('');
	    		$("#Password").val('');
	    		location.reload();
    		}
    		if(json.code==1001){//用户未确认
    			$("#index_content").hide();
    			$(".error_msg").show();
    		}
    		if(json.code==1002){//被禁用
    			alert("用户被禁用！");
    		}
    		if(json.code == -10){//用户名密码错误
    			alert("用户名密码错误！");
    		}
    		if(json.code == -31){
    			alert("用户名不存在！");
    		}
    	},
    	error:function(XMLHttprequest,typeRequest,errorThrown){
    		alert(errorThrown);
//  		alert(XMLHttprequest.status);
//  		alert(typeRequest);
    	}
    })
};

//判断是否已登录(跳转登录页)
function load_login(){
	var is_login = sessionStorage.getItem("staffCode");
	if(is_login==''||is_login==null){
		window.location = '/kk_trademark/h5/trademark/login.jsp';
    	return false;
	}else{//已经登录
		window.location = '/kk_trademark/h5/trademark/addaplt.jsp?type=1';
	}
}


//重新发送验证码
function send_code(){
	//发送验证码
	var staffCode = $("#UserName").val();
	console.log(staffCode);
	$.ajax({
		type:'post',
		url:'/kk_trademark/sendConfirmCode',
		data:{"staffCode":staffCode},
		success:function(json){
			console.log(json.code);
		},
		error:function(XMLHttpRequest){
			alert("发送验证码错误！");
//			alert(XMLHttpRequest.status);
		}
	})
	$(".error_msg").hide();
	$("#send_code").show();
	//验证码倒计时
	var countdown=60; 
	settime(countdown);
	function settime(val) { 
		if (countdown == 0) { 
			$(".code_msg").removeAttr("disabled");    
			$(".code_msg").val("重新发送验证码"); 
			countdown = 60; 
			$(".code_msg").click(function(){
				settime(countdown);
			})
		} else { 
			$(".code_msg").attr("disabled", "disabled"); 
			$(".code_msg").val("重新发送(" + countdown + ")"); 
			countdown--; 
			setTimeout(function() { 
				settime(countdown) 
			},1000) 
		} 
	} 
	//重新发送验证码按钮
	$(".code_msg").click(function(){
		send_code();
	});
	
	//确认验证码
	$(".btn_sure button").click(function(){
		var code = $("#confirmcode").val();
		$.ajax({
			type:'post',
			url:'/kk_trademark/validateConfirmCode',
			data:{"staffCode":staffCode,"code":code},
			success:function(json){
				if(json.code==1){
					$("#send_code").hide();
					var time=3; 
					settime(time);
					function settime(val) { 
						if (val == 0) {  
	//						sessionStorage.setItem("staffCode",staffCode);
							window.location.href = '/kk_trademark/h5/trademark/index.jsp';
						} else { 
							$(".reload_tip").show();
	//						$(".reload_tip .tip_text").attr("disabled", "disabled"); 
							$(".reload_tip .tip_text").text("注册成功，"+val+"秒后跳转"); 
							val--; 
							setTimeout(function() { 
								settime(val);
							},1000) 
						} 
					}  
				}else{
					alert(json.message);
				}
				
			},
			error:function(XMLHttpRequest,textStatus){
//				alert(textStatus);
				alert("手机验证错误");
//				alert(XMLHttpRequest.status);
			}
		})
	})
	
}