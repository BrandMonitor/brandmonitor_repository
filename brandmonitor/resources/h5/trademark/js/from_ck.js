/**
 * Ajax用户注册验证 JS
 * ============================================================================
 * 这是一个免费开源的软件；这意味着您可以在不用于商业目的的前提下对程序代码
 * 进行修改、使用和再发布。
 * ============================================================================
 * $Author: Sunday & luck $
 * QQ： 346056372
 * Download:http://www.codefans.net
 * $Date: 2008-03-13 16:15:00 +0800  $
*/

//--------------注册协议复选框状态检测---------------------//
function check_agreement(){
  if (document.formUser.AgreeBox.checked==false)
  {
     showInfo("agreement_notice",agreement);
     return false;
}
  else
  {
    showInfo("agreement_notice",info_right);
    return true;
    }
}

//--------------特殊字符---------------------//
function checks(t){
    szMsg="[&'\%\=^]";
    for(i=1;i<szMsg.length+1;i++){
     if(t.indexOf(szMsg.substring(i-1,i))>-1){
      return false;
     }
    }
    if(t)
    {
	    var re = new RegExp("^[\\S]+$")
	    if(!re.test(t))
	     {
	    	return false
	     }
	    return true;
	    }
   }

//申请人地址问题
function checksa(t)
{
    szMsg="[&'\%\=^]";
    for(i=1;i<szMsg.length+1;i++)
     {
        if(t.indexOf(szMsg.substring(i-1,i))>-1)
          {
           return false;
          }
     }
	 return true;
}

//--------------必填项检测 ---------------------//
	function chknempty(obj,checkvalue,checktype,minlen,maxlen)
	{
		if (checks(checkvalue)== false && checktype!='TmName' && checktype!='TmExplain' && checktype!='MoName' && checktype!='IDAddress'){
			showInfo(checktype+"Warn","包含有非法字符");
			showclass(checktype+"Warn",'min_tip_error');
			return false;
		}else if (checksa(checkvalue)== false && checktype=='IDAddress'){
			showInfo(checktype+"Warn","包含有非法字符");
			showclass(checktype+"Warn",'min_tip_error');
			return false;
		}else if(checkvalue.length<minlen && checktype!='MailingAddress'){
			showInfo(checktype+"Warn","不能为空");
			showclass(checktype+"Warn",'min_tip_error');
			if(checktype=='TmName' || checktype=='TmExplain'){$("#"+checktype+"Show").hide();}
			return false;
		}else if(checkvalue.length>maxlen && checktype != 'ApPhone'){
			showInfo(checktype+"Warn","不要超过"+maxlen+"个字");
			showclass(checktype+"Warn",'min_tip_error');
			if(checktype=='TmName' || checktype=='TmExplain'){$("#"+checktype+"Show").hide();}
			return false;
		}else if(checkvalue === "0" && checktype != 'MailingAddress'){
			showInfo(checktype+"Warn","不能为空");
			showclass(checktype+"Warn",'min_tip_error');
			if(checktype=='TmName' || checktype=='TmExplain'){$("#"+checktype+"Show").hide();}
			return false;
		}else if('ApPhone'==checktype && ""!=checkvalue){
			if (checkPhone(checkvalue,checktype)== false){
				showInfo(checktype+"Warn","请填写正确的电话号码</span>");
				showclass(checktype+"Warn",'min_tip_error');
				return false;
			}
		}else if(checktype=='PostCode' && checkvalue !=''){
			if (checkPostCode(checkvalue) == false){
				showInfo(checktype+"Warn","请填写正确的邮政编码</span>");
				showclass(checktype+"Warn",'min_tip_error');
				return false;
			}
		}else if(checktype=='Phone' && checkvalue !=''){
			if (checkPhone(checkvalue,checktype) == false){
				showInfo(checktype+"Warn","请填写正确的电话号码</span>");
				showclass(checktype+"Warn",'min_tip_error');
				return false;
			}
		}else if(checktype=='Email' && checkvalue !=''){
			if (checkEmail(checkvalue) == false){
				showInfo(checktype+"Warn","请填写正确的邮箱</span>");
				showclass(checktype+"Warn",'min_tip_error');
				return false;
			}
		}else if(checktype=='IDNumber' && checkvalue !=''){
			if (checkIDNumber(checkvalue) == false){
				showInfo(checktype+"Warn","请填写正确的身份证号</span>");
				showclass(checktype+"Warn",'min_tip_error');
				return false;
			}
		}else if(checktype=='MoName' && checkvalue !=''){
			if (checkAName(checkvalue)== 'len'){
				showInfo(checktype+"Warn","不要超过30个汉字</span>");
				showclass(checktype+"Warn",'min_tip_error');
				return false;
			}else if (checkAName(checkvalue)== false){
				showInfo(checktype+"Warn","请填写正确的模板名称</span>");
				showclass(checktype+"Warn",'min_tip_error');
				return false;
			}
		}else if(checktype=='AName' && checkvalue !=''){
			if(checkApName(checkvalue)==false && $("#Aptitude").val()==1){
				showInfo(checktype+"Warn","请填写正确的申请企业名称</span>");
				showclass(checktype+"Warn",'min_tip_error');
				return false;
			}else if (checkAName(checkvalue)== 'len'){
				showInfo(checktype+"Warn","不要超过30个汉字</span>");
				showclass(checktype+"Warn",'min_tip_error');
				return false;
			}else if (checkAName(checkvalue)== false){
				if($("#Aptitude").val()==1){
					showInfo(checktype+"Warn","请填写正确的申请企业名称</span>");	
				}else{
					showInfo(checktype+"Warn","请填写正确的申请人名称</span>");
				}
				showclass(checktype+"Warn",'min_tip_error');
				return false;
			}
		}else if(checktype=='TmName' && checkvalue !=''){
			if (checkTmName(checkvalue)== false){
				showInfo(checktype+"Warn","不要超过50个汉字</span>");
				showclass(checktype+"Warn",'min_tip_error');
				 $("#"+checktype+"Show").hide();
				return false;
			}
		}else if(checktype=='TmExplain' && checkvalue !=''){
			if (checkTmExplain(checkvalue)== false){
				showInfo(checktype+"Warn","不要超过200个汉字</span>");
				showclass(checktype+"Warn",'min_tip_error');
				$("#"+checktype+"Show").hide();
				return false;
			}
		}else if(checktype=='IDAddress' && checkvalue!=''){
			if (checkIDAddress(checkvalue)== 'len'){
				showInfo(checktype+"Warn","不要超过50个汉字</span>");
				showclass(checktype+"Warn",'min_tip_error');
				return false;
			}else if(checkIDAddress(checkvalue) == false){
				if($("#Aptitude").val()==1){
					showInfo(checktype+"Warn","请填写正确的营业执照地址</span>");
				}else{
					showInfo(checktype+"Warn","请填写正确的身份证地址</span>");
				}
				showclass(checktype+"Warn","min_tip_error")
				return false;
			}
		}else if(checktype=='MailingAddress' && checkvalue!=''){
			if (checkIDAddress(checkvalue)== 'len'){
				showInfo(checktype+"Warn","不要超过50个汉字</span>");
				showclass(checktype+"Warn",'min_tip_error');
				return false;
			}else if(checkIDAddress(checkvalue) == false){
				showInfo(checktype+"Warn","请填写正确的邮寄地址</span>");
				showclass(checktype+"Warn",'min_tip_error');
				return false;
			}
		}else if(checktype=='Contacts' && checkvalue !=''){
			if (checkContacts(checkvalue)== 'len'){
				showInfo(checktype+"Warn","不要超过10个汉字</span>");
				showclass(checktype+"Warn",'min_tip_error');
				return false;
			}else if(checkContacts(checkvalue)== false){
				showInfo(checktype+"Warn","请填写正确的联系人</span>");
				showclass(checktype+"Warn",'min_tip_error');
				return false;
			}
		}else if(checkvalue != '' && checktype == 'ApPhone'){
			if (checkPhone(checkvalue,checktype)== false){
				showInfo(checktype+"Warn","请填写正确的电话号码</span>");
				showclass(checktype+"Warn",'min_tip_error');
				return false;
			}
		}else{
			showInfo(checktype+"Warn","");
			showclass(checktype+"Warn",'min_tip_success_nobg');
			if(checktype=='TmName' || checktype=='TmExplain'){ $("#"+checktype+"Show").hide();}
			return true;
		}
		return true;
	}
//--------------可选项检测 ---------------------//
function noticeHideAndCheck(obj,checkvalue,checktype,minlen,maxlen){
	if(checktype=='TmName' || checktype=='checkName'){
		var regExp = /(^\s*)|(\s*$)/; 
		if(checkvalue.replace(regExp,"")=="")
		{
			$("#"+checktype+"Show").hide();
			showInfo(checktype+"Warn","不能为空");
			showclass(checktype+"Warn",'min_tip_error');
			return false;
		}
	}
	if (checks(checkvalue)== false && checktype!='TmName' && checktype!='TmExplain' && checktype!='MoName' && checktype!='checkName' && checktype!='IDAddress'){
		showInfo(checktype+"Warn","包含有非法字符");
		showclass(checktype+"Warn",'min_tip_error');
		$("#"+checktype+"Show").hide();
//		if(checktype=='TmName' || checktype=='TmExplain'){$("#"+checktype+"Show").hide();}
		return false;
	}else if (checksa(checkvalue)== false && checktype=='IDAddress'){
		showInfo(checktype+"Warn","包含有非法字符");
		showclass(checktype+"Warn",'min_tip_error');
		$("#"+checktype+"Show").hide();
		return false;
	}else if(checkvalue.length>maxlen && checktype != 'ApPhone'){	
		showInfo(checktype+"Warn","不要超过"+maxlen+"个字</span>");
		showclass(checktype+"Warn",'min_tip_error');
		$("#"+checktype+"Show").hide();
		return false;
	}else if(checkvalue.length<minlen && checktype != 'MailingAddress'){
		showInfo(checktype+"Warn","不能为空</span>");
		showclass(checktype+"Warn",'min_tip_error');
		$("#"+checktype+"Show").hide();
		return false;
	}else if(checkvalue === "" && checktype != 'MailingAddress'){
		showInfo(checktype+"Warn","不能为空");
		showclass(checktype+"Warn",'min_tip_error');
		$("#"+checktype+"Show").hide();
		return false;
	}else if (trim(checkvalue).length<1 && checktype=='MoName'){
		showInfo(checktype+"Warn","不能全为空格");
		showclass(checktype+"Warn",'min_tip_error');
		$("#"+checktype+"Show").hide();
		return false;
	}else{
		if('Phone'==checktype && ""!=checkvalue){
			if (checkPhone(checkvalue,checktype)== false){
				showInfo(checktype+"Warn","请填写正确的电话号码</span>");
				showclass(checktype+"Warn",'min_tip_error');
				return false;
			}
		}else if('ApPhone'==checktype && ""!=checkvalue){
			if (checkPhone(checkvalue,checktype)== false){
				showInfo(checktype+"Warn","请填写正确的电话号码</span>");
				showclass(checktype+"Warn",'min_tip_error');
				return false;
			}
		}else if('PostCode'==checktype){
			if (checkPostCode(checkvalue) == false){
				showInfo(checktype+"Warn","请填写正确的邮政编码</span>");
				showclass(checktype+"Warn",'min_tip_error');
				return false;
			}
		}else if('PostCode2'==checktype){
			if (checkPostCode(checkvalue) == false){
				showInfo(checktype+"Warn","请填写正确的邮政编码</span>");
				showclass(checktype+"Warn",'min_tip_error');
				return false;
			}
		}else if('Email'==checktype){
			if (checkEmail(checkvalue) == false){
				showInfo(checktype+"Warn","请填写正确的邮箱</span>");
				showclass(checktype+"Warn",'min_tip_error');
				return false;
			}
		}else if('Email2'==checktype){
			if (checkEmail(checkvalue) == false){
				showInfo(checktype+"Warn","请填写正确的邮箱</span>");
				showclass(checktype+"Warn",'min_tip_error');
				return false;
			}
		}else if('IDNumber'==checktype){
			$("#"+checktype+"Show").hide();
			if (checkIDNumber(checkvalue) == false){
				showInfo(checktype+"Warn","请填写正确的身份证号</span>");
				showclass(checktype+"Warn",'min_tip_error');
				return false;
			}
		}else if('IDNumber2'==checktype){
			$("#"+checktype+"Show").hide();
			if (checkIDNumber(checkvalue) == false){
				showInfo(checktype+"Warn","请填写正确的身份证号</span>");
				showclass(checktype+"Warn",'min_tip_error');
				return false;
			}
		}else if('AName'==checktype && ""!=checkvalue){
			$("#"+checktype+"Show").hide();
			if(checkApName(checkvalue)==false && $("#Aptitude").val()==1){
				showInfo(checktype+"Warn","请填写正确的申请企业名称</span>");
				showclass(checktype+"Warn",'min_tip_error');
				return false;
			}else if (checkAName(checkvalue)== 'len'){
				showInfo(checktype+"Warn","不要超过30个汉字</span>");
				showclass(checktype+"Warn",'min_tip_error');
				return false;
			}else if (checkAName(checkvalue)== false){
				if($("#Aptitude").val()==1){
					showInfo(checktype+"Warn","请填写正确的申请企业名称</span>");	
				}else{
					showInfo(checktype+"Warn","请填写正确的申请人名称</span>");
				}
				showclass(checktype+"Warn",'min_tip_error');
				return false;
			}
		}else if('MoName'==checktype && ""!=checkvalue){
			$("#"+checktype+"Show").hide();
			if (checkAName(checkvalue)== 'len'){
				showInfo(checktype+"Warn","不要超过30个汉字</span>");
				showclass(checktype+"Warn",'min_tip_error');
				return false;
			}else if (checkAName(checkvalue)== false){
				showInfo(checktype+"Warn","请填写正确的模板名称</span>");
				showclass(checktype+"Warn",'min_tip_error');
				return false;
			}
		}else if('TmName'==checktype && ""!=checkvalue){
			if (checkTmName(checkvalue)== false){
				showInfo(checktype+"Warn","不要超过50个汉字</span>");
				showclass(checktype+"Warn",'min_tip_error');
				$("#"+checktype+"Show").hide();
				return false;
			}
		}else if('TmExplain'==checktype && ""!=checkvalue){
			if (checkTmExplain(checkvalue)== false){
				showInfo(checktype+"Warn","不要超过200个字符</span>");
				showclass(checktype+"Warn",'min_tip_error');
				$("#"+checktype+"Show").hide();
				return false;
			}
		}else if('Contacts'==checktype && ""!=checkvalue){
//			alert(checkContacts(checkvalue));
			if (checkContacts(checkvalue)== 'len')
			{
				showInfo(checktype+"Warn","不要超过10个汉字</span>");
				showclass(checktype+"Warn",'min_tip_error');
				return false;
			}else if(checkContacts(checkvalue)== false){
				showInfo(checktype+"Warn","请填写正确的联系人</span>");
				showclass(checktype+"Warn",'min_tip_error');
				return false;
			}
		}else if('Contacts2'==checktype && ""!=checkvalue){
//			alert(checkContacts(checkvalue));
			if (checkContacts(checkvalue)== 'len')
			{
				showInfo(checktype+"Warn","不要超过10个汉字</span>");
				showclass(checktype+"Warn",'min_tip_error');
				return false;
			}else if(checkContacts(checkvalue)== false){
				showInfo(checktype+"Warn","请填写正确的联系人</span>");
				showclass(checktype+"Warn",'min_tip_error');
				return false;
			}
		}else if('ApName'==checktype && ""!=checkvalue){
			if (checkContacts(checkvalue)== 'len')
			{
				showInfo(checktype+"Warn","不要超过10个汉字</span>");
				showclass(checktype+"Warn",'min_tip_error');
				return false;
			}else if(checkContacts(checkvalue)== false){
				showInfo(checktype+"Warn","请填写正确的联系人</span>");
				showclass(checktype+"Warn",'min_tip_error');
				return false;
			}
		}else if('TmName'==checktype && ""!=checkvalue){
			//近似查询该类
			var sortParam='';
			if(checkvalue!=''){
				$(".class_info ").find('li').each(function(){
					sortParam +=$(this).attr('data-id')+',';
				})
				sortParam=sortParam.substring(0,sortParam.length-1);	
				if(sortParam==''){
					$(".c_orange").html('0');   
					$("#searchsorts").html(' ');
				}else{
					searchSort(sortParam,checkvalue); 
				}
			}
		}else if('IDAddress'==checktype && ""!=checkvalue){
			$("#"+checktype+"Show").hide();
			if (checkIDAddress(checkvalue)== 'len'){
				showInfo(checktype+"Warn","不要超过50个汉字</span>");
				showclass(checktype+"Warn",'min_tip_error');
				return false;
			}else if(checkIDAddress(checkvalue) == false){
				if($("#Aptitude").val()==1){
					showInfo(checktype+"Warn","请填写正确的营业执照地址</span>");
				}else{
					showInfo(checktype+"Warn","请填写正确的身份证地址</span>");
				}
				showclass(checktype+"Warn","min_tip_error")
				return false;
			}
		}else if('IDAddress2'==checktype && ""!=checkvalue){
			$("#"+checktype+"Show").hide();
			if (checkIDAddress(checkvalue)== 'len'){
				showInfo(checktype+"Warn","不要超过50个汉字</span>");
				showclass(checktype+"Warn",'min_tip_error');
				return false;
			}else if(checkIDAddress(checkvalue) == false){
				if($("#Aptitude").val()==1){
					showInfo(checktype+"Warn","请填写正确的营业执照地址</span>");
				}else{
					showInfo(checktype+"Warn","请填写正确的身份证地址</span>");
				}
				showclass(checktype+"Warn","min_tip_error")
				return false;
			}
		}else if('MailingAddress'==checktype && ""!=checkvalue){
			if (checkIDAddress(checkvalue)== 'len'){
				showInfo(checktype+"Warn","不要超过50个汉字</span>");
				showclass(checktype+"Warn",'min_tip_error');
				return false;
			}else if(checkIDAddress(checkvalue) == false){
				showInfo(checktype+"Warn","请填写正确的邮寄地址</span>");
				showclass(checktype+"Warn",'min_tip_error');
				return false;
			}
		}
	}
	showInfo(checktype+"Warn","&nbsp;</span>");
	showclass(checktype+"Warn",'min_tip_success');
	$("#"+checktype+"Show").hide();
	return true;
}

function trim(str){
	return str.replace(/(^\s*)|(\s*$)/g, "");
}

function checkPhone(num,checktype){
	if(checktype=='Phone')
	var obj = document.getElementById("Phone");
	if(checktype=='ApPhone')
	var obj = document.getElementById("ApPhone");
	var str = obj.value;
	if (str.indexOf(" ") >=0)
	{
		return false;
	}
	else
	{
		var Expression=/(^0{1}[0-9]{2,3}(\-){0,1}[0-9]{7,8}$)|(^[0-9]{7,8}$)|(^\([0-9]{3,4}\)[0-9]{3,8}$)|(^(\+){0,1}(086){0,1}[1-9]{1}[0-9]{10}$)/;
		var objExp=new RegExp(Expression);
		if(objExp.test(num)==true){
			return true;
		}else{
		   return false;
		}
	}
}

function checkApName(num){
    var Expression=/(?:[\u4E00-\u9FFF]{1,8}·\u4E00-\u9FFF]{1,8})|(?:[\u4E00-\u9FFF]{2,5})/;
    var objExp=new RegExp(Expression);
    if(objExp.test(num)==true){
        return true;
    }else{
        return false;
    }
}

function checkAName(num){
	var Expression=/^((?=.*[0-9])(?=.*[a-zA-Z])|(?=.*[0-9])(?=.*[^\x00-\xff])|([^\x00-\xff])|([a-zA-Z])|(?=.*[a-zA-Z])(?=.*[^\x00-\xff])).{1,60}$/;
	var objExp=new RegExp(Expression);
	if(objExp.test(num)==true){
		var val=num;
		var valLength=0;
		for(var i=0;i<val.length;i++){
			var word=val.substring(i,i+1);
			if(/[^\x00-\xff]/g.test(word)){
				valLength+=2;
			}else{
				valLength++;
			}
		}
		if(valLength<=60)
		{
		    	return true;
		}
		return 'len';
	}
	else
	{
		return false;
	}
}

function checkTmName(num){
	var Expression=/^.{1,100}$/;
	var objExp=new RegExp(Expression);
	if(objExp.test(num)==true){
		var val=num;
		var valLength=0;
		for(var i=0;i<val.length;i++){
			var word=val.substring(i,i+1);
			if(/[^\x00-\xff]/g.test(word)){
				valLength+=2;
			}else{
				valLength++;
			}
		}
		if(valLength<=100)
		{
			return true;
		}
		return false;
	}
	else
	{
		return false;
	}
}

function checkTmExplain(num){
	if(num.length<=800){
		return true;
	}else{
		return false;
	}
}

function checkIDAddress(num){
	var Expression=/^((?=.*[0-9])(?=.*[a-zA-Z])|(?=.*[0-9])(?=.*[^\x00-\xff])|([^\x00-\xff])|([a-zA-Z])|(?=.*[a-zA-Z])(?=.*[^\x00-\xff])).{1,100}$/;
	var objExp=new RegExp(Expression);
	if(objExp.test(num)==true){
		var val=num;
		var valLength=0;
		for(var i=0;i<val.length;i++){
			var word=val.substring(i,i+1);
			if(/[^\x00-\xff]/g.test(word)){
				valLength+=2;
			}else{
				valLength++;
			}
		}
		if(valLength<=100)
		{
			return true;
		}
		return 'len';
	}
	else
	{
		return false;
    }
}

function checkContacts(num){
	var Expression=/^((?=.*[0-9])(?=.*[a-zA-Z])|(?=.*[0-9])(?=.*[^\x00-\xff])|([^\x00-\xff])|([a-zA-Z])|(?=.*[a-zA-Z])(?=.*[^\x00-\xff])).{1,20}$/;
	var objExp=new RegExp(Expression);
	if(objExp.test(num)==true){
		var val=num;
		var valLength=0;
		for(var i=0;i<val.length;i++){
			var word=val.substring(i,i+1);
			if(/[^\x00-\xff]/g.test(word)){
				valLength+=2;
			}else{
				valLength++;
			}
		}
		if(valLength<=20)
		{
			return true;
		}
		return 'len';
	}
	else
	{
		return false;
	}
}

function checkPostCode(num){
	var obj = document.getElementById("PostCode");
	var str = obj.value;
	if (str.indexOf(" ") >=0)
	{
		return false;
	}
	else
	{
		var Expression=/^[0-9]{6}$/
		var objExp=new RegExp(Expression);
		if(objExp.test(num)==true)
		{
			return true;
		}
		else
		{
			return false;
		}
    }
}

function checkEmail(num){
	var obj = document.getElementById("Email");
	var str = obj.value;
	if (str.indexOf(" ") >=0)
	{
		return false;
	}
	else
	{
	 var reg=/^.{6,30}$/;
	 var objExp=new RegExp(reg);
	 if(objExp.test(num)==true){
		 var Expression=/^[a-z0-9]+[_0-9a-z-]*@([0-9a-z][0-9a-z-]*\.)+[a-z]{2,4}$/i;
	    		var objExp=new RegExp(Expression);
	    		if(objExp.test(num)==true){
	    			return true;
	    		}else{
	    			return false;
	    		}
	    }
	    else
	    {
	    	return false;
	    }
	}
}

/**
 * 判断是否是身份证号
 */
function checkIDNumber(num)
{
	num = num.toUpperCase();  
	if (!(/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(num)))  
	{
		return false;
	}
	var len, re;
	len = num.length;
	if (len == 15)
	{
		re = new RegExp(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/);
		var arrSplit = num.match(re);
		var dtmBirth = new Date('19' + arrSplit[2] + '/' + arrSplit[3] + '/' + arrSplit[4]);
		var bGoodDay;
		bGoodDay = (dtmBirth.getYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3])) && (dtmBirth.getDate() == Number(arrSplit[4]));
		if (!bGoodDay)
		{
			return false;
		}
		else
		{
			var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
			var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
			var nTemp = 0, i;  
			num = num.substr(0, 6) + '19' + num.substr(6, num.length - 6);
			for(i = 0; i < 17; i ++)
			{
				nTemp += num.substr(i, 1) * arrInt[i];
			}
			num += arrCh[nTemp % 11];
			return true;  
		}  
	}
	if (len == 18)
	{
		re = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/);
		var arrSplit = num.match(re);
		var dtmBirth = new Date(arrSplit[2] + "/" + arrSplit[3] + "/" + arrSplit[4]);
		var bGoodDay;
		bGoodDay = (dtmBirth.getFullYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3])) && (dtmBirth.getDate() == Number(arrSplit[4]));
		if (!bGoodDay)
		{
			return false;
		}
		else
		{
			var valnum;
			var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
			var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
			var nTemp = 0, i;
			for(i = 0; i < 17; i ++)
			{
				nTemp += num.substr(i, 1) * arrInt[i];
			}
			valnum = arrCh[nTemp % 11];
			if (valnum != num.substr(17, 1))
			{
				return false;
			}
			return true;
		}
	}
	return false;
}

function trim(str){
    return str.replace(/(^\s*)|(\s*$)(^\;*)|(\;*$)/g, "");
}

//-------------处理注册程序-----------------------------//
function register() {
if(document.formUser.ApName.value=="")
{
    showclass("ApName","FrameDivWarn");
    showInfo("ApName_notice",msg_un_blank);
    document.formUser.ApName.focus();
    return false;
}
}

//------------ 按钮状态设置-----------------------------//
function change_submit(zt)
{
     if (zt == "true")
     {
   document.forms['formUser'].elements['Submit'].disabled = 'disabled';
     }
   else
     {
   document.forms['formUser'].elements['Submit'].disabled = '';
     }
}

//--------------注册协议复选框状态检测---------------------//
/*function check_agreement(){
  if (document.formUser.AgreeBox.checked==false)
  {
	  alert("您没有接受协议");
     return false;
}
  else
  {
    showInfo("AgreeBoxWarn",'');
    showclass("AgreeBoxWarn",'min_tip_success');
    return true;
    }
}*/

//------公用程序------------------------------------//
    function showInfo(target,Infos){
    document.getElementById(target).innerHTML = Infos;
    }
    function showclass(target,Infos){
    document.getElementById(target).className = Infos;
    }
var msg_un_blank = "<span style='COLOR:#ff0000'> ×(必填项)!</span>";