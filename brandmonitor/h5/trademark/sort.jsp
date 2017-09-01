
<!DOCTYPE HTML>
<html>
<head>
<!-- <meta http-equiv='X-UA-Compatible' content='IE=8'> -->
<meta content="webkit" name="renderer">
<meta content="IE=edge" http-equiv="X-UA-Compatible">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>商标分类查询，商标图形要素查询-BrandMonitor</title>
<meta name="keywords" content="商标分类查询,商标图形要素查询,商标查询,查询商标">
<meta name="description" content="BrandMonitor为您提供商标分类查询，可通过商标分类查询和图形要素查询，省时，省心，快速反馈准确结果。">
<link rel="stylesheet" type="text/css" href="/kk_trademark/resources/h5/trademark/css/style1.css" />
<script src="http://ajax.microsoft.com/ajax/jquery/jquery-2.1.1.min.js" type="text/javascript"></script>
<script type="text/javascript" src="/kk_trademark/resources/h5/trademark/js/is_login.js"></script>
<script src="/kk_trademark/resources/h5/trademark/js/md5.js"></script>
<!--<script src="/js/html5.js?v=1540611" type="text/javascript"></script>
<script type="text/javascript" src="/js/cas.js?v=1540611"></script>-->
<!--[if IE 6]>
<script type="text/javascript" src="js/DD_belatedPNG.js" ></script>
<script type="text/javascript">
DD_belatedPNG.fix('.pngfix');
</script>
<![endif]-->
</head>
<body>
<div class="headtop">
	<div class="row">
		<section>
			<div class="left login_box clearfix" id="login_box topleft">
				<form class="clearfix" id="qlform">
					<label>账号：</label>
					<input style="height: 17px;width: 82px;" name="loginName" id="UserName" class="com_input member" placeholder="手机/邮箱" value="" type="text">
					<label>密码：</label>
					<input style="height: 17px;width: 82px;" name="loginPwd" id="Password" class="com_input password" onkeydown="if(event.keyCode==13) jQuery('#quicklogin').click();" autocomplete="off" type="password">
					<input class="login_btn" style="margin:0 auto;" value="登录" onclick="login();" id="quicklogin" type="button">
						<a href="/kk_trademark/h5/trademark/register.jsp" class="c_blue">注册</a>
						<a href="/kk_trademark/h5/trademark/forget_pwd.jsp" class="c_blue">忘记密码</a>
						<input id="prekey" name="key" value="y74Kfc" type="hidden">
						<input id="sid" name="sid" value="12" type="hidden">
						<input id="backurl" name="backurl" value="http://www.tm.cn/" type="hidden">
						<input id="domainname" name="domainname" value="www.tm.cn" type="hidden">
						<div style="display:none" class="login_tip captcha" id="HCaptchaDiv">
							<span class="outsideb"></span><span class="insideb"></span>
							<label>输入验证问答：</label>
							<input maxlength="6" class="com_input" name="captcha" id="HCaptcha" onkeydown="if(event.keyCode==13) jQuery('#quicklogin').click();" autocomplete="off" type="text">
							<img id="HCaptchaImg" src="" width="64" height="20">
							<a id="HCaptchaRefresh" href="javascript:cas.refreshCaptcha();">刷新</a>
						</div>
				</form>
			</div>
			<div class="left clearfix login_box" id="logining" style="color:#0f93d8;display: none;">您好！<span class="staffCode" style="margin: 0 10px;"></span><span class="exit" onclick="exit();">退出</span></div>
			<span><a href="/kk_trademark/h5/trademark/search.jsp" class="c_blue">商标查询</a></span>
			<span>
				<img style="cursor:auto;width: 20px;" src="http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Fconnect_phone.png">
				<span style="cursor:auto;margin:0 auto;">客服热线：0755-86524997</span>
			</span>
		</section>
	</div>
</div>
<!-- /nav -->

<!-- header -->
<header class="header clearfix" style="z-index: 9991;">
	<div class="left">
		<!--<a href="/"><img src="/images/pic/logo.jpg" height="43" width="125" alt="快快商标" /></a>
		<span class="min_logo">    
			<img src="/images/pic/min_logo.jpg" height="27" width="81" alt="商标注册平台www.tm.cn" />
		</span>-->   

		<a href="/">
		<span style="color:#ff8416;;font-size: 30px">BrandMonitor</span>
		<!-- <img src="http://yulin-img.oss-cn-shenzhen.aliyuncs.com/web%2Fweb%2Ftrademark%2Flogo.png" width="100" alt="商标注册平台www.tm.cn" title="商标注册平台www.tm.cn"/> -->
		</a>
	</div>
	<div class="right">
		<ul class="menu">
			<li><a href="http://test.micro80.com/">首页</a></li>
			<li><a href="/kk_trademark/h5/trademark/trademark_regist.jsp">商标注册</a></li>
			<li><a href="/kk_trademark/h5/trademark/search.jsp">商标查询</a></li>
			<li class="cur"><a href="/kk_trademark/h5/trademark/sort.jsp">商标类别</a></li>
			
			<li><a href="/kk_trademark/h5/trademark/proposer.jsp">我的商标</a></li>
		</ul>
	</div>
</header>
<!-- /header -->
<!-- container -->
<div class="container bor">
	<div class="search_main clearfix w_550">
		<h3 class="ser_tit">《2016版类似商品和服务区分表》</h3>
		<ul class="tab_list clearfix" style="width: 400px;padding-left: 30%;">
			<li class="cur"><a href="/kk_trademark/h5/trademark/sort.jsp">商标分类查询</a></li>
			<li><a href="/kk_trademark/h5/trademark/element.jsp">图形要素查询 </a></li>
		</ul>
		<!--<div class="ser_form">
			<form method="get" action="">
				<input type="text" value="输入商品/服务名称" class="com_input ser_input" name="sortName" id="sortName"/>
				<button type="button" class="btn_orange" onclick="doSub(this)">查 询</button>
			</form>
		</div>-->
	</div>
	<div class="hot_sec" >
		<div class="right hot_ser_box">
			<span class="ser_tip">商品关键字搜索：</span>
			<div class="hot_ser">
				<input type="text" value="" class="hot_input" name="">
				<a href="javascript:void(0)" class="hot_list"></a>
				<ul style="display:none;" class="hot_list_drop">
					<li>服装纺织</li>
					<li>食品饮料</li>
					<li>餐饮酒店</li>
					<li>化妆美容</li>
					<li>医药设备</li>
					<li>日常用品</li>
					<li>家具用具</li>
					<li>IT互联网</li>
					<li>化工能源</li>
					<li>电子仪器</li>
					<li>机械制造</li>
					<li>建材五金</li>
					<li>房产金融</li>
				</ul>
			</div>
			<button type="button" class="hot_btn"></button>
		</div>
		<div id="hot_sort">
			<span class="c_orange">热门行业：</span>
			<a href="javascript:void(0);">服装纺织</a>
			<a href="javascript:void(0);">食品饮料</a>
			<a href="javascript:void(0);">化妆美容</a>
			<a href="javascript:void(0);">家具用具</a>
			<a href="javascript:void(0);">IT互联网</a>
			<a href="javascript:void(0);">日常用品</a>
			<a href="javascript:void(0);">医药设备</a>
		</div>
	</div>
	<ul class="sbfl_list">
		<li class="mt20" id="sort_1">
			<a href="?parent=1">
				<dl class="sbfl_dl">
					<dt>第一类:化学原料</dt>
					<dd>用于工业、科学、摄影、农业、园艺和林业的化学品；未加工人造合成树脂；未加工塑料物质；肥料；灭火用合成物；淬火和焊接用制剂；保存食品用化学品；鞣料；工业用粘合剂。</dd>
				</dl>
			</a>
		</li>
				<li class="mt20" id="sort_2">
			<a href="?parent=2">
				<dl class="sbfl_dl">
					<dt>第二类:颜料油漆</dt>
					<dd>颜料，清漆，漆；防锈剂和木材防腐剂；着色剂；媒染剂；未加工的天然树脂；画家、装饰家、印刷商和艺术家用金属箔及金属粉。</dd>
				</dl>
			</a>
		</li>
				<li class="mt20" id="sort_3">
			<a href="?parent=3">
				<dl class="sbfl_dl">
					<dt>第三类:日化用品</dt>
					<dd>洗衣用漂白剂及其他物料；清洁、擦亮、去渍及研磨用制剂；肥皂；香料，香精油，化妆品，洗发水；牙膏。</dd>
				</dl>
			</a>
		</li>
				<li class="mt20" id="sort_4">
			<a href="?parent=4">
				<dl class="sbfl_dl">
					<dt>第四类:燃料油脂</dt>
					<dd>工业用油和油脂；润滑剂；吸收、润湿和粘结灰尘用合成物；燃料（包括马达用燃料）和照明材料；照明用蜡烛和灯芯。</dd>
				</dl>
			</a>
		</li>
				<li class="mt20" id="sort_5">
			<a href="?parent=5">
				<dl class="sbfl_dl">
					<dt>第五类:医药卫生</dt>
					<dd>药用和兽医用制剂；医用卫生制剂；医用或兽医用营养食物和物质，婴儿食品；人用和动物用膳食补充剂；膏药，绷敷材料；填塞牙孔用料，牙科用蜡；消毒剂；消灭有害动物制剂；杀真菌剂，除莠剂。</dd>
				</dl>
			</a>
		</li>
				<li class="mt20" id="sort_6">
			<a href="?parent=6">
				<dl class="sbfl_dl">
					<dt>第六类:五金金属</dt>
					<dd>普通金属及其合金；金属建筑材料；可移动金属建筑物；铁轨用金属材料；普通金属制非电气用缆线；五金具，金属小五金具；金属管；保险箱；矿石。</dd>
				</dl>
			</a>
		</li>
				<li class="mt20" id="sort_7">
			<a href="?parent=7">
				<dl class="sbfl_dl">
					<dt>第七类:机械设备</dt>
					<dd>机器和机床；马达和引擎（陆地车辆用的除外）；机器联结器和传动机件（陆地车辆用的除外）；非手动农业器具；孵化器；自动售货机。</dd>
				</dl>
			</a>
		</li>
				<li class="mt20" id="sort_8">
			<a href="?parent=8">
				<dl class="sbfl_dl">
					<dt>第八类:手工器械</dt>
					<dd>手工具和器具（手动的）；刀、叉和勺餐具；随身武器；剃刀。</dd>
			</a>
		</li>
				<li class="mt20" id="sort_9">
			<a href="?parent=9">
				<dl class="sbfl_dl">
					<dt>第九类:科学仪器</dt>
					<dd>科学、航海、测量、摄影、电影、光学、衡具、量具、信号、检验（监督）、救护（营救）和教学用装置及仪器；处理、开关、传送、积累、调节或控制电的装置和仪器；录制、通讯、重放声音或影像的装置；磁性数据载体，录音盘；光盘，DVD盘和其他数字存储媒介；投币启动装置的机械结构；收银机，计算机器，数据处理装置，计算机；计算机软件；灭火器械。</dd>
				</dl>
			</a>
		</li>
				<li class="mt20" id="sort_10">
			<a href="?parent=10">
				<dl class="sbfl_dl">
					<dt>第十类:医疗器械</dt>
					<dd>外科、医疗、牙科和兽医用仪器及器械，假肢，假眼和假牙；整形用品；缝合用材料。</dd>
				</dl>
			</a>
		</li>
				<li class="mt20" id="sort_11">
			<a href="?parent=11">
				<dl class="sbfl_dl">
					<dt>第十一类:家用电器</dt>
					<dd>照明、加热、蒸汽发生、烹饪、冷藏、干燥、通风、供水以及卫生用装置。</dd>
				</dl>
			</a>
		</li>
				<li class="mt20" id="sort_12">
			<a href="?parent=12">
				<dl class="sbfl_dl">
					<dt>第十二类:运输工具</dt>
					<dd>运载工具；陆、空、海用运载装置。</dd>
				</dl>
			</a>
		</li>
				<li class="mt20" id="sort_13">
			<a href="?parent=13">
				<dl class="sbfl_dl">
					<dt>第十三类:军用烟花</dt>
					<dd>火器；军火及弹药；爆炸物；烟火。</dd>
				</dl>
			</a>
		</li>
				<li class="mt20" id="sort_14">
			<a href="?parent=14">
				<dl class="sbfl_dl">
					<dt>第十四类:珠宝钟表</dt>
					<dd>贵重金属及其合金；珠宝首饰，宝石；钟表和计时仪器。</dd>
				</dl>
			</a>
		</li>
				<li class="mt20" id="sort_15">
			<a href="?parent=15">
				<dl class="sbfl_dl">
					<dt>第十五类:乐器</dt>
					<dd>乐器。</dd>
				</dl>
			</a>
		</li>
				<li class="mt20" id="sort_16">
			<a href="?parent=16">
				<dl class="sbfl_dl">
					<dt>第十六类:文化用品</dt>
					<dd>纸和纸板，不属别类的纸和纸板制品；印刷品；装订用品；照片；文具；文具或家庭用粘合剂；美术用品；画笔；打字机和办公用品（家具除外）；教育或教学用品（仪器除外）；包装用塑料物品（不属别类的）；印刷铅字；印版。</dd>
				</dl>
			</a>
		</li>
				<li class="mt20" id="sort_17">
			<a href="?parent=17">
				<dl class="sbfl_dl">
					<dt>第十七类:橡胶制品</dt>
					<dd>橡胶、古塔胶、树胶、石棉、云母，以及不属别类的这些原材料的制品；生产用成型塑料制品；包装、填充和绝缘用材料；非金属软管。</dd>
				</dl>
			</a>
		</li>
				<li class="mt20" id="sort_18">
			<a href="?parent=18">
				<dl class="sbfl_dl">
					<dt>第十八类:皮革皮具</dt>
					<dd>皮革和人造皮革，不属别类的皮革和人造皮革制品；毛皮；箱子和旅行袋；雨伞和阳伞；手杖；鞭和马具。</dd>
				</dl>
			</a>
		</li>
				<li class="mt20" id="sort_19">
			<a href="?parent=19">
				<dl class="sbfl_dl">
					<dt>第十九类:建筑材料</dt>
					<dd>非金属的建筑材料；建筑用非金属刚性管；柏油，沥青；可移动非金属建筑物；非金属碑。</dd>
				</dl>
			</a>
		</li>
				<li class="mt20" id="sort_20">
			<a href="?parent=20">
				<dl class="sbfl_dl">
					<dt>第二十类:家具</dt>
					<dd>家具，镜子，相框；未加工或半加工的骨、角、象牙、鲸骨或珍珠母；贝壳；海泡石；黄琥珀。</dd>
				</dl>
			</a>
		</li>
				<li class="mt20" id="sort_21">
			<a href="?parent=21">
				<dl class="sbfl_dl">
					<dt>第二十一类:家用器具</dt>
					<dd>家用或厨房用器具和容器；梳子和海绵；刷子（画笔除外）；制刷材料；清洁用具；钢丝绒；未加工或半加工玻璃（建筑用玻璃除外）；不属别类的玻璃器皿、瓷器和陶器。</dd>
				</dl>
			</a>
		</li>
				<li class="mt20" id="sort_22">
			<a href="?parent=22">
				<dl class="sbfl_dl">
					<dt>第二十二类:绳网袋篷</dt>
					<dd>缆和绳；网；帐篷，遮篷和防水遮布；帆；袋；衬垫和填充材料（纸或纸板、橡胶、塑料制除外） ；纺织用纤维原料。</dd>
				</dl>
			</a>
		</li>
				<li class="mt20" id="sort_23">
			<a href="?parent=23">
				<dl class="sbfl_dl">
					<dt>第二十三类:纺织纱线</dt>
					<dd>纺织用纱和线。</dd>
				</dl>
			</a>
		</li>
				<li class="mt20" id="sort_24">
			<a href="?parent=24">
				<dl class="sbfl_dl">
					<dt>第二十四类:床单布料</dt>
					<dd>布料和不属别类的纺织品；床单；桌布。</dd>
				</dl>
			</a>
		</li>
				<li class="mt20" id="sort_25">
			<a href="?parent=25">
				<dl class="sbfl_dl">
					<dt>第二十五类:服装鞋帽</dt>
					<dd>服装，鞋，帽。</dd>
				</dl>
			</a>
		</li>
				<li class="mt20" id="sort_26">
			<a href="?parent=26">
				<dl class="sbfl_dl">
					<dt>第二十六类:花边拉链</dt>
					<dd>花边和刺绣，饰带和编带；纽扣，领钩扣，饰针和缝针；假花。</dd>
				</dl>
			</a>
		</li>
				<li class="mt20" id="sort_27">
			<a href="?parent=27">
				<dl class="sbfl_dl">
					<dt>第二十七类:地毯席垫</dt>
					<dd>地毯，地席，席类，油毡及其他铺地板材料；非纺织品制墙帷。</dd>
				</dl>
			</a>
		</li>
				<li class="mt20" id="sort_28">
			<a href="?parent=28">
				<dl class="sbfl_dl">
					<dt>第二十八类:体育玩具</dt>
					<dd>游戏器具和玩具；体育和运动用品；圣诞树用装饰品。</dd>
				</dl>
			</a>
		</li>
				<li class="mt20" id="sort_29">
			<a href="?parent=29">
				<dl class="sbfl_dl">
					<dt>第二十九类:食品罐头</dt>
					<dd>肉，鱼，家禽和野味；肉汁；腌渍、冷冻、干制及煮熟的水果和蔬菜；果冻，果酱，蜜饯；蛋；奶和奶制品；食用油和油脂。</dd>
				</dl>
			</a>
		</li>
				<li class="mt20" id="sort_30">
			<a href="?parent=30">
				<dl class="sbfl_dl">
					<dt>第三十类:调味茶糖</dt>
					<dd>咖啡，茶，可可和咖啡代用品；米；食用淀粉和西米；面粉和谷类制品；面包、糕点和甜食；冰制食品；糖，蜂蜜，糖浆；鲜酵母，发酵粉；食盐；芥末；醋，沙司（调味品）；辛香料；饮用冰。</dd>
				</dl>
			</a>
		</li>
				<li class="mt20" id="sort_31">
			<a href="?parent=31">
				<dl class="sbfl_dl">
					<dt>第三十一类:水果花木</dt>
					<dd>农业、园艺、林业产品；未加工的谷物和种子；新鲜水果和蔬菜；草木和花卉；活动物；动物饲料；麦芽。</dd>
				</dl>
			</a>
		</li>
				<li class="mt20" id="sort_32">
			<a href="?parent=32">
				<dl class="sbfl_dl">
					<dt>第三十二类:啤酒饮料</dt>
					<dd>啤酒；矿泉水和汽水以及其他不含酒精的饮料；水果饮料及果汁；糖浆及其他制饮料用的制剂。</dd>
				</dl>
			</a>
		</li>
				<li class="mt20" id="sort_33">
			<a href="?parent=33">
				<dl class="sbfl_dl">
					<dt>第三十三类:酒</dt>
					<dd>含酒精的饮料（啤酒除外）。</dd>
				</dl>
			</a>
		</li>
				<li class="mt20" id="sort_34">
			<a href="?parent=34">
				<dl class="sbfl_dl">
					<dt>第三十四类:烟草烟具</dt>
					<dd>烟草；烟具；火柴。</dd>
				</dl>
			</a>
		</li>
				<li class="mt20" id="sort_35">
			<a href="?parent=35">
				<dl class="sbfl_dl">
					<dt>第三十五类:广告贸易</dt>
					<dd>广告；商业经营；商业管理；办公事务。</dd>
				</dl>
			</a>
		</li>
				<li class="mt20" id="sort_36">
			<a href="?parent=36">
				<dl class="sbfl_dl">
					<dt>第三十六类:金融物管</dt>
					<dd>保险；金融事务；货币事务；不动产事务。</dd>
				</dl>
			</a>
		</li>
				<li class="mt20" id="sort_37">
			<a href="?parent=37">
				<dl class="sbfl_dl">
					<dt>第三十七类:建筑修理</dt>
					<dd>房屋建筑；修理；安装服务。</dd>
				</dl>
			</a>
		</li>
				<li class="mt20" id="sort_38">
			<a href="?parent=38">
				<dl class="sbfl_dl">
					<dt>第三十八类:通讯电信</dt>
					<dd>电信。</dd>
				</dl>
			</a>
		</li>
				<li class="mt20" id="sort_39">
			<a href="?parent=39">
				<dl class="sbfl_dl">
					<dt>第三十九类:运输旅行</dt>
					<dd>运输；商品包装和贮藏；旅行安排。</dd>
				</dl>
			</a>
		</li>
				<li class="mt20" id="sort_40">
			<a href="?parent=40">
				<dl class="sbfl_dl">
					<dt>第四十类:材料处理</dt>
					<dd>材料处理。</dd>
				</dl>
			</a>
		</li>
				<li class="mt20" id="sort_41">
			<a href="?parent=41">
				<dl class="sbfl_dl">
					<dt>第四十一类:教育娱乐</dt>
					<dd>教育；提供培训；娱乐；文体活动。</dd>
				</dl>
			</a>
		</li>
				<li class="mt20" id="sort_42">
			<a href="?parent=42">
				<dl class="sbfl_dl">
					<dt>第四十二类:科研服务</dt>
					<dd>科学技术服务和与之相关的研究与设计服务；工业分析与研究；计算机硬件与软件的设计与开发。</dd>
				</dl>
			</a>
		</li>
				<li class="mt20" id="sort_43">
			<a href="?parent=43">
				<dl class="sbfl_dl">
					<dt>第四十三类:餐饮酒店</dt>
					<dd>提供食物和饮料服务；临时住宿。</dd>
				</dl>
			</a>
		</li>
				<li class="mt20" id="sort_44">
			<a href="?parent=44">
				<dl class="sbfl_dl">
					<dt>第四十四类:医疗园艺</dt>
					<dd>医疗服务；兽医服务；人或动物的卫生和美容服务；农业、园艺和林业服务。</dd>
				</dl>
			</a>
		</li>
				<li class="mt20" id="sort_45">
			<a href="?parent=45">
				<dl class="sbfl_dl">
					<dt>第四十五类:社会法律</dt>
					<dd>法律服务；由他人提供的为满足个人需要的私人和社会服务；为保护财产和人身安全的服务。</dd>
				</dl>
			</a>
		</li>
	</ul>
	<!--第二级-->
	<div class="crumb crumb1 crumb_sbfl" style="display: none;">
		<span>您当前位置：</span>
		<a href="/kk_trademark/h5/trademark/sort.jsp">商标分类 </a>&gt;
		
	</div>
	<div class="sbfl_box sbfl_box1 clearfix" style="display: none;">
		
	</div>
	<!--第三级-->
	<div class="crumb crumb4 crumb_sbfl" style="display: none;">
		<span>您当前位置：</span>
		<a href="/kk_trademark/h5/trademark/sort.jsp">商标分类</a>&gt;
		
	</div>
	<div class="sbfl_box sbfl_box4 sbfl_box_subclass" style="display: none;">
		<table width="100%">
			<colgroup>
				<col width="10%">
				<col width="18%">
				<col width="28%">
				<col>
			</colgroup>
			<thead>
				<tr>
					<th>商品号</th>
					<th>商品/服务名称</th>
					<th>商品/服务名称(英文)</th>
					<th>备注</th>
				</tr>
			</thead>
			<tbody></tbody>
		</table>
		<div style="padding:10px;" class="page">
			
	    </div>
	</div>
	<!--搜索的第三级-->
	<div class="sbfl_box search_sbfl_box" style="display: none;">
		<div class="sbfl_tip" style="display: none;">
			您搜索的"<span class="c_red"></span>"出现在以下类别，类别：<a href="?parent=9 && sortName=天体" >09</a>
		</div>
		<table width="100%">
			<colgroup>
				<col width="5%">
				<col width="12%">
				<col width="12%">
				<col width="12%">
				<col width="15%">
				<col width="25%">
				<col>
			</colgroup>
			<thead>
				<tr>
					<th></th>
					<th>所属类别</th>
					<th>类似群组</th>
					<th>商品编号</th>
					<th>商品/服务名称</th>
					<th>英文名称</th>
					<th>备注</th>
				</tr>
			</thead>
			<tbody>
			</tbody>
		</table>
	</div>
	<!--搜索未果的第三级-->
	<div class="sbfl_box none_sbfl_list" style="display: none;">
		<table width="100%">
			<colgroup>
				<col width="5%">
				<col width="12%">
				<col width="12%">
				<col width="12%">
				<col width="15%">
				<col width="25%">
				<col>
			</colgroup>
			<thead>
				<tr>
					<th></th>
					<th>所属类别</th>
					<th>类似群组</th>
					<th>商品编号</th>
					<th>商品/服务名称</th>
					<th>英文名称</th>
					<th>备注</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td colspan="7">未查询到结果，请更换关键词试试！</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>
<!--<script type="text/javascript" src="/js/page.js?v=1540611"></script>-->
<script>
//html本地存储key值
var child_title = sessionStorage.getItem("child_title");
//alert(child_title);
judge = location.href.indexOf("?");//当前url内的parent参数显示当前是第几级，若无？表示是初次进入此界面，
if(judge==-1){
	$(".hot_sec,.sbfl_list").show();
}else{
	code = window.location.href.split('?')[1].split('=')[1];//code判断进入第几级菜单页面，code为小于2位数表示进入第二级，为4位数进入第三级

	//进入第三级
	if(code.length>2){
		$(".hot_sec,.sbfl_list").hide();
		$(".crumb1,.sbfl_box1").hide();
		$(".crumb4,.sbfl_box4").show();
		var short_code = code.substring(0,2);
		$(".crumb4").append(
			'<a href="?parent='+short_code+'">第'+short_code+'类 </a>&gt;'
			+'<span>'+child_title+'</span>'
		)
		$.ajax({
			type:'get',
			url:'/kk_trademark/query/ti/selectAll',
			data:{
				"queryType":0,
				"code":code,
			},
			dataType:'json',
			success:function(json){
				var data = json.data.data;
				for(i=1;i<data.length;i++){
					$(".sbfl_box4 tbody").append(
						'<tr>' 
							+'<td>'+data[i].code+'</td>'
							+'<td>'+data[i].serveName+'</td>'
							+'<td>'+data[i].serveEnglishName+'</td>'
							+'<td>'+data[i].remarks+'</td>'
						+'</tr>'
					)
				}
				$(".page").append(
					'<div class="right page"><span>共'+data.length+'条&nbsp;</span>'
					+'<span class="disabled">&lt; 上一页</span>'
					+'<strong>1</strong>'
					+'<span class="disabled">下一页 &gt;</span>'
					+'<span>&nbsp;共1页</span><span>到第 '
						+'<input type="text" id="topage" class="com_input" name="per_page" value=""  /></span>'
						+'<input onclick=gotoPage("?parent=0103&",this) type="button" class="page_btn_min" value="跳 转"></div>'
				)
			},
			error:function(json){
				if(code!=1){
					alert(json.message);
				}
			}
		})
	}else{
		//进入第二级
		var code_length = String(code);
		if(code_length.length<2){
			code = '0'+code;
		}
		$(".hot_sec,.sbfl_list").hide();
		$(".crumb1,.sbfl_box1").show();
		$.ajax({
			type:"get",
			url:"/kk_trademark/query/ti/selectAll",
			data:{
				"queryType":0,
				"code":code,
			},
			success:function(json){
				var data = json.data.data;
				$(".crumb1").append('<span>第'+code+'类</span>')
				$(".sbfl_box1").append(
					'<dl class="left sbfl_dl left_dl">'
					+'<dt>'+data[0].serveName+'</dt>'
					+'<dd>'+data[0].remarks+'</dd>'
								+'<dd class="mt20">[注释] </dd>'
					+'<dd>'
						+'<p>'+data[0].explains+'</p>'
					+'</dd>'
				+'</dl>'
				+'<div class="right right_link">'
					+'<ul></ul>'
				+'</div>'
				)
				
				for(i=1;i<data.length;i++){
					$(".sbfl_box1 ul").append(
						'<li><a href="?parent='+data[i].code+'">【'+data[i].code+'】 - '+data[i].serveName+'</a></li>'
					)
				}
				$(".sbfl_box1 li").click(function(){
					sessionStorage.setItem("child_title",$(this).text());
//					document.cookie = "child_title="+$(this).text();
				})
			},
			
			error:function(json){
				if(code!=1){
					alert(json.message);
				}
			}
		});
	}
}
$(".sbfl_list li").bind({
	mouseout:function(){
		$(this).removeClass("b_orange")
		if($(this).hasClass("recommend_li_bak"))
		{
			$(this).removeClass("recommend_li_bak")
			$(this).addClass("recommend_li")
		}
	},
	mouseover:function(){
		$(this).addClass("b_orange")
		if($(this).hasClass("recommend_li"))
		{
			$(this).removeClass("recommend_li")
			$(this).addClass("recommend_li_bak")
		}
	}
});

$(".hot_list_drop li,#hot_sort a").click(function(){
	msg = $(this).text()
	getSort(msg)
});

$(".hot_btn").click(function(){
	msg = $(".hot_input").val()
	getSort(msg)
})

$(".hot_list").click(function(event) {
	if($(".hot_list_drop").is(":hidden"))
	{
		$(".hot_list_drop").show();
	}
	else
	{
		$(".hot_list_drop").hide();
	}
	event.stopPropagation();
});

$(document).click(function(){ 
	$(".hot_list_drop").hide(); 
});

function getSort(msg)
{
	msg = $.trim(msg)//解决ie7下jq获取a标签text时多了空格
	var map={
		"服装纺织":[18,23,24,25,26,27,35],
		"食品饮料":[29,30,31,32,33,40,39],
		"餐饮酒店":[29,30,31,32,33,35,40,43],
		"化妆美容":[3,5,10,21,30,44],
		"医药设备":[5,10,35,40,44],
		"日常用品":[2,3,5,6,8,09,16,34,35,40],
		"家具用具":[20,21,37,40],
		"IT互联网":[9,16,35,38,41,42],
		"化工能源":[1,2,4,7,11,16,17,22,40,42],
		"电子仪器":[9,11],
		"机械制造":[6,7,11,37],
		"建材五金":[2,06,14,17,19,37,40,42],
		"房产金融":[36,37,42,40,41,42,45]
	};
	$(".hot_input").attr("value", msg);
	$("#hot_sort").find("a").each(function(){
		if($(this).text() == msg)
		{
			$(this).addClass("c_orange");
		}
		else
		{
			$(this).removeClass("c_orange");
		}
	});
	sorts = map[msg]
	if(!sorts)
	{
		$.ajax({
	        type: "GET",
	        url:"/search/getSort",
	        data: {
	        	queryType:0,
	        	sortName: msg,
	        	code:'',
	        	belongs:'',
	        },
	        success:function(msg){
	        	msg = eval('(' + msg + ')');
	        	sorts = msg.data
	        	var arr = [];
	        	for(i in sorts)
	        	{
		        	arr.push(Number(sorts[i]))
	        	}
	        	show(arr)
	        }
		});
	}
	else
	{
		show(sorts)
	}
}

function show(sort)
{
	$(".sbfl_list").find("li").each(function(){
		id = $(this).attr("id").split("_")[1]
		has = false
		for(var i=0; i < sort.length; i++)
		{
			if(sort[i] == id)
			{
				$(this).addClass("recommend_li");
				$(this).append('<span class="recommend"></span>');
				has = true
			}
		}
		if(!has)
		{
			$(this).removeClass("recommend_li");
			$(this).find(".recommend").remove();
		}
	});
	var hotId = ""
	var notHotId = ""
	for(var i=1; i <= 45; i++)
	{
		id = "#sort_"+i
		if($(id).hasClass("recommend_li"))
		{
			if(hotId != "")
			{
				$(hotId).after($(id))
			}
			else
			{
				$(".sbfl_list").prepend($(id))
			}
			hotId = id
		}
		else
		{
			if(notHotId != "")
			{
				$(notHotId).after($(id))
			}
			else
			{
				$(".sbfl_list").append($(id))
				
			}
			notHotId = id
		}
	}
}

function doSub(obj)
{
	value = $('#sortName').val();
	value = value == '输入商品/服务名称' ? '' : value;
	re = new RegExp("^[\u4e00-\u9fa5A-Za-z0-9.\\s]{0,50}$");
	if(!re.test(value))
	{
		alert('请输入正确的商品/服务名称(0-50字符)');
		return false;
	}
//	$(obj).parent().submit();
//搜索筛选
	$.ajax({
		type:"get",
		url:"/kk_trademark/sys/ti/selectAll",
		async:true,
		data:{
			"queryType":0,
			"serveName":value,
		},
		dataType:'json',
		success:function(json){
			var data = json.data;
			var child_data = data.data;
			if(data.data.length>0){
				$(".crumb1,.crumb4,.sbfl_box1,.sbfl_box4,.hot_sec,.sbfl_list,.none_sbfl_list,.search_sbfl_box").hide();
				$(".search_sbfl_box").show();
				for(i=0;i<child_data.length;i++){
					$(".search_sbfl_box tbody").append(
						'<tr>'
						+'<td>'+(i+1)+'</td>'
						+'<td>第'+child_data[i].belongs+'类</td>'
						+'<td>'+child_data[i].pcode+'</td>'
						+'<td>'+child_data[i].code+'</td>'
						+'<td>'+child_data[i].serveEnglishName+'</td>'
						+'<td>'+child_data[i].serveEnglishName+'</td>'
						+'<td>'+child_data[i].remarks+'</td>'
						+'</tr>'
					)
				}
			}else{
				$(".crumb1,.crumb4,.sbfl_box1,.sbfl_box4,.hot_sec,.sbfl_list,.none_sbfl_list,.search_sbfl_box").hide();
				$(".none_sbfl_list").show();
			}
			
		}
	});
}
$('.ser_input').bind({
	focus:function(){
		defaultV = this.defaultValue;
		if (this.value == defaultV && defaultV == '输入商品/服务名称'){ 
			this.value = ""; 
		} 
	}, 
	blur:function(){
		if (this.value == ""){
			this.value = '输入商品/服务名称'; 
		} 
	} 
});
</script>
<!-- /container -->
<!-- /foot -->
<style>
.whdo{ text-align:center; margin-top:15px;font-size:12px;}
 .copywh a{color:#777;}
 .copywh a:hover{  color:#FF6E00;}
</style>
<iframe frameborder="0" border="0" width="100%"  src="footer.jsp" ></iframe>
<!-- /foot -->
<script>
$(document).ready(function(){
	is_login();
    $("#coss").hover(function(){
    $(".wx_drop").show();
    },function(){
    	$(".wx_drop").hide();
    });
});
</script>
<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?ca471dd7af56343704d81cef8f88299d";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script>
<div style="display: none">
<script src="http://s11.cnzz.com/z_stat.php?id=1256201221&web_id=1256201221"  language="JavaScript"></script>
</div>
</body>
</html>