
$(function(){
		$('img#bg').height($(window).height());
		$('img#bg').width($(window).width());
});

function run(){
    var s = $(".rule .time").innerHTML;
    if(s.innerHTML == 0){
        window.location.href='www.baidu.com';
        return false;
    }
    s.innerHTML--;
}
setTimeout(run(), 1000);

