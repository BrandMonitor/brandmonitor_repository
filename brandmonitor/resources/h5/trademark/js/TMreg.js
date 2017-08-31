//图片上传 
function checkFileEmpty(num,name)
{  
          var fileName = $('#'+num+'Image').val();
          if(fileName.lastIndexOf('\/') >= 0)
          {
        	  var shortFileName = fileName.substr(fileName.lastIndexOf('\/')+1);
          }
          else if(fileName.lastIndexOf('\\') >=0)
          {
             var shortFileName = fileName.substr(fileName.lastIndexOf('\\')+1);
          }
          else
          {
             var shortFileName = fileName;         
          } 
        	  uploadImageFile(num,name);
                 
 }

//点击查询按钮查询
$(function(){
	$("button[id='search']").click(function()
	{
		var sorts='';
		var value=document.getElementById("sortName").value;  
		if(value=='服装纺织' || value=='食品饮料' || value=='餐饮酒店' || value=='化妆美容' || value=='医药设备' || value=='日常用品' ||value=='家具用具' || value=='IT互联网' || value=='化工能源' || value=='电子仪器' || value=='机械制造' || value=='建材五金' || value=='房产金融' )
			{		
			return false;
			}
//   TotleSearch(sorts,value);
	 });
}); 

//查询
//function TotleSearch(sorts,value)
//{  
//	value=document.getElementById("sortName").value; 
// 	var valueName=document.getElementById("TmName").value;
//	if(sorts!='')
//	{
//		tot=sorts.split(",");
//	}
// 	if(value=='') value='a';
//  var item;
//	 $.ajax({
//       type:"GET",
//       url:"/tm/sort",
//       data:{sortName:value},
//       datatype:'json',
//       success:function(son){   
//      	 var son = eval("(" + son + ")");
//           var group='',long='';
//        param=son.data.length;  
//        	if(son.status==100){alert(son.msg[0]); return false;}
//          if(son.status==200)
//      {  
//            if(param!=0)
//        {
//           $(".type_list").find('li').each(function()
//         {                	 			
//                	  var sb=$(this).children('a').attr('id');
//                	  var y=0,abc=0;group=son.data.group;long=param;
//         for(var i=0;i<=param;i++)
//       {
//                 if(son.data.group[i]!=sb)
//          {                  	 		        
//		             $(this).removeClass('optional');
//		             $(this).removeClass('selected');
//		             $("#"+sb).removeAttr('href');
//		             $("#"+sb).attr('data-flag','0'); 
//		             $("#"+sb).removeAttr('onclick');
//		             $("#"+sb).unbind();
//                }else{
//                	 	y=1;
//                	  abc=sb;
//                	 }
//                	 if(y==1)
//           {
//                  $(this).addClass('optional');
//                	 $("#"+abc).attr('href','javascript:void(0);'); 
//                	 $("#"+abc).click(function(){ popUp(this) }); 
//                	 $("#"+abc).attr('data-flag','1'); 
//            } 
//      }  
//         })                 	                	    		       
//       }else if(param==0 && sorts!='')
//       {
//             $(".type_list").find('li').each(function(){
//                   var sb=$(this).children('a').attr('id');
//                   var y=0,abc=0;group=tot;long=tot.length;
//                   for(var i=0;i<=tot.length;i++)
//          {
//                    if(Number(tot[i])!=Number(sb))
//            {                  	 		        
//    		           $(this).removeClass('optional');
//    		           $(this).removeClass('selected');
//    		           $("#"+sb).removeAttr('href');
//    		           $("#"+sb).attr('data-flag','0'); 
//    		           $("#"+sb).removeAttr('onclick');
//    		           $("#"+sb).unbind();
//                  }else{
//                      y=1;
//                     abc=sb;
//                 }
//                     if(y==1)
//            {
//                  $(this).addClass('optional');
//                  $("#"+abc).attr('href','javascript:void(0);'); 
//                  	if(enameid=='')
//             {
//                  		  $("#"+abc).click(function(){ popUps(this) }); 
//                  }else{
//          	              $("#"+abc).click(function(){ popUp(this) }); 
//             }
//                  $("#"+abc).attr('data-flag','1'); 
//            } 
//          }
// })
//        }else{
//                	$(".type_list").find('li').removeClass('optional');	
//                	$(".type_list").find('li').removeClass('selected');	
//                	$(".type_list").find('a').removeAttr("href");	
//                	$(".type_list").find('a').attr('data-flag','0'); 
//                	$(".type_list").find('a').removeAttr("onclick");	
//                	$(".type_list").find('a').unbind();
//           }            	               	    	
//      }	else{
//					  alert("系统错误");
//            }	
//        
//   },
//  error:function(son){	
//                		alert("系统错误");
//                			}
//    });	
//}

//查询近似，点击查看详情
function searchSort(strs,values)
{
	 $.ajax({
         type:"get",
         url:"/search/reg",
         data:{tmName:values,sort:strs},
         datatype:'json',
         success:function(son){ 
        	 var son = eval("(" + son + ")");
        	 if(son.status==200)
        {  
        		 var totalNum=son.data.total;
        		 if(totalNum!=0){
        		 $(".c_orange").html(totalNum);   
        		 hide='<a  target="_blank"  href="/search/reg?tmName= '+encodeURIComponent(values)+'&sort='+strs+' " >点击查看详情</a>';
        		 $("#searchsorts").html(hide);
        		 }
        	  //  $("#searchsorts").attr('href','/search/reg?tmName='+encodeURIComponent(values)+'&sort='+strs+'');
        		// $("#searchsorts").attr('target',"_blank");
        		 if(totalNum==0)
        	 {
        			 $(".c_orange").html(totalNum);
        	 }
        	}
         }
	 });
}
//
var result='';
function pop(obj)
{
	$(".clearfix").find("#"+obj.id).parent('li').addClass('selected');
	$(".clearfix").find("#"+obj.id).parent('li').removeClass('optional');
	common(obj.id,obj.title);
	result =  $(".class_info").html();	
	
}
//点击大类后出现的
function popUp(obj){
	 $.ajax({
         type:"post",
         url:"/tm/getHistory",
         data:{TmSort:obj.id},
         datatype:'json',
         success:function(son){
        	 Tmtitles=' ';tmother='';
        	 var son = eval("(" + son + ")");
        	if(son.status==200)
        	{      
        		if(son.data.length>5)
        	{
        			  for(tb=0;tb<5;tb++)
             	{
        				   tmidset= $("#choseTm"+son.data[tb].TmId).html();
       		    	        if(tmidset!=null)
       		    		{
       		    	    	Tmtitles+='<a href="javascript:void(0);" style="color:#ccc" class="tm'+son.data[tb].TmId+'" title="'+son.data[tb].TmName+'">【'+son.data[tb].TmName.substr(0,8)+'】</a>&nbsp;';
       		    	     	}else{
       		    			Tmtitles+='<a href="javascript:void(0);" onclick="history('+son.data[tb].TmId+');" class="tm'+son.data[tb].TmId+'" title="'+son.data[tb].TmName+'">【'+son.data[tb].TmName.substr(0,8)+'】</a>&nbsp;';
       		    		}
            	}
        			   for(ty=0;ty<son.data.length;ty++)
        		   {
        				   tmidset= $("#choseTm"+son.data[ty].TmId).html();
       		    	        if(tmidset!=null)
       		    		{
       		    	         tmother+='<a href="javascript:void(0);"  style="color:#ccc" class="tm'+son.data[ty].TmId+'"  title="'+son.data[ty].TmName+'">'+son.data[ty].TmName.substr(0,8)+'</a>&nbsp;';
       		    		}else{
       		    		     tmother+='<a href="javascript:void(0);" onclick="history('+son.data[ty].TmId+');" class="tm'+son.data[ty].TmId+'"  title="'+son.data[ty].TmName+'">'+son.data[ty].TmName.substr(0,8)+'</a>&nbsp;';
       		    		}
        				 
        		   }
        			   $("#TmHistoryList").html(tmother);
        			  Tmtitles+="&nbsp;&nbsp;&nbsp;<a  href='javascript:void(0);' onclick='showHistoryMore(this)' style='color:#ff6b1c'>更多</a>";
        	    }else{
	        		     for(tb=0;tb<son.data.length;tb++)
	            	{
	        		    	      tmidset= $("#choseTm"+son.data[tb].TmId).html();
		        		    	    if(tmidset!=null)
		        		    		{
		        		    	    	Tmtitles+='<a href="javascript:void(0);"  style="color:#ccc"  class="tm'+son.data[tb].TmId+'" title="'+son.data[tb].TmName+'">【'+son.data[tb].TmName.substr(0,8)+'】</a>&nbsp;';
		        		    		}else{
		        	          	Tmtitles+='<a href="javascript:void(0);" onclick="history('+son.data[tb].TmId+');" class="tm'+son.data[tb].TmId+'" title="'+son.data[tb].TmName+'">【'+son.data[tb].TmName.substr(0,8)+'】</a>&nbsp;';
		               	}
	            	}
        	}
        		reall= '<p>您之前在第<span style="color: red">'+obj.id+'</span>类申请过商标：<span id="historyName"></span></p>';
        		$("#tmsot").html(reall);
        		$("#historyName").html(Tmtitles);
      	}else{
      	 	reall='';
        	$("#tmsot").html(reall);
      	}
         },
	 });
	
	if(!$(".clearfix li").find('a[data-flag=1]').size()){
	 $(".clearfix li").removeClass('selected');
	 $(".clearfix li").addClass('optional');
}else{
	$(".clearfix li").find('a[data-flag=1]').parent('li').removeClass('selected');
	$(".clearfix li").find('a[data-flag=1]').parent('li').addClass('optional');
}
	$("#theTotalPrice").html(0);
	$("#theTotalNum").html(0);
	 theTotalPrice = 0;
	 theTotalNum = 0;
	common(obj.id,obj.title);
}

function popUps(obj)
{
	if(!$(".clearfix li").find('a[data-flag=1]').size()){
		 $(".clearfix li").removeClass('selected');
		 $(".clearfix li").addClass('optional');
	}else{
		$(".clearfix li").find('a[data-flag=1]').parent('li').removeClass('selected');
		$(".clearfix li").find('a[data-flag=1]').parent('li').addClass('optional');
	}
		$("#theTotalPrice").html(0);
		$("#theTotalNum").html(0);
		 theTotalPrice = 0;
		 theTotalNum = 0;
		common(obj.id,obj.title);
}
//显示更多的历史记录商标
function showHistoryMore()
{
	   $(".pop_box").show();
	   $("#Tmmach").show();
	   $("#tMcol").click(function(){$("#Tmmach").hide();$(".pop_box").hide();});
}

//显示二级，
function common(num,title){
	//num:表示大类，比如45
	         var dataPopped = num;
	        	var checkBoxes = '';
	        	 var box='';
 		    	var	resultArray=[];
 		    	for(var i=0;i<trademark[num-1]['objs'].length;i++)
 		    	{
 		    		resultArray[trademark[num-1]['objs'][i].id]=trademark[num-1]['objs'][i].desc;
 		    	}
		    box = '第'+dataPopped+'类'+' '+title;	 
		    $(".list_tit").html(box);
		    $("#"+num).parent().removeClass('optional').addClass('selected');
 				for(key in resultArray){
	 				if(key != '1'){
						if($.inArray(key,['0917','1203','2506','2610','1608','1102']) >= 0){
							checkBoxes +='<dt style="display:none"><span class="icon"></span><a href="javascript:void(0);" onclick="divToggle(\''+key+'\',\''+dataPopped+'\')">'+key+'  '+resultArray[key]+'</a></dt>';
						}else{
							checkBoxes += '<dt onclick="divToggle(\''+key+'\',\''+dataPopped+'\')"><span class="icon"></span><a href="javascript:void(0);"  >'+key+'  '+resultArray[key]+'</a></dt>';	
						}
	 					checkBoxes += '<dd style="display:none;" id="'+key+'"><ul></ul></dd>';
	 				}
 			    }
				$(".list_sec").html(checkBoxes);
				$(".list_sec").attr('ims',dataPopped);
}

//处理三级
function divToggle(divId,num){ 
	//divid表示二级:4501
	var id1,resultArray=[];
	if(document.getElementById(divId).style.display == 'block'){
		  $("#"+divId).prev('dt').removeClass('cur');
		document.getElementById(divId).style.display = 'none';
	}else if(document.getElementById(divId).innerHTML.length >=0){
		$("#"+divId).prev('dt').addClass('cur');
		id1=Number(divId.substring(0,2))-1;
		var checkBoxes ='';	
		var countNum ='';
		$(trademark[id1].objs).each(function(){
			if(this.id==divId)
				{
						resultArray=this.objs;
				}
		});
		for(key in resultArray){
			//resultArray[key].id表示三级：4500002，resultArray[key].desc表示名称：社交陪伴
			checkBoxes += '<li><a href="javascript:void(0);" name="'+resultArray[key].desc+'" idm="'+divId+'" class="'+resultArray[key].id.replace("*","x").replace("[",'').replace("]",'')+'vs'+resultArray[key].desc.replace("*","x").replace("[",'').replace("]",'')+'" onclick="checkboxChange(this,1);" >'+resultArray[key].id+resultArray[key].desc+'</a></li>'; 
			var parentId = resultArray[key].id;
			if(result.length!=10){
			$(result).find("a").each(function(){
	    	if(("a"+parentId+resultArray[key].desc.replace("*","x").replace("[",'').replace("]",''))==this.id || parentId.replace("*","ax").replace("[",'').replace("]",'')+'vs'+resultArray[key].desc.replace("*","x").replace("[",'').replace("]",'')==this.id || ('a'+parentId.replace("*","x").replace("[",'').replace("]",'')+'vs'+resultArray[key].desc.replace("*","x").replace("[",'').replace("]",''))==this.id ||("a"+parentId)==this.id || parentId.replace("*","ax").replace("[",'').replace("]",'')==this.id)
				{     
						$(document.body).append("<div style='display:none' id='ckbox'>"+checkBoxes+"</div>");
						$("#ckbox").find("."+parentId.replace("*","x").replace("[",'').replace("]",'')+'vs'+resultArray[key].desc.replace("*","x").replace("[",'').replace("]",'')).parent('li').addClass('selected');
						$("#ckbox").find("."+parentId.replace("*","x").replace("[",'').replace("]",'')+'vs'+resultArray[key].desc.replace("*","x").replace("[",'').replace("]",'')).removeAttr('onclick');
						$("#ckbox").find("."+parentId.replace("*","x").replace("[",'').replace("]",'')+'vs'+resultArray[key].desc.replace("*","x").replace("[",'').replace("]",'')).unbind("click");
						$("#ckbox").find("."+parentId.replace("*","x").replace("[",'').replace("]",'')+'vs'+resultArray[key].desc.replace("*","x").replace("[",'').replace("]",'')).removeAttr('href'); 
						checkBoxes = $("#ckbox").html();
						$("#ckbox").remove();
				}
			});
			}
		}
		$("#"+divId).children("ul").html(checkBoxes);
		$("#"+divId).css('display','block');
   }else if(document.getElementById(divId).style.display =='none'){
	   $("#"+divId).prev('dt').removeClass('cur');
   		document.getElementById(divId).style.display = 'block';
   }
}
//选中三级类别
var items= new Array(45),price=0;sb=0,getNum=0; var oldprice=0;
function checkboxChange(obj,issearch){
	if(issearch==2)
	{
		num=obj['num'];
		ids=obj['Parent'];
		set=obj['Sort']+'vs'+obj['SortName'];
		obj.className=obj['Sort']+'vs'+obj['SortName'];
		ids=obj['Parent'];
		obj.name=obj['SortName'];
	}else{
		num=obj.className.replace(/[^0-9]/ig,"").substr(0,2);
		ids=$(obj).attr('idm');  //0101
		set=$(obj).attr('class');  //010061vs氨
	}

/*	re = new RegExp(/^x250045\_\d$/);
	if(set.match(re)||set=='250045x')
	{
		sb++;
		if(sb>1){alert("相同小项选一个即可");return false;}
	}*/
 	$("."+set).parent('li').addClass('selected');
 	$("."+set).removeAttr('onclick'); 
 	$("."+set).removeAttr('href'); 
	var tp=$(".list_tit").html();
	var value = [];	 param=''; 
	var has =0,results='';
	oldNum=$("li[data-id='"+num+"']").find(".info_a").find('a').size();
	$(".class_info").find("li[data-id]").each(function(index){
		value[index] = $(this).attr("data-id");
		if(value[index]=='' || value[index]==num){
		    has =1;
		    if(oldNum!=0)
		    {
		    	 items[num-1]=oldNum;
		    }
			 items[num-1]+=1;
			 if( items[num-1]>10)
			{
				 price +=add;
			}	
			 getid=document.getElementById('info_a'+ids);
			 if(getid==null)
			 {
				  results+='<div id="info_a'+ids+'">';
				  results+='<span class="newlook" id="newlook'+ids+'">'+ids+'</span>';
				  results +='<a href="javascript:void(0);" onclick="delOne(\''+num+'\',\''+obj.className+'\',\''+ids+'\')" id="a'+obj.className+'" ><input type="hidden"  name="Tm[]"  value="'+num+','+ids+','+obj.className+','+obj.name+'"  />'+obj.name+'</a> ';
				  results +='</div>';
				  $(this).find(".info_a").append(results);
		    }else{
		    	$(this).find("#info_a"+ids).append('<a href="javascript:void(0);" onclick="delOne(\''+num+'\',\''+obj.className+'\',\''+ids+'\')" id="a'+obj.className+'" ><input type="hidden"  name="Tm[]"  value="'+num+','+ids+','+obj.className+','+obj.name+'"   />'+obj.name+'</a> ');
		   }
		}else{
			value=[];
		}
		result =  $(".class_info").html();	
	}) 
	if(value=='' && has!=1 ){
			  items[num-1]=1;
			  price +=base;	  
            result+='<li data-id="'+num+'" >';
			  result +='<h3 class="clearfix"><a href="javascript:void(0);"  onclick="delAll(\''+num+'\');" class="icon icon_delete"></a><span class="icon icon_drop"></span><span>'+tp+'</span><span class="hit">(共<em id="ab'+num+'" style="color:red;"></em>项,<em id="qiehuan'+num+'"></em>)</span></h3>'; 
			  result+='<div class="info_a">';
			  result+='<div id="info_a'+ids+'">';
			  result+='<span class="newlook" id="newlook'+ids+'">'+ids+'</span>';
			  result +='<a href="javascript:void(0);" onclick="delOne(\''+num+'\',\''+obj.className+'\',\''+ids+'\')" id="a'+obj.className+'" ><input type="hidden"  name="Tm[]"  value="'+num+','+ids+','+obj.className+','+obj.name+'"  />'+obj.name+'</a> ';
			  result +='</div>';
			  result +='</div>';
			  result += '</li>';	
	} 
    	oldprice=price;
	  $(".top_total").find('em').html('￥'+price+'元');
		$(".bottom_total").find('em').html('￥'+price+'元');
	   $(".class_info").html(result);
	  leg=$(".class_info ").find('li').size();
	  //统计大类下的小项数
	  getNum=$("li[data-id='"+num+"']").find(".info_a").find('a').size();
	  if(getNum>10)
	  {
		  $("#"+"ab"+num).html(getNum);
		  $("#qiehuan"+num).html('10项以上每项加收<em style="color:red;">60</em>元');
      }else{
    	  $("#"+"ab"+num).html(getNum);
		  $("#qiehuan"+num).html('还可以再选择<em style="color:red;">'+(10-getNum)+'</em>项,10项以内<em style="color:red;">600</em>元');
    }
	
	  	var valueName=document.getElementById("TmName").value;
	  	if(valueName!=''){
	  $(".class_info ").find('li').each(function(){
		  param +=$(this).attr('data-id')+',';
	  })
	   param=param.substring(0,param.length-1);
		searchSort(param,valueName);
	  	}
		
}
//删除单个
function delOne(num,data,delNum)
{  
	if(Number(num)<10) num='0'+Number(num);
	a=$("li[data-id='"+num+"']").find(".info_a").find('a').size();
	b=$("#info_a"+delNum).find('a').size();
	getNum=$("li[data-id='"+num+"']").find(".info_a").find('a').size();
	$("."+data).parent().removeClass('selected');
	$("."+data).attr('href','javascript:void(0);'); 
	$("."+data).one("click",function(){ checkboxChange(this,1); }); 
	$("#a"+data).remove();
		a--;getNum--;b--;
		items[num-1]--;
		if(a>=10 && a!=0)
		{
			price -=add; 
		}
		if(b==0)
		  {
				$("#newlook"+delNum).remove();
				$("#info_a"+delNum).remove();
			}
		if(a==0)
		{
			$(".class_info").find('li[data-id="'+num+'"]').remove();
			price -=base;
			   //当删除大类后，近似查询删除该类
			   var valueName=document.getElementById("TmName").value;
			   var sortParam='';
			if(valueName!=''){
			  $(".class_info ").find('li').each(function(){
				  sortParam +=$(this).attr('data-id')+',';
			  })
			   sortParam=sortParam.substring(0,sortParam.length-1);	
			 if(sortParam==''){
				  $(".c_orange").html('0');   
				  $("#searchsorts").html(' ');
			  }else{
				  searchSort(sortParam,valueName); 
			  }
			}
		}
		 if(getNum>10)
		  {
			  $("#"+"ab"+num).html(getNum);
			  $("#qiehuan"+num).html('10项以上每项加收<em style="color:red;">60</em>元');
	      }else{
	    	  $("#"+"ab"+num).html(getNum);
			  $("#qiehuan"+num).html('还可以再选择<em style="color:red;">'+(10-getNum)+'</em>项,10项以内<em style="color:red;">600</em>元');
	    }
		// $("#"+"ab"+num).html(getNum);
		 oldprice=price;
		$(".top_total").find('em').html('￥'+price+'元');
		$(".bottom_total").find('em').html('￥'+price+'元');
		result =  $(".class_info").html();	
}
//删除所有
function delAll(param)
{	
    $(".pop_box").show();
    $("#dels").show();
    $("#ok").unbind();
   // $("#ok").attr("onclick","delfunc("+param+");");
    $("#ok").click(function(){ delfunc(param) });
}
$("#cancle").click(function(){
	$(".pop_box").hide();
	$("#dels").hide();
})
$("#no").click(function(){$("#dels").hide();$(".pop_box").hide();})
var delfunc = function(param){
	   $(".list_sec[ims="+param+"]").find("li.selected").each(function(){
		   			$(this).removeClass("selected");
		   			$(this).find("a").one("click",function(){checkboxChange(this,1)}); 
		   			$(this).find("a").attr('href','javascript:void(0);'); 
	   })
			price -= (items[param-1]-10)<0?base:(items[param-1]-10)*add+base;
	      if(price<0)price=0;
		oldprice=price;
		   $(".top_total").find('em').html('￥'+price+'元');
		   $(".bottom_total").find('em').html('￥'+price+'元');
		   items[param-1]=0;
		  if(Number(param)<10) param='0'+Number(param);
		//  if(param<10) param='0'+param;
	   $(".class_info").find('li[data-id="'+param+'"]').remove();
	   result =  $(".class_info").html();
	   $("#dels").hide();
	   $(".pop_box").hide();
	   //当删除大类后，近似查询删除该类
	   var valueName=document.getElementById("TmName").value;
	   var sortParam='';
	if(valueName!=''){
	  $(".class_info ").find('li').each(function(){
		  sortParam +=$(this).attr('data-id')+',';
	  })
	   sortParam=sortParam.substring(0,sortParam.length-1);	
	 if(sortParam==''){
		  $(".c_orange").html('0');   
		  $("#searchsorts").html(' ');
	  }else{
		  searchSort(sortParam,valueName); 
	  }
	}
};
//选择其他联系人
function chose(arre)
{
	$("#list").html('');
	$("#list").append(arre);

	a=document.getElementById("AId").value;
   $("#list").find('a').each(function(){
	 if($(this).attr('id-id')==a)
		 {
		   $(this).addClass('cur'); 
		 }else{
			 $(this).removeClass('cur'); 
		 }
  })
  	$(".pop_box").show();
	$("#mach").show();
	$("#col").click(function(){$("#mach").hide();$(".pop_box").hide();})
}
//选中联系人后将结果显示在页面
function changeon(key,param)
{  
	$(".applicant").html(param+'<span class="icon_orange"></span>');
	$("#ApNames").val(param);
	$("#AId").val(key);
	$(".pop_box").hide();
	$("#mach").hide();
}
//判断输入是否符合要求
function noticeShows(obj,checktype,InfoMsg){
	showInfo(checktype+"Title",InfoMsg);
    showclass(checktype+"Warn",'min_tip_optional');
    if($(checktype+"Warn").innerHTML!=' '){showInfo(checktype+"Warn"," ");}
    $("#"+checktype+"Show").show();
}
function noticeShow(obj,checktype,InfoMsg){
	showInfo(checktype+"Warn",InfoMsg);
    showclass(checktype+"Warn",'min_tip_optional');
	$(obj).next("span").show();
}
//搜索下的显示和隐藏
function showAndhide(obj,type)
{
	var Layer=document.getElementById(obj);
    switch(type){
  case "show":
    Layer.style.display="block";
  break;
  case "hide":
    Layer.style.display="none";
  break;
}
}
//获取点击搜索下提示的值
function getValue(obj,str,sortNums){
    var input=document.getElementById(obj);
input.value=str;
input.title=sortNums;
var sorts=$("#sortName").attr('title');
$(".type_list").find('li').each(function(){
	$(this).find('a').attr('data-flag','0');
	if($(this).hasClass('selected'))
		{
		   $(this).removeClass('selected');
		   $(this).addClass('optional');
		}
})
//TotleSearch(sorts);
}