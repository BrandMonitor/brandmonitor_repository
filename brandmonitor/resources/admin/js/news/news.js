var pageSize = 3;
			function loadData(pageIndex){
				$.ajax({ 
					type:"GET",  
					url:"http://www.yulin520.com:8081/a2a/news/local/list",  
					data: {"page":pageIndex,"pageSize":pageSize},
					dataType:"json", 
					success:function(json){ 	
						var data= json.data;
						var length = data.length;
						
						$('.title').text(data[2].title);
						//$('.time').text(data[2].time);
						//$('.source').text(data[2].source);
						$('.introduction').text(data[2].introduction);
						$('.introduction1').text(data[2].introduction);
					},
					error: function(XMLHttpRequest){
						alert(XMLHttpRequest.request);
					}
				}); 
			};
			
			loadData(1);