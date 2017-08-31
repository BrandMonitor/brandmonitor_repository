var cas = function(){
	var __cUrl = 'https://my.ename.cn/cas/login';
	var __sId = _serId;
	var __nowUrl = location.href;
	__nowUrl = __nowUrl.replace(/</g, '&lt;').replace(/>/g, '&gt;');
	//例外处理，如交易平台
	if(typeof(_clientDomain) == "undefined")
		var __clientDomain = document.domain;
	else
	{
		var __cUrl_shop = 'http://shop.ename.com/login';
		var __clientDomain = 'shop.ename.com';
	}
	var __reloadUrl = [/^http:\/\/www.ename.net\/price\/index[\/]*/,/^http:\/\/www.ename.net\/price[\/]*/,/^http:\/\/www.ename.net\/price\/getMemberPrice[\/]*/,/^http:\/\/www.ename.com\/auction\/domain[\/]*/,/^http:\/\/www.ename.com\/auction\/inquiry[\/]*/,/^http:\/\/backorder.ename.com\/auction\/domain[\/]*/,/^http:\/\/backorder.ename.com\/book\/getBookingTrans[\/]*/,/^http:\/\/escrow.ename.com\/escrow\/escr[\/]*/,/^http:\/\/escrow.ename.com\/escrow\/agency[\/]*/,/^http:\/\/news.ename.cn[\/]*/,/^http:\/\/1.ename.com\/domain\/detail\/\d+[\/]*/];	
	//第三方登录地址
	var __oUrl = 'https://my.ename.cn/cas/sso/OauthLogin?sid=' + __sId;
	//是否有验证码
	var __isNeedCapt = 0;
	//生成头部登录iframe，验证是否已经登录
	var __setIframeForLoginCheck = function()
	{
		var __body = document.body || document.getElementsByTagName('body')[0];
		var casIframe = document.createElement('iframe');
		casIframe.id = 'rmh';
		if(typeof(__cUrl_shop) != "undefined")
			casIframe.src = __cUrl_shop + '?lg=iframe&sid=' + __sId + '&backurl=' + __nowUrl;
		else
			casIframe.src = __cUrl + '?lg=iframe&sid=' + __sId + '&backurl=' + __nowUrl;
		casIframe.style.display = 'none';
		__body.appendChild(casIframe);
	}
	
	//jsonp获取key
	var __getPrelogin = function()
	{
		jQuery.getJSON(__cUrl + '/key?sid=' + __sId + '&domainname=' + __clientDomain + '&jsoncallback=?');
	};
	
	//获取登录key回调
	var __preloginCallback = function(data)
	{
		jQuery('#prekey').val(data.key);
	};
	
	//登录表单提交按钮监听
	var __loginFormSubmit = function()
	{
		jQuery("#quicklogin").live('click', function(){
			if(cas.quickLoginFormCheck())
			{
				cas.quickLogin("qlform", "quickLoginCallback");
			}
		});
	}
	
	//快速登录表单提交，设置target为iframe
	var __quickLogin = function(formId, callback)
	{
		var qliframeId = 'qliframe';
		if(document.getElementById(qliframeId) == null)
		{
			var __body = document.body || document.getElementsByTagName('body')[0];
			var qliframe = document.createElement('iframe');
			qliframe.id = qliframeId;
			qliframe.name = qliframeId;
			qliframe.src = '';
			qliframe.style.display = 'none';
			__body.appendChild(qliframe);
			qliframe.contentWindow.name = qliframeId;
		}
		
		jQuery('#' + formId).attr('action', __cUrl + '/prelogin?callback=' + callback + '&ql=1');
		jQuery('#' + formId).attr('method', 'post');
		jQuery('#' + formId).attr('target', qliframeId);
		jQuery('#login_error').hide();
		jQuery('#' + formId).submit();
	};
	
	//快速登录表单验证
	var __quickLoginFormCheck = function(formId, callback)
	{
		var username = jQuery.trim(jQuery('#UserName').val());
		var password = jQuery('#Password').val();
		var captcha = jQuery('#HCaptcha').val();
		if (username == '' || username == 'EnameID/邮箱')
		{
			cas.showErrMsg('请输入EnameID/邮箱');
			return false;
		}
		var usernameReg1 = /^([a-zA-Z0-9]+([_]+|[\-|\.])?)*[a-zA-Z0-9]+[_]?@([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/i;
		var usernameReg2 = /^[1-9]{1}[0-9]{3,11}$/;
		if (!usernameReg1.test(username) && !usernameReg2.test(username))
		{
			cas.showErrMsg('EnameID/邮箱格式错误');
			return false;
		}
		if (password == '')
		{
			cas.showErrMsg('请输入密码');
			return false;
		}
		if (__isNeedCapt && captcha == '')
		{
			cas.showErrMsg('请输入验证码', 1);
			return false;
		}
		if (__isNeedCapt && !/^[A-Za-z0-9]{4}$/.test(captcha))
		{
			cas.showErrMsg('验证码格式有误', 1);
			return false;
		}
		return true;
	};
	
	//登录验证后回调
	var __quickLoginCallback = function(data)
	{
		if(data.status != 1000)
		{
			if(data.status == 2002 || data.status == 2003 || data.status == 2004)
			{
				__isNeedCapt = 1;
				cas.showErrMsg(data.msg, 2);
			}
			else if(data.status ==2006)
			{
				window.location.href ='http://www.ename.net/user/check?email='+data.msg;
			}
			else
			{
				__isNeedCapt = 0;
				cas.showErrMsg(data.msg, 2);
			}
		}
	}
	
	//生成头部登录表单html
	var __setHeadLoginFormHtml = function()
	{
		var headLogin = '<form class="clearfix" id="qlform">';
		headLogin += '<label>账号：</label>';
		headLogin += '<input type="text" name="loginName" id="UserName" class="com_input member" value="EnameID/邮箱">';
		headLogin += '<label>密码：</label>';
		headLogin += '<input type="password" name="loginPwd" id="Password" class="com_input password" onKeydown="if(event.keyCode==13) jQuery(\'#quicklogin\').click();" autocomplete="off">';
		headLogin += '<input type="button" class="login_btn" value="登录" id="quicklogin"> ';
		
		headLogin += '<div class="login_down"><span class="outsideb"></span><ul class="down_ul" style="display:none;">';
		headLogin += '<li><a href="' + __oUrl + '&thirdpart=sina&backurl=' + __nowUrl + '" class="sina pngfix">新浪微博登录</a></li>';
		headLogin += '<li><a href="' + __oUrl + '&thirdpart=qzone&backurl=' + __nowUrl +'" class="qq pngfix">腾讯QQ登录</a></li>';
//		headLogin += '<li><a href="' + __oUrl + '&thirdpart=taobao&backurl=' + __nowUrl + '" class="taob pngfix">淘宝登录</a></li>';
		headLogin += '</ul></div>';
		
		headLogin += '<a href="https://my.ename.cn/cas/register" class="c_blue">注册</a>';
		headLogin += '<a href="http://www.ename.net/user/findpassword" class="c_blue">忘记密码</a>';
		headLogin += '<input type="hidden" id="prekey" name="key" value="">';
		headLogin += '<input type="hidden" id="sid" name="sid" value="' + __sId + '">';
		headLogin += '<input type="hidden" id="backurl" name="backurl" value="' + __nowUrl + '">';
		headLogin += '<input type="hidden" id="domainname" name="domainname" value="' + __clientDomain + '">';
	   
		headLogin += '<div style="display:none" class="login_tip captcha" id="HCaptchaDiv"><span class="outsideb"></span><span class="insideb"></span>'; 
		headLogin += '<label>输入验证问答：</label><input type="text" maxlength="6" class="com_input" name="captcha" id="HCaptcha" onKeydown="if(event.keyCode==13) jQuery(\'#quicklogin\').click();" autocomplete="off">';
		headLogin += '<img width="64" height="20" id="HCaptchaImg" src=""><a id="HCaptchaRefresh" href="javascript:cas.refreshCaptcha();">刷新</a></div>';

		headLogin += '<div id="login_error" class="login_tip" style="display:none;"><span class="outsideb"></span><span class="insideb"></span><span id="errorLoginMsg"></span></div>';
		headLogin += '</form>';
		
		jQuery('#topleft').html(headLogin);
		cas.setIframeForLoginCheck();
	}
	
	//生成头部登录态html
	var __setHeadLogoutHtml = function(enameId, messageCount, cartDomainCount, logoutUrl, extendStr)
	{
		var headogout = ''; 
		if(enameId)
		{
			headogout += '<span class="ename_user"><a href="http://www.ename.net/member">您好，' + enameId + '</a></span>'; 
//			if(messageCount > 0)
//			{
//				headogout += '<a href="http://www.ename.net/member/message" class="icon_bg messaging">站内短信<em>(' + messageCount + ')</em></a>';
//			}
//			else
//			{
//				headogout += '<a href="http://www.ename.net/member/message" class="icon_bg messaging_none">站内短信</a>';
//			}
//			if(cartDomainCount > 0)
//			{
//				headogout += '<a href="http://www.ename.net/cart" target="_blank" class="icon_bg nav_cart">购物车<em>(' + cartDomainCount + ')</em></a>';
//			}
//			else
//			{
//				headogout += '<a href="http://www.ename.net/cart" target="_blank" class="icon_bg nav_cart_none">购物车</a>';
//			}
			headogout += '<a href="' + logoutUrl + '" class="c_blue">退出</a>';
		}
		headogout += (typeof(extendStr) == "undefined") ? '' : extendStr;
		jQuery('#topleft').html(headogout);
	}
	
	//生成头部其他平台链接html
	var __setHeadLinksHtml = function()
	{
		var headLinks = '';
		var isCurrent = true;
		
		headLinks += '<a href="http://huodong.ename.net"';
		if(__clientDomain == 'huodong.ename.net') headLinks += ' class="current"';
	    else headLinks += ' target="_blank"'; headLinks += '>活动</a>|';
		
		headLinks += '<a href="http://www.ename.net"';
		if(isCurrent && __clientDomain != 'huodong.ename.net' && __clientDomain.indexOf('ename.net') > 1 || __clientDomain == 'my.ename.cn')
		{
		//	headLinks += ' class="current"';
		}
		else headLinks += ' target="_blank"'; headLinks += '>域名管理平台</a>|';
		
		headLinks += '<a href="http://www.ename.com"';
		if(__clientDomain.indexOf('ename.com') > 1) headLinks += ' class="current"';
		else headLinks += ' target="_blank"'; headLinks += '>域名交易平台</a>|';
		
		headLinks += '<a href="http://www.ename.cn"';
      if(__clientDomain == 'www.ename.cn' || __clientDomain == 'news.ename.cn') headLinks += ' class="current"';
      else headLinks += ' target="_blank"'; headLinks += '>域名门户</a>|';
      
		headLinks += '<a href="http://www.dnbbs.com"';
		headLinks += ' target="_blank"'; 
		headLinks += '>域名论坛</a>|';
		
		headLinks += '<a href="http://tm.ename.net"';
		if(__clientDomain == 'tm.ename.net') headLinks += ' class="current"'; 
		else headLinks += ' target="_blank"'; headLinks += '>商标注册</a>|';
		
		headLinks += '<a href="http://help.ename.cn"';
      if(__clientDomain == 'help.ename.cn') headLinks += ' class="current"'; 
      else headLinks += ' target="_blank"'; headLinks += '>帮助中心</a>';
		
		jQuery('#topright').html(headLinks);
	}
	
   var __reload = function()
    {
		for(var reloadUrl in __reloadUrl)
		{
			if(__reloadUrl[reloadUrl].test(window.location.href))
				location.reload();
		}
	}
   
   var __showErrMsg =function(msg, flag)
   {
	   jQuery("#HCaptchaDiv").hide();
	   jQuery('#errorLoginMsg').html(msg);
		jQuery('#login_error').show();
		if(__isNeedCapt)
		{
			if(typeof(flag) == 'undefined') flag = 1;
			setTimeout("cas.showCaptcha(" + flag + ")", 2000);
		}
   }
   
   var __showCaptcha = function(flag)
   {
	   if(__isNeedCapt)
		{
		   jQuery('#login_error').hide();
		   if(!flag)
			{
			   jQuery("#HCaptcha").val('');
			   jQuery("#HCaptchaImg").hide();
			   jQuery("#HCaptchaRefresh").hide();
			}
		   else if(flag == 2)
			{
			   cas.refreshCaptcha();
			   jQuery("#HCaptcha").val('');
			   jQuery("#HCaptchaImg").show();
			   jQuery("#HCaptchaRefresh").show();
			}
		   jQuery("#HCaptchaDiv").show();
		}
   }
   
   var __refreshCaptcha = function()
   {
	   jQuery("#HCaptchaImg").attr("src", __cUrl + '/showcaptcha?show=1&time=' + new Date().getTime());
   }

	cas.setIframeForLoginCheck = __setIframeForLoginCheck;
	cas.getPrelogin = __getPrelogin;
	cas.preloginCallback = __preloginCallback;
	cas.loginFormSubmit = __loginFormSubmit;
	cas.quickLogin = __quickLogin;
	cas.quickLoginFormCheck = __quickLoginFormCheck;
	cas.quickLoginCallback = __quickLoginCallback;
	cas.setHeadLoginFormHtml = __setHeadLoginFormHtml;
	cas.setHeadLogoutHtml = __setHeadLogoutHtml;
	cas.setHeadLinksHtml = __setHeadLinksHtml;
	cas.reload = __reload;
	cas.showErrMsg = __showErrMsg;
	cas.showCaptcha = __showCaptcha;
	cas.refreshCaptcha = __refreshCaptcha;
};
jQuery(document).ready(function(){
	cas();
});