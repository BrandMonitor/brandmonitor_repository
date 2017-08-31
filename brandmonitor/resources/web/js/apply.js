
	/*简介字数控制*/
	 $(function(){
	  $(".weibo").keyup(function(){
	   var len = $(this).val().length;
	   if(len > 99){
	    $(this).val($(this).val().substring(0,100));
	   }
	   var num = 100 - len;
	   $("#word").text(num);
	  });
	 });

	/*输入检测*/
	var i=1;
	var data;
	$(function() {
        $('#imgs').change(function() {
			$("#formFile").ajaxSubmit({
		        type: 'post',
		        url: "http://www.yulin520.com/a2a/img/uploads" ,
		        dataType:"json",
		        success: function(json){
		        	data = json.message;
		        	var length = data.split(',').length-1;
		        	var num = $("div.ImgShow img").length;
		        	alert("num="+num);
		        	alert("length="+length);
		        	if(num<3){
		        		if(length<=3){
			        		if (length > 1) {
			        			var data1 = data.split(',')[0];
			        			var data2 = data.split(',')[1];
			        			if(data.split(',')[2] != ''){
			        				var data3 = data.split(',')[2];
				        			$("div.ImgShow").append(
					        			'<img class="imgShow" src="'+data1+'" alt=""/>'
					        			+'<img class="imgShow" src="'+data2+'" alt=""/>'
					        			+'<img class="imgShow" src="'+data3+'" alt=""/>'
					        		);
			        			}else{
			        				$("div.ImgShow").append(
					        			'<img class="imgShow" src="'+data1+'" alt=""/>'
					        			+'<img class="imgShow" src="'+data2+'" alt=""/>'
					        		);
			        			}
						    }else if(length == 1){
						      	var data1 = data.split(',')[0];
						      	$("div.ImgShow").append(
				        			'<img class="imgShow" src="'+data1+'" alt=""/>'
				        		);
	//					          $('#uploadLog').html(msg);
						    }
					    
						    if($("div.ImgShow img:eq(0)").attr('src') != '' && $("div.ImgShow img:eq(1)").attr('src') == ''){
							    i = 1;}
						    else if($("div.ImgShow img:eq(0)").attr('src') != '' && $("div.ImgShow img:eq(1)").attr('src') != '' && $("div.ImgShow img:eq(2)").attr('src') == ''){
						    i = 2;}
						    else if($("div.ImgShow img:eq(0)").attr('src') != '' && $("div.ImgShow img:eq(1)").attr('src') != '' && $("div.ImgShow img:eq(2)").attr('src') != ''){i = 3;}
	//		        		$('#imgShow').attr('src', data);
				        	$(".success").show();
				        	$(".num").text(i);
			        	}else{
			        		alert("提示：最多上传三张照片");
			        	};
	        		}else{alert("提示：最多上传三张照片");}
		        },
		        error: function(XmlHttpRequest, textStatus, errorThrown){
		            alert(XMLHttpRequest.status);
                    alert(XMLHttpRequest.readyState);
                    alert(textStatus);
		        }
		    }); 
        });
        
        $('#upJQuery').click(function() {
//      	alert(data);
			var username = $("input[id='username']").val(),
			    age = $("select[id='age']").val(),
			    occ = $("input[id='occ']").val(),
			    tel = $("input[id='tel']").val(),
			    introduction = $("textarea[id='introduction']").val(),
			    imgs = new Array();
			    imgs[0] = $(".ImgShow img:eq(0)").attr('src');
			    imgs[1] = $(".ImgShow img:eq(1)").attr('src');
			    imgs[2] = $(".ImgShow img:eq(2)").attr('src');
			    photo = $(".ImgShow").html();
			    
			
//			    alert(photo);
			$.ajax({
				type: "POST",
				url: "http://www.yulin520.com/a2a/yzylApply/apply",
				data:{"username":username,"age":age,"occ":occ,"tel":tel,"introduction":introduction,"imgs":data},
				success: function(data) {
					if(username == ''){
						alert("请输入姓名");return false;}
					else if(occ == '' || occ =='一句话介绍你的职业吧'){
						alert("请填写职业信息");return false;}
					else if(tel == '' || tel == '便于我们与您联系'){
						alert("请填写电话号码便于联系");return false;}
					else if(introduction == '' || introduction =='简单介绍一下自己呗（不超过100字）'){
						alert("请简单介绍下自己");return false;}
					else if(photo == ''){
						alert("请上传至少一张照片");return false;}
////					alert("未停止");
//					$(".apply").hide();
//					$(".finish").show();
					alert("申请成功!");
//					refresh();
					window.location.href = "http://www.yulin520.com/list.html";
//					window.location.reload();
				},
				error: function(XmlHttpRequest, textStatus, errorThrown){
		            alert( "error");
		        }
			});
		});
    })
	