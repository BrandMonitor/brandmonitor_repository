window.onload = function() {
    setTimeout(function() {
        
// XHR to request a JS and a CSS
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '../../../resources/h5/js/zepto.js');
        xhr.send('');
        xhr = new XMLHttpRequest();
        xhr.open('GET', '../../../resources/h5/css/community/style.css');
        xhr.send('');
         xhr = new XMLHttpRequest();
        xhr.open('GET', '../../../resources/h5/css/community/animations.css');
        xhr.send('');
// preload image
        new Image().src = "../../../resources/h5/test/images/loading.jpg";
        new Image().src = "http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fh5%2Fimg%2Fmenu.png";
    }, 1000);
};
		
//$(function(){
//	setTimeout(function(){
//		$("#loading").hide();
//	},2500);
//});

//window.onload = function(){
//	$("#loading").hide();
//};
		
		function loadata_yl(pageIndex){
			$.ajax({ 
				type:"GET",  
				url:"http://www.yulin520.com/a2a/news/yzyl/list", 
				data: {"page":pageIndex},
				async:false,
				dataType:"json", 
				success:function(json){ 	
					var data= json.data;
					var length=data.length;
					for(i=0;i<length;i++){
						if(i!=length){
							$('section.ylsection').append(
								'<a href="'+data[i].url+'" class="Url"><div class="append_img"><img src="'+data[i].img+'" class="image"  alt=""></div><div class="append_title">'
								+'<div class="title">'
								+data[i].title+'</div></div><div class="append_comment"><div class="click">'
								+data[i].click+'</div><span>阅读</span><div class="replyTimes">'
								+data[i].replyTimes+'</div><span>评论</span></div></a>'
							);
						}
					}
//					var t_img; // 定时器
//					var isLoad = true; // 控制变量
//					 
//					// 判断图片加载状况，加载完成后回调
//					isImgLoad(function(){
//					    // 加载完成
//					});
//					// 判断图片加载的函数
//					function isImgLoad(callback){
//					    // 注意我的图片类名都是cover，因为我只需要处理cover。其它图片可以不管。
//					    // 查找所有封面图，迭代处理
//					    $('.append_img img').each(function(){
//					        // 找到为0就将isLoad设为false，并退出each
//					        if(this.height === 0){
//					            isLoad = false;
//					            return false;
//					        }
//					    });
//					    // 为true，没有发现为0的。加载完毕
//					    if(isLoad){
//					        clearTimeout(t_img); // 清除定时器
//					        // 回调函数
//					        $("#loading").hide();
//					        callback();
//					    // 为false，因为找到了没有加载完成的图，将调用定时器递归
//					    }else{
//					        isLoad = true;
//					        t_img = setTimeout(function(){
//					            isImgLoad(callback); // 递归扫描
//					        },500); // 我这里设置的是500毫秒就扫描一次，可以自己调整
//					    }
//					}
					
				},
				
				error: function(XMLHttpRequest){
					alert(XMLHttpRequest.request);
				}
			}); 
		}
		
		$(function(){
			loadata_yl(1);
			loadata_act(1,1000);
			loadata_help(1,1000);
		});
		
		function loadata_act(pageIndex,pageSize){
			$.ajax({ 
				type:"GET",  
				url:"http://www.yulin520.com/a2a/events/list",  
				data: {"page":pageIndex,"pageSize":pageSize,},
				dataType:"json",
				beforeSend: function(request) {
                        request.setRequestHeader("communityId", "1");
              	},
				success:function(json){ 	
					var data= json.data;
					var length=data.length;
					
					for(i=0;i<length;i++){
						if(i!=length){
								
							$('div.append_act').append(
								'<div class="help_both"><div class="act_img"><img src="'+data[i].img+'" class="img" alt=""/></div><div class="act_text"><div class="help_title"><span class="big_title">标题：</span>'
								+data[i].title+'</div><div class="help_introduction"><span class="big_title">简介：</span>'
								+data[i].introduction+'</div><div class="help_eventsTime"><span class="big_title">日期：</span>'
								+data[i].eventsTimeStr+'</div></div></div>'
							);
							
						}
					}
				},
				
				error: function(XMLHttpRequest){
					alert(XMLHttpRequest.request);
				}
			}); 
		}
		
		function loadata_help(pageIndex,pageSize){
			$.ajax({ 
				type:"GET",  
				url:"http://www.yulin520.com/a2a/hp/list",  
				data: {"page":pageIndex,"pageSize":pageSize,},
				dataType:"json",
				beforeSend: function(request) {
                        request.setRequestHeader("communityId", "1");
              	},
				success:function(json){ 	
					var data= json.data;
					var length=data.length;
					for(i=0;i<length;i++){
						if(i!=length){
								
							$('div.append_help').append(
								'<div class="help_both"><div class="help_img"><img src="'+data[i].userImg+'" class="img" style="border-radius:100px;" alt=""/></div><div class="help_text"><div class="help_title">'
								+data[i].title+'</div><div class="help_introduction">'
								+data[i].introduction+'</div></div></div>'
							);
						}
					}
				},
				
				error: function(XMLHttpRequest){
					alert(XMLHttpRequest.request);
				}
			}); 
		}
