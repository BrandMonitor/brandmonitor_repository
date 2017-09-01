<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/jsp/header/jspheader.jsp"%>
<!doctype html>
<html lang="zh-CN">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width,initial-scales=1">
	<title>商标注册</title>
	<link href="http://cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet">
	<link href="${pageContext.request.contextPath}/resources/h5/trademark/css/css.css" rel="stylesheet">
</head>
<body>
<!--导航栏-->
<div class="row">
  <!-- <div class="col-md-4"> -->
		<span style="color:#ff8416;;font-size: 30px">BrandMonitor</span>
  	<!-- <img class="logo" src="http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Flogo.png"/> -->
  </div>
  <ul class="nav nav-pills col-md-5">
	<li role="presentation" class="active"><a href="#">首页</a></li>
	<li role="presentation" ><a href="#">商标注册</a></li>
	<li role="presentation" ><a href="#">商标查询</a></li>
	<li role="presentation" ><a href="#">商标类别</a></li>
	<li role="presentation"><a href="#">商标案件</a></li>
  </ul>
  <div class="col-md-3 cursor login" style='color:#666666;'><span>登录</span>|<span>注册</span></div>
</div>
<!--幻灯片轮播-->
<div id="myCarousel" class="carousel slide">
   <!-- 轮播（Carousel）指标 -->
   <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
   </ol>   
   <!-- 轮播（Carousel）项目 -->
   <div class="carousel-inner">
      <div class="item active">
         <img src="http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Fbanner1.png" alt="First slide">
      </div>
      <div class="item">
         <img src="http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Fbanner1.png" alt="Second slide">
      </div>
      <div class="item">
         <img src="http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Fbanner1.png" alt="Third slide">
      </div>
   </div>
   <!-- 轮播（Carousel）导航 -->
   <a class="carousel-control left" href="#myCarousel" 
      data-slide="prev">
      <img src="http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Fl-btn.png"/>
    </a>
   <a class="carousel-control right" href="#myCarousel" 
      data-slide="next">
	  <img src="http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Fr-btn.png"/>
   </a>
</div> 
<!--搜索框-->
<div class="input-group">
  <input type="text" class="form-control" placeholder=" 请输入商标名查询是否可注册，例如哇哈哈" aria-describedby="basic-addon2">
  <a role="button" class="input-group-addon" id="basic-addon2">商标注册查询</a>
</div>
<!--注册流程-->
<div class="register textcenter">
	<div class="title p100">注册流程</div>
	<img src="http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Fprocess.png" />
</div>

<!--多种解决方案-->
<div class="title" style="background-color:#f6f6f6;padding:70px 0 50px 0">多种解决方案</div>
<section class="solution">
	<div style="width:100%;">
		<div class="guarantee left1">
			<img class="guarantee_hot" src="http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Fhot_label.png" />
			<img class="guarantee_icon" src="http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Fguarantee.png" />
			<div class="midtitle">担保商标注册</div>
			<div class="content">注册不成功推全矿（含官费），材料确</div>
			<div class="content">认后，3个工作日可用TM</div>
			<div class="money">￥1480<span class="smalltitle">元</span></div>
			<input type="button" value="立即购买" />
		</div>
		
		<div class="mid">
			<div class="urgency">
				<div class="midtitle">加急商标注册</div>
				<div class="content">材料确认后，3个工作日可用TM</div>
				<div class="money">￥960<span class="smalltitle">元</span></div>
				<input type="button" value="立即购买" />
			</div>
			<div class="common">
				<div class="midtitle">普通商标注册</div>
				<div class="content">3~4个月左右下放受理通知书</div>
				<div class="money">￥800<span class="smalltitle">元</span></div>
				<input type="button" value="立即购买" />
			</div>
		</div>
		<div class="right">
			<img style="height: 500px;" src="http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Fcontact.png" />
		</div>
	</div>
</section>

<!--准备事项-->
<div class="prepare textcenter">
	<div class="title p100">准备事项</div>
	<img src="http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Fprepare.png" />
</div>

<!--常见问题-->
<div class="title" style="padding-top:70px;padding-bottom: 30px;">常见问题</div>
<section class="htmleaf-container">
	<div class="container problem">
	  <div id="full" class="carousel slide" data-ride="carousel" style="margin: 0 30px;">
		<div class="carousel-inner">
		  <ul class="row item active" style="margin-left: -40px;">
			<li class="col-xs-4">
			  <div class="l1">
				<div class="up"><span>Q:</span>&nbsp;我提交的商标能注册下来吗？</div>
				<div class="down"><span>A:</span>&nbsp;注册商标存在一定的风险，主要风险为商标局有3-6个月的盲查期，我们会尽力帮您规避风险。</div>
			</div>
			</li>
			<li class="col-xs-4">
			  <div class="l2">
				<div class="up"><span>Q:</span>&nbsp;商标的有效期限是多久？</div>
				<div class="down"><span>A:</span>&nbsp;商标自核准注册之日起可以使用10年，10年中无任何费用，到期前一年需要续展。</div>
			</div>
			</li>
			<li class="col-xs-4">
			  <div class="l3">
				<div class="up"><span>Q:</span>&nbsp;我应该申请哪些类别？</div>
				<div class="down"><span>A:</span>&nbsp;您可以在商标分类页面中查看：<em style="color:#1c93cf">商标类别，</em>信息仅供参考，如有疑问，可以联系我们客服。</div>
			</div>
			</li>
		  </ul>
		  <ul class="row item" style="margin-left: -40px;">
			<li class="col-xs-4">
			  <div class="l1">
				<div class="up"><span>Q:</span>&nbsp;着色商标和黑白商标什么区别？</div>
				<div class="down"><span>A:</span>&nbsp;着色商标，注册成功后就只能使用申请时的着色，不得更换颜色。黑白商标，您可任意着色使用。</div>
			</div>
			</li>
			<li class="col-xs-4">
			  <div class="l2">
				<div class="up"><span>Q:</span>&nbsp;营业执照地址与邮寄地址的区别？</div>
				<div class="down"><span>A:</span>&nbsp;商标注册提交地址以营业执照为准，但商标局下发的材料会邮寄到代理处，我们收到材料后会及时与您联系并跟您确认邮寄地址。</div>
			</div>
			</li>
			<li class="col-xs-4">
			  <div class="l3">
				<div class="up"><span>Q:</span>&nbsp;TM和R的区别？</div>
				<div class="down"><span>A:</span>&nbsp;“TM”指已收到商标局下发的受理通知书，但还未取得商标证的商标；而“R”是指已经注册成功并取得商标证书的商标。</div>
			</div>
			</li>
		  </ul>
		</div>

		<a class="carousel-control left" style="width: 30px;left: -30px;" href="#full" data-slide="prev">Previous</a>
		<a class="carousel-control right" style="width: 30px;right: -30px;" href="#full" data-slide="next">Next</a>
	  </div>
	</div>
</section>

<!--专业服务-->
<div>
	<div class="title" style="padding: 50px 0 30px 0;">专业服务</div>
	<div class="serve">
		<div class="ser_left float">
			<img class="float wid20" src="http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Ficon1.png" />
			<div class="s1 float mar_top25 border_r">
				<div class="ser_title">一对一金牌服务</div>
				<div class="ser_content">一对一专业服务，金牌团队全程跟进</div>
			</div>
		</div>
		<div class="ser_mid float">
			<img class="float wid20" src="http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Ficon2.png" />
			<div class="s2 float mar_top25 border_r">
				<div class="ser_title">业务过程全透明</div>
				<div class="ser_content">全程公开透明，进度实时跟踪</div>
			</div>
		</div>
		<div class="ser_right float">
			<img class="float wid20" src="http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Ficon3.png" />
			<div class="s3 float mar_top25">
				<div class="ser_title">低资费高服务</div>
				<div class="ser_content">价格合理，超高性价比</div>
			</div>
		</div>
	</div>
</div>

<!--footer-->
<footer>
		<div class="about">
			<section class="top">关于我们</section>
			<div>公司简介</div>
			<div>商标注册协议</div>
			<div>商标案件协议</div>
			<div>商标支付协议</div>
		</div>
		<div class="help">
			<section>新手帮助</section>
			<div>注册商标须知</div>
			<div>商标价格标准</div>
			<div>发票申请流程</div>
			<div>注册商标时限</div>
		</div>
		<div class="contact">
			<section><img style="width: 24px;margin-right: 3px;margin-bottom: -4px;" src="http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Fconnect_phone.png">0755-86524997</section>
		</div>
	</footer>
</body>
<script src="http://cdn.bootcss.com/jquery/1.11.3/jquery.min.js"></script>
<!-- 最新的 Bootstrap 核心 JavaScript 文件 -->
<script src="${pageContext.request.contextPath}/resources/h5/trademark/js/index.js"></script>
<script src="http://cdn.bootcss.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
</html>