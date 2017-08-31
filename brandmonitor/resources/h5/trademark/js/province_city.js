document.write('<style type="text/css">');
document.write('#ChCountryAndProvinceAndCity{height:26px;overflow:hidden;}');
document.write('#ChCountryAndProvinceAndCity select{line-height:22px; border:1px solid #ddd; height:22px;}');
document.write('#ChCountryAndProvinceAndCity input{padding-right:10px; border:1px solid #ddd;height:18px;line-height:18px;}');
document.write('#ChCountryAndProvinceAndCity span{padding-left:0px;}');
document.write('#ChCountryForm{width:150px;}');
document.write('#ChPrivinceForm{width:150px;}');
document.write('#ChCityForm{width:150px; padding-left:5px;}');
document.write('#ChProvinceAndCity span{padding-left:5px;}');
document.write('</style>');


var countryChinese=new Array();
countryChinese['CN']='中国';
//countryChinese['GB']='英国';
countryChinese['UK']='英国';
countryChinese['US']='美国';
countryChinese['JP']='日本';
countryChinese['AE']='阿联酋';
countryChinese['AF']='阿富汗';
countryChinese['AL']='阿尔巴尼亚';
countryChinese['AO']='安哥拉';
countryChinese['AR']='阿根廷';
countryChinese['AT']='奥地利';
countryChinese['AU']='澳大利亚';
countryChinese['AZ']='阿塞拜疆';
countryChinese['BD']='孟加拉';
countryChinese['BE']='比利时';
countryChinese['BG']='保加利亚';
countryChinese['BH']='巴林';
countryChinese['BI']='布隆迪';
countryChinese['BJ']='贝宁';
countryChinese['BM']='百慕大';
countryChinese['BN']='文莱';
countryChinese['BO']='玻利维亚';
countryChinese['BR']='巴西';
countryChinese['BS']='巴哈马';
countryChinese['BT']='不丹';
countryChinese['BW']='博茨瓦纳';
countryChinese['CA']='加拿大';
countryChinese['CF']='中非共和国';
countryChinese['CG']='刚果';
countryChinese['CH']='瑞士';
countryChinese['CK']='库克群岛';
countryChinese['CL']='智利';
countryChinese['CM']='喀麦隆';
countryChinese['CO']='哥伦比亚';
countryChinese['CR']='哥斯达黎加';
countryChinese['CU']='古巴';
countryChinese['CV']='佛得角群岛';
countryChinese['CY']='塞浦路斯';
countryChinese['CZ']='捷克共和国';
countryChinese['DE']='德国';
countryChinese['DK']='丹麦';
countryChinese['DZ']='阿尔及利亚';
countryChinese['EC']='厄瓜多尔';
countryChinese['EE']='爱沙尼亚';
countryChinese['EG']='埃及';
countryChinese['ES']='西班牙';
countryChinese['ET']='埃塞俄比亚';
countryChinese['FI']='芬兰';
countryChinese['FJ']='斐济';
countryChinese['FR']='法国';
countryChinese['GA']='加蓬';
countryChinese['GD']='格林纳达';
countryChinese['GH']='加纳';
countryChinese['GM']='冈比亚';
countryChinese['GN']='几内亚';
countryChinese['GQ']='赤道几内亚';
countryChinese['GR']='希腊';
countryChinese['GT']='危地马拉';
countryChinese['GU']='关岛';
countryChinese['GY']='圭亚那';
countryChinese['HN']='洪都拉斯';
countryChinese['HR']='克罗地亚';
countryChinese['HT']='海地';
countryChinese['HU']='匈牙利';
countryChinese['ID']='印度尼西亚';
countryChinese['IE']='爱尔兰';
countryChinese['IL']='以色列';
countryChinese['IN']='印度';
countryChinese['IQ']='伊拉克';
countryChinese['IR']='伊朗';
countryChinese['IS']='冰岛';
countryChinese['IT']='意大利';
countryChinese['JM']='牙买加';
countryChinese['JO']='约旦';
countryChinese['KE']='肯尼亚';
countryChinese['KH']='柬埔寨';
countryChinese['KP']='韩国';
countryChinese['KR']='北朝鲜';
countryChinese['KW']='科威特';
countryChinese['KZ']='哈萨克斯坦';
countryChinese['LA']='老挝';
countryChinese['LB']='黎巴嫩';
countryChinese['LT']='立陶宛';
countryChinese['LU']='卢森堡';
countryChinese['LV']='拉托维亚';
countryChinese['LY']='利比亚';
countryChinese['MA']='摩洛哥';
countryChinese['MC']='摩纳哥';
countryChinese['MD']='摩尔多瓦';
countryChinese['MG']='马达加斯加';
countryChinese['ML']='马里';
countryChinese['MN']='蒙古';
countryChinese['MR']='毛里塔尼亚';
countryChinese['MT']='马耳他';
countryChinese['MU']='毛里求斯';
countryChinese['MV']='马尔代夫';
countryChinese['MX']='墨西哥';
countryChinese['MY']='马来西亚';
countryChinese['MZ']='莫桑比克';
countryChinese['NA']='纳米比亚';
countryChinese['NE']='尼日尔';
countryChinese['NG']='尼日利亚';
countryChinese['NI']='尼加拉瓜';
countryChinese['NL']='荷兰';
countryChinese['NO']='挪威';
countryChinese['NP']='尼泊尔';
countryChinese['NZ']='新西兰';
countryChinese['OM']='阿曼';
countryChinese['PA']='巴拿马';
countryChinese['PE']='秘鲁';
countryChinese['PG']='巴布亚新几内亚';
countryChinese['PH']='菲律宾';
countryChinese['PK']='巴基斯坦';
countryChinese['PL']='波兰';
countryChinese['PT']='葡萄牙';
countryChinese['PY']='巴拉圭';
countryChinese['QA']='卡塔尔';
countryChinese['RO']='罗马尼亚';
countryChinese['RU']='俄罗斯';
countryChinese['RW']='卢旺达';
countryChinese['SA']='沙特阿拉伯';
countryChinese['SD']='苏丹';
countryChinese['SE']='瑞典';
countryChinese['SG']='新加坡';
countryChinese['SK']='斯洛伐克';
countryChinese['SM']='圣马力诺';
countryChinese['SN']='塞内加尔';
countryChinese['SO']='索马里';
countryChinese['SY']='叙利亚';
countryChinese['TH']='泰国';
countryChinese['TJ']='塔吉克斯坦';
countryChinese['TM']='土库曼斯坦';
countryChinese['TN']='突尼斯';
countryChinese['TO']='汤加';
countryChinese['TZ']='坦桑尼亚';
countryChinese['UA']='乌克兰';
countryChinese['UG']='乌干达';
countryChinese['UY']='乌拉圭';
countryChinese['UZ']='乌兹别克斯坦';
countryChinese['VA']='梵蒂冈';
countryChinese['VE']='委内瑞拉';
countryChinese['VN']='越南';
countryChinese['YE']='也门';
countryChinese['YU']='南斯拉夫';
countryChinese['ZA']='南非';
countryChinese['ZM']='赞比亚';
countryChinese['ZR']='扎伊尔';
countryChinese['ZW']='津巴布韦';

var countryEnglish=new Array();
countryEnglish['AE']='United Arab Emirates';
countryEnglish['AF']='Afghanistan';
countryEnglish['AL']='Albania';
countryEnglish['AO']='Angola';
countryEnglish['AR']='Argentina';
countryEnglish['AT']='Austria';
countryEnglish['AU']='Australia';
countryEnglish['AZ']='Azerbaijan';
countryEnglish['BD']='Bangladesh';
countryEnglish['BE']='Belgium';
countryEnglish['BG']='Bulgaria';
countryEnglish['BH']='Bahrain';
countryEnglish['BI']='Burundi';
countryEnglish['BJ']='Benin';
countryEnglish['BM']='Bermuda';
countryEnglish['BN']='Brunei';
countryEnglish['BO']='Bolivia';
countryEnglish['BR']='Brazil';
countryEnglish['BS']='Bahamas';
countryEnglish['BT']='Bhutan';
countryEnglish['BW']='Botswana';
countryEnglish['CA']='Canada';
countryEnglish['CF']='Central Africa';
countryEnglish['CG']='Congo';
countryEnglish['CH']='Switzerland';
countryEnglish['CK']='Cook Is.';
countryEnglish['CL']='Chile';
countryEnglish['CM']='Cameroon';
countryEnglish['CN']='China';
countryEnglish['CO']='Colombia';
countryEnglish['CR']='Costa Rica';
countryEnglish['CU']='Cuba';
countryEnglish['CV']='Cape Verde Is.';
countryEnglish['CY']='Cyprus';
countryEnglish['CZ']='Czech';
countryEnglish['DE']='Germany';
countryEnglish['DK']='Denmark';
countryEnglish['DZ']='Algeria';
countryEnglish['EC']='Ecuador';
countryEnglish['EE']='Estonia';
countryEnglish['EG']='Egypt';
countryEnglish['ES']='Spain';
countryEnglish['ET']='Ethiopia';
countryEnglish['FI']='Finland';
countryEnglish['FJ']='Fiji';
countryEnglish['FR']='France';
countryEnglish['GA']='Gabon';
countryEnglish['GB']='Great Britain';
countryEnglish['GD']='Grenada';
countryEnglish['GH']='Ghana';
countryEnglish['GM']='Gambia';
countryEnglish['GN']='Guinea-Bissau';
countryEnglish['GQ']='Equatorial Guinea';
countryEnglish['GR']='Greece';
countryEnglish['GT']='Guatemala';
countryEnglish['GU']='Guam';
countryEnglish['GY']='Guyana';
countryEnglish['HN']='Honduras';
countryEnglish['HR']='Croatia';
countryEnglish['HT']='Haiti';
countryEnglish['HU']='Hungary';
countryEnglish['ID']='Indonesia';
countryEnglish['IE']='Ireland';
countryEnglish['IL']='Israel';
countryEnglish['IN']='India';
countryEnglish['IQ']='Iraq';
countryEnglish['IR']='Iran';
countryEnglish['IS']='Iceland';
countryEnglish['IT']='Italy';
countryEnglish['JM']='Jamaica';
countryEnglish['JO']='Jordan';
countryEnglish['JP']='Japan';
countryEnglish['KE']='Kenya';
countryEnglish['KH']='Cambodia';
countryEnglish['KP']='R.O.Korea';
countryEnglish['KR']='D.P.R.Korea';
countryEnglish['KW']='Kuwait';
countryEnglish['KZ']='Kazakhstan';
countryEnglish['LA']='Laos';
countryEnglish['LB']='Lebanon';
countryEnglish['LT']='Lithuania';
countryEnglish['LU']='Luxembourg';
countryEnglish['LV']='Latvia';
countryEnglish['LY']='Libya';
countryEnglish['MA']='Morocco';
countryEnglish['MC']='Monaco';
countryEnglish['MD']='Moldova';
countryEnglish['MG']='Madagascar';
countryEnglish['ML']='Mali';
countryEnglish['MN']='Mongolia';
countryEnglish['MR']='Mauritania';
countryEnglish['MT']='Malta';
countryEnglish['MU']='Mauritius';
countryEnglish['MV']='Maldives';
countryEnglish['MX']='Mexico';
countryEnglish['MY']='Malaysia';
countryEnglish['MZ']='Mozambique';
countryEnglish['NA']='Namibia';
countryEnglish['NE']='Niger';
countryEnglish['NG']='Nigeria';
countryEnglish['NI']='Nicaragua';
countryEnglish['NL']='Netherlands';
countryEnglish['NO']='Norway';
countryEnglish['NP']='Nepal';
countryEnglish['NZ']='New Zealand';
countryEnglish['OM']='Oman';
countryEnglish['PA']='Panama';
countryEnglish['PE']='Peru';
countryEnglish['PG']='Papua New Guinea';
countryEnglish['PH']='Philippines';
countryEnglish['PK']='Pakistan';
countryEnglish['PL']='Poland';
countryEnglish['PT']='Portugal';
countryEnglish['PY']='Paraguay';
countryEnglish['QA']='Qatar';
countryEnglish['RO']='Romania';
countryEnglish['RU']='Russia';
countryEnglish['RW']='Rwanda';
countryEnglish['SA']='Saudi Arabia';
countryEnglish['SD']='Sudan';
countryEnglish['SE']='Sweden';
countryEnglish['SG']='Singapore';
countryEnglish['SK']='Slovakia';
countryEnglish['SM']='San Marino';
countryEnglish['SN']='Senegal';
countryEnglish['SO']='Somalia';
countryEnglish['SY']='Syria';
countryEnglish['TH']='Thailand';
countryEnglish['TJ']='Tadzhikistan';
countryEnglish['TM']='Turkmenistan';
countryEnglish['TN']='Tunisia';
countryEnglish['TO']='Tonga';
countryEnglish['TZ']='Tanzania';
countryEnglish['UA']='Ukraine';
countryEnglish['UG']='Uganda';
countryEnglish['UK']='United Kingdom';
countryEnglish['US']='United States';
countryEnglish['UY']='Uruguay';
countryEnglish['UZ']='Uzbekistan';
countryEnglish['VA']='Vatican City';
countryEnglish['VE']='Venezuela';
countryEnglish['VN']='Viet Nam';
countryEnglish['YE']='Yemen';
countryEnglish['YU']='Yugoslavia';
countryEnglish['ZA']='South Africa';
countryEnglish['ZM']='Zambia';
countryEnglish['ZR']='Zaire';
countryEnglish['ZW']='Zimbabwe';


var provinceChinese='北京,天津,河北,山西,内蒙古,辽宁,吉林,黑龙江,上海,江苏,浙江,安徽,福建,江西,山东,河南,湖北,湖南,广东,广西,海南,重庆,四川,贵州,云南,西藏,陕西,甘肃,青海,宁夏,新疆,台湾,香港,澳门';

var cityChinese=new Array();
cityChinese['北京']='北京';
cityChinese['天津']='天津';
cityChinese['河北']='石家庄市,唐山市,秦皇岛市,邯郸市,邢台市,保定市,张家口市,承德市,沧州市,廊坊市,衡水市';
cityChinese['山西']='太原市,大同市,阳泉市,长治市,晋城市,朔州市,晋中市,运城市,忻州市,临汾市,吕梁市';
cityChinese['内蒙古']='呼和浩特市,包头市,乌海市,赤峰市,通辽市,鄂尔多斯市,呼伦贝尔市,巴彦淖尔市,乌兰察布市,兴安盟,锡林郭勒盟,阿拉善盟';
cityChinese['辽宁']='沈阳市,大连市,鞍山市,抚顺市,本溪市,丹东市,锦州市,营口市,阜新市,辽阳市,盘锦市,铁岭市,朝阳市,葫芦岛市';
cityChinese['吉林']='长春市,吉林市,四平市,辽源市,通化市,白山市,松原市,白城市,延边州';
cityChinese['黑龙江']='哈尔滨市,齐齐哈尔市,鸡西市,鹤岗市,双鸭山市,大庆市,伊春市,佳木斯市,七台河市,牡丹江市,黑河市,绥化市,大兴安岭地区';
cityChinese['上海']='上海';
cityChinese['江苏']='南京市,无锡市,徐州市,常州市,苏州市,南通市,连云港市,淮安市,盐城市,扬州市,镇江市,泰州市,宿迁市';
cityChinese['浙江']='杭州市,宁波市,温州市,嘉兴市,湖州市,绍兴市,金华市,衢州市,舟山市,台州市,丽水市';
cityChinese['安徽']='合肥市,芜湖市,蚌埠市,淮南市,马鞍山市,淮北市,铜陵市,安庆市,黄山市,滁州市,阜阳市,宿州市,亳州市,六安市,宣城市,池州市';
cityChinese['福建']='福州市,厦门市,莆田市,三明市,泉州市,漳州市,南平市,龙岩市,宁德市';
cityChinese['江西']='南昌市,景德镇市,萍乡市,九江市,新余市,赣州市,鹰潭市,宜春市,上饶市,吉安市,抚州市';
cityChinese['山东']='济南市,青岛市,淄博市,枣庄市,东营市,烟台市,潍坊市,济宁市,泰安市,威海市,日照市,莱芜市,临沂市,德州市,聊城市,滨州市,菏泽市';
cityChinese['河南']='郑州市,开封市,洛阳市,平顶山市,安阳市,鹤壁市,新乡市,焦作市,濮阳市,许昌市,漯河市,三门峡市,南阳市,商丘市,信阳市,济源市,周口市,驻马店市';
cityChinese['湖北']='武汉市,黄石市,十堰市,宜昌市,襄阳市,鄂州市,荆门市,孝感市,潜江市,仙桃市,荆州市,黄冈市,随州市,咸宁市,天门市,恩施州,神农架林区';
cityChinese['湖南']='长沙市,株洲市,湘潭市,衡阳市,邵阳市,岳阳市,常德市,张家界市,益阳市,郴州市,永州市,怀化市,娄底市,湘西州';
cityChinese['广东']='广州市,韶关市,深圳市,珠海市,汕头市,佛山市,江门市,湛江市,茂名市,肇庆市,惠州市,梅州市,汕尾市,河源市,阳江市,清远市,东莞市,中山市,潮州市,揭阳市,云浮市';
cityChinese['广西']='南宁市,柳州市,桂林市,梧州市,北海市,防城港市,钦州市,贵港市,玉林市,贺州市,百色市,河池市,来宾市,崇左市';
cityChinese['海南']='海口市,三亚市,三沙市,五指山市,琼海市,儋州市,文昌市,万宁市,东方市';
cityChinese['重庆']='重庆';
cityChinese['四川']='成都市,自贡市,攀枝花市,泸州市,德阳市,绵阳市,广元市,遂宁市,内江市,乐山市,南充市,眉山市,宜宾市,广安市,达州市,雅安市,阿坝州,甘孜州,凉山州,巴中市,资阳市';
cityChinese['贵州']='贵阳市,六盘水市,遵义市,铜仁市,黔西南州,毕节市,安顺市,黔东南州,黔南州';
cityChinese['云南']='昆明市,曲靖市,玉溪市,保山市,昭通市,普洱市,丽江市,普洱市,临沧市,楚雄州,红河州,文山州,西双版纳州,大理州,德宏州,怒江州,迪庆州';
cityChinese['西藏']='拉萨市,昌都市,山南地区,日喀则市,那曲地区,阿里地区,林芝地区';
cityChinese['陕西']='西安市,铜川市,宝鸡市,咸阳市,渭南市,延安市,汉中市,安康市,商洛市,榆林市';
cityChinese['甘肃']='兰州市,嘉峪关市,金昌市,白银市,天水市,酒泉市,张掖市,武威市,定西市,陇南市,平凉市,庆阳市,临夏州,甘南州';
cityChinese['青海']='西宁市,海东市,海北州,黄南州,海南州,果洛州,玉树州,海西州';
cityChinese['宁夏']='银川市,石嘴山市,吴忠市,固原市,中卫市';
cityChinese['新疆']='乌鲁木齐市,克拉玛依市,吐鲁番地区,哈密地区,昌吉州,博尔塔拉州,巴音郭楞州,阿克苏地区,克孜勒苏州,喀什地区,和田地区,伊犁州,伊犁地区,塔城地区,阿勒泰地区';
cityChinese['台湾']='台北市,新北市,台中市,台南市,高雄市,基隆市,新竹市,嘉义市';
cityChinese['香港']='香港';
cityChinese['澳门']='澳门';

function countrySetUp(flag){
    var str='';
    for(var Code in countryChinese){
        str +="<option value='"+Code+"'>"+countryChinese[Code]+"</option>";
    }
    $("#Country").append(str);
    setTimeout(function(){
    $("#Country").val(nowCountry);
    },1);
    $("#EngCountry").val(countryEnglish[nowCountry]);
    $("#EngProvince").val(nowEngProvince);
    $("#EngCity").val(nowEngCity);
    if(nowCountry=='CN'){
        selectForm();
        if(flag=='edit'){
            oldProvinceSetUp();
        }else{
            provinceSetUp();
        }
    }else{
        inputForm();
        $("#ChProvince").val(nowChProvince);
        $("#ChCity").val(nowChCity);
    }
}

function selectForm(){
    var str='<span id="ChPrivinceForm"><select id="ChProvince" name="ChProvince" onchange="provinceChange()"></select></span>';
    str +='<span id="ChCityForm"><select id="ChCity"  name="ChCity" onchange="cityChange()"></select></span>';
    $("#ChProvinceAndCity").html(str);
}
function inputForm(){
    var str='<span id="ChPrivinceForm"><input value="" name="ChProvince" id ="ChProvince" onblur="setEngProvince()"></span>';
    str +='<span id="ChCityForm"><input value="" name="ChCity" id ="ChCity" onblur="setEngCity()"></span>';
    $("#ChProvinceAndCity").html(str);
}
function setEngProvince(){
    var chinese= $("#ChProvince").val();
    toEnglish(chinese,"EngProvince");
}
function setEngCity(){
    var chinese= $("#ChCity").val();
    toEnglish(chinese,"EngCity");
}
function inputCityForm(){
    var str='<input value="" name="ChCity" id ="ChCity" onblur="setEngCity()">';
    $("#ChCityForm").html(str);
}
function selectCityForm(){
    var str='<select id="ChCity"  name="ChCity" onchange="cityChange()" ></select>';
    $("#ChCityForm").html(str);
}

function oldProvinceSetUp(){
    provinceChineseArray=provinceChinese.split(',');
    var provinceStr='';
    for(var provinceKey in provinceChineseArray){
        provinceStr +="<option value='"+provinceChineseArray[provinceKey]+"'>"+provinceChineseArray[provinceKey]+"</option>";
    }
    $("#ChProvince").append(provinceStr);
    $("#ChProvince").val(nowChProvince);
    if($("#ChProvince").val()!=nowChProvince){
        inputForm();
        $("#ChProvince").val(nowChProvince);
        $("#ChCity").val(nowChCity);
    }else{
        //=====================预设城市========================
        var cityList=cityChinese[nowChProvince];
        if(cityList){
            cityArray=cityList.split(',');
            var cityStr='';
            for(var cityKey in cityArray){
                cityStr +="<option value='"+cityArray[cityKey]+"'>"+cityArray[cityKey]+"</option>";
            }
            $("#ChCity").append(cityStr);
            $("#ChCity").val(nowChCity);
            if($("#ChCity").val()!=nowChCity){
                inputCityForm();
                $("#ChCity").val(nowChCity);
            }
        }
    }
}

function provinceSetUp(){
    //==================预设省份==========================
    provinceChineseArray=provinceChinese.split(',');
    var provinceStr='';
    provinceStr +="<option value=''>--请选择--</option>";
    for(var provinceKey in provinceChineseArray){
        provinceStr +="<option value='"+provinceChineseArray[provinceKey]+"'>"+provinceChineseArray[provinceKey]+"</option>";
    }
    $("#ChProvince").append(provinceStr);
    $("#ChProvince").val(nowChProvince);
    var nowChProvinceTem=$("#ChProvince").val();
    toEnglish(nowChProvinceTem,"EngProvince");//预设英文省份

    //=====================预设城市========================
    var cityList=cityChinese[nowChProvinceTem];
    var cityStr='';
    if(cityList){
        cityArray=cityList.split(',');
        for(var cityKey in cityArray){
            cityStr +="<option value='"+cityArray[cityKey]+"'>"+cityArray[cityKey]+"</option>";
        }
        $("#ChCity").append(cityStr);
        $("#ChCity").val(nowChCity);
        var nowChCityTem=$("#ChCity").val();
        toEnglish(nowChCityTem,"EngCity");//预设英文城市
    }else{
        cityStr +="<option value=''>--请选择--</option>";
        $("#ChCity").append(cityStr);
        $("#ChCity").val(nowChCity);
        var nowChCityTem=$("#ChCity").val();
        toEnglish(nowChCityTem,"EngCity");//预设英文城市
    }
}



function setSelect(){
    var str='<span id="ChPrivinceForm"><select id="ChProvince" name="ChProvince" onchange="provinceChange()"></select></span>';
    str +='<span id="ChCityForm"><select id="ChCity"  name="ChCity" onchange="cityChange()"></select></span>';
    $("#ChProvinceAndCity").html(str);
}

function setInput(){
    var str='<span id="ChPrivinceForm"><input value="" name="ChProvince" id ="ChProvince" onblur="setEngProvince()"></span>';
        str +='<span id="ChCityForm"><input value="" name="ChCity" id ="ChCity" onblur="setEngCity()"></span>';
    $("#ChProvinceAndCity").html(str);
    $("#ChProvince").val(nowChProvince);
    $("#ChCity").val(nowChCity);
    toEnglish(nowChProvince,"EngProvince");
    toEnglish(nowChCity,"EngCity");
}
function setNull(){
    var str='<span id="ChPrivinceForm"><input value="" name="ChProvince" id ="ChProvince" onblur="setEngProvince()"></span>';
    str +='<span id="ChCityForm"><input value="" name="ChCity" id ="ChCity" onblur="setEngCity()"></span>';
    $("#ChProvinceAndCity").html(str);

    $("#ChProvince").val("");
    $("#ChCity").val("");

    var varCounty=$("#Country").val();;
    $("#EngCountry").val(countryEnglish[varCounty]);
    $("#EngProvince").val("");
    $("#EngCity").val("");
}
function setValue(){
    var str='<span id="ChPrivinceForm"><input value="" name="ChProvince" onblur="setEngProvince()" id ="ChProvince"></span>';
    str +='<span id="ChCityForm"><input value="" name="ChCity" id ="ChCity" onblur="setEngCity()"></span>';
    $("#ChProvinceAndCity").html(str);
    $("#ChProvince").val("");
    $("#ChCity").val("");
    $("#EngProvince").val("");
    $("#EngCity").val("");
}

//汉字转拼音
function toEnglish(postStr,Id){
    if(!postStr){
        return ;
    }
//  $.ajax({
//      type: "POST",
//      url: "/cas/register/chinesetopinyin",
//      timeout:1000,
//      data: {Chinese: postStr},
//      success: function(msg){
//          msg = msg.replace(/\s/g,"");
//          $("#"+Id).val(msg);
//      },
//      error:function(){
//          $("#"+Id).val();
//      }
//  });
}

function countryChange(){
    var countryValue=$("#Country").val();
    if(countryValue!='CN'){
        setValue();
    }else{
        selectForm();
        provinceChineseArray=provinceChinese.split(',');
        var provinceStr='';
        provinceStr +="<option value=''>--请选择--</option>";
        for(var provinceKey in provinceChineseArray){
            provinceStr +="<option value='"+provinceChineseArray[provinceKey]+"'>"+provinceChineseArray[provinceKey]+"</option>";
        }
        $("#ChProvince").append(provinceStr);
        $("#ChProvince").val(nowChProvince);

        var nowChProvinceTem=$("#ChProvince").val();
        toEnglish(nowChProvinceTem,"EngProvince");//预设英文省份


        var cityList=cityChinese[nowChProvince];
        var cityStr='';
        if(cityList){
            cityArray=cityList.split(',');
            for(var cityKey in cityArray){
                cityStr +="<option value='"+cityArray[cityKey]+"'>"+cityArray[cityKey]+"</option>";
            }
            $("#ChCity").append(cityStr);
            $("#ChCity").val(nowChCity);
            var nowChCityTem=$("#ChCity").val();
            toEnglish(nowChCityTem,"EngCity");//预设英文省份
        }else{
            selectCityForm();
            cityStr +="<option value=''>--请选择--</option>";
            $("#ChCity").append(cityStr);
            $("#EngCity").val('');
        }
    }
}

function provinceChange(){
    var nowChProvince=$("#ChProvince").val();
    toEnglish(nowChProvince,"EngProvince");
    var ChCityList=cityChinese[nowChProvince];
    var ChCityStr='';
    if(ChCityList){
        ChCityArray=ChCityList.split(',');

        for(var ChCityKey in ChCityArray){
            ChCityStr +="<option value='"+ChCityArray[ChCityKey]+"'>"+ChCityArray[ChCityKey]+"</option>";
        }
        selectCityForm();
        $("#ChCity").append(ChCityStr);
        $("#ChCity").val(nowChCity);

        var a=$("#ChCity").val();
        toEnglish(a,"EngCity");
    }else{
        selectCityForm();
        ChCityStr +="<option value=''>--请选择--</option>";
        $("#ChCity").append(ChCityStr);
        $("#EngCity").val('');
    }
}
function cityChange(){
    var nowChCity=$("#ChCity").val();
    toEnglish(nowChCity,"EngCity");
}