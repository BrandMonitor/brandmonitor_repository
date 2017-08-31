//图片上传 
function checkFileEmpty(num,name)
{
	$('#'+num+'ImageText').attr('src','http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Floading.gif');
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

//function uploadImageFile(num,name)
//{
//	var save='';
//	var id = num + "Image";
//	$.ajaxFileUpload
//  ({
//		  url : '/kk_trademark/file/uploadFile',
//	      async : false,
//	      secureuri : false,
//	      fileElementId : id,
//	      dataType : "json",
//	      success:function(data, status)
//	        {
//	      	if(data.status==200)
//	            {
//	  	      	reset=data.data;
//	          	var result=' /upload/tmreg/'+reset.savepath+' ';
//	          	$("#"+name+"_test").val(reset.savepath);
//	          	$('#'+num+'ImageText').removeAttr('src');
//	          	$('#'+num+'ImageText').attr('src',result);
//	          	$('#'+num+'ImageTexts').attr('src',result);
//     			$('#'+num+'hide').attr('style','"display:block;"');
//	  	        }
//	  	      else
//	 	  	    {
////	  	    		if(data.code=='100001')	alert("请上传JPG格式的图片");
//	  	    		if(data=='size')  alert("上传的图片大于10M");
////			    	if(data=='jpg')  alert("请上传JPG格式的图片");
//
//			    	var val=$("#"+name+"_test").val();
//			    	if (val =='')
//					{
//			    		$('#'+num+'ImageText').attr('src','');
//					}
//					else
//					{
//						$('#'+num+'ImageText').attr('src','/upload/tmreg/'+val);
//					}
//			    }
//		    },
//	         error:function(data,status,e)
//	         {
////	        		alert("请上传JPG格式的图片");
//	        		var val=$("#"+name+"_test").val();
//			    	if (val =='')
//					{
//			    		$('#'+num+'ImageText').attr('src','');
//					}
//					else
//					{
//						$('#'+num+'ImageText').attr('src','/upload/tmreg/'+val);
//					}
//	         }
//	});  
//}

//判断输入是否符合要求
function noticeShows(obj,checktype,InfoMsg){
	showInfo(checktype+"Warn",InfoMsg);
	showclass(checktype+"Warn",'min_tip_optional');
	$(obj).next("span").show();
}
//判断输入是否符合要求
function noticeShow(obj,checktype,InfoMsg){
	showInfo(checktype+"Title",InfoMsg);
   showclass(checktype+"Warn",'min_tip_optional');
   if($(checktype+"Warn").innerHTML!=' '){showInfo(checktype+"Warn"," ");}
   $("#"+checktype+"Show").show();
}

//删除左右两端的空格
function trim(str){ 
    return str.replace(/(^\s*)|(\s*$)/g, "");
}

function asdf(obj,checkvalue,checktype,minlen,maxlen)
{
	noticeHideAndCheck(obj,checkvalue,checktype,minlen,maxlen);
}

var xx=0;
function asd(aid)
{
	var aname = document.formUser.AName.value;
	var val={'AName':aname,'AId':aid};
	if(aname != ''){
	$.ajax({
		url: '/ap/asd',
 		async : true,
 		secureuri : false,
		type: "POST",
		data: val,
		dataType: "json",
		success: function(data ,status){
			if(data==null){
				xx = 0;
				document.getElementById('ANameasd').style.display = "none";
			}else{
				xx = 1;
				if(data.status==200)
	            {
					document.getElementById('ANameasd').style.display = "";
					document.getElementById('ANameWarn').style.display = "none";
	  	        }
			}
		}
    });
	}
}

function validation(apti){
	var _form = document.formUser;
	if(trim(_form.MoName.value) == '')
	{
		document.formUser.MoName.focus();
		return false;
	}

	if(!chknempty(document.formUser.MoName,document.formUser.MoName.value,'MoName',1,200))
	{
		document.formUser.MoName.focus();
		return false;
	}
	
	if(trim(_form.AName.value) == '')
	{
		document.formUser.AName.focus();
		return false;
	}
	
	if(!chknempty(document.formUser.AName,document.formUser.AName.value,'AName',1,200))
	{
		document.formUser.AName.focus();
		return false;
	}

	if(apti==-1 && trim(_form.IDNumber.value)=="")
	{
		document.formUser.IDNumber.focus();
		return false;
	}
	if(apti==-1 && !chknempty(document.formUser.IDNumber,document.formUser.IDNumber.value,'IDNumber',1,200))
	{
		document.formUser.IDNumber.focus();
		return false;
	}

	if(trim(document.formUser.province.value)=="-1" || trim(document.formUser.city.value)=="-1" || trim(document.formUser.area.value)=="-1")
	{
		if(apti==1){
			alert("请选择营业执照行政区划");
		}else{
			alert("请选择申请人行政区划");
		}
		return false;
	}

	if(trim(_form.IDAddress.value) == '')
	{
		document.formUser.IDAddress.focus();
		return false;
	}

	if(!chknempty(document.formUser.IDAddress,document.formUser.IDAddress.value,'IDAddress',1,200))
	{
		document.formUser.IDAddress.focus();
		return false;
	}

	if(trim(_form.PostCode.value) == '')
	{
		document.formUser.PostCode.focus();
		return false;
	}

	if(!chknempty(document.formUser.PostCode,document.formUser.PostCode.value,'PostCode',1,200))
	{
		document.formUser.PostCode.focus();
		return false;
	}
	
	if(trim(_form.Contacts.value) == '')
	{
		document.formUser.Contacts.focus();
		return false;
	}

	if(!chknempty(document.formUser.Contacts,document.formUser.Contacts.value,'Contacts',1,200))
	{
		document.formUser.Contacts.focus();
		return false;
	}

	if(trim(_form.Phone.value) == '')
	{
		document.formUser.Phone.focus();
		return false;
	}

	if(!chknempty(document.formUser.Phone,document.formUser.Phone.value,'Phone',1,200))
	{
		document.formUser.Phone.focus();
		return false;
	}
	
	if(trim(_form.Email.value) == '')
	{
		document.formUser.Email.focus();
		return false;
	}
	
	if(!chknempty(document.formUser.Email,document.formUser.Email.value,'Email',1,200))
	{
		document.formUser.Email.focus();
		return false;
	}

	if(!chknempty(document.formUser.MailingAddress,document.formUser.MailingAddress.value,'MailingAddress',1,200))
	{
		document.formUser.MailingAddress.focus();
		return false;
	}
	
	if(apti==1 && trim(_form.BusinessImg_test.value) == '')
	{
		alert("请添加营业执照副本复印盖公章");
		return false;
	}
	
	if(apti==-1 && trim(_form.IDCardImg_test.value)=="")
	{
		alert("请添加身份证正反面复印签字");
		return false;
	}
	if(apti==-1 && trim(_form.PersonImg_test.value)=="")
	{
		alert("请添加个体户执照复印签字");
		return false;
	}
	
	_form.province.value = mydata[_form.province.value];
	_form.city.value = mydata[_form.city.value];
	_form.area.value = mydata[_form.area.value];
	document.formUser.submit();  
}



