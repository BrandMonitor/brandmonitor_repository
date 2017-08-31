			
			
			
        	livelist1(1,1);
        	function livelist1(type,sex){
        		$.ajax({
        			type:"GET",
        			url:"http://wx.yulin520.com/a2a/wxjs/z1/selectFriend",
        			data: {},
					dataType:"json", 
					
					success:function(data){ 
						var datanum = new Array(30);
						for(var j=0;j<=29;j++)
						{
							if(data[j].nickname.length<10){
								datanum[j] = data[j];
							}
						}
						var length=datanum.length;
						$('div.survival1').before(
							'<b style="font-size:17px ;color:red;font-weight:bold;text-align: left;margin-bottom:3px;">幸存者</b>'
						);
						
						for(i=0;i<length;i++){
							if(i<=3){
								$('div.survival1').append(
									'<div class="user"><img src="'+datanum[i].headimgurl+'" /><div class="nickname">'
									+datanum[i].nickname+'</div></div>'
								);
								
								
							}else if(i<=7){
								$('div.survival2').append(
									'<div class="user"><img src="'+datanum[i].headimgurl+'" /><div class="nickname">'
									+datanum[i].nickname+'</div></div>'
								);
							}
						}
				    },
					
					error: function(XMLHttpRequest){
						alert(XMLHttpRequest.request);
					},
        		});
        	};
        	
        	var headimgurl = "${userInfo.headimgurl}";
        	setTimeout(function(){
	            $(".data-avt").attr("src",headimgurl);
	        },0);
	        
			rank();
			function rank(){
				$.ajax({
        			type:"GET",
        			url:"http://wx.yulin520.com/a2a/wxjs/z1/livelist",
        			data: {},
					dataType:"json", 
					
					success:function(data){ 
						var length = data.length;
						for(i=0;i<length;i++){
							if(i<12){
								$("table.rankcontent").append(
									'<tr><td>'
									+(i+1)+'</td><td><img src="'+data[i].headimgurl+'"/></td><td>'
									+data[i].nickname+'</td><td>'
									+data[i].remark2+'</td></tr>'
								)
							}
							
						}
				    },
					
					error: function(XMLHttpRequest){
						alert(XMLHttpRequest.request);
					},
        		});
			};
			
			$(function(){
				$(".prize").click(function(){
					$(".rank").show();
				});
				$(".close").click(function(){
					$(".rank").hide();
				});
			});
			
			
