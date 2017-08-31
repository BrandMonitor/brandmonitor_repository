function trim(str) {
	return (str + '').replace(/(\s+)$/g, '').replace(/^\s+/g, '');
}

$(document).ready(
				function() {
					$(".moreinfor").click(function() {
						var $this = $(this);
		                if($("#moreinfor").is(":hidden")){
		                    $this.children("span").html("- " + jsLang.register_notice1);
		                }else{
		                 $this.children("span").html("+ " + jsLang.register_notice1);
		                }
						var MoreinforType = $(this).find("#MoreinforType");
						value = MoreinforType.val();
						value = Math.abs(value - 1);
						MoreinforType.val(value);
						$("#moreinfor").toggle();
					});
					$("#Captcha").focus(function() {
							if($("#CaptchaImg").is(":hidden")) RefreshImage();
							$("#CaptchaImg").show();
							$("#CaptchaRefresh").show();
					});

//					$("form").submit(function() {
//						if ($("#isCheck").attr('checked') == undefined) {
//							$("#warning").addClass("min_tip_error");
//							$("#warning").html(jsLang.register_notice2);
//							return false;
//						} else {
//							return true;
//						}
//					});
					$("#RePassword").blur(function() {
						var obj = $("#RePassword");
						var rs = checkRePassword();
						if (rs) {
							errorSign(obj, rs);
						} else {
							successSign(obj);
						} 
					});

//					$("#Email").blur(function() {
//						var email = $("#Email").val();
//						var obj = $("#Email");
//						var rs = new Array();
//						var myreg = /^([a-zA-Z0-9]+([_]+|[\-|\.])?)*[a-zA-Z0-9_]+@([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/i;
//						if (email == "") {
//							errorSign(obj, jsLang.please_enter_email);
//							return;
//						}
//
//						if (containSpecial(email)
//								|| !myreg.test(email)) {
//							errorSign(obj, jsLang.email_format_error);
//							return;
//						}
////										checkIsRegistAjax(email);
//						successSign(obj);
//					});

					$("#Mobile").blur(function() {
						var obj = $("#Mobile");
						var rs = checkMobile();
						var staffCode = obj.val();
						var sign = hex_md5(staffCode+"GOyV3qmT)CR5!Gee'zAj@7W");
//						alert(staffCode);
						console.log(sign);
						$.ajax({
							type:'post',
							url:'/kk_trademark/user/isUserExist',
							data:{"staffCode":staffCode},
							beforeSend: function(request) {
				                request.setRequestHeader("sign",sign);
				            },
							success:function(json){
								if(json.code==-9){
									obj.next().html(jsLang.phone_repeat);
									obj.next().removeClass("min_tip_success min_tip_error min_tip_optional").addClass('min_tip_error');
								}
							},
							error:function(XMLHttpRequest,textRequest,errorThrown){
								alert(XMLHttpRequest.ststus);
								alert(textRequest);
							}
						})
						if (rs == 'yes') {
							successSign(obj);
						} else if (rs) {
							errorSign(obj, rs);
						} else {
							normalSign(obj,jsLang.register_notice3);
						}
					});
					$("#Mobile").keyup(function() {
						var str = $("#Mobile").val();
						if (str.length > 11) {
							var value = substr(str, 0, 11);
							$("#Mobile").val(value);
						}
					});

					$("#PhoneA").blur(function() {
						var obj = $("#Phone");
						var rs = checkPhone('Phone');
						if (rs == 'yes') {
							successSign(obj);
						} else if (rs) {
							errorSign(obj, rs);
						} else {
							normalSign(obj,jsLang.register_notice3);
						}
					});

					$("#Phone").blur(function() {
						var obj = $("#Phone");
						var rs = checkPhone('Phone');
						if (rs == 'yes') {
							successSign(obj);
						} else if (rs) {
							errorSign(obj, rs);
						} else {
							normalSign(obj,jsLang.register_notice3);
						}
					});

					$("#PhoneExt").blur(function() {
						var obj = $("#Phone");
						var rs = checkPhone('Phone');
						if (rs == 'yes') {
							successSign(obj);
						} else if (rs) {
							errorSign(obj, rs);
						} else {
							normalSign(obj,jsLang.register_notice3);
						}
					});

					$("#FaxA").blur(
							function() {
								var obj = $("#Fax");
								if (obj.val() == '' && $("#FaxExt").val() == ''
										&& $("#FaxA").val() == '') {
									normalSign(obj,jsLang.register_notice4);
									return;
								}
								var rs = checkFax('Fax');
								if (rs) {
									errorSign(obj, rs);
								} else {
									successSign(obj);
								}
							});

					$("#Fax").blur(function() {
						var obj = $("#Fax");
						if (obj.val() == '' && $("#FaxExt").val() == '') {
							normalSign(obj,jsLang.register_notice4);
							return;
						}
						var rs = checkFax('Fax');
						if (rs) {
							errorSign(obj, rs);
						} else {
							successSign(obj);
						}
					});

					$("#FaxExt").blur(function() {
						var obj = $("#FaxExt");
						if (obj.val() == '' && $("#Fax").val() == '') {
							normalSign(obj,jsLang.register_notice4);
							return;
						}
						var rs = checkFax('Fax');
						if (rs) {
							errorSign(obj, rs);
						} else {
							successSign(obj);
						}
					});

					$("#ChCompanyName").blur(function() {
						var obj = $("#ChCompanyName");
						if (obj.val() == '') {
							normalSign(obj,jsLang.enter_business_or_personal_name);
							return;
						}
						var rs = checkChCompanyName();
						if (rs) {
							errorSign(obj, rs);
						} else {
							successSign(obj);
						}
					});

					$("#ChFirstName").blur(function() {
						var obj = $("#ChFirstName");
						if (obj.val() == '' && $("#ChLastName").val() == '') {
							normalSign(obj,jsLang.entry_surname_name);
							return;
						}
						var rs = checkChName();
						if (rs) {
							errorSign(obj, rs);
						} else {
							successSign(obj);
						}
					});

					$("#ChLastName").blur(function() {
						var obj = $("#ChLastName");
						if (obj.val() == '' && $("#ChFirstName").val() == '') {
							normalSign(obj,jsLang.entry_surname_name);
							return;
						}
						var rs = checkChName();
						if (rs) {
							errorSign(obj, rs);
						} else {
							successSign(obj);
						}
					});

					$("#ChStreet").blur(function() {
						var obj = $("#ChStreet");
						if (obj.val() == '') {
							normalSign(obj,jsLang.register_notice5);
							return;
						}
						var rs = checkChStreet();
						if (rs) {
							errorSign(obj, rs);
						} else {
							successSign(obj,jsLang.register_notice5);
						}
					});

					$("#PostCode").blur(function() {
						var obj = $("#PostCode");
						if (obj.val() == '') {
							normalSign(obj,jsLang.enter_area_zip_code);
							return;
						}
						var rs = checkPostCode();
						if (rs) {
							errorSign(obj, rs);
						} else {
							successSign(obj);
						}
					});

					$("#EngCompanyName").blur(function() {
						var obj = $("#EngCompanyName");
						if (obj.val() == '') {
							normalSign(obj,jsLang.register_notice6);
							return;
						}
						var rs = checkEngCompanyName();
						if (rs) {
							errorSign(obj, rs);
						} else {
							successSign(obj);
						}
					});

					$("#EngFirstName").blur(function() {
						var obj = $("#EngFirstName");
						if (obj.val() == '' && $("#EngLastName").val() == '') {
							normalSign(obj,jsLang.register_notice6);
							return;
						}
						var rs = checkEngName();
						if (rs) {
							errorSign(obj, rs);
						} else {
							successSign(obj);
						}
					});

					$("#EngLastName").blur(function() {
						var obj = $("#EngLastName");
						if (obj.val() == '' && $("#EngFirstName").val() == '') {
							normalSign(obj,jsLang.register_notice6);
							return;
						}
						var rs = checkEngName();
						if (rs) {
							errorSign(obj, rs);
						} else {
							successSign(obj);
						}
					});

					$("#EngProvince").blur(function() {
						var obj = $("#EngProvince");
						if (obj.val() == '' && $("#EngCity").val() == '') {
							normalSign(obj,jsLang.register_notice6);
							return;
						}
						var rs = checkEngCity();
						if (rs) {
							errorSign(obj, rs);
						} else {
							successSign(obj);
						}
					});

					$("#EngCity").blur(function() {
						var obj = $("#EngCity");
						if (obj.val() == '' && $("#EngProvince").val() == '') {
							normalSign(obj,jsLang.register_notice6);
							return;
						}
						var rs = checkEngCity();
						if (rs) {
							errorSign(obj, rs);
						} else {
							successSign(obj);
						}
					});

					$("#EngStreet").blur(function() {
						var obj = $("#EngStreet");
						if (obj.val() == '') {
							normalSign(obj,jsLang.register_notice6);
							return;
						}
						var rs = checkEngStreet();
						if (rs) {
							errorSign(obj, rs);
						} else {
							successSign(obj);
						}
					});
					$("#Captcha").blur(function() {
						var obj = $("#Captcha");
						var rs = checkCaptcha();
						if (rs == 'yes') {
							successSign(obj);
						} else if (rs) {
							errorSign(obj, rs);
						} else {
							normalSign(obj);
						}
					});
				});

function checkMobile() {
	var mobile = $("#Mobile").val();
	var myreg = /^1(3|4|5|8|7)[0-9]{9}$/i;
	if (mobile != "") {
		if (!myreg.test(mobile)) {
			return jsLang.please_enter_right_mobile;
		} else {
			return 'yes';
		}
	} else {
		var PhoneA = $("#PhoneA").val();
		var Phone = $("#Phone").val();
		var PhoneExt = $("#PhoneExt").val();
		if (!(PhoneA || Phone || PhoneExt)) {
			return jsLang.register_notice3;
		} else {
			return false;
		}
	}
}

function checkPhone(name) {
	var Mobile = $("#Mobile").val();
	var PhoneA = $("#" + name + "A").val();
	var Phone = $("#" + name).val();
	var PhoneExt = $("#" + name + "Ext").val();
	var patternA = /^((010|898)|(02[0-9])|(0[3-9][0-9]{2}))+$/;
	var pattern = /^[0-9]{6,8}$/;
	var patternExt = /^[0-9]{0,6}$/;
	if (!Mobile && PhoneA == "") {
		return jsLang.entry_area_or_phone_number ;
	}
	if (PhoneA && !patternA.test(PhoneA)) {
		return jsLang.entry_right_area_code ;
	}
	if ((!Mobile || PhoneA) && Phone == "") {
		return jsLang.entry_right_phone_number;
	}
	if (Phone && !pattern.test(Phone)) {
		return jsLang.entry_right_phone_number;
	}
	if (!patternExt.test(PhoneExt)) {
		return jsLang.enter_right_extension_number;
	}
	if (PhoneA || Phone || PhoneExt) {
		return 'yes';
	} else {
		return false;
	}
}

function checkFax(name) {
	var PhoneA = $("#" + name + "A").val();
	var Phone = $("#" + name).val();
	var PhoneExt = $("#" + name + "Ext").val();
	var patternA = /^((010|898)|(02[0-9])|(0[3-9][0-9]{2}))+$/;
	var pattern = /^[0-9]{6,9}$/;
	var patternExt = /^[0-9]{0,6}$/;
	if (PhoneA == "") {
		return jsLang.enter_fax_area_code;
	}
	if (!patternA.test(PhoneA)) {
		return jsLang.enter_right_fax_area_code;
	}
	if (Phone == "") {
		return jsLang.enter_right_fax_code;
	}
	if (!pattern.test(Phone)) {
		return jsLang.enter_right_fax_code;
	}
	if (!patternExt.test(PhoneExt)) {
		return jsLang.enter_right_extension_number;
	}
	return false;
}

function checkChCompanyName() {
	var postStr = trim($("#ChCompanyName").val());
	if (!postStr) {
		return jsLang.enter_business_or_personal_name;
	}
	var pattern = /^.*[\u4e00-\u9fa5]+.*$/;
	if (!pattern.test(postStr)) {
		return jsLang.company_name_must_contain_characters;
	}
	var len = postStr.length;
	if (len >= 2 && len <= 22) {
		ChToPy('EngCompanyName', 'ChCompany', postStr);
		return false;
	} else {
		return jsLang.enter_business_or_personal_name;
	}
}

function checkChName() {
	var chFirstName = trim($("#ChFirstName").val());
	var chLastName = trim($("#ChLastName").val());
	if (!chFirstName) {
		return jsLang.entry_surname;
	}
	var pattern = /^[·\u4e00-\u9fa5]+$/;
	if (!pattern.test(chFirstName)) {
		return jsLang.entry_characters;
	}
	if (!chLastName) {
		return jsLang.entry_your_name;
	}
	if (!pattern.test(chLastName)) {
		return jsLang.entry_characters;
	}
	var firstNameLen = chFirstName.length;
	var lastNameLen = chLastName.length;
	if (firstNameLen < 1 || firstNameLen > 16) {
		return jsLang.entry_your_real_name;
	}
	if (lastNameLen < 1 || lastNameLen > 16) {
		return jsLang.entry_your_real_name;
	}
	ChToPy('EngFirstName', 'ChFirstName', chFirstName);
	ChToPy('EngLastName', 'ChLastName', chLastName);
	return false;
}

function checkChStreet(translate) {
	var postStr = trim($("#ChStreet").val());
	if (!postStr) {
		return jsLang.entry_real_address;
	}

	var pattern = /^.*[\u4e00-\u9fa5]+.*$/;
	if (!pattern.test(postStr)) {
		return jsLang.entry_real_address;
	}
	var len = postStr.length;
	if (len >= 1 && len <= 22) {
		ChToPy('EngStreet', 'ChStreet', postStr);
		return false;
	} else {
		return jsLang.entry_address_require;
	}
}

function checkPostCode() {
	var postStr = $("#PostCode").val();
	if (!postStr) {
		return jsLang.entry_right_zip_code;
	}
	var pattern = /^[a-zA-Z0-9]{6,6}$/;
	if (!pattern.test(postStr)) {
		return jsLang.entry_right_zip_code;
	}
	return false;
}
function checkCaptcha() {
	var postStr = $("#Captcha").val();
	if (!postStr) {
		return jsLang.entry_right_verify_code;
	}
	var pattern = /^[A-Za-z0-9]{4}$/;
	if (!pattern.test(postStr)) {
		return jsLang.entry_right_verify_code;
	}else{
		return 'yes';
	}
	return false;
}
function checkRePassword() {
	var psw = $("#Password1").val();
	var repsw = $("#RePassword").val();
	if (psw == '') {
		return jsLang.enter_pwd;
	}
	if (repsw == '') {
		return jsLang.enter_pwd_again;
	}
	if (psw.length < 6 || psw.length > 32) {
		return jsLang.enter_pwd_require1;
	}
	if (psw != repsw) {
		return jsLang.enter_pwd_require2;
	}
	if (!checkLegalPwd(repsw)) {
		return jsLang.enter_pwd_require3;
	}
	return false;
}

function checkEngCompanyName() {
	var value = $("#EngCompanyName").val();
	if (value == '') {
		return 'English Company Name can not be empty';
	}
	var pattern = /^[a-zA-Z0-9\s]{2,64}$/;
	if (!pattern.test(value)) {
		return "Please enter the correct English Company Name";
	}
	return false;
}

function checkEngName() {
	var EngFirstName = $("#EngFirstName").val();
	var EngLastName = $("#EngLastName").val();
	if (EngFirstName == '') {
		return 'English First Name can not be empty';
	}
	var pattern = /^[a-zA-Z\s]{1,32}$/;
	if (!pattern.test(EngFirstName)) {
		return "Please enter the correct English First Name";
	}
	if (EngLastName == '') {
		return 'English Last Name can not be empty';
	}
	if (!pattern.test(EngLastName)) {
		return "Please enter the correct English Last Name";
	}
	return false;
}

function checkEngCity() {
	var province = $("#EngProvince").val();
	var city = $("#EngCity").val();
	var pattern = /^[a-zA-Z0-9\s]{1,20}$/;
	if (province == '') {
		return 'English Province can not be empty';
	}
	if (!pattern.test(province)) {
		return "Please enter the correct English Province";
	}
	if (city == '') {
		return 'English City can not be empty';
	}
	if (!pattern.test(city)) {
		return "Please enter the correct English City";
	}
	return false;
}

function checkEngStreet() {
	var value = $("#EngStreet").val();
	var pattern = /^[a-zA-Z0-9#\-\s]{1,64}$/;
	if (value == '') {
		return 'English Street can not be empty';
	}

	if (!pattern.test(value)) {
		return "Please enter the correct English Street";
	}
	return false;
}

//function checkIsRegistAjax(email) {
//	var obj = $("#Email");
//	$.ajax({
//		type : "GET",
//		url : "/cas/register/checkEmail/" + email,
//		timeout : 2000,
//		success : function(msg) {
//			if (msg == 1) {
//				successSign(obj);
//			} else {
//				errorSign(obj, msg);
//			}
//		},
//		error : function() {
//			errorSign(obj, jsLang.timeout_please_retry);
//		}
//	});
//	return;
//}
//
function ChToPy(english, chinese, postStr) {
	if (!postStr) {
		return;
	}
	var chineseBlock = $("#" + chinese);
	var englishBlock = $("#" + english);
	$.ajax({
		type : "POST",
		url : "/cas/register/chinesetopinyin",
		timeout : 1000,
		data : {
			Chinese : postStr
		},
		success : function(msg) {
			msg = msg.replace(/\s/g, "");
			englishBlock.val(msg);
			successSign(englishBlock);
		},
		error : function() {
			errorSign(englishBlock, jsLang.timeout_please_retry);
		}
	});
}

function errorSign(obj, msg) {
	var error = obj.parent().find(".min_tip");
	error.removeClass("min_tip_success min_tip_error min_tip_optional").addClass('min_tip_error');
	error.html(msg);
	appear(error);
}

function successSign(obj) {
	var success = obj.parent().find(".min_tip");
	success.removeClass("min_tip_success min_tip_error min_tip_optional").addClass('min_tip_success').html('');
	appear(success);
}

function normalSign(obj,msg ) {
	var prompt = obj.parent().find(".min_tip");
	prompt.removeClass("min_tip_success min_tip_error min_tip_optional").addClass('min_tip_optional').html(msg);
	appear(prompt);
}

function appear(obj) {
	obj.show();
	obj.css({
		position : "relative",
		left : "none",
		top : "none"
	});
}

// 特殊字符判断
function containSpecial(s) {
	if (s.indexOf('%') != -1)
		return true;
	var containSpecial = RegExp(/[(\ )(\~)(\!)(\#)(\$)(\%)(\^)(\&)(\*)(\()(\))(\+)(\=)(\[)(\])(\{)(\})(\|)(\\)(\;)(\:)(\')(\")(\,)(\/)(\<)(\>)(\?)(\)]+/);
	return (containSpecial.test(s));
}

// 最后验证电话或者手机至少填一个
function checkMobilePhone() {
	var PhoneA = $("#PhoneA").val();
	var Phone = $("#Phone").val();
	var PhoneExt = $("#PhoneExt").val();
	var Mobile = $("#Mobile").val();

//	if (!(Mobile || PhoneA || Phone || PhoneExt)) {
//		$("#MobileType").val(1);
//		errorSign($("#Mobile"), jsLang.register_notice3);
//		return false;
//	}
	if (!(PhoneA || Phone || PhoneExt)) {
		$("#MobileType").val(1);
		var obj = $("#Mobile");
		var rs = checkMobile();
		if (rs && rs != 'yes') {
			errorSign(obj, rs);
			return false;
		}
	} else {
		$("#MobileType").val(0);
		var obj = $("#Phone");
		var rs = checkPhone('Phone');
		if (rs && rs != 'yes') {
			errorSign(obj, rs);
			return false;
		}
	}
	if (Mobile && PhoneA) {
		$("#MobileType").val(2);
	}

	return true;
}
function checkSimPsw(str) {
	str = $.trim(str);
	if(!str || /^[0-9]+$/.test(str) || /^[A-Za-z]+$/.test(str) || /^(\S)\1{5,31}$/.test(str)){
		return false;
	}
	return true;
}
// ===================密码强度====================
//pwStrength函数
//当用户放开键盘或密码输入框失去焦点时,根据不同的级别显示不同的颜色
function pwStrengthBeta1(pwd){
if (pwd==null||pwd==''){
    $("#qiangdu").removeClass().addClass("pwdsale");
    $("#warning_words").html('');
}
else{
    S_level=checkStrong(pwd);
    switch(S_level) {
        case 0:
            $("#qiangdu").removeClass().addClass("pwdsale");
            $("#warning_words").html('');
            break;
        case 1:
            $("#qiangdu").removeClass().addClass("low");
            $("#warning_words").html(jsLang.warning_words_1);
            break;
        case 2:
            $("#qiangdu").removeClass().addClass("middle");
            $("#warning_words").html(jsLang.warning_words_2);
            break;
        case 3:
            $("#qiangdu").removeClass().addClass("height");
            $("#warning_words").html(jsLang.warning_words_3);
    }
}
return;
}
//CharMode函数
//测试某个字符是属于哪一类
function CharMode(iN){
if (iN>=48 && iN <=57) //数字
    return 1;
if (iN>=65 && iN <=90) //大写字母
    return 2;
if (iN>=97 && iN <=122) //小写
    return 4;
else
    return 8; //特殊字符
}
//bitTotal函数
//计算出当前密码当中一共有多少种模式
function bitTotal(num){
modes=0;
for (i=0;i<4;i++){
    if (num & 1) modes++;
    num>>>=1;
}
return modes;
}
//checkStrong函数
//返回密码的强度级别
function checkStrong(sPW){
if (sPW.length<=4)
    return 0; //密码太短
Modes=0;
for (i=0;i<sPW.length;i++){
//测试每一个字符的类别并统计一共有多少种模式
    Modes|=CharMode(sPW.charCodeAt(i));
}
return bitTotal(Modes);
}
function checkLegalPwd(pwd) {
	var pwdPreg = /^[^&<>'"]*$/;
	if(pwdPreg.test(pwd)) {
		return true;
	}
	return false;
}
// ===================密码强度结束====================